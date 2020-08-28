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
  wrapper: css`
    padding: 10px;
  `,
  bg: css`
    background-color: #f0f2f5;
  `
};

const label = 'Button';
const sizes = ['l', 'm', 's', 'xs'];
const intentions = ['primary', 'secondary', 'base', 'plain', 'dark'];

const DropdownControlIcon = props => <IconChevron direction='down' {...props} />;

initialState = {
  buttonText: true,
  darkBg: false,
  loading: false,
  leftIcon: false,
  rightIcon: false
};

const toggleBg = () => setState({ darkBg: !state.darkBg });
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

<div className={cx(styles.wrapper, { [styles.bg]: state.darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleText} checked={state.buttonText}>Button text</Switcher>,
      <Switcher onChange={toggleLoading} checked={state.loading}>Loading state</Switcher>,
      <Switcher onChange={toggleLeftIcon} checked={state.leftIcon}>Icon</Switcher>,
      <Switcher onChange={toggleRightIcon} checked={state.rightIcon}>Right icon</Switcher>,
      <Switcher onChange={toggleBg} checked={state.darkBg}>Background</Switcher>
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
              iconRight={state.rightIcon && DropdownControlIcon}
              intent={intent}
              loading={state.loading}
              size={size}
              text={state.buttonText && label}
              title='Click me right meow!'
            />,
            <Button
              icon={state.leftIcon && IconBucket}
              iconRight={state.rightIcon && DropdownControlIcon}
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
    <Text tag='p'>The style guide doesn't recommend to use icons in 'xs' sized buttons.</Text>
  )}
</div>
```
