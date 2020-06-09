```js
initialState = { pageIndex: 20, pageSize: 10 };

const changePage = (pageIndex) => setState({ pageIndex });
const setPageSize = (pageSize) => setState({ pageSize });

<Pagination
 page={state.pageIndex}
 pageSize={state.pageSize}
 items={30}
 onPageChange={changePage}
 setPageSize={setPageSize}
 />
```
