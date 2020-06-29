// @flow

import React from 'react';
import {
  useTable, useSortBy, usePagination, useRowSelect, useMountedLayoutEffect,
  type UseTableOptions, Row, ColumnInstance, UseSortByColumnProps
} from 'react-table';

import { css, cx } from 'emotion';
import { Text } from '../Text';
import { NonIdealState } from '../NonIdealState';
import TableRow from './TableRow';
import { IconSortable } from './IconSortable';
import image from '../Icon/icons/IconBoxNoData/empty-box-no-data.svg';
import { Pagination } from '../Pagination';
import { Checkbox } from '../Checkbox';


const styles = {
  table: css`
    background-color: transparent;
    width: 100%;
    border-spacing: initial;
  `,
  head: css`
    color: #000000a6;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 16px;
    text-align: left;
  `,
  sortIcon: css`
    margin-left: 12px;
  `,
  noData: css`
    background-color: #FFFFFF;
    padding: 25px;
  `,
  noDataText: css`
    margin-top: 16px;
    color: rgba(0, 0, 0, 0.25);
 `,
  pagination: css`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
  `
};


export type RowProps = {
  rowClassName?: string,
  codeClassName?: string,
  codeRowKey?: string,
  onClickRow?: (row: Row) => void;
  onClickCodeRow?: (row: Row) => void;
  pagination?: boolean;
  onSelectedRowsChange?: (selectedFlatRows: Row[]) => void;
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
  const {
    rowClassName, codeClassName, columns = [], data = [], pagination, onSelectedRowsChange
  } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    visibleColumns,

    gotoPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      onSelectedRowsChange && hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  );

  useMountedLayoutEffect(() => {
    if (onSelectedRowsChange) {
      const selectedRows = selectedFlatRows.map(row => row.original);
      onSelectedRowsChange(selectedRows);
    }
  }, [onSelectedRowsChange, selectedFlatRows]);

  const dataRows = pagination ? page : rows;
  return (
    <>
      <table {...getTableProps()} className={cx(styles.table)}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: ColumnInstance & UseSortByColumnProps) => (
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
          {dataRows.map(row => {
            prepareRow(row);
            return (
              <TableRow
                key={row.getRowProps().key}
                row={row}
                rowClassName={rowClassName}
                codeClassName={codeClassName}
                onClickCodeRow={props.onClickCodeRow}
                onClickRow={props.onClickRow}
                codeRowKey={props.codeRowKey}
              />
            )
          })}
          {!rows.length && (
            <tr>
              <td colSpan={visibleColumns.length}>
                <NonIdealState className={cx(styles.noData)} image={image}>
                  <Text className={styles.noDataText}>The list is empty</Text>
                </NonIdealState>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {pagination && rows.length > 0 && <div className={styles.pagination}>
        <Pagination
          page={pageIndex}
          pageSize={pageSize}
          items={rows.length}
          onPageChange={gotoPage}
          setPageSize={setPageSize}
          showTotal
        />
      </div>}
    </>
  );
}
