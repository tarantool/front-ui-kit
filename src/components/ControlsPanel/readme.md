Use thin style in modals.

```js
import { Button } from '../Button';
import { Switcher } from '../Switcher';

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
