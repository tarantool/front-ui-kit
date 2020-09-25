It's not recommended to use `topRightControls` without `largeMargins`.
To keep good looking UI, pass to `message` text which can fit at one row.

```js
import { css } from 'emotion';
import { Button } from '../Button';
import { InputPassword } from '../InputPassword';
import { TextArea } from '../TextArea';
import { InputGroup } from '../InputGroup';
import { Switcher } from '../Switcher';
import { colors } from '../../variables';

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
  preserveMessageSpace: true,
  rightControls: false,
  subtitle: false,
  value: ''
};

const handleChange = e => setState({ value: e.target.value });
const toggle = key => () => setState(state => ({ [key]: !state[key] }));

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
        checked={state.preserveMessageSpace}
        onChange={toggle('preserveMessageSpace')}
      >
        Preserve message space
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
    <LabeledInput
      label='Label'
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      message='Field is required'
      preserveMessageSpace={state.preserveMessageSpace}
      value={state.value}
      largeMargins={state.largeMargins}
      placeholder='Placeholder'
      topRightControls={state.rightControls && [
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
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      preserveMessageSpace={state.preserveMessageSpace}
      value={state.value}
      largeMargins={state.largeMargins}
      placeholder='Placeholder'
      topRightControls={state.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
    />
    <LabeledInput
      label='Label'
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      message='Field is required'
      preserveMessageSpace={state.preserveMessageSpace}
      value={state.value}
      largeMargins={state.largeMargins}
      placeholder='Placeholder'
      topRightControls={state.rightControls && [
        <Button text='Right' intent='secondary' />,
        <Button text='Contorls' intent='secondary' />,
        <Button text='Pane' intent='secondary' />
      ]}
      onChange={handleChange}
      title='Input'
    />
    <LabeledInput
      label='Multiline labeled input'
      info={state.info && 'Extended text description'}
      subTitle={state.subtitle && 'Subtitle'}
      message='Field is required'
      inputComponent={TextArea}
      preserveMessageSpace={state.preserveMessageSpace}
      value={state.value}
      largeMargins={state.largeMargins}
      rows={4}
      placeholder='Placeholder'
      topRightControls={state.rightControls && [
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
