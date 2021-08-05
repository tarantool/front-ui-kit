// @flow
import React from 'react';
import type { ColumnInstance, UseSortByColumnProps } from 'react-table';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { IconHelperSortable } from '../../IconHelper';
import { css } from 'emotion';
import { colors } from '../../../variables';

const styles = {
  head: css`
    color: ${colors.dark65};
    font-weight: 600;
    font-size: 14px;
    padding: 12px 16px;
    text-align: left;
  `,
  buttonSort: css`
    margin-left: -16px;
    font-weight: 600;
    transition-timing-function: ease-in-out;
    transition-duration: 0.07s;
    transition-property: fill;

    &:hover {
      background-color: ${colors.intentBase};
      
      svg {
        fill: ${colors.dark65} !important;
      }
    }
  `
};

type TableHeaderProps = {

}

function getSortDirection(isSortedDesc?: boolean) {
  if (isSortedDesc === true) {

    return 'desc';
  }
  if (isSortedDesc === false) {

    return 'asc';
  }

  return undefined;
}

export const TableHeader = (props: TableHeaderProps) => {
  const { headerGroups, dataRows } = props;
  return (
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
  )
};
