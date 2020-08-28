Maximum content width is 1280px. To break this limit use prop `wide`.

```js
import { Button } from '../Button';
import { Text } from '../Text';

<div style={{ minHeight: 200 }}>
<div style={{ position: 'absolute', left: 0, width: '100%', backgroundColor: '#ccc' }}>
  <PageLayout
    heading='Cluster'
    headingContent={<Text>Heading content</Text>}
  />
  <PageLayout
    heading='Cluster'
    controls={[
      <Button text='Details' />,
      <Button text='Info' />
    ]}
    wide
  />
</div>
</div>
```
