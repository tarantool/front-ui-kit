// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../variables';
import { textStyles } from '../Text';

const defaultListItemColor = 'rgba(0, 0, 0, 0.65)';

const styles = {
  item: (color = defaultListItemColor) => css`
    padding: 0 16px;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${color};
    cursor: pointer;

    &:focus,
    &:active {
      background-color: ${colors.intentBaseBg};
      color: ${color};
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }
  `
}

type DropdownItemProps = {
  children?: React.Node,
  color?: string,
  className?: string,
  onClick?: (e: MouseEvent | KeyboardEvent) => void
}

export const DropdownItem = (
  {
    className,
    color,
    onClick,
    ...props
  }: DropdownItemProps
) => {
  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      onClick && onClick(e);
    }
  };

  return (
    <div
      {...props}
      tabIndex={0}
      className={cx(textStyles.basic, styles.item(color), className)}
      onClick={onClick}
      onKeyDownCapture={keyPressHandler}
      onMouseEnter={e => {
        e.target && e.target.focus();
      }}
    />
  );
};
