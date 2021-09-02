// @flow
import * as React from 'react';
import * as R from 'ramda';
import { css, cx } from '@emotion/css';

const styles = {
  wrap: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -16px;
    margin-right: -16px;
  `,
  input: css`
    margin: 6px 16px 6px;
  `,
  column: css`
    align-self: stretch;
    margin: 0 16px;
  `,
  columnInput: css`
    margin-top: 6px;
    margin-bottom: 6px;
  `,
  columns: [
    css`
      flex-basis: 100%;
    `,
    css`
      flex-basis: calc(50% - 32px);
    `,
    css`
      flex-basis: calc(33.3% - 32px);
    `,
  ],
};

type InputGroupProps = {
  children?: React.Node[] | React.Node,
  className?: string,
  columns?: 1 | 2 | 3,
  itemClassName?: string,
  verticalSort?: boolean,
};

type InputGroupRendererProps = {
  children?: React.Node[] | React.Node,
  columns: 1 | 2 | 3,
  itemClassName?: string,
};

const renderers = {
  Horizontal: ({ children, columns, itemClassName }: InputGroupRendererProps) =>
    Array.isArray(children) ? (
      children.map((child, index) => (
        <div key={index} className={cx(styles.input, styles.columns[columns - 1], itemClassName)}>
          {child}
        </div>
      ))
    ) : (
      <div className={cx(styles.input, styles.columns[columns - 1], itemClassName)}>{children}</div>
    ),
  Vertical: ({ children, columns, itemClassName }: InputGroupRendererProps) => {
    const items = Array.isArray(children) ? children : [children];
    const columnSize = Math.ceil(items.length / columns);
    const groupedItems: React.Node[][] = R.times(() => [], columns);

    items.forEach((item: React.Node = null, i) => {
      const column = Math.floor(i / columnSize);
      groupedItems[column].push(item);
    });

    return groupedItems.map((group, index1) => (
      <div key={index1} className={cx(styles.column, styles.columns[columns - 1])}>
        {group.map((child, index2) => (
          <div key={index2} className={cx(styles.columnInput, itemClassName)}>
            {child}
          </div>
        ))}
      </div>
    ));
  },
};

export const InputGroup = ({ children, className, columns = 1, itemClassName, verticalSort }: InputGroupProps) => {
  const Renderer = verticalSort ? renderers.Vertical : renderers.Horizontal;
  return (
    <div className={cx(styles.wrap, className)}>
      <Renderer columns={columns} itemClassName={itemClassName}>
        {children}
      </Renderer>
    </div>
  );
};
