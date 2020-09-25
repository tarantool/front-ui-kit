It's not recommended to use `topRightControls` without `largeMargins`.

```js
import { css } from 'emotion';
import { Button } from '../Button';
import { InputGroup } from '../InputGroup';
import { RadioButton } from '../RadioButton';
import { Switcher } from '../Switcher';

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

initialState = {
  info: false,
  largeMargins: false,
  rightControls: false,
  subtitle: false,
  value: null
};

const handleChange = value => setState({ value });
const toggle = key => () => setState(state => ({ [key]: !state[key] }));

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
        checked={state.info}
        onChange={toggle('info')}
      >
        Info tooltip
      </Switcher>,
      <Switcher
        checked={state.largeMargins}
        onChange={toggle('largeMargins')}
      >
        Large margins
      </Switcher>,
      <Switcher
        checked={state.rightControls}
        onChange={toggle('rightControls')}
      >
        Right controls
      </Switcher>,
      <Switcher
        checked={state.subtitle}
        onChange={toggle('subtitle')}
      >
        Subtitle
      </Switcher>
    ]}
  </InputGroup>
  <div className={styles.demoPanel}>
    <FormField
      label='VShard group'
      largeMargins={state.largeMargins}
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      topRightControls={state.rightControls && [
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
          checked={name === state.value}
        >
          {name}
        </RadioButton>
      ))}
    </FormField>

    <FormField
      label='VShard group'
      largeMargins={state.largeMargins}
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      topRightControls={state.rightControls && [
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
          checked={name === state.value}
        >
          {name}
        </RadioButton>
      ))}
    </FormField>
  </div>
</div>
```
