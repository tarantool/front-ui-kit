// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '../Icon/icons/IconChevron';
import { Text } from '../Text';

const styles = {
  pagination: css`
    display: flex;
  `,
  icon: css`
    width: 32px;
    height: 32px;
    margin: 0 4px;
    fill: ${colors.dark65};
  `,
  chevronIcon: css`
    fill: ${colors.dark65};
  `,
  btn: css`
    min-width: 32px;
    height: 32px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    margin: 0 4px;
    border: 1px solid ${colors.intentBase};
  `,
  buttonArrow: css`
    display: block;
    background: #ffffff;
    color: ${colors.dark65};
    font-size: 14px;
    text-align: center;
    &:hover {
      background: ${colors.intentBase};
    }
  `,
  activePage: css`
    display: flex;
    color: ${colors.intentBase};
    background: ${colors.intentBaseActive};
    align-items: center;
    justify-content: center;
  `,
  dropDown: css`
    margin-left: 12px;
    min-width: 120px;
  `,
  dropDownBtn: css`
    &:hover {
      background: ${colors.intentBase};
    }
  `,
};

type PaginationControlledProps = {
  page: number,
  pageSize: number,
  disableNextPageButton: boolean,
  onPageChange: (pageIndex: number) => void,
  setPageSize?: (pageSize: number) => void,
  pageSizeOptions: number[],
};

export class PaginationControlled extends React.PureComponent<PaginationControlledProps> {
  static defaultProps = {
    pageSizeOptions: [10, 20, 50, 100],
  };

  handleChangePage = (_: ?any, newPage: number) => {
    const { onPageChange, page } = this.props;

    const activePage = page + 1;

    if (newPage === activePage) {
      return;
    }

    onPageChange(newPage - 1);
  };

  handleCheckPageSize = (_: ?any, newPageSize: number) => {
    const { setPageSize, pageSize } = this.props;
    if (newPageSize === pageSize) {
      return;
    }

    setPageSize && setPageSize(newPageSize);
  };

  getDropDownItems = (): React.Node[] =>
    this.props.pageSizeOptions.map((pageSize) => (
      <DropdownItem key={pageSize} onClick={this.handleCheckPageSize} pass={pageSize}>
        {pageSize} / page
      </DropdownItem>
    ));

  render() {
    const { setPageSize, disableNextPageButton, page, pageSize } = this.props;
    const activePage = page + 1;

    return (
      <div className={styles.pagination}>
        <Button
          className={cx(styles.btn, styles.buttonArrow)}
          onClick={this.handleChangePage}
          disabled={activePage === 1}
          icon={IconChevronLeft}
          intent="plain"
          pass={activePage - 1}
        />
        <Text className={cx(styles.btn, styles.activePage)}>{activePage}</Text>
        <Button
          className={cx(styles.btn, styles.buttonArrow)}
          onClick={this.handleChangePage}
          disabled={disableNextPageButton}
          icon={IconChevronRight}
          intent="plain"
          pass={activePage + 1}
        />
        {setPageSize && (
          <Dropdown className={styles.dropDown} items={this.getDropDownItems()}>
            <Button className={styles.dropDownBtn} text={`${pageSize} / page `} iconRight={IconChevronDown} />
          </Dropdown>
        )}
      </div>
    );
  }
}
