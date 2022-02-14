// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

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
  `,
};

type DropdownItemProps = {
  children?: React.Node,
  color?: string,
  className?: string,
  onClick?: (e: MouseEvent | KeyboardEvent, pass?: any) => void,
  pass?: any,
};

export const DropdownItem = React.memo<DropdownItemProps>(
  ({ className, color, onClick, pass, ...props }: DropdownItemProps) => {
    const handleKeyDownCapture = React.useCallback(
      (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          onClick && onClick(e, pass);
        }
      },
      [onClick, pass]
    );

    const handleClick = React.useCallback(
      (e: MouseEvent) => {
        onClick && onClick(e, pass);
      },
      [onClick, pass]
    );

    const handleMouseEnter = React.useCallback((e: any) => {
      e.target && e.target.focus();
    }, []);

    return (
      <div
        {...props}
        tabIndex={0}
        className={cx(textStyles.basic, styles.item(color), className)}
        onClick={handleClick}
        onKeyDownCapture={handleKeyDownCapture}
        onMouseEnter={handleMouseEnter}
      />
    );
  }
);
