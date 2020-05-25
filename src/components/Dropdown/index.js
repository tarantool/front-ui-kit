// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css, cx } from 'emotion';
import { colors, zIndex } from '../../variables';
import { Button } from '../Button';
import { IconMore } from '../Icon';
import { textStyles } from '../Text';

const defaultListItemColor = 'rgba(0, 0, 0, 0.65)';

const styles = {
  wrap: css`
    position: relative;
    display: inline-block;
  `,
  popover: css`
    position: absolute;
    left: 0;
    padding: 8px 0;
    border-radius: 4px;
    margin: 0;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px ${colors.intentBaseBg};
    background-color: #ffffff;
    z-index: ${zIndex.dropdownMenu};
    box-sizing: border-box;
    user-select: none;
    list-style: none;
  `,
  item: (color = defaultListItemColor) => css`
    padding: 0 16px;
    line-height: 32px;
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
  top: number,
  left: number,
  isOpen: boolean
};

export const withDropdown = (
  Component:  React.AbstractComponent<any, HTMLElement> | string
) =>
  class Dropdown extends React.Component<withDropdownProps, withDropdownState> {
    popoverRef = React.createRef<HTMLUListElement>();
    wrapperRef = React.createRef<HTMLElement>();

    state = {
      isOpen: false,
      top: 0,
      left: 0
    };

    componentDidMount() {
      if (this.state.isOpen)
        document.addEventListener('mousedown', this.handleMouseDownOutside);
    }

    componentDidUpdate(prevProps: withDropdownProps, prevState: withDropdownState) {
      const { isOpen } = this.state;

      if (!prevState.isOpen && isOpen)
        document.addEventListener('mousedown', this.handleMouseDownOutside);
      else if (prevState.isOpen && !isOpen)
        document.removeEventListener('mousedown', this.handleMouseDownOutside);

      const { wrapperRef, popoverRef } = this;

      const popoverElement = popoverRef.current;
      const wrapperElement = wrapperRef.current;

      if (((isOpen && !prevState.isOpen) || (prevProps !== this.props)) && popoverElement && wrapperElement) {
        const bodyWidth = document.body ? document.body.clientWidth : 0;
        const wrapperRect = wrapperElement.getBoundingClientRect();

        const upside = window.innerHeight - wrapperRect.top - wrapperRect.height < popoverElement.offsetHeight;
        const leftside = wrapperRect.left > (bodyWidth / 2);

        let left = leftside
          ? Math.max(window.scrollX + wrapperRect.left + wrapperRect.width - popoverElement.offsetWidth, 0)
          : Math.max(window.scrollX + wrapperRect.left, 0);

        this.setState({
          top: upside
            ? window.scrollY + wrapperRect.top - popoverElement.offsetHeight
            : window.scrollY + wrapperRect.top + wrapperRect.height,
          left
        })
      }
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleMouseDownOutside);
    }

    handleClick = (event: MouseEvent) => {
      const { onClick } = this.props;
      this.toggleDropdown();
      onClick && onClick(event);
    }

    handleMouseDownOutside = (event: MouseEvent) => {
      const { isOpen } = this.state;
      const ref = this.popoverRef && this.popoverRef.current;

      // for Flow
      const eventTarget = ((event.target: any): Node);

      if (isOpen && ref && !ref.contains(eventTarget) && ref !== event.target) {
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

    toggleDropdown = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

    renderPopover = () => {
      const { popoverClassName } = this.props;
      const { left, top } = this.state;

      return (
        <ul
          className={cx(
            styles.popover,
            popoverClassName
          )}
          onClick={this.handlePopoverClick}
          onMouseDown={this.handlePopoverMouseDown}
          style={{
            left,
            top
          }}
          ref={this.popoverRef}
        >
          {this.props.items}
        </ul>
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
    children,
    className,
    color,
    ...props
  }: DropdownItemProps
) => (
  <li {...props} className={cx(textStyles.basic, styles.item(color), className)}>
    {children}
  </li>
);

type DropdownDividerProps = { className?: string };

export const DropdownDivider = (
  {
    className
  }: DropdownDividerProps
) => (
  <li
    className={cx(styles.divider, className)}
    onClick={e => e.stopPropagation()}
  />
);
