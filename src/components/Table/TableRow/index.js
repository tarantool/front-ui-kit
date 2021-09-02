// @flow

import React from 'react';
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';
import { Text } from '../../Text';
import { colors } from '../../../variables';

import type { RowProps } from '../types';

export const styles = {
  col: css`
    padding: 16px;
  `,
  colText: css`
    color: #000000a6;
  `,
  row: css`
    border-bottom: 1px solid #e5e5e5;
    &:hover {
      background-color: ${rgba(colors.baseBg, 0.3)};
    }
  `,
  pointer: css`
    cursor: pointer;
  `,
  topRow: css`
    color: ${colors.dark40};
    background-color: ${colors.baseBg};
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  `,
  sticky: css`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    z-index: 1;
    top: 0;
  `,
};

export function TableRow({ row, rowClassName, onRowClick }: RowProps) {
  return (
    <tr
      onClick={onRowClick ? () => onRowClick(row) : null}
      className={cx(styles.row, { [styles.pointer]: onRowClick })}
      {...row.getRowProps()}
    >
      {row.cells.map((cell, index) => (
        <Text
          key={index}
          tag="td"
          className={cx(styles.col, styles.colText, rowClassName)}
          onClick={
            cell.column.id === 'selection'
              ? (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  cell.row.toggleRowSelected(!cell.row.isSelected);
                }
              : null
          }
          {...cell.getCellProps()}
        >
          {cell.render('Cell')}
        </Text>
      ))}
    </tr>
  );
}
