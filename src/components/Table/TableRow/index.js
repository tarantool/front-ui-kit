// @flow

import React from 'react';
import { css, cx } from 'emotion';
import { rgba } from 'emotion-rgba';
import { Text } from '../../Text';
import { colors } from '../../../variables';
import { isSafari } from '../../../utils/browser';

import { type Row } from 'react-table';
import type { RowProps } from '../index';

const styles = {
  col: css`
    padding: 16px;
  `,
  colText: css`
    color: #000000a6;
  `,
  row: css`
    border-bottom: 1px solid #E5E5E5;
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
  `
};

export function TableRow({
  row,
  rowClassName,
  onRowClick,
  topRowKey,
  topRowClassName,
  topRowStickySide,
  headHeight
}: RowProps & { row: Row, headHeight: number }) {
  const rowProps = row.getRowProps();
  const topRow = topRowKey && row.original[topRowKey];

  return (
    <React.Fragment>
      {topRow && (
        <tr>
          <Text
            tag='td'
            colSpan={row.cells.length}
            className={
              cx(
                styles.topRow,
                { [styles.sticky]: !Number.isNaN(Number(topRowStickySide)) },
                topRowClassName
              )
            }
            style={{ top: isSafari ? Number(topRowStickySide) - headHeight : topRowStickySide }}
          >
            {topRow}
          </Text>
        </tr>
      )}
      <tr
        onClick={onRowClick ? () => onRowClick(row) : null}
        className={
          cx(styles.row,  { [styles.pointer]: onRowClick })
        }
        {...rowProps}
      >
        {row.cells.map(cell => (
          <Text
            tag='td'
            className={cx(styles.col, styles.colText, rowClassName)}
            onClick={
              cell.column.id === 'selection'
                ? e => {
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
    </React.Fragment>
  );
}
