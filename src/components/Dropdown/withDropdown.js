// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { throttle } from 'lodash';
import { DropdownPopoverWithRef } from './DropdownPopover';

const SCROLLBAR_WIDTH = 28;

export type withDropdownProps = {
  className?: string, // trigger wrapper class
  popoverClassName?: string,
  onClick?: (e: MouseEvent) => void,
  component?: React.AbstractComponent<any>,
  items?: React.Node
};

type withDropdownState = {
  isOpen: boolean,
  left: number,
  top: number,
  useScroll: boolean
};

export const withDropdown = (
  Component:  React.AbstractComponent<any, HTMLElement> | string
) =>
  class Dropdown extends React.PureComponent<withDropdownProps, withDropdownState> {
    popoverRef = React.createRef<HTMLElement>();
    wrapperRef = React.createRef<HTMLElement>();
    scrollablePopoverWidth = 0;

    state = {
      isOpen: false,
      left: 0,
      top: 0,
      useScroll: false
    };

    componentDidMount() {
      if (this.state.isOpen) {
        document.addEventListener('scroll', this.throttledRecalcPosition, { capture: true });
        document.addEventListener('mousedown', this.handleMouseDownOutside);
      }
    }

    componentDidUpdate(prevProps: withDropdownProps, prevState: withDropdownState) {
      const { isOpen } = this.state;

      if (!prevState.isOpen && isOpen) {
        document.addEventListener('scroll', this.throttledRecalcPosition, { capture: true });
        document.addEventListener('mousedown', this.handleMouseDownOutside);
      } else if (prevState.isOpen && !isOpen) {
        document.removeEventListener('scroll', this.throttledRecalcPosition, { capture: true });
        document.removeEventListener('mousedown', this.handleMouseDownOutside);
      }

      if ((isOpen && !prevState.isOpen) || (prevProps !== this.props)) {
        this.recalcPosition();
      }
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.throttledRecalcPosition, { capture: true });
      document.removeEventListener('mousedown', this.handleMouseDownOutside);
    }

    recalcPosition = () => {
      const { wrapperRef, popoverRef } = this;

      const popoverElement = popoverRef.current;
      const wrapperElement = wrapperRef.current;

      if (popoverElement && wrapperElement) {
        const bodyWidth = document.body ? document.body.clientWidth : 0;
        const wrapperRect = wrapperElement.getBoundingClientRect();
        const popoverRect = popoverElement.getBoundingClientRect();
        const wrapperBottomSpace = window.innerHeight - wrapperRect.top - wrapperRect.height;
        const useScroll = popoverRect.height >= window.innerHeight;

        // will show popover upside toggler;
        const upside = popoverElement.offsetHeight > wrapperBottomSpace
          && popoverElement.offsetHeight <= wrapperRect.top;

        // will show popover downside & shift vertical
        const shiftVertical = popoverElement.offsetHeight > wrapperBottomSpace
          && popoverElement.offsetHeight > wrapperRect.top;

        // will show popover to left from toggler;
        const leftside = wrapperRect.left > (bodyWidth / 2);

        let left = leftside
          ? Math.max(window.scrollX + wrapperRect.left + wrapperRect.width - popoverRect.width, 0)
          : Math.max(window.scrollX + wrapperRect.left, 0);

        let top = shiftVertical
          ? window.scrollY + window.innerHeight - popoverRect.height
          : upside
            ? window.scrollY + wrapperRect.top - popoverElement.offsetHeight
            : window.scrollY + wrapperRect.top + wrapperRect.height;

        const horizontalShift = left - window.scrollX + popoverRect.width > window.innerWidth
          ? -(left - window.scrollX + popoverRect.width - window.innerWidth)
          : left < window.scrollX
            ? window.scrollX - left
            : 0;

        this.scrollablePopoverWidth = this.state.useScroll
          ? popoverRect.width
          : popoverRect.width + SCROLLBAR_WIDTH;

        left += horizontalShift;
        left -= !this.state.useScroll && useScroll ? SCROLLBAR_WIDTH : 0;

        this.setState({
          top,
          left,
          useScroll
        });
      }
    }

    // 16 approximately equals 2 frames with 60fps
    throttledRecalcPosition = throttle(this.recalcPosition, 16);

    handleClick = (event: MouseEvent) => {
      const { onClick } = this.props;
      this.toggleDropdown();
      onClick && onClick(event);
    }

    handleMouseDownOutside = (event: MouseEvent) => {
      const { isOpen } = this.state;
      const popoverElement = this.popoverRef && this.popoverRef.current;
      const wrapperElement = this.wrapperRef && this.wrapperRef.current;

      // for Flow
      const eventTarget = ((event.target: any): Node);

      if (
        isOpen
        && popoverElement && wrapperElement
        && !(popoverElement.contains(eventTarget) || wrapperElement.contains(eventTarget))
        && (popoverElement !== event.target || wrapperElement !== event.target)
      ) {
        this.toggleDropdown();
      }
    }

    handlePopoverClick = (event: MouseEvent)=> {
      event.stopPropagation();
      const ref = this.popoverRef && this.popoverRef.current;

      if (ref && ref !== event.target) {
        this.toggleDropdown();
      }
    }

    handlePopoverMouseDown = (event: MouseEvent)=> event.stopPropagation();

    toggleDropdown = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen, useScroll: false }));

    renderPopover = () => {
      const { popoverClassName } = this.props;
      const { left, top, useScroll } = this.state;
      const { wrapperRef } = this;
      const minWidth = wrapperRef && wrapperRef.current
        ? wrapperRef.current.getBoundingClientRect().width
        : 0;

      return (
        <DropdownPopoverWithRef
          className={popoverClassName}
          items={this.props.items}
          onClick={this.handlePopoverClick}
          onMouseDown={this.handlePopoverMouseDown}
          style={{
            left,
            top,
            minWidth,
            width: useScroll ? this.scrollablePopoverWidth : null
          }}
          useScroll={useScroll}
          ref={this.popoverRef}
        />
      );
    };

    renderPortal() {
      const { body } = document;

      if (body) {
        return ReactDOM.createPortal(this.renderPopover(), body);
      }

      return null
    }

    render() {
      const { className, items, ...props } = this.props;
      const { isOpen } = this.state;

      return (
        <>
          <Component
            {...props}
            className={className}
            onClick={this.handleClick}
            ref={this.wrapperRef}
          />
          {isOpen && items && this.renderPortal()}
        </>
      )
    }
  }
