```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Button,
  ControlsPanel,
  InputPassword,
  LabeledInput,
  SplashModal,
  TarantoolLogoFull
} from '@tarantool.io/ui-kit';

const [opened, setOpened] = useState(false);

const openModal = () => setOpened(true);
const closeModal = () => setOpened(false);

const controlsStyle = css`justify-content: flex-end;`;

<>
  <Button onClick={openModal} text="Open SplashModal" />
  <SplashModal
    visible={opened}
    title="Authorization"
    subTitle="Please, input your credentials"
    onClose={closeModal}
    logo={TarantoolLogoFull}
  >
  <LabeledInput
    label="Your account ID"
    placeholder="Johnny Appleseed"
   />
  <LabeledInput
    label="Password"
    inputComponent={InputPassword}
    placeholder="Password"
   />
    <ControlsPanel
      className={controlsStyle}
      thin
      controls={[
        <Button key="close" text="Close" size="l" onClick={closeModal} />,
        <Button key="login" text="Log in" size="l" intent="primary" />,
      ]}
    />
  </SplashModal>
</>
```
