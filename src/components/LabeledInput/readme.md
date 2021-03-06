It's not recommended to use `topRightControls` without `largeMargins`.
To keep good looking UI, pass to `message` text which can fit at one row.

```js
import { useState } from 'react';
import { css } from 'emotion';
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
  `
};

const [value, setValue] = useState('');
const [flags, setFlags] = useState({
  info: false,
  largeMargins: false,
  preserveMessageSpace: true,
  rightControls: false,
  subtitle: false
});

const handleChange = e => setValue(e.target.value);
const toggle = key => () => setFlags({ ...flags, [key]: !flags[key] });

<div className={styles.wrap}>
  <InputGroup className={styles.controls}>
    {[
      <Switcher
        checked={flags.info}
        onChange={toggle('info')}
      >
        Info tooltip
      </Switcher>,
      <Switcher
        checked={flags.largeMargins}
        onChange={toggle('largeMargins')}
      >
        Large margins
      </Switcher>,
      <Switcher
        checked={flags.rightControls}
        onChange={toggle('rightControls')}
      >
        Right controls
      </Switcher>,
      <Switcher
        checked={flags.preserveMessageSpace}
        onChange={toggle('preserveMessageSpace')}
      >
        Preserve message space
      </Switcher>,
      <Switcher
        checked={flags.subtitle}
        onChange={toggle('subtitle')}
      >
        Subtitle
      </Switcher>
    ]}
  </InputGroup>
  <div className={styles.demoPanel}>
    <LabeledInput
      label='Label'
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message='Field is required'
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder='Placeholder'
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
      error
    />
    <LabeledInput
      inputComponent={InputPassword}
      label='Label'
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder='Placeholder'
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
    />
    <LabeledInput
      label='Label'
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message='Field is required'
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      placeholder='Placeholder'
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
    />
    <LabeledInput
      label='Multiline labeled input'
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      message='Field is required'
      inputComponent={TextArea}
      preserveMessageSpace={flags.preserveMessageSpace}
      value={value}
      largeMargins={flags.largeMargins}
      rows={4}
      placeholder='Placeholder'
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
    />
  </div>
</div>
```
