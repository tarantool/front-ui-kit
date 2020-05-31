Button example:

```js
import { css, cx } from 'emotion';
import { ControlsPanel, IconOk, IconChevron, Switcher, Text } from '../../index';

const wrapped = css`margin: 12px;`;
const label = 'Button';
const sizes = ['m', 's', 'xs'];
const intentions = ['primary', 'secondary', 'base', 'iconic', 'plain'];

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction='down'
    className={cx(className, css`fill: rgba(245, 34, 45, 0.65);`)}
  />
);

initialState = {
  loading: false,
  leftIcon: false,
  rightIcon: false
};

const toggleLoading = () => setState({ loading: !state.loading });
const toggleLeftIcon = () => setState({ leftIcon: !state.leftIcon });
const toggleRightIcon = () => setState({ rightIcon: !state.rightIcon });

<>
  <ControlsPanel
    className={wrapped}
    controls={[
      <Switcher onChange={toggleLoading} checked={state.loading}>Loading state</Switcher>,
      <Switcher onChange={toggleLeftIcon} checked={state.leftIcon}>Left icon</Switcher>,
      <Switcher onChange={toggleRightIcon} checked={state.rightIcon}>Right icon</Switcher>
    ]}
  />

  {sizes.map(size => (
    <div>
      {intentions.map(intent => (
        <Button
          className={wrapped}
          icon={state.leftIcon && IconOk}
          iconRight={state.rightIcon && (intent === 'primary' ? IconChevron : DropdownControlIcon)}
          intent={intent}
          loading={state.loading}
          size={size}
          text={label}
          title='Click me right meow!'
        />
      ))}
      <Button
        className={wrapped}
        disabled
        icon={state.leftIcon && IconOk}
        iconRight={state.rightIcon && DropdownControlIcon}
        loading={state.loading}
        size={size}
        text={label}
        title='Click me right meow!'
      />
    </div>
  ))}
  {(state.leftIcon || state.rightIcon) && (
    <Text className={wrapped} tag='p'>The style guide doesn't recommend to use icons in 'xs' sized buttons.</Text>
  )}
</>
```
