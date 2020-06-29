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
