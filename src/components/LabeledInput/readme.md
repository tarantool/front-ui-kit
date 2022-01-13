Use LabeledInput to decorate single Input component.
For another cases please use InputGroup.

It's not recommended to use `topRightControls` without `largeMargins`.
To keep good looking UI, pass to `message` text which can fit at one row.

```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Button,
  colors,
  InputPassword,
  InputGroup,
  Switcher,
  TextArea
} from '@tarantool.io/ui-kit';

const styles = {
  wrap: css`
    display: flex;
    flex-direction: row-reverse;
  `,
  demoPanel: css`
    flex-grow: 1;
  `,
  controls: css`
    flex-basis: 200px;
    align-self: flex-start;
    margin-left: 30px;
  `,
};

const [value, setValue] = useState('');
const [flags, setFlags] = useState({
  info: false,
  largeMargins: false,
  preserveMessageSpace: true,
  rightControls: false,
  subtitle: false
});

const handleChange = (e) => setValue(e.target.value);
const toggle = (key) => () => setFlags({ ...flags, [key]: !flags[key] });

<div className={styles.wrap}>
  <InputGroup className={styles.controls}>
    {[
      <Switcher
        key="info"
        checked={flags.info}
        onChange={toggle('info')}
      >
        Info tooltip
      </Switcher>,
      <Switcher
        key="largeMargins"
        checked={flags.largeMargins}
        onChange={toggle('largeMargins')}
      >
        Large margins
      </Switcher>,
      <Switcher
        key="rightControls"
        checked={flags.rightControls}
        onChange={toggle('rightControls')}
      >
        Right controls
      </Switcher>,
      <Switcher
        key="preserveMessageSpace"
        checked={flags.preserveMessageSpace}
        onChange={toggle('preserveMessageSpace')}
      >
        Preserve message space
      </Switcher>,
      <Switcher
        key="subtitle"
        checked={flags.subtitle}
        onChange={toggle('subtitle')}
      >
        Subtitle
      </Switcher>,
    ]}
  </InputGroup>
  <div className={styles.demoPanel}>
    <LabeledInput
      label="Label"
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message="Field is required"
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder="Placeholder"
      topRightControls={flags.rightControls && [
        <Button key={0} text="Right" intent="secondary" />,
        <Button key={1} text="Controls" intent="secondary" />,
        <Button key={2} text="Pane" intent="secondary" />,
      ]}
      onChange={handleChange}
      title="Input"
      error
    />
    <LabeledInput
      inputComponent={InputPassword}
      label="Label"
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder="Placeholder"
      topRightControls={flags.rightControls && [
        <Button key={0} text="Right" intent="secondary" />,
        <Button key={1} text="Controls" intent="secondary" />,
        <Button key={2} text="Pane" intent="secondary" />
      ]}
      onChange={handleChange}
      title="Input"
    />
    <LabeledInput
      label="Label"
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message="Field is required"
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder="Placeholder"
      topRightControls={flags.rightControls && [
        <Button key={0} text="Right" intent="secondary" />,
        <Button key={1} text="Controls" intent="secondary" />,
        <Button key={2} text="Pane" intent="secondary" />
      ]}
      onChange={handleChange}
      title="Input"
    />
    <LabeledInput
      label="Multiline labeled input"
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message="Field is required"
      inputComponent={TextArea}
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      rows={4}
      placeholder="Placeholder"
      topRightControls={flags.rightControls && [
        <Button key={0} text="Right" intent="secondary" />,
        <Button key={1} text="Controls" intent="secondary" />,
        <Button key={2} text="Pane" intent="secondary" />
      ]}
      onChange={handleChange}
      title="Input"
    />
  </div>
</div>
```

Example with additional controls near input:
```js
import { css, cx } from '@emotion/css';
import { Button, Input } from '@tarantool.io/ui-kit';

const styles = {
  wrap: css`display: flex;`,
  btn: css`margin-left: 10px;`,
  input: css`flex-grow: 1;`
};

const ComplexInput = ({ className, ...props }) => (
  <div className={cx(styles.wrap, className)}>
    <Input className={styles.input} {...props} />
    <Button className={styles.btn} text='Go' />
  </div>
);

const handleChange = e => setState({ value: e.target.value });

<LabeledInput
  inputComponent={ComplexInput}
  label='Label'
  info='Extended text description'
  subTitle='Subtitle'
  value={state.value}
  placeholder='Placeholder'
  topRightControls={state.rightControls && [
    <Button text='Right' intent='secondary' />,
    <Button text='Contorls' intent='secondary' />,
    <Button text='Pane' intent='secondary' />
  ]}
  onChange={handleChange}
/>
```
