```js
import { Button } from '../Button';

const columns = React.useMemo(
  () => [
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
  ],
  []
);

const data = React.useMemo(
  () => [
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
      status: <Button text='Refresh' size='xs' />
    },
  ],
  []
);

<>
  <div style={{ padding: '20px' }}>
    <Table columns={columns} />
  </div>

  <div style={{ padding: '20px' }}>
    <Table columns={columns} data={data} />
  </div>
</>
```

```js
const columns = React.useMemo(
  () => [
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
  ],
  []
);

const data = React.useMemo(
  () => [
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
      code: `Pipeline execution failed: Function \"bad_task\" in pipeline \"bad_task\":\nfunction_call_error: [string \"bad_task\"]:1: failure\nstack traceback:\n\t[string \"bad_task\"]:1: in main chunk\n\t[C]: in function 'xpcall'\n\t...\/errors.lua:148: in function 'pcall'\n\t...\/init.lua:109: in function 'call'\n\t...\/pipeline\/init.lua:21: in function 'call_function'\n\t...pipeline\/init.lua:63: in function 'run'\n\t...\/runner\/server.lua:70: in function <...\/runner\/server.lua:68>\nstack traceback:\n\t...\/pipeline\/init.lua:25: in function 'call_function'\n\t...\/pipeline\/init.lua:63: in function 'run'\n\t...\/runner\/server.lua:70: in function <...s\/runner\/server.lua:68>`
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
    },
  ],
  []
);
<div style={{ backgroundColor: '#F0F2F5', padding: '20px' }}>
  <Table
    columns={columns}
    data={data}
    codeRowKey='code'
    onCodeRowClick={r => console.log('code row clicked', r)}
  />
</div>
```

```js
const columns = React.useMemo(
  () => [
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
  ],
  []
);

const data = React.useMemo(
  () => [
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'spiders',
      lastName: 'profession',
      age: 15,
      visits: 55,
      progress: 66,
      status: 'complicated',
    },
    {
      firstName: 'profit',
      lastName: 'quiet',
      age: 8,
      visits: 79,
      progress: 9,
    },
    {
      firstName: 'hat',
      lastName: 'jelly',
      age: 7,
      visits: 56,
      progress: 67,
      status: 'relationship',
    },
  ],
  []
);
const onSelectedRowsChange = (rows) => console.log(rows);
<div style={{ backgroundColor: '#F0F2F5', padding: '20px' }}>
  <Table
    columns={columns}
    data={data}
    codeRowKey='code'
    pagination
    onSelectedRowsChange={onSelectedRowsChange}
    onRowClick={r => console.log('row clicked', r)}
  />
</div>
```

```js
const columns = React.useMemo(
  () => [
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
      accessor: 'progress',
      disableSortBy: true
    }
  ],
  []
);

const data = [
                 {
                   id: 0,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 1,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 2,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 3,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 4,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 5,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 6,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 7,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 8,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 9,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 10,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 11,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 12,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 13,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 14,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 15,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 16,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 17,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 18,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 19,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 20,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 21,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 22,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 23,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 24,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 25,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 26,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 27,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 28,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 29,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 30,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 31,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 32,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 33,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 34,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
                 {
                   id: 35,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 36,
                   firstName: 'spiders',
                   lastName: 'profession',
                   age: 15,
                   visits: 55,
                   progress: 66,
                   status: 'complicated',
                 },
                 {
                   id: 37,
                   firstName: 'profit',
                   lastName: 'quiet',
                   age: 8,
                   visits: 79,
                   progress: 9,
                 },
                 {
                   id: 38,
                   firstName: 'hat',
                   lastName: 'jelly',
                   age: 7,
                   visits: 56,
                   progress: 67,
                   status: 'relationship',
                 },
               ];
const [page, setPage] = React.useState(0);
const [pageSize, setPageSize] = React.useState(10);
const [rows, setRows] = React.useState(data.slice(0, 10));
const [loading, setLoading] = React.useState(false);

const updateData = (page, pageSize) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setRows(data.slice(page * pageSize, (page + 1) * pageSize));
  }, 1000)
}

const onChangePage = (page) => {
  setPage(page);
  updateData(page, pageSize);
}
const onChangePageSize = (pageSize) => {
  setPageSize(pageSize);
  updateData(page, pageSize);
}

const onSelectedRowsChange = (rows, rowsIds) => {
console.log('onSelectedRowsChange', rows, rowsIds)
}

<div style={{ backgroundColor: '#F0F2F5', padding: '20px' }}>
  <Table
    columns={columns}
    data={rows}
    loading={loading}
    tableKey={'id'}
    onSelectedRowsChange={onSelectedRowsChange}
    manualPagination={{ page, pageSize, onChangePage, onChangePageSize }}
  />
</div>
```
