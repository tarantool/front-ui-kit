```js
import { css } from 'emotion';
import { Button } from '../Button';
import { ControlsPanel } from '../ControlsPanel';
import { LabeledInput } from '../LabeledInput';
import { Input } from '../Input';

initialState = { opened: true };

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
  >
    <LabeledInput label='Your account ID'>
      <Input placeholder='Johnny Appleseed' />
    </LabeledInput>
    <LabeledInput label='Password'>
      <Input type='password' placeholder='qwertyuiop' />
    </LabeledInput>
    <ControlsPanel
      className={controlsStyle}
      thin
      controls={[
        <Button text='Close' intent='secondary' onClick={closeModal} />,
        <Button text='Log in' intent='primary' />
      ]}
    />
  </SplashModal>
</>
```
