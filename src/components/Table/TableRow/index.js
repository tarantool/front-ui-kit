// @flow

import React, { useState } from 'react';
import { type Row } from 'react-table';

import { css, cx } from 'emotion';
import { Text } from '../../Text';
import type { RowProps } from '../index';

const styles = {
  col: css`
    padding: 16px;
  `,
  rowBackground: css`
    background-color: #FFFFFF;
  `,
  row: css`
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  `,
  codeRow: css`
    background-color: #FAFAFA;
    cursor: pointer;
  `,
  code: css`
    padding: 8px 16px;
  `,
  hoverRow: css`
    background-color: #EFEFEF;
  `
};

function TableRow({ row, rowClassName, codeClassName, onClickCodeRow }: RowProps & { row: Row}) {
  const rowProps = row.getRowProps();
  const [ isHover, setHover ] = useState(false);
  return (
    <React.Fragment>
      <tr
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={cx(styles.rowBackground, { [styles.row]: !row.original.code, [styles.hoverRow]: isHover } )}
        {...rowProps}
      >
        {row.cells.map(cell => {
          return (
            <Text
              tag="td"
              className={cx(styles.col, rowClassName)}
              {...cell.getCellProps()}
            >
              {cell.render('Cell')}
            </Text>
          );
        })}
      </tr>
      {row.original.code && (
        <tr
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={cx(styles.codeRow, styles.row, codeClassName, { [styles.hoverRow]: isHover })}
          onClick={() => onClickCodeRow ? onClickCodeRow(row) : null}
        >
          <td
            className={cx(styles.code)}
            colSpan={row.cells.length}
          >
            <Text variant="code">{row.original.code}</Text>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default TableRow;