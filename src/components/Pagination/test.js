import React from 'react';
import renderer from 'react-test-renderer';

import { Pagination, PaginationControlled } from './index';

const changePage = () => void 0;
const setPageSize = () => void 0;

describe('Pagination', () => {
  it('render simple', () => {
    const tree = renderer.create(<Pagination page={2} pageSize={10} items={300} onPageChange={changePage} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with total', () => {
    const tree = renderer
      .create(<Pagination showTotal page={2} pageSize={10} items={300} onPageChange={changePage} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with page size changer', () => {
    const tree = renderer
      .create(<Pagination page={2} pageSize={10} items={300} onPageChange={changePage} setPageSize={setPageSize} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with page size changer and total', () => {
    const tree = renderer
      .create(
        <Pagination showTotal page={2} pageSize={10} items={300} onPageChange={changePage} setPageSize={setPageSize} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('PaginationControlled', () => {
  it('render simple', () => {
    const tree = renderer
      .create(<PaginationControlled page={2} pageSize={10} disableNextPageButton={false} onPageChange={changePage} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with page size changer', () => {
    const tree = renderer
      .create(
        <PaginationControlled
          page={2}
          pageSize={10}
          disableNextPageButton={false}
          onPageChange={changePage}
          pageSizeOptions={[10, 25, 75, 110]}
          setPageSize={setPageSize}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
