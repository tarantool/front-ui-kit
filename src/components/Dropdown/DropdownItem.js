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

    &:hover {
      cursor: pointer;
      background-color: ${colors.intentBaseActive};
    }
  `
}

type DropdownItemProps = {
  children?: React.Node,
  color?: string,
  className?: string,
  onClick?: (e: MouseEvent) => void
}

export const DropdownItem = (
  {
    className,
    color,
    ...props
  }: DropdownItemProps
) => (
  <div {...props} className={cx(textStyles.basic, styles.item(color), className)} />
);
