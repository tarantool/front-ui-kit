// @flow

import * as React from 'react';
import { css, cx } from 'emotion';
import { Button } from '../Button';
import { Text } from '../Text';
import { Dropdown, DropdownItem } from '../Dropdown';
import { colors } from '../../variables';
import { IconChevronLeft, IconChevronRight, IconChevronDown } from '../Icon/icons/IconChevron';

const styles = {
  pagination: css`
    display: flex;
  `,
  countItemsText: css`
    display: flex;
    align-items: center;
    margin-right: 12px;
    color: ${colors.dark65};
  `,
  icon: css`
    width: 16px;
    height: 16px;
    margin: 8px 8px;
    fill: ${colors.dark65};
  `,
  chevronIcon: css`
   fill: ${colors.dark65};
  `,
  button: css`
    min-width: 32px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid ${colors.intentBase};
    box-sizing: border-box;
    border-radius: 4px;
    color: ${colors.dark65};
    font-size: 14px;
    text-align: center;
    padding: 4px;
    margin: 0 4px;
    &:focus,
    &:hover {
      background: ${colors.intentBase};
    }
  `,
  buttonActive: css`
    color: #fff;
    border: 1px solid ${colors.dark40};
    background: ${colors.dark40};
    &:focus,
    &:hover {
      border: 1px solid ${colors.dark40};
      background: ${colors.dark40};
    }
  `,
  dropDown: css`
    margin-left: 12px;
    min-width: 120px;
  `
};

const IconChevronRightBlack = () => <IconChevronRight className={styles.chevronIcon} />
const IconChevronLeftBlack = () => <IconChevronLeft className={styles.chevronIcon} />
const IconChevronDownBlack = () => <IconChevronDown className={styles.chevronIcon} />

type PaginationProps = {
  items: number,
  page: number,
  onPageChange: (pageIndex: number) => void,
  pageSize: number,
  setPageSize?: (pageSize: number) => void,
  pageSizeOptions: number[],
  showTotal: boolean,
}

type PaginationState = {
  visiblePages: number[],
}

export class Pagination extends React.Component<PaginationProps, PaginationState> {
  static defaultProps = {
    pageSizeOptions: [10, 20, 50, 100]
  };

  constructor(props: PaginationProps) {
    super(props);
    const { page, items } = props;
    this.state = {
      visiblePages: this.getVisiblePages(page + 1, items)
    };
    const totalPages = this.getPages(items);
    if (page >= totalPages) {
      this.changePage(totalPages)();
    }
  }

  componentDidUpdate(prevProps: PaginationProps) {
    const { page, items, pageSize } = this.props;
    if (prevProps.items !== items || prevProps.pageSize !== pageSize ) {
      this.setState({
        visiblePages: this.getVisiblePages(page, items)
      });
    }

    const totalPages = this.getPages(items);
    if (page >= totalPages) {
      this.changePage(totalPages)();
    }
  }

  filterPages = (visiblePages: number[], items: number): number[] => {
    const totalPages = this.getPages(items);
    return visiblePages.filter((page: number) => page <= totalPages);
  };

  getVisiblePages = (page: number, items: number): number[] => {
    const total = this.getPages(items);
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], items);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 2, page - 1, page, page + 1, page + 2, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  changePage = (newPage: number) => () => {
    const { page, items } = this.props;

    const activePage = page + 1;

    if (newPage === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(newPage, items);

    this.setState({
      visiblePages: this.filterPages(visiblePages, items)
    });

    this.props.onPageChange(newPage - 1);
  };

  getPages = (items: number) => {
    const { pageSize } = this.props;

    return Math.ceil(items / pageSize);
  };

  onCheckPageSize = (pageSize: number) => () => {
    const { setPageSize } = this.props;
    setPageSize && setPageSize(pageSize);
  };

  getDropDownItems = (): React.Node[] => this.props.pageSizeOptions.map(pageSize => (
    <DropdownItem onClick={this.onCheckPageSize(pageSize)}>{pageSize} / page</DropdownItem>
  ));

  render() {
    const {
      page, items, setPageSize, pageSize, showTotal
    } = this.props;
    const { visiblePages } = this.state;
    const activePage = page + 1;

    return (
      <div className={styles.pagination}>
        {showTotal && <Text className={styles.countItemsText} tag='div'>
          {page * pageSize + 1}-{activePage * pageSize > items ? items : activePage * pageSize} of {items} items
        </Text>}
        <div>
          <Button
            className={styles.button}
            onClick={this.changePage(activePage - 1)}
            disabled={activePage === 1}
            icon={IconChevronLeftBlack}
            intent='plain'
          />
        </div>
        <div>
          {visiblePages.map((visiblePage, index, array) => {
            const needElipsis = array[index - 1] + 1 < visiblePage;
            return (
              <React.Fragment key={visiblePage}>
                {needElipsis && (
                  <Button
                    className={cx(styles.button)}
                    intent='plain'
                    onClick={this.changePage(array[index - 1] < activePage ? activePage - 5 : activePage + 5 )}
                  >
                    ...
                  </Button>
                )}
                <Button
                  className={cx(styles.button,  { [styles.buttonActive]: activePage === visiblePage })}
                  intent='plain'
                  onClick={this.changePage(visiblePage)}
                >
                  {visiblePage}
                </Button>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <Button
            className={styles.button}
            onClick={this.changePage(activePage + 1)}
            disabled={activePage === this.getPages(items)}
            icon={IconChevronRightBlack}
            intent='plain'
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
