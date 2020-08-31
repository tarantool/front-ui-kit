`IconHelperSortable` is designed to make it easy to use sort icons in components such as tables.

```js
import { css } from 'emotion';
import { IconHelperSortable } from './index';

const iconStyle = css`margin: 8px;`;
<>
  <IconHelperSortable className={iconStyle} sort='asc' />
  <IconHelperSortable className={iconStyle} sort='desc' />
  <IconHelperSortable className={iconStyle} />
</>
```
