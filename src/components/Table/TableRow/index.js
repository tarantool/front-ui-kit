// @flow

import React, { useState } from 'react';
import { type Row } from 'react-table';
import { css, cx } from 'emotion';
import { rgba } from 'emotion-rgba';
import { Text } from '../../Text';
import type { RowProps } from '../index';
import { colors } from '../../../variables';

const styles = {
  col: css`
    padding: 16px;
  `,
  colText: css`
    color: #000000a6;
  `,
  row: css`
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  `,
  code: css`
    position: relative;
    padding: 8px 48px 8px 16px;
    white-space: pre-wrap;
  `,
  hoverRow: css`
    background-color: ${rgba(colors.baseBg, 0.3)};
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
const get2RowFromStr = (str: string) => {
  const splitedStr = str.split('\n');

  return `${splitedStr[0]}${splitedStr[1] ? `\n${splitedStr[1]}` : ''}`;
};

function TableRow({
  row, rowClassName, codeClassName, onCodeRowClick, codeRowKey, onRowClick, topRowKey, topRowClassName, topRowStickySide
}: RowProps & { row: Row}) {
  const [ isHover, setHover ] = useState(false);
  const rowProps = row.getRowProps();
  const codeRow = codeRowKey && row.original[codeRowKey];
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
            style={{ top: topRowStickySide }}
          >
            {topRow}
          </Text>
        </tr>
      )}
      <tr
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onRowClick ? () => onRowClick(row) : null}
        className={
          cx({ [styles.row]: !codeRow, [styles.hoverRow]: isHover, [styles.pointer]: onRowClick })
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
      {codeRow && (
        <tr
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            cx(
              styles.row,
              codeClassName,
              { [styles.hoverRow]: isHover, [styles.pointer]: onCodeRowClick })
          }
          onClick={() => onCodeRowClick ? onCodeRowClick(row) : null}
        >
          <Text
            tag='td'
            variant='code'
            className={cx(styles.code, styles.colText)}
            colSpan={row.cells.length}
          >
            {get2RowFromStr(codeRow)}
          </Text>
        </tr>
      )}
    </React.Fragment>
  );
}

export default TableRow;
