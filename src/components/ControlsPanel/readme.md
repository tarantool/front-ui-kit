Use thin style in modals.

```js
import { Button, ControlsPanel, Switcher } from '@tarantool.io/ui-kit';

<>
  <ControlsPanel
    controls={[
      <Button text='Rotate left' />,
      <Button text='Rotate right' />,
      <Switcher>Keep comments</Switcher>,
      <Button text='Dont rotate' />
    ]}
  />
  <ControlsPanel
    controls={[
      <Button text='Rotate left' />,
      <Button text='Rotate right' />,
      <Switcher>Keep comments</Switcher>,
      <Button text='Dont rotate' />
    ]}
    thin
  />
</>
```
