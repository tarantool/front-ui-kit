Maximum content width is 1280px. To break this limit use prop `wide`.

```js
import { Button } from '../Button';

<div style={{ minHeight: 200 }}>
<div style={{ position: 'absolute', left: 0, width: '100%', backgroundColor: '#ccc' }}>
  <PageLayout
    heading='Cluster'
    headingContent={<Button text='Details' />}
  />
  <PageLayout
    heading='Cluster'
    headingContent={<Button text='Details' />}
    wide
  />
</div>
</div>
```
