// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../variables';

const styles = {
  outer: css`
    padding: 8px 0 0;
    margin: 0;
    list-style: none;
  `,
  item: css`
    padding: 12px 16px;
    border: solid 1px #E8E8E8;
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
  `
};

type FlatListItemProps = {
  className?: string,
  corners?: 'hard' | 'soft',
  item: any,
  render: (any) => React.Node
};

const FlatListItem = ({ className, item, render }: FlatListItemProps) => (
  <li
    className={cx(
      styles.item,
      className
    )}
  >
    {render(item)}
  </li>
);

type FlatListProps = {
  className?: string,
  corners?: 'hard' | 'soft',
  itemClassName?: string,
  itemKey: string,
  items?: any[],
  itemRender: any => React.Node
};

export const FlatList = ({
  className,
  itemClassName,
  itemKey,
  items,
  itemRender
}:
FlatListProps) => (
  <ul className={cx(styles.outer, className)}>
    {items && items.map(item => (
      <FlatListItem
        className={itemClassName}
        item={item}
        key={item[itemKey]}
        render={itemRender}
      />
    ))}
  </ul>
);
