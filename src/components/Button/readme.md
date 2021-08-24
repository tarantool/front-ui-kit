Button example:

```js
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  Button,
  ControlsPanel,
  FormField,
  IconBucket,
  IconChevron,
  Switcher,
  Text
} from '@tarantool.io/ui-kit';

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

const [buttonText, setButtonText] = useState(true);
const [darkBg, setDarkBg] = useState(false);
const [loading, setLoading] = useState(false);
const [leftIcon, setLeftIcon] = useState(false);
const [rightIcon, setRightIcon] = useState(false);

const toggleBg = () => setDarkBg(!darkBg);

const toggleText = () => {
  setButtonText(!buttonText);
  setLeftIcon(buttonText ? true : leftIcon);
};

const toggleLeftIcon = () => {
  setLeftIcon(!leftIcon);
  setButtonText(leftIcon ? true : buttonText);
};

const toggleLoading = () => setLoading(!loading);
const toggleRightIcon = () => setRightIcon(!rightIcon);

<div className={cx(styles.wrapper, { [styles.bg]: darkBg })}>
  <ControlsPanel
    controls={[
      <Switcher onChange={toggleText} checked={buttonText}>Button text</Switcher>,
      <Switcher onChange={toggleLoading} checked={loading}>Loading state</Switcher>,
      <Switcher onChange={toggleLeftIcon} checked={leftIcon}>Icon</Switcher>,
      <Switcher onChange={toggleRightIcon} checked={rightIcon}>Right icon</Switcher>,
      <Switcher onChange={toggleBg} checked={darkBg}>Background</Switcher>
    ]}
  />

  {intentions.map(intent => (
    <FormField key={intent} label={intent} verticalSort={false} columns={31}>
      {sizes.reduce(
        (acc, size) => (
          [
            ...acc,
            <Button
              key={`${size}-0`}
              icon={leftIcon && IconBucket}
              iconRight={rightIcon && DropdownControlIcon}
              intent={intent}
              loading={loading}
              size={size}
              text={buttonText && label}
              title='Click me right meow!'
            />,
            <Button
              key={`${size}-1`}
              icon={leftIcon && IconBucket}
              iconRight={rightIcon && DropdownControlIcon}
              intent={intent}
              loading={loading}
              size={size}
              text={buttonText && label}
              title='Click me right meow!'
              disabled
            />
          ]
        ),
        []
      )}
    </FormField>
  ))}
  {(leftIcon || rightIcon) && (
    <Text tag='p'>The style guide doesn't recommend to use icons in 'xs' sized buttons.</Text>
  )}
</div>
```
