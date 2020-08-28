```js
import { css, cx } from 'emotion';
import { ControlsPanel, Switcher } from '../../index';
import { PaginationControlled } from './PaginationControlled';

const styles = {
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `
};

initialState = { darkBg: false, pageIndex: 20, pageSize: 10 };

const toggleBg = () => setState({ darkBg: !state.darkBg });
const changePage = (pageIndex) => setState({ pageIndex });
const setPageSize = (pageSize) => setState({ pageSize });

<div className={cx(styles.wrapper, { [styles.bg]: state.darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleBg} checked={state.darkBg}>Background</Switcher>
    ]}
  />

  <br />
  <br />

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

  <br />
  <br />

  <Pagination
    page={state.pageIndex}
    pageSize={state.pageSize}
    items={300}
    onPageChange={changePage}
  />

  <br />
  <br />

  <PaginationControlled
    page={state.pageIndex}
    pageSize={state.pageSize}
    disableNextPageButton={false}
    onPageChange={changePage}
  />

  <br />
  <br />

  <PaginationControlled
    page={state.pageIndex}
    pageSize={state.pageSize}
    disableNextPageButton={false}
    onPageChange={changePage}
    pageSizeOptions={[10, 25, 75, 110]}
    setPageSize={setPageSize}
  />
</div>
```
