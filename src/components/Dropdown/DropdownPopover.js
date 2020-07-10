import * as React from 'react';
import { css, cx } from 'emotion';
import { colors, zIndex } from '../../variables';
import { Scrollbar } from '../Scrollbar';

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
  `,
  popoverScrollable: css`
    height: 100%;
  `,
  scrollable: css`
    height: 100%;
  `
}

type DropdownPopoverProps = {
  useScroll: boolean,
  style: ?{ [string]: string | number | null },
  className: ?string,
  items?: React.Node,
  innerRef?: (n: Node) => void,
  onClick: MouseEvent,
  onMouseDown: MouseEvent
}

export class DropdownPopover extends React.Component<DropdownPopoverProps> {
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
          className
        )}
        onClick={onClick}
        onMouseDown={onMouseDown}
        style={style}
        ref={innerRef}
      >
        <ScrollableWrap>
          {items}
        </ScrollableWrap>
      </div>
    );
  }
}

export const DropdownPopoverWithRef = React.forwardRef((props, ref) => <DropdownPopover {...props} innerRef={ref} />);
