// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';

const styles = {
  outer: css`
    padding: 8px 0 0;
    margin: 0;
    list-style: none;
  `,
  item: css`
    padding: 12px 16px;
    border: solid 1px #e8e8e8;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: #ffffff;
    transition: 0.1s ease-in-out;
    transition-property: border-color, box-shadow;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      border-color: ${colors.intentBaseBg};
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
    }
  `,
};

type FlatListProps = {
  className?: string,
  children?: React.Node,
};

export const FlatList = ({ className, children }: FlatListProps) => (
  <ul className={cx(styles.outer, className)}>{children}</ul>
);

type FlatListItemProps = {
  className?: string,
  children?: React.Node,
};

export const FlatListItem = ({ className, children }: FlatListItemProps) => (
  <li className={cx(styles.item, className)}>{children}</li>
);
