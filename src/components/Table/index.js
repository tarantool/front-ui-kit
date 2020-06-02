// @flow

import React from 'react';
import {
  useTable, useSortBy,
  type UseTableOptions, Row
} from 'react-table';

import { css, cx } from 'emotion';
import { Text } from '../Text';
import { IconSortable } from '../Icon';
import TableRow from './TableRow';

const styles = {
  table: css`
    background-color: transparent;
    width: 100%;
    border-spacing: initial;
  `,
  head: css`
    opacity: .65;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 16px;
    text-align: left;
  `,
  sortIcon: css`
    margin-left: 12px;
  `
};


export type RowProps = {
  rowClassName?: string,
  codeClassName?: string,
  onClickCodeRow?: (row: Row) => void;
}

type TableProps = UseTableOptions & RowProps;

function getSortDirection(isSortedDesc?: boolean) {
  if (isSortedDesc === true) {

    return 'desc';
  }
  if (isSortedDesc === false) {

    return 'asc';
  }

  return undefined;
}

export function Table(props: TableProps) {
  const { rowClassName, codeClassName, columns = [], data = [] } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} className={cx(styles.table)}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Text
                  tag="th"
                  className={cx(styles.head)}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {column.canSort && (
                    <IconSortable className={cx(styles.sortIcon)} sort={getSortDirection(column.isSortedDesc)} />
                  )}
                </Text>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow
                key={row.getRowProps().key}
                row={row}
                rowClassName={rowClassName}
                codeClassName={codeClassName}
                onClickCodeRow={props.onClickCodeRow}
              />
            )
          })}
        </tbody>
      </table>
    </>
  );
}
