By default link inherit text styles from parent node.
It's useful for inline links in text.

```jsx
import { css } from '@emotion/css';
import { Link, Text } from '@tarantool.io/ui-kit';

const customTextStyle = css`
  color: darkblue;
`;

<>
  <Text tag="p" variant="h3">
    Are you <Link href="/">here</Link>?
  </Text>
  <Text tag="p" variant="p">
    For adding new zone, please go to <Link href="/">Code</Link>
  </Text>
  <Text tag="p">
    For adding new zone, please go to <Link href="/">Code</Link>
  </Text>
  <Text tag="p" className={customTextStyle}>
    For adding new zone, please go to <Link href="/">Code</Link>
  </Text>
</>
```

But if you want to use standalone link without inherited styles,
you should pass `variant` prop.

```jsx
<>
  <Link href="/" variant="p">Go there</Link>
  <br />
  <Link href="/" variant="code">Go there</Link>
</>
```
