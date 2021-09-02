// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors, zIndex, INTERACTIVE_ELEMENT_SELECTOR } from '../../variables';
import { isFocusInsideRef } from '../../utils/isFocusInside';
import { genericStyles } from '../../genericStyles';

const styles = {
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
    outline: none;

    &::-moz-focus-inner {
      border: 0;
    }
  `,
  popoverScrollable: css`
    height: 100%;
    overflow: auto;
  `
}

type DropdownPopoverProps = {
  useScroll: boolean,
  style: ?{ [string]: string | number | null },
  className: ?string,
  items?: React.Node,
  innerRef?: (n: Node) => void,
  onClick: MouseEvent,
  onKeyDownCapture?: KeyboardEvent,
  onMouseDown: MouseEvent,
  autoFocus: boolean
}

export class DropdownPopover extends React.Component<DropdownPopoverProps> {
  focus() {
    const { innerRef, autoFocus } = this.props;
    autoFocus && innerRef.current && innerRef.current.focus();
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { innerRef, onKeyDownCapture } = this.props;

    if (e.keyCode === 38 || e.keyCode === 40) {
      e.stopPropagation();
      e.preventDefault();

      // get all focusable elements
      // get i of current focused element
      // focus next or prev element

      const focused = document.activeElement;
      if (innerRef && innerRef.current) {
        const items = Array.from(
          innerRef.current.querySelectorAll(INTERACTIVE_ELEMENT_SELECTOR)
        );
        const currentIndex = items.indexOf(focused);
        let newActiveIndex = currentIndex === -1
          ? (e.keyCode === 38) ? items.length - 1 : 0
          : (e.keyCode === 38)
            ? ((currentIndex + items.length - 1) % items.length)
            : ((currentIndex + items.length + 1) % items.length);

        items[newActiveIndex].focus();
      }
    }

    onKeyDownCapture && onKeyDownCapture(e);
  }

  componentDidMount() {
    const { style } = this.props;
    if (!style || !(style.left === 0 && style.top === 0)) {
      this.focus();
    }
  }

  componentDidUpdate() {
    if (!isFocusInsideRef(this.props.innerRef)) {
      this.focus();
    }
  }

  render() {
    const {
      className,
      innerRef,
      items,
      useScroll,
      style,
      onClick,
      onMouseDown
    } = this.props;

    return (
      <div
        className={cx(
          styles.popover,
          genericStyles.scrollbars,
          { [styles.popoverScrollable]: useScroll },
          className
        )}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onKeyDownCapture={this.handleKeyDown}
        style={style}
        ref={innerRef}
        tabIndex={0}
      >
        {items}
      </div>
    );
  }
}

export const DropdownPopoverWithRef = React.forwardRef((props, ref) => <DropdownPopover {...props} innerRef={ref} />);
