// @flow

import * as React from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useMountedLayoutEffect,
  type UseTableOptions,
  type Row
} from 'react-table';
import { css, cx } from '@emotion/css';

import { Text } from '../Text';
import { Spin } from '../Spin';
import { NonIdealState } from '../NonIdealState';
import image from '../Icon/icons/IconEmptyData/icon-empty-data.svg';
import { Pagination, PaginationControlled } from '../Pagination';
import { Checkbox } from '../Checkbox';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { colors } from '../../variables';


const styles = {
  table: css`
    background-color: transparent;
    width: 100%;
    border-spacing: initial;
    border-collapse: collapse;
  `,
  tbody: css`
    background-color: #FFFFFF;
  `,
  loading: css`
    min-height: 200px;
  `,
  iconNoData: css`
    height: 96px;
    width: 120px;
  `,
  noData: css`
    background-color: #FFFFFF;
    padding: 25px;
  `,
  noDataText: css`
    margin-top: 16px;
    color: ${colors.dark65};
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
  topRowClassName?: string,
  topRowKey?: string,
  topRowStickySide?: number,
  onRowClick?: (row: Row) => void;
}

export type ManualPagination = {
  page: number,
  pageSize: number,
  onChangePage: (page: number) => void,
  onChangePageSize: (pageSize: number) => void,
  disableNextPageButton: boolean,
}

type TableProps = UseTableOptions & RowProps & {
  className?: string,
  pagination?: boolean;
  loading?: boolean;
  manualPagination?: ManualPagination;
  onSelectedRowsChange?: (selectedFlatRows: Row[], selectedRowIds: any[]) => void,
  tableKey?: string;
  initialSelectedRowIds?: any[],
  initialSortBy?: Array<{ id: string, desc: boolean }>
};

export function Table(props: TableProps) {
  const {
    rowClassName,
    columns = [],
    className,
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
  const [ theadHeight, setTHeadHeight ] = React.useState<number>(0);
  const theadRef = React.useRef(null);
  React.useEffect(() => {
    setTHeadHeight(theadRef.current ? theadRef.current.clientHeight : 0);
  }, [ theadRef ]);

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
      <Spin enable={loading} className={cx({ [styles.loading]: loading })}>
        <table {...getTableProps()} className={cx(styles.table, className)}>
          <TableHeader
            ref={theadRef}
            headerGroups={headerGroups}
            dataRows={dataRows}
          />
          <tbody className={styles.tbody} {...getTableBodyProps()}>
            {dataRows.map(row => {
              prepareRow(row);
              return (
                <TableRow
                  key={row.getRowProps().key}
                  row={row}
                  rowClassName={rowClassName}
                  onRowClick={props.onRowClick}
                  topRowClassName={props.topRowClassName}
                  topRowKey={props.topRowKey}
                  topRowStickySide={props.topRowStickySide}
                  headHeight={theadHeight}
                />
              )
            })}
            {!rows.length && !loading && (
              <tr>
                <td colSpan={visibleColumns.length}>
                  <NonIdealState className={cx(styles.noData)} image={image} imageClassName={styles.iconNoData}>
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
