```jsx
import { useState, useMemo } from 'react';
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
  `,
};

const [darkBg, setDarkBg] = useState(false);
const [pageIndex, setPageIndex] = useState(20);
const [pageSize, setPageSize] = useState(10);

const toggleBg = () => setDarkBg((v) => !v);
const pageSizeOptions = useMemo(() => [10, 25, 75, 100], []);

<div className={cx(styles.wrapper, { [styles.bg]: darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher key={0} onChange={toggleBg} checked={darkBg}>Background</Switcher>
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
    pageSizeOptions={pageSizeOptions}
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
    pageSizeOptions={pageSizeOptions}
    setPageSize={setPageSize}
  />
</div>
```
