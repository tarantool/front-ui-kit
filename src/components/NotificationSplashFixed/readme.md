```js
import { css } from 'emotion';
import { Button } from '../Button';
import { Switcher } from '../Switcher';

initialState = { visible: false };

const toggle = () => setState({ visible: !state.visible });

<>
  <Switcher onChange={toggle} checked={state.visible}>Show splash</Switcher>

  <NotificationSplashFixed
    controls={[
      <Button text='I understand, dont touch me again' />
    ]}
    onClose={toggle}
    visible={state.visible}
  >
    Unathorized web-panel access is open! Please consider enabling authorization (you need to create a user and login to do it).
  </NotificationSplashFixed>
</>
```
