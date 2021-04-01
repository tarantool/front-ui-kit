`IconHelperClose` adds styles to CloseIcon which used in some places in kit.

```jsx
import { css } from 'emotion';
import { IconHelperClose } from '@tarantool.io/ui-kit';

const iconStyle = css`margin: 8px;`;

<>
  <IconHelperClose className={iconStyle} />
</>
```

`IconHelperSortable` is designed to make it easy to use sort icons in components such as tables.

```jsx
import { css } from 'emotion';
import { IconHelperSortable } from '@tarantool.io/ui-kit';

const iconStyle = css`margin: 8px;`;

<>
  <IconHelperSortable className={iconStyle} sort='asc' />
  <IconHelperSortable className={iconStyle} sort='desc' />
  <IconHelperSortable className={iconStyle} />
</>
```
