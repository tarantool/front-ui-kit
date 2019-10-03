```js
import { css } from 'emotion';
import { Button } from '../Button';
import { Switcher } from '../Switcher';

const wrap = css`
  padding: 12px;
`;

<>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button intent='secondary' text='I understand, dont touch me again' />
      ]}
    >
      Unathorized web-panel access is open! Please consider enabling authorization (you need to create a user and login to do it).
    </NotificationSplash>
  </div>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button intent='secondary' text='Yeah' />
      ]}
      onClose={console.log}
    >
      Small content
    </NotificationSplash>
  </div>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button intent='primary' text='Agree' />,
        <Button intent='secondary' text='Discard' />,
        <Switcher>Remember</Switcher>
      ]}
    >
      A few controls
    </NotificationSplash>
  </div>
</>
```
