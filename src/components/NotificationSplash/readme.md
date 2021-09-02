```jsx
import { css } from '@emotion/css';
import { Button, NotificationSplash, Switcher } from '@tarantool.io/ui-kit';

const wrap = css`
  padding: 12px;
`;

<>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button key={0} text="I understand, don't touch me again" />
      ]}
    >
      Unauthorized web-panel access is open! Please consider enabling authorization (you need to create a user and login to do it).
    </NotificationSplash>
  </div>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button key={0} text="Yeah" />
      ]}
      onClose={console.log}
    >
      Small content
    </NotificationSplash>
  </div>
  <div className={wrap}>
    <NotificationSplash
      controls={[
        <Button key={0} intent="primary" text="Agree" />,
        <Button key={1} text="Discard" />,
        <Switcher key={2}>Remember</Switcher>,
      ]}
    >
      A few controls
    </NotificationSplash>
  </div>
</>
```
