import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { Table } from './index';

const noop = () => void 0;

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    disableSortBy: true
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    disableSortBy: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    disableSortBy: true
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    disableSortBy: true
  },
  {
    Header: 'Status',
    accessor: 'status',
    disableSortBy: true
  },
  {
    Header: 'Profile Progress',
    accessor: 'progress'
  }
];

describe('Table', () => {
  it('renders empty', () => {
    const tree = renderer.create(
      <>
        <Table columns={columns} data={[]}/>
        <Table columns={columns}/>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders simple', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated'
      },
      {
        firstName: 'hat',
        lastName: 'jelly',
        age: 7,
        visits: 56,
        progress: 67,
        status: <Button text='Refresh' size='xs'/>
      }
    ];

    const tree = renderer.create(
      <Table columns={columns} data={data}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with code row', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code1'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code2'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated'
      },
      {
        firstName: 'hat',
        lastName: 'jelly',
        age: 7,
        visits: 56,
        progress: 67,
        status: 'relationship',
        code: 'some code4'
      }
    ];

    const tree = renderer.create(
      <Table columns={columns} data={data} codeRowKey='code'/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with pagination', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code1'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code2'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated'
      },
      {
        firstName: 'hat',
        lastName: 'jelly',
        age: 7,
        visits: 56,
        progress: 67,
        status: 'relationship',
        code: 'some code4'
      }
    ];

    const tree = renderer.create(
      <Table columns={columns} data={data} codeRowKey='code' pagination/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with pagination and selected rows', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code1'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code2'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated'
      },
      {
        firstName: 'hat',
        lastName: 'jelly',
        age: 7,
        visits: 56,
        progress: 67,
        status: 'relationship',
        code: 'some code4'
      }
    ];

    const tree = renderer.create(
      <Table columns={columns} data={data} codeRowKey='code' onSelectedRowsChange={noop} pagination/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with controlled pagination and selected rows', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code1'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code2'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated'
      },
      {
        firstName: 'hat',
        lastName: 'jelly',
        age: 7,
        visits: 56,
        progress: 67,
        status: 'relationship',
        code: 'some code4'
      }
    ];

    const tree = renderer.create(
      <Table
        columns={columns}
        data={data}
        tableKey={'id'}
        codeRowKey='code'
        onSelectedRowsChange={noop}
        manualPagination={{
          page: 0,
          pageSize: 10,
          onChangePage: noop,
          onChangePageSize: noop
        }}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('renders with controlled pagination and selected rows', () => {
    const data = [
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated',
        code: 'some code1'
      },
      {
        firstName: 'spiders',
        lastName: 'profession',
        age: 15,
        visits: 55,
        progress: 66,
        status: 'complicated'
      },
      {
        firstName: 'profit',
        lastName: 'quiet',
        age: 8,
        visits: 79,
        progress: 9,
        status: 'complicated',
        date: '23.11.2020'
      }
    ];

    const tree = renderer.create(
      <Table
        columns={columns}
        data={data}
        codeRowKey='code'
        topRowKey='date'
        topRowStickySide={0}
        initialSortBy={[
          { id: 'progress', desc: false }
        ]}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
