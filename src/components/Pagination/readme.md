```js
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  ControlsPanel,
  Switcher,
  Pagination,
  PaginationControlled
} from '@tarantool.io/ui-kit';

const styles = {
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `
};

const [darkBg, setDarkBg] = useState(false);
const [pageIndex, setPageIndex] = useState(20);
const [pageSize, setPageSize] = useState(10);

const toggleBg = () => setDarkBg(!darkBg);

<div className={cx(styles.wrapper, { [styles.bg]: darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleBg} checked={darkBg}>Background</Switcher>
    ]}
  />

  <br />
  <br />

  <Pagination
    page={pageIndex}
    pageSize={pageSize}
    items={300}
    onPageChange={setPageIndex}
    setPageSize={setPageSize}
  />

  <br />
  <br />

  <Pagination
    showTotal
    page={pageIndex}
    pageSize={pageSize}
    items={300}
    pageSizeOptions={[10, 25, 75, 100]}
    onPageChange={setPageIndex}
    setPageSize={setPageSize}
  />

  <br />
  <br />

  <Pagination
    page={pageIndex}
    pageSize={pageSize}
    items={300}
    onPageChange={setPageIndex}
  />

  <br />
  <br />

  <PaginationControlled
    page={pageIndex}
    pageSize={pageSize}
    disableNextPageButton={false}
    onPageChange={setPageIndex}
  />

  <br />
  <br />

  <PaginationControlled
    page={pageIndex}
    pageSize={pageSize}
    disableNextPageButton={false}
    onPageChange={setPageIndex}
    pageSizeOptions={[10, 25, 75, 110]}
    setPageSize={setPageSize}
  />
</div>
```
