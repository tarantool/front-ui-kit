// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { INTERACTIVE_ELEMENT_SELECTOR } from '../../variables';
import { throttle } from 'lodash';
import { DropdownPopoverWithRef } from './DropdownPopover';

const SCROLLBAR_WIDTH = 28;

const popoverCloseKeyCodes = [9, 13, 27];

const focusFirstInteractiveElement = (containerEl: HTMLElement) => {
  const firstInteractiveElement = containerEl
    && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
};

export type WithDropdownProps = {
  className?: string, // trigger wrapper class
  popoverClassName?: string,
  onClick?: (e: MouseEvent) => void,
  component?: React.AbstractComponent<any>,
  items?: React.Node,
  onDropdownVisibleChange?: (visible: boolean) => void,
  autoFocus?: boolean,
  disabled?: boolean
};

export type WithDropdownState = {
  isOpen: boolean,
  left: number,
  top: number,
  useScroll: boolean
};

export const withDropdown = (
  Component: React.AbstractComponent<any, HTMLElement> | string
) =>
  class Dropdown extends React.PureComponent<WithDropdownProps, WithDropdownState> {
    static defaultProps = {
      autoFocus: true
    };

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

    componentDidUpdate(prevProps: WithDropdownProps, prevState: WithDropdownState) {
      const { isOpen } = this.state;

      if (prevState.isOpen !== isOpen) {
        this.props.onDropdownVisibleChange && this.props.onDropdownVisibleChange(isOpen);
      }

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
    };

    // 16 approximately equals 1 frame with 60fps
    throttledRecalcPosition = throttle(this.recalcPosition, 16);

    handleClick = (event: MouseEvent) => {
      const { onClick, autoFocus } = this.props;
      const { isOpen } = this.state;
      if (!autoFocus && isOpen) {
        return
      }
      this.toggleDropdown();
      onClick && onClick(event);
    };

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
    };

    handlePopoverClick = (event: MouseEvent)=> {
      event.stopPropagation();
      const ref = this.popoverRef && this.popoverRef.current;

      if (ref && ref !== event.target) {
        this.toggleDropdown();
      }
    };

    handlePopoverMouseDown = (event: MouseEvent)=> event.stopPropagation();

    handlePopoverKeyDown = (event: KeyboardEvent)=> {
      if (popoverCloseKeyCodes.includes(event.keyCode)) {
        this.toggleDropdown();
        this.wrapperRef.current && this.props.autoFocus && focusFirstInteractiveElement(this.wrapperRef.current);
      }
    };

    toggleDropdown = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen, useScroll: false }));

    renderPopover = () => {
      const { popoverClassName, autoFocus } = this.props;
      const { left, top, useScroll } = this.state;
      const { wrapperRef } = this;
      const minWidth = wrapperRef && wrapperRef.current
        ? wrapperRef.current.getBoundingClientRect().width
        : 0;

      return (
        <DropdownPopoverWithRef
          className={popoverClassName}
          items={this.props.items}
          autoFocus={autoFocus}
          onClick={this.handlePopoverClick}
          onKeyDownCapture={this.handlePopoverKeyDown}
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
      const {
        className,
        items,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        popoverClassName,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onDropdownVisibleChange,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        autoFocus,
        disabled,
        ...props
      } = this.props;
      const { isOpen } = this.state;

      return (
        <>
          <Component
            {...props}
            className={className}
            onClick={!disabled ? this.handleClick : undefined}
            ref={this.wrapperRef}
          />
          {isOpen && items && !disabled && this.renderPortal()}
        </>
      )
    }
  }
