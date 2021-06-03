// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';

const styles = {
  wrap: css`
    padding: 0;
    list-style: none;
  `,
  outer: css`
    margin: 0 -16px;
  `,
  item: css`
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.11);

    &:last-child {
      margin-bottom: 0;
    }
  `,
  softCorners: css `
    border-radius: 4px;
    margin-bottom: 16px;
  `
};

type TiledListItemProps = {
  children?: React.Node,
  className?: string,
  corners?: 'hard' | 'soft',
};

export const TiledListItem = (
  {
    children,
    className,
    corners = 'hard'
  }: TiledListItemProps
) => (
  <li
    className={cx(
      styles.item,
      {
        [styles.softCorners]: corners === 'soft'
      },
      className
    )}
  >
    {children}
  </li>
);

type TiledListProps = {
  children?: React.Node,
  className?: string,
  outer?: boolean,
};

export const TiledList = ({
  children,
  className,
  outer = true
}:
TiledListProps) => (
  <ul
    className={cx(
      styles.wrap,
      { [styles.outer]: outer },
      className
    )}
  >
    {children}
  </ul>
);
