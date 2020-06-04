```js
import { Button } from '../Button';

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
                   status: <Button text='Refresh' size='xs' />
                 },
               ];

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
                 },
               ];
<div style={{ backgroundColor: '#F0F2F5', padding: '20px' }}>
  <Table columns={columns} data={data} codeRowKey='code' />
</div>
```
