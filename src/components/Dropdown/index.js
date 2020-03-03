// @flow
import * as React from 'react';
import { Button } from '../Button';
import { IconMore } from '../Icon';
import { textStyles } from '../Text';
import { css, cx } from 'emotion';

const defaultListItemColor = 'rgba(0, 0, 0, 0.65)';

const styles = {
  wrap: css`
    position: relative;
    display: inline-block;
  `,
  popover: css`
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 6px;
    padding: 8px 0;
    border-radius: 4px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px rgba(82, 82, 82, 0.07);
    background-color: #ffffff;
    z-index: 3;
  `,
  popoverToLeft: css`
    left: auto;
    right: 0;
  `,
  item: (color = defaultListItemColor) => css`
    padding: 0 16px;
    list-style: none;
    line-height: 32px;
    white-space: nowrap;
    color: ${color};

    &:hover {
      cursor: pointer;
      background-color: #fafafa;
    }
  `
}

type DropdownItemProps = {
  children?: React.Node,
  color?: string,
  className?: string,
  onClick?: (MouseEvent) => void
}

type DropdownProps = {
  className?: string, // trigger wrapper class
  children?: React.Node,
  popoverClassName?: string,
  onClick?: (e: MouseEvent) => void,
  component?: React.AbstractComponent<any>,
  items?: React.Node
};

type DropdownState = {
  isOpen: boolean
};

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps = {
    children: (
      <Button
        icon={IconMore}
        intent='iconic'
      />
    )
  }

  popoverRef = React.createRef<HTMLUListElement>();
  wrapRef = React.createRef<HTMLDivElement>();

  state = {
    isOpen: false
  };

  componentDidMount() {
    if (this.state.isOpen)
      document.addEventListener('mousedown', this.handleMouseDownOutside);
  }

  componentDidUpdate(_: DropdownProps, prevState: DropdownState) {
    const { isOpen } = this.state;
    if (!prevState.isOpen && isOpen)
      document.addEventListener('mousedown', this.handleMouseDownOutside);
    else if (prevState.isOpen && !isOpen)
      document.removeEventListener('mousedown', this.handleMouseDownOutside);
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

    if (isOpen && ref && !ref.contains(event.target) && ref !== event.target) {
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

  toggleDropdown = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  renderPopover = () => {
    const { popoverClassName } = this.props;
    const wrapElement = this.wrapRef && this.wrapRef.current;
    let toLeft = false;

    if (wrapElement) {
      toLeft = wrapElement.getBoundingClientRect().left > (document.body.clientWidth / 2);
    }

    return (
      <ul
        className={cx(
          styles.popover,
          { [styles.popoverToLeft]: toLeft },
          popoverClassName
        )}
        onClick={this.handlePopoverClick}
        ref={this.popoverRef}
      >
        {this.props.items}
      </ul>
    );
  };

  render() {
    const { className, children, items } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className={cx(styles.wrap, className)}
        onClick={this.handleClick}
        ref={this.wrapRef}
      >
        {children}
        {isOpen && items && this.renderPopover()}
      </div>
    )
  }
}

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
