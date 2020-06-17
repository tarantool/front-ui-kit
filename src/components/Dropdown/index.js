// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css, cx } from 'emotion';
import { throttle } from 'lodash';
import { colors, zIndex } from '../../variables';
import { Button } from '../Button';
import { IconMore } from '../Icon';
import { Scrollbar } from '../Scrollbar';
import { textStyles } from '../Text';

const SCROLLBAR_WIDTH = 28;
const defaultListItemColor = 'rgba(0, 0, 0, 0.65)';

const styles = {
  wrap: css`
    position: relative;
    display: inline-block;
  `,
  popover: css`
    position: absolute;
    left: 0;
    max-width: 70%;
    max-height: 100%;
    padding: 8px 0;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px ${colors.intentBaseBg};
    background-color: #ffffff;
    z-index: ${zIndex.dropdownMenu};
    box-sizing: border-box;
    user-select: none;
  `,
  popoverScrollable: css`
    height: 100%;
  `,
  // list: css`
  //   padding: 0;
  //   margin: 0;
  //   overflow-x: hidden;
  // `,
  scrollable: css`
    height: 100%;
  `,
  item: (color = defaultListItemColor) => css`
    padding: 0 16px;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${color};

    &:hover {
      cursor: pointer;
      background-color: ${colors.intentBaseActive};
    }
  `,
  divider: css`
    border-bottom: 1px solid ${colors.intentBaseBg};
    margin: 3px 8px 4px;
  `
}

type DropdownItemProps = {
  children?: React.Node,
  color?: string,
  className?: string,
  onClick?: (e: MouseEvent) => void
}

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

      const ScrollableWrap = useScroll
        ? ({ children }) => (
          <Scrollbar className={styles.scrollable}>{children}</Scrollbar>
        )
        : ({ children }) => <>{children}</>;

      return (
        <div
          className={cx(
            styles.popover,
            { [styles.popoverScrollable]: useScroll },
            popoverClassName
          )}
          onClick={this.handlePopoverClick}
          onMouseDown={this.handlePopoverMouseDown}
          style={{
            left,
            top,
            minWidth,
            width: useScroll ? this.scrollablePopoverWidth : null
          }}
          ref={this.popoverRef}
        >
          <ScrollableWrap>
            {this.props.items}
          </ScrollableWrap>
        </div>
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

export const Dropdown = withDropdown(React.forwardRef((
  {
    className,
    children = <Button icon={IconMore} intent='iconic' />,
    ...props
  },
  ref
) =>
  <div
    className={cx(styles.wrap, className)}
    {...props}
    ref={ref}
  >
    {children}
  </div>
));

export const DropdownItem = (
  {
    className,
    color,
    ...props
  }: DropdownItemProps
) => (
  <div {...props} className={cx(textStyles.basic, styles.item(color), className)} />
);

type DropdownDividerProps = { className?: string };

export const DropdownDivider = (
  {
    className
  }: DropdownDividerProps
) => (
  <div
    className={cx(styles.divider, className)}
    onClick={e => e.stopPropagation()}
  />
);
