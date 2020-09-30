// @flow

import * as React from 'react';
import {
  useTable, useSortBy, usePagination, useRowSelect, useMountedLayoutEffect,
  type UseTableOptions, Row, ColumnInstance, UseSortByColumnProps
} from 'react-table';
import { css, cx } from 'emotion';

import { Text } from '../Text';
import { Button } from '../Button';
import { Spin } from '../Spin';
import { NonIdealState } from '../NonIdealState';
import { IconHelperSortable } from '../IconHelper';
import image from '../Icon/icons/IconBoxNoData/empty-box-no-data.svg';
import { Pagination, PaginationControlled } from '../Pagination';
import { Checkbox } from '../Checkbox';
import { colors } from '../../variables';
import TableRow from './TableRow';


const styles = {
  table: css`
    background-color: transparent;
    width: 100%;
    border-spacing: initial;
  `,
  head: css`
    color: ${colors.dark65};
    font-weight: 600;
    font-size: 14px;
    padding: 12px 16px;
    text-align: left;
  `,
  buttonSort: css`
    &:hover {
      background-color: ${colors.intentBase};
      
      svg {
        fill: ${colors.dark65} !important;
      }
    }
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
  onRowClick?: (row: Row) => void;
  onCodeRowClick?: (row: Row) => void;
}

export type ManualPagination = {
  page: number,
  pageSize: number,
  onChangePage: (page: number) => void,
  onChangePageSize: (pageSize: number) => void,
  disableNextPageButton: boolean,
}

type TableProps = UseTableOptions & RowProps & {
  pagination?: boolean;
  loading?: boolean;
  manualPagination?: ManualPagination;
  onSelectedRowsChange?: (selectedFlatRows: Row[], selectedRowIds: any[]) => void,
  tableKey?: string;
  initialSelectedRowIds?: any[],
  initialSortBy?: Array<{ id: string, desc: boolean }>
};

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
    rowClassName,
    codeClassName,
    columns = [],
    data = [],
    pagination,
    onSelectedRowsChange,
    tableKey,
    initialSelectedRowIds = [],
    initialSortBy = [],
    manualPagination,
    loading = false
  } = props;

  const getRowId = React.useCallback((row, index) => {
    return tableKey && row[tableKey] ? row[tableKey] : index;
  }, [tableKey]);


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
    state: { pageIndex, pageSize, selectedRowIds }
  } = useTable(
    {
      columns,
      data,
      getRowId,
      initialState: { selectedRowIds: initialSelectedRowIds, sortBy: initialSortBy },
      manualPagination: !!manualPagination,
      autoResetSelectedRows: !manualPagination,
      autoResetSortBy: !manualPagination
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
          Cell: ({ row }) => {
            const { checked } = row.getToggleRowSelectedProps();
            return <Checkbox checked={checked} />
          }
        },
        ...columns
      ])
    }
  );

  useMountedLayoutEffect(() => {
    if (onSelectedRowsChange) {
      const selectedRows = selectedFlatRows.map(row => row.original);
      onSelectedRowsChange(selectedRows, Object.keys(selectedRowIds));
    }
  }, [selectedFlatRows]);

  const dataRows = pagination ? page : rows;
  return (
    <>
      <Spin enable={loading}>
        <table {...getTableProps()} className={cx(styles.table)}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: ColumnInstance & UseSortByColumnProps) => {
                  const sortColumn = () => {
                    column.toggleSortBy && column.toggleSortBy(!column.isSortedDesc, false);
                  };
                  return (
                    <Text
                      tag='th'
                      className={styles.head}
                      {...column.getHeaderProps()}
                    >
                      {
                        column.canSort && dataRows.length > 0
                          ?
                          <Button
                            intent="plain"
                            className={styles.buttonSort}
                            onClick={dataRows.length > 0 ? sortColumn : undefined}
                            iconRight={props => (
                              <IconHelperSortable
                                {...props}
                                sort={getSortDirection(column.isSortedDesc)}
                              />
                            )}
                          >
                            {column.render('Header')}
                          </Button>
                          : column.render('Header')
                      }
                    </Text>
                  )
                }
                )}
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
                  onCodeRowClick={props.onCodeRowClick}
                  onRowClick={props.onRowClick}
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
        {manualPagination && <div className={styles.pagination}>
          <PaginationControlled
            page={manualPagination.page}
            pageSize={manualPagination.pageSize}
            disableNextPageButton={manualPagination.disableNextPageButton}
            onPageChange={manualPagination.onChangePage}
            setPageSize={manualPagination.onChangePageSize}
          />
        </div>}
      </Spin>
    </>
  );
}
