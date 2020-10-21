// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { INTERACTIVE_ELEMENT_SELECTOR } from '../../variables';
import { throttle } from 'lodash';
import { DropdownPopoverWithRef } from './DropdownPopover';

const focusFirstInteractiveElement = (containerEl: HTMLElement) => {
  const firstInteractiveElement = containerEl
    && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
}

export type withPopoverProps = {
  className?: string, // trigger wrapper class
  popoverClassName?: string,
  onClick?: (e: MouseEvent) => void,
  component?: React.AbstractComponent<any>,
  popoverContent?: React.Node
};

type withPopoverState = {
  isOpen: boolean,
  left: number,
  top: number
};

export const withPopover = (
  Component:  React.AbstractComponent<any, HTMLElement> | string
) =>
  class Dropdown extends React.PureComponent<withPopoverProps, withPopoverState> {
    popoverRef = React.createRef<HTMLElement>();
    wrapperRef = React.createRef<HTMLElement>();

    state = {
      isOpen: false,
      left: 0,
      top: 0
    };

    componentDidMount() {
      if (this.state.isOpen) {
        document.addEventListener('scroll', this.throttledRecalcPosition, { capture: true });
        document.addEventListener('mousedown', this.handleMouseDownOutside);
      }
    }

    componentDidUpdate(prevProps: withPopoverProps, prevState: withPopoverState) {
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

        left += horizontalShift;
        left -= 0;

        this.setState({ top, left });
      }
    }

    // 16 approximately equals 1 frame with 60fps
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

    handlePopoverKeyDown = (event: KeyboardEvent)=> {
      if (event.keyCode === 27) {
        this.toggleDropdown();
        this.wrapperRef.current && focusFirstInteractiveElement(this.wrapperRef.current);
      }
    };

    toggleDropdown = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

    renderPopover = () => {
      const { popoverClassName, popoverContent } = this.props;
      const { left, top } = this.state;
      const { wrapperRef } = this;
      const minWidth = wrapperRef && wrapperRef.current
        ? wrapperRef.current.getBoundingClientRect().width
        : 0;

      return (
        <DropdownPopoverWithRef
          className={popoverClassName}
          onKeyDownCapture={this.handlePopoverKeyDown}
          // onMouseDown={this.handlePopoverMouseDown}
          style={{
            left,
            top,
            minWidth
          }}
          ref={this.popoverRef}
        >
          {popoverContent}
        </DropdownPopoverWithRef>
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
      const { className, popoverContent, ...props } = this.props;
      const { isOpen } = this.state;

      return (
        <>
          <Component
            {...props}
            className={className}
            onClick={this.handleClick}
            ref={this.wrapperRef}
          />
          {isOpen && popoverContent && this.renderPortal()}
        </>
      )
    }
  }
