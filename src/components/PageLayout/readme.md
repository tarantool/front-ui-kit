Maximum content width is 1280px. To break this limit use prop `wide`.

```js
import { css, cx } from 'emotion';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { IconSearch } from '../Icon';
import { Input } from '../Input';
import { InputGroup } from '../InputGroup';
import { Text } from '../Text';

const initialState = {
  leftControls: false,
  rightControls: false,
  aboveComponent: false,
  wide: false,
  fullPage: false
};

const toggle = key => () => setState(state => ({ [key]: !state[key]}));

const styles = {
  wrap: css`
    position: absolute;
    left: 0;
    width: 100vw;
    background-color: #fff;
    outline: 1px solid black;
    outline-offset: -1px;
  `
};

<div className={cx({ [styles.wrap]: state.fullPage })}>
  <PageLayout
    aboveComponent={state.aboveComponent ? ({ className }) => <Alert className={className} type='error'>Hello, I'm error!</Alert> : undefined}
    heading='Reports list'
    topLeftControls={state.leftControls && [
      <Input rightIcon={<IconSearch />} />,
      <Button text='Info' size='l' />
    ]}
    topRightControls={state.rightControls &&[
      <Button text='Details' size='l' />,
      <Button text='Info' size='l' />
    ]}
    wide={state.wide}
  >
    <Text>Content</Text>
    <InputGroup>
      {[
        <Checkbox onChange={toggle('leftControls')} checked={state.leftControls}>Show controls on the left</Checkbox>,
        <Checkbox onChange={toggle('rightControls')} checked={state.rightControls}>Show controls on the right</Checkbox>,
        <Checkbox onChange={toggle('aboveComponent')} checked={state.aboveComponent}>Show aboveComponent</Checkbox>,
        <Checkbox onChange={toggle('wide')} checked={state.wide}>Use wide prop</Checkbox>,
        <Checkbox onChange={toggle('fullPage')} checked={state.fullPage}>Place on all page</Checkbox>
      ]}
    </InputGroup>
  </PageLayout>
</div>
```
