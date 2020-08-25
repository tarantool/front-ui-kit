```js
import { css } from 'emotion';
import { Button } from '../Button';
import { ControlsPanel } from '../ControlsPanel';
import { LabeledInput } from '../LabeledInput';
import { InputPassword } from '../InputPassword';
import logo from './images/logo_full.svg';

initialState = { opened: false };

const openModal = () => setState({ opened: true });
const closeModal = () => setState({ opened: false });

const controlsStyle = css`justify-content: flex-end;`;


<>
  <Button onClick={openModal} text='Open SplashModal' />
  <SplashModal
    visible={state.opened}
    title='Authorization'
    subTitle='Please, input your credentials'
    onClose={closeModal}
    logo={logo}
  >
  <LabeledInput
    label='Your account ID'
    placeholder='Johnny Appleseed'
   />
  <LabeledInput
    label='Password'
    inputComponent={InputPassword}
    placeholder='Password'
   />
    <ControlsPanel
      className={controlsStyle}
      thin
      controls={[
        <Button text='Close' intent='base' size='l' onClick={closeModal} />,
        <Button text='Log in' intent='primary' size='l' />
      ]}
    />
  </SplashModal>
</>
```
