Maximum content width is 1280px. To break this limit use prop `wide`.

Also you can use `PageLayoutWithRef` to access component's root DOM element.

```js
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  Alert,
  Button,
  Checkbox,
  IconSearch,
  Input,
  InputGroup,
  PageLayout,
  Text
} from '@tarantool.io/ui-kit';

const [flags, setFlags] = useState({
  leftControls: false,
  rightControls: false,
  aboveComponent: false,
  wide: false,
  fullPage: false
});

const toggle = key => () => setFlags({ ...flags, [key]: !flags[key] });

const styles = {
  wrap: css`
    position: absolute;
    left: 0;
    width: 100vw;
    background-color: #fff;
    outline: 1px solid black;
    outline-offset: -1px;
    z-index: 1;
  `
};

<div className={cx({ [styles.wrap]: flags.fullPage })}>
  <PageLayout
    aboveComponent={flags.aboveComponent ? ({ className }) => <Alert className={className} type='error'>Hello, I'm error!</Alert> : undefined}
    heading='Reports list'
    topLeftControls={flags.leftControls && [
      <Input rightIcon={<IconSearch />} />,
      <Button text='Info' size='l' />
    ]}
    topRightControls={flags.rightControls &&[
      <Button text='Details' size='l' />,
      <Button text='Info' size='l' />
    ]}
    wide={flags.wide}
  >
    <Text>Content</Text>
    <InputGroup>
      {[
        <Checkbox onChange={toggle('leftControls')} checked={flags.leftControls}>Show controls on the left</Checkbox>,
        <Checkbox onChange={toggle('rightControls')} checked={flags.rightControls}>Show controls on the right</Checkbox>,
        <Checkbox onChange={toggle('aboveComponent')} checked={flags.aboveComponent}>Show aboveComponent</Checkbox>,
        <Checkbox onChange={toggle('wide')} checked={flags.wide}>Use wide prop</Checkbox>,
        <Checkbox onChange={toggle('fullPage')} checked={flags.fullPage}>Place on all page</Checkbox>
      ]}
    </InputGroup>
  </PageLayout>
</div>
```
