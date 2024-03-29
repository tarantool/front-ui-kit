// @flow
import React from 'react';
import { useMountedLayoutEffect, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import type { Hooks, Row, UseTableOptions } from 'react-table';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { Checkbox } from '../Checkbox';
import image from '../Icon/icons/IconEmptyData/icon-empty-data.svg';
import { NonIdealState } from '../NonIdealState';
import { Pagination, PaginationControlled } from '../Pagination';
import { Spin } from '../Spin';
import { Text } from '../Text';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableStickyRow } from './TableStickyRow';
import type { AdditionalProps, ManualPagination } from './types';

const styles = {
  table: css`
    background-color: transparent;
    width: 100%;
    border-spacing: initial;
    border-collapse: collapse;
  `,
  tbody: css`
    background-color: #ffffff;
  `,
  loading: css`
    min-height: 200px;
  `,
  iconNoData: css`
    height: 96px;
    width: 120px;
  `,
  noData: css`
    background-color: #ffffff;
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
  `,
};

type TableProps = $Exact<
  AdditionalProps & {
    className?: string,
    pagination?: boolean,
    loading?: boolean,
    manualPagination?: ManualPagination,
    onSelectedRowsChange?: (selectedFlatRows: Row[], selectedRowIds: any[]) => void,
    tableKey?: string,
    initialSelectedRowIds?: any[],
    initialSortBy?: Array<{ id: string, desc: boolean }>,
    useTableOptions?: UseTableOptions,
  }
>;

const emptyArr = [];

const createUseSelectionColumnsHook = (enable: boolean) => (hooks: Hooks<object>) => {
  if (enable) {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
        Cell: ({ row: { getToggleRowSelectedProps } }) => <Checkbox {...getToggleRowSelectedProps()} />,
      },
      ...columns,
    ]);
  }
};

const fixedToggleAllPageRowsSelectedActionReducer = (newState, action) => {
  if (action && action.type === 'toggleAllPageRowsSelected' && action.value === false) {
    return {
      ...newState,
      selectedRowIds: {},
    };
  }

  return newState;
};

export const Table = React.forwardRef((props: TableProps, ref) => {
  const {
    rowClassName,
    columns = emptyArr,
    className,
    data = emptyArr,
    pagination,
    onSelectedRowsChange,
    tableKey,
    initialSelectedRowIds = emptyArr,
    initialSortBy = emptyArr,
    manualPagination,
    loading = false,
    useTableOptions,
  } = props;

  const useSelectionColumns = createUseSelectionColumnsHook(Boolean(onSelectedRowsChange));

  const getRowId = React.useCallback(
    (row, index) => {
      return tableKey && row[tableKey] ? row[tableKey] : index;
    },
    [tableKey]
  );

  const headerRef = React.useRef<HTMLTableSectionElement | null>(null);

  const options = {
    columns,
    data,
    getRowId,
    initialState: {
      selectedRowIds: initialSelectedRowIds,
      sortBy: initialSortBy,
    },
    manualPagination: !!manualPagination,
    autoResetSelectedRows: !manualPagination,
    autoResetSortBy: !manualPagination,
    ...(useTableOptions ? useTableOptions : {}),
  };

  if (options.stateReducer) {
    options.stateReducer = (newState, action) => {
      const nextState = fixedToggleAllPageRowsSelectedActionReducer(newState, action);
      return options.stateReducer(nextState, action, newState);
    };
  } else {
    options.stateReducer = fixedToggleAllPageRowsSelectedActionReducer;
  }

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
    toggleAllRowsSelected,
    toggleAllPageRowsSelected,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(options, useSortBy, usePagination, useRowSelect, useSelectionColumns);

  useMountedLayoutEffect(() => {
    if (onSelectedRowsChange) {
      const selectedRows = selectedFlatRows.map((row) => row.original);
      onSelectedRowsChange(selectedRows, Object.keys(selectedRowIds));
    }
  }, [selectedFlatRows]);

  React.useImperativeHandle(ref, () => ({ toggleAllRowsSelected, toggleAllPageRowsSelected }));

  const dataRows = React.useMemo((): Row[] => {
    return (pagination ? page : rows).map((item: Row) => {
      prepareRow(item);
      return item;
    });
  }, [prepareRow, pagination, page, rows]);

  return (
    <>
      <Spin enable={loading} className={cx({ [styles.loading]: loading })}>
        <table {...getTableProps()} className={cx(styles.table, className)}>
          <TableHeader ref={headerRef} headerGroups={headerGroups} dataRows={dataRows} />
          <tbody className={styles.tbody} {...getTableBodyProps()}>
            {dataRows.map((row) => {
              const topRow = props.topRowKey && row.original[props.topRowKey];
              return (
                <React.Fragment key={row.getRowProps().key}>
                  {topRow && (
                    <TableStickyRow
                      cellsLength={row.cells.length}
                      topRowClassName={props.topRowClassName}
                      topRowKey={props.topRowKey}
                      topRowStickySide={props.topRowStickySide}
                      headerRef={headerRef}
                    >
                      {topRow}
                    </TableStickyRow>
                  )}
                  <TableRow row={row} rowClassName={rowClassName} onRowClick={props.onRowClick} />
                </React.Fragment>
              );
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
        {pagination && rows.length > 0 && (
          <div className={styles.pagination}>
            <Pagination
              page={pageIndex}
              pageSize={pageSize}
              items={rows.length}
              onPageChange={gotoPage}
              setPageSize={setPageSize}
              showTotal
            />
          </div>
        )}
        {manualPagination && (
          <div className={styles.pagination}>
            <PaginationControlled
              page={manualPagination.page}
              pageSize={manualPagination.pageSize}
              disableNextPageButton={manualPagination.disableNextPageButton}
              onPageChange={manualPagination.onChangePage}
              setPageSize={manualPagination.onChangePageSize}
            />
          </div>
        )}
      </Spin>
    </>
  );
});
