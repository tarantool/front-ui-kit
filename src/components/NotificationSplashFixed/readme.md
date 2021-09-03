```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
import { Button, NotificationSplashFixed, Switcher } from '@tarantool.io/ui-kit';

const [visible, setVisible] = useState(false);
const toggle = () => setVisible(!visible);

<>
  <Switcher onChange={toggle} checked={visible}>Show splash</Switcher>

  <NotificationSplashFixed
    controls={[
      <Button key={0} text="I understand, don't touch me again" />
    ]}
    onClose={toggle}
    visible={visible}
  >
    Unauthorized web-panel access is open! Please consider enabling authorization (you need to create a user and login to do it).
  </NotificationSplashFixed>
</>
```
