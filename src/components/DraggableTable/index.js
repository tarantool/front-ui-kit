// @flow

import * as React from 'react';
import { css, cx } from 'react-emotion';
import { DraggableListItem, DraggableListContainer } from '../DraggableList';
import { IconBurger } from '../Icon';
import { Checkbox } from '../Checkbox';
import { Text } from '../Text';
import { colors, zIndex } from '../../variables';
const styles = {
  helper: css`
    z-index: ${zIndex.dragNDrop};
    width: 100%;
    visible: hidden;
  `,
  table: css`
    width: 100%;
    border-spacing: initial;
    border-collapse: collapse;
  `,
  head: css`
    padding: 5px 18px;
    text-align: left;
    color ${colors.dark65};
    font-weight: 600;
  `,
  column: css`
    padding: 13px 18px;
    color: ${colors.dark};
  `,
  row: css`
    border-bottom: 1px solid ${colors.baseBg};
  `,
  rowDraggable: css`
    cursor: move;
  `,
  controlsColumn: css`
    padding: 0 10px;
    width: 16px;
  `,
  positionColumn: css`
    width: 1%;
    white-space: nowrap;
  `
};

type BaseData = {
  id: number,
  selected?: boolean
}

type Column<T> = {
  header: string,
  accessor: $Keys<T>
}

type DraggableTableProps<T> = {
  className?: string,
  rowClassName?: string,
  columns: Column<T>[],
  data: T[],
  onChange: (data: {
    oldIndex: number,
    newData: number
  }) => void,
  defaultColumn?: string,
  withPositionCol?: boolean,
  onSelectRow?: (selected: boolean, row: T) => void,
  draggableOnlySelected?: boolean,
}

const metaCheckboxClass = 'meta__checkbox_class';

export const DraggableTable = <T: BaseData>({
  className,
  columns,
  data,
  onChange,
  defaultColumn = '',
  withPositionCol,
  rowClassName,
  onSelectRow,
  draggableOnlySelected
}: DraggableTableProps<T>) => {
  const items = draggableOnlySelected ? data.sort((a, b) => +b.selected - +a.selected) : data;
  const onlyOneElSelected = data.filter(item => item.selected).length === 1;

  return (
    <table className={cx(styles.table, className)}>
      <thead>
        <tr className={styles.row}>
          <th className={styles.controlsColumn} />
          {onSelectRow && <th className={styles.controlsColumn} />}
          {columns.map(column => (
            <Text
              className={styles.head}
              tag="th"
              key={column.accessor}
            >
              {column.header}
            </Text>
          ))}
          {withPositionCol && <Text tag="th" className={cx(styles.head, styles.positionColumn)}>№</Text>}
        </tr>
      </thead>
      <DraggableListContainer
        helperClass={styles.helper}
        tag="tbody"
        onSortEnd={onChange}
        shouldCancelStart={e => !!e.target.closest(`.${metaCheckboxClass}`)}
      >
        {items.map((row, index) => {
          const isDraggableRow = (!draggableOnlySelected || row.selected) && !onlyOneElSelected;
          return (
            <DraggableListItem
              key={row.id}
              tag="tr"
              num={index}
              index={index}
              className={cx(
                styles.row,
                { [styles.rowDraggable]: isDraggableRow },
                rowClassName
              )}
              disabled={draggableOnlySelected && !row.selected}
            >
              <td className={styles.controlsColumn}>{isDraggableRow ? <IconBurger /> : null}</td>
              {onSelectRow && <td className={styles.controlsColumn}>
                <Checkbox
                  onChange={() => onSelectRow(!row.selected, row)}
                  checked={row.selected}
                  className={metaCheckboxClass}
                />
              </td>}
              {columns.map(column => (
                <Text tag="td" key={column.accessor} className={styles.column}>
                  {row[column.accessor] ? row[column.accessor] : defaultColumn}
                </Text>
              ))}
              {withPositionCol && <Text tag="td" className={cx(styles.column, styles.positionColumn)}>
                {isDraggableRow || row.selected ? index + 1 : null}
              </Text>}
            </DraggableListItem>
          )
        })}
      </DraggableListContainer>
    </table>
  );
};
