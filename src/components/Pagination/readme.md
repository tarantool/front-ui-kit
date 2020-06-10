```js
initialState = { pageIndex: 20, pageSize: 10 };

const changePage = (pageIndex) => setState({ pageIndex });
const setPageSize = (pageSize) => setState({ pageSize });
<div>
  <Pagination
    page={state.pageIndex}
    pageSize={state.pageSize}
    items={300}
    onPageChange={changePage}
    setPageSize={setPageSize}
  />
  <br />
  <br />
    
  <Pagination
   showTotal
   page={state.pageIndex}
   pageSize={state.pageSize}
   items={300}
   pageSizeOptions={[10, 25, 75, 100]}
   onPageChange={changePage}
   setPageSize={setPageSize}
  />
</div>
```
