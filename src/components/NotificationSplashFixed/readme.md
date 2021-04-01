```jsx
import { useState } from 'react';
import { css } from 'emotion';
import { Button, NotificationSplashFixed, Switcher } from '@tarantool.io/ui-kit';

const [visible, setVisible] = useState(false);
const toggle = () => setVisible(!visible);

<>
  <Switcher onChange={toggle} checked={visible}>Show splash</Switcher>

  <NotificationSplashFixed
    controls={[
      <Button text='I understand, dont touch me again' />
    ]}
    onClose={toggle}
    visible={visible}
  >
    Unathorized web-panel access is open! Please consider enabling authorization (you need to create a user and login to do it).
  </NotificationSplashFixed>
</>
```
