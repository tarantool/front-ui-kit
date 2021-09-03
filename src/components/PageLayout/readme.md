Maximum content width is 1280px. To break this limit use prop `wide`.

Also you can use `PageLayoutWithRef` to access component's root DOM element.

```jsx
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
    aboveComponent={flags.aboveComponent ? ({ className }) => <Alert className={className} type="error">Hello, I'm error!</Alert> : undefined}
    heading="Reports list"
    topLeftControls={flags.leftControls && [
      <Input key={0} rightIcon={<IconSearch />} />,
      <Button key={1} text="Info" size="l" />,
    ]}
    topRightControls={flags.rightControls && [
      <Button key={0} text="Details" size="l" />,
      <Button key={1} text="Info" size="l" />
    ]}
    wide={flags.wide}
  >
    <Text>Content</Text>
    <InputGroup>
      {[
        <Checkbox key="leftControls" onChange={toggle('leftControls')} checked={flags.leftControls}>Show controls on the left</Checkbox>,
        <Checkbox key="rightControls" onChange={toggle('rightControls')} checked={flags.rightControls}>Show controls on the right</Checkbox>,
        <Checkbox key="aboveComponent" onChange={toggle('aboveComponent')} checked={flags.aboveComponent}>Show aboveComponent</Checkbox>,
        <Checkbox key="wide" onChange={toggle('wide')} checked={flags.wide}>Use wide prop</Checkbox>,
        <Checkbox key="fullPage" onChange={toggle('fullPage')} checked={flags.fullPage}>Place on all page</Checkbox>
      ]}
    </InputGroup>
  </PageLayout>
</div>
```
