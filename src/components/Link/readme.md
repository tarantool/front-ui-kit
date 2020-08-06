By default link inherit text styles from parent node.
It's useful for inline links in text.

```js
import { Text } from '../Text';

<Text>Are you <Link href='/'>here</Link>?</Text>
```

But if you want to use standalone link without inherited styles,
you should pass `variant` prop.

```js
<>
  <Link href='/' variant='p'>Go there</Link>
  <br />
  <Link href='/' variant='code'>Go there</Link>
</>
```
