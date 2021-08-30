// @flow

import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors, zIndex, INTERACTIVE_ELEMENT_SELECTOR } from '../../variables';
import { isFocusInsideRef } from '../../utils/isFocusInside';

const styles = {
  popover: css`
    position: absolute;
    left: 0;
    max-width: 70%;
    max-height: 100%;
    padding: 20px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px ${colors.intentBaseBg};
    background-color: #ffffff;
    z-index: ${zIndex.dropdownMenu};
    box-sizing: border-box;
    outline: none;

    &::-moz-focus-inner {
      border: 0;
    }
  `,
  focusClosureControl: css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  `
}

const focusFirstInteractiveElement = (containerEl: HTMLElement) => {
  const firstInteractiveElement = containerEl
    && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
}

type DropdownPopoverProps = {
  style: ?{ [string]: string | number | null },
  children?: React.Node,
  className: ?string,
  innerRef?: (n: Node) => void,
  onClick: MouseEvent,
  onKeyDownCapture?: KeyboardEvent,
  onMouseDown: MouseEvent
}

export class DropdownPopover extends React.Component<DropdownPopoverProps> {
  focusFirstInteractiveElement = () => {
    const { innerRef } = this.props;
    innerRef.current && focusFirstInteractiveElement(innerRef.current);
  }

  focusPopover = () => {
    const { innerRef } = this.props;
    innerRef.current && innerRef.current.focus();
  }

  handleFocusOutside = () => {
    if (!isFocusInsideRef(this.props.innerRef)) {
      this.focusFirstInteractiveElement();
    }
  }

  componentDidMount() {
    this.focusPopover();
    document.addEventListener('focus', this.handleFocusOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('focus', this.handleFocusOutside, true);
  }

  componentDidUpdate() {
    if (!isFocusInsideRef(this.props.innerRef)) {
      this.focusPopover();
    }
  }

  render() {
    const {
      children,
      className,
      innerRef,
      style,
      onClick,
      onKeyDownCapture,
      onMouseDown
    } = this.props;

    return (
      <div
        className={cx(styles.popover, className)}
        onClick={onClick}
        onKeyDownCapture={onKeyDownCapture}
        onMouseDown={onMouseDown}
        style={style}
        ref={innerRef}
        tabIndex={0}
      >
        {children}
        <div
          className={styles.focusClosureControl}
          onFocus={this.focusFirstInteractiveElement}
          tabIndex={0}
        />
      </div>
    );
  }
}

export const DropdownPopoverWithRef = React.forwardRef(
  (props, ref) => <DropdownPopover {...props} innerRef={ref} />
);
