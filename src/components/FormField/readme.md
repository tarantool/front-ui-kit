It's not recommended to use `topRightControls` without `largeMargins`.

```js
import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Button,
  InputGroup,
  RadioButton,
  Switcher
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

const [value, setValue] = useState(null);

const [flags, setFlags] = useState({
  info: false,
  largeMargins: false,
  rightControls: false,
  subtitle: false,
});

const handleChange = value => setValue(value);
const toggle = key => () => setFlags({ ...flags, [key]: !flags[key] });

const vshard_groups = [
  { name: 'group 1' },
  { name: 'group 2' },
  { name: 'group 3' },
  { name: 'group 4' }
];

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
        checked={flags.subtitle}
        onChange={toggle('subtitle')}
      >
        Subtitle
      </Switcher>
    ]}
  </InputGroup>
  <div className={styles.demoPanel}>
    <FormField
      label='VShard group'
      largeMargins={flags.largeMargins}
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
    >
      {vshard_groups && vshard_groups.map(({ name }) => (
        <RadioButton
          onChange={() => handleChange(name)}
          name='vshard_group'
          value={name}
          checked={name === value}
        >
          {name}
        </RadioButton>
      ))}
    </FormField>

    <FormField
      label='VShard group'
      largeMargins={flags.largeMargins}
      info={flags.info && 'Extended text description'}
      subTitle={flags.subtitle && 'Subtitle'}
      topRightControls={flags.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
    >
      {vshard_groups && vshard_groups.map(({ name }) => (
        <RadioButton
          onChange={() => handleChange(name)}
          name='vshard_group'
          value={name}
          checked={name === value}
        >
          {name}
        </RadioButton>
      ))}
    </FormField>
  </div>
</div>
```
