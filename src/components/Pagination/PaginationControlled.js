// @flow

import * as React from 'react';
import { css, cx } from 'emotion';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';
import { IconChevronLeft, IconChevronRight, IconChevronDown } from '../Icon/icons/IconChevron';

const styles = {
  pagination: css`
    display: flex;
  `,
  icon: css`
    width: 32px;
    height: 32px;
    margin: 0 4px;
    fill: rgba(0,0,0, .65);
  `,
  chevronIcon: css`
   fill: rgba(0,0,0, .65);
  `,
  button: css`
    min-width: 32px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    text-align: center;
    padding: 4px;
    margin: 0 4px;
  `,
  activePage: css`
    min-width: 32px;
    height: 32px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
    padding: 4px;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  dropDown: css`
    margin-left: 12px;
    min-width: 120px;
  `
};

const IconChevronRightBlack = () => <IconChevronRight className={styles.chevronIcon} />
const IconChevronLeftBlack = () => <IconChevronLeft className={styles.chevronIcon} />
const IconChevronDownBlack = () => <IconChevronDown className={styles.chevronIcon} />

type PaginationControlledProps = {
  page: number,
  pageSize: number,
  disableNextPageButton: boolean,
  onPageChange: (pageIndex: number) => void,
  setPageSize?: (pageSize: number) => void,
  pageSizeOptions: number[],
}

export class PaginationControlled extends React.Component<PaginationControlledProps> {
  static defaultProps = {
    pageSizeOptions: [10, 20, 50, 100]
  };

  changePage = (newPage: number) => () => {
    const { onPageChange, page } = this.props;

    const activePage = page + 1;

    if (newPage === activePage) {
      return;
    }

    onPageChange(newPage - 1);
  };

  onCheckPageSize = (newPageSize: number) => () => {
    const { setPageSize, pageSize } = this.props;
    if (newPageSize === pageSize) {

      return;
    }
    setPageSize && setPageSize(newPageSize);
  };

  getDropDownItems = (): React.Node[] => this.props.pageSizeOptions.map(pageSize => (
    <DropdownItem onClick={this.onCheckPageSize(pageSize)}>{pageSize} / page</DropdownItem>
  ));

  render() {
    const { setPageSize, disableNextPageButton, page, pageSize } = this.props;
    const activePage = page + 1;

    return (
      <div className={styles.pagination}>
        <div>
          <Button
            className={styles.button}
            onClick={this.changePage(activePage - 1)}
            disabled={activePage === 1}
            icon={IconChevronLeftBlack}
          />
        </div>
        <div className={styles.activePage}>
          {activePage}
        </div>
        <div>
          <Button
            className={styles.button}
            onClick={this.changePage(activePage + 1)}
            disabled={disableNextPageButton}
            icon={IconChevronRightBlack}
          />
        </div>
        {setPageSize && (
          <Dropdown className={styles.dropDown} items={this.getDropDownItems()}>
            <Button text={`${pageSize} / page `} iconRight={IconChevronDownBlack}/>
          </Dropdown>
        )}
      </div>
    );
  }
}
