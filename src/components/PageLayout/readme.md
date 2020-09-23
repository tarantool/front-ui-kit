Maximum content width is 1280px. To break this limit use prop `wide`.

```js
import { Button } from '../Button';
import { IconSearch } from '../Icon';
import { Input } from '../Input';
import { Text } from '../Text';

<div style={{ minHeight: 200 }}>
<div style={{ position: 'absolute', left: 0, width: '100%', backgroundColor: '#eee' }}>
  <PageLayout
    heading='Cluster'
    headingContent={<Text>Heading content</Text>}
  />
  <PageLayout
    heading='Cluster'
    topRightControls={[
      <Button text='Details' size='l' />,
      <Button text='Info' size='l' />
    ]}
    wide
  />
  <PageLayout
    heading='Reports list'
    topLeftControls={[
      <Input rightIcon={<IconSearch />} />,
      <Button text='Info' size='l' />
    ]}
    wide
  />
  <PageLayout
    heading='Reports list'
    topLeftControls={[
      <Input rightIcon={<IconSearch />} />,
      <Button text='Info' size='l' />
    ]}
    topRightControls={[
      <Button text='Details' size='l' />,
      <Button text='Info' size='l' />
    ]}
    wide
  />
</div>
</div>
```
