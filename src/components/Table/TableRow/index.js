// @flow

import React, { useState } from 'react';
import { type Row } from 'react-table';

import { css, cx } from 'emotion';
import { Text } from '../../Text';
import type { RowProps } from '../index';
import { IconMoreBurger } from '../../Icon';

const styles = {
  col: css`
    padding: 16px;
  `,
  colText: css`
    color: #000000a6;
  `,
  rowBackground: css`
    background-color: #FFFFFF;
  `,
  row: css`
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  `,
  codeRow: css`
    background-color: #FAFAFA;
  `,
  code: css`
    position: relative;
    padding: 8px 48px 8px 16px;
    white-space: pre-wrap;
  `,
  hoverRow: css`
    background-color: #EFEFEF;
  `,
  pointer: css`
    cursor: pointer;
  `,
  moreIcon: css`
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translate(0,-50%);
  `
};
const get2RowFromStr = (str: string) => {
  const splitedStr = str.split('\n');

  return `${splitedStr[0]}${splitedStr[1] ? `\n${splitedStr[1]}` : ''}`;
};

function TableRow({
  row, rowClassName, codeClassName, onCodeRowClick, codeRowKey, onRowClick
}: RowProps & { row: Row}) {
  const rowProps = row.getRowProps();
  const codeRow = codeRowKey && row.original[codeRowKey];
  const [ isHover, setHover ] = useState(false);

  return (
    <React.Fragment>
      <tr
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={
          cx(styles.rowBackground, { [styles.row]: !codeRow, [styles.hoverRow]: isHover, [styles.pointer]: onRowClick })
        }
        {...rowProps}
      >
        {row.cells.map(cell => {
          return (
            <Text
              tag="td"
              className={cx(styles.col, styles.colText, rowClassName)}
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                onRowClick && cell.column.id !== 'selection'
                  ? onRowClick(row)
                  : cell.row.toggleRowSelected(!cell.row.isSelected)
              }}
              {...cell.getCellProps()}
            >
              {cell.render('Cell')}
            </Text>
          );
        })}
      </tr>
      {codeRow && (
        <tr
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            cx(
              styles.codeRow,
              styles.row,
              codeClassName,
              { [styles.hoverRow]: isHover, [styles.pointer]: onCodeRowClick })
          }
          onClick={() => onCodeRowClick ? onCodeRowClick(row) : null}
        >
          <Text
            tag="td"
            variant="code"
            className={cx(styles.code, styles.colText)}
            colSpan={row.cells.length}
          >
            {get2RowFromStr(codeRow)}
            <IconMoreBurger className={styles.moreIcon} />
          </Text>
        </tr>
      )}
    </React.Fragment>
  );
}

export default TableRow;
