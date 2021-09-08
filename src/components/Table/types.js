// @flow
import type { Row } from 'react-table';

export type RowProps = {
  row: Row,
  rowClassName?: string,
  onRowClick?: (row: Row) => void,
};

export type TopRowProps = {
  cellsLength: Number,
  topRowClassName: string,
  topRowStickySide: number,
  headerRef: {| current: HTMLTableSectionElement | null |},
  children: any,
};

export type AdditionalProps = {
  rowClassName?: string,
  onRowClick?: (row: Row) => void,
  topRowKey: string,
  topRowClassName: string,
  topRowStickySide: number,
};

export type ManualPagination = {
  page: number,
  pageSize: number,
  onChangePage: (page: number) => void,
  onChangePageSize: (pageSize: number) => void,
  disableNextPageButton: boolean,
};
