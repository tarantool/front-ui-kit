import React from 'react';
import renderer from 'react-test-renderer';
import { Pagination } from './index';


const changePage = () => {};
const setPageSize = () => {};

describe('Pagination', () => {
  it('render simple', () => {
    const tree = renderer.create(
      <Pagination
        page={2}
        pageSize={10}
        items={300}
        onPageChange={changePage}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with total', () => {
    const tree = renderer.create(
      <Pagination
        showTotal
        page={2}
        pageSize={10}
        items={300}
        onPageChange={changePage}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with page size changer', () => {

    const tree = renderer.create(
      <Pagination
        page={2}
        pageSize={10}
        items={300}
        onPageChange={changePage}
        setPageSize={setPageSize}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with page size changer and total', () => {

    const tree = renderer.create(
      <Pagination
        showTotal
        page={2}
        pageSize={10}
        items={300}
        onPageChange={changePage}
        setPageSize={setPageSize}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
