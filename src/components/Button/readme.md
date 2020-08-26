Button example:

```js
import { css, cx } from 'emotion';
import {
  ControlsPanel,
  FormField,
  IconBucket,
  IconChevron,
  Switcher,
  Text
} from '../../index';

const styles = {
  bg: css`
    padding: 10px;
    background-color: #f0f2f5;
  `
};

const label = 'Button';
const sizes = ['l', 'm', 's', 'xs'];
const intentions = ['primary', 'secondary', 'base', 'plain'];

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction='down'
    className={cx(className, css`fill: rgba(245, 34, 45, 0.65);`)}
  />
);

initialState = {
  buttonText: true,
  loading: false,
  leftIcon: false,
  rightIcon: false
};

const toggleText = () => setState({
  buttonText: !state.buttonText,
  leftIcon: state.buttonText ? true : state.leftIcon
});
const toggleLeftIcon = () => setState({
  leftIcon: !state.leftIcon,
  buttonText: state.leftIcon ? true : state.buttonText
});
const toggleLoading = () => setState({ loading: !state.loading });
const toggleRightIcon = () => setState({ rightIcon: !state.rightIcon });

<div className={styles.bg}>
  <ControlsPanel
    className={styles.wrapped}
    controls={[
      <Switcher onChange={toggleText} checked={state.buttonText}>Button text</Switcher>,
      <Switcher onChange={toggleLoading} checked={state.loading}>Loading state</Switcher>,
      <Switcher onChange={toggleLeftIcon} checked={state.leftIcon}>Icon</Switcher>,
      <Switcher onChange={toggleRightIcon} checked={state.rightIcon}>Right icon</Switcher>
    ]}
  />

  {intentions.map(intent => (
    <FormField label={intent} verticalSort={false} columns={31}>
      {sizes.reduce(
        (acc, size) => (
          [
            ...acc,
            <Button
              icon={state.leftIcon && IconBucket}
              iconRight={state.rightIcon && (intent === 'primary' ? IconChevron : DropdownControlIcon)}
              intent={intent}
              loading={state.loading}
              size={size}
              text={state.buttonText && label}
              title='Click me right meow!'
            />,
            <Button
              icon={state.leftIcon && IconBucket}
              iconRight={state.rightIcon && (intent === 'primary' ? IconChevron : DropdownControlIcon)}
              intent={intent}
              loading={state.loading}
              size={size}
              text={state.buttonText && label}
              title='Click me right meow!'
              disabled
            />
          ]
        ),
        []
      )}
    </FormField>
  ))}
  {(state.leftIcon || state.rightIcon) && (
    <Text className={styles.wrapped} tag='p'>The style guide doesn't recommend to use icons in 'xs' sized buttons.</Text>
  )}
</div>
```
