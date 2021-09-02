Use thin style in modals.

```jsx
import { Button, ControlsPanel, Switcher } from '@tarantool.io/ui-kit';

<>
  <ControlsPanel
    controls={[
      <Button key={0} text="Rotate left" />,
      <Button key={1} text="Rotate right" />,
      <Switcher key={2} >Keep comments</Switcher>,
      <Button key={3} text="Don't rotate" />
    ]}
  />
  <ControlsPanel
    controls={[
      <Button key={0} text="Rotate left" />,
      <Button key={1} text="Rotate right" />,
      <Switcher key={2}>Keep comments</Switcher>,
      <Button key={3} text="Don't rotate" />
    ]}
    thin
  />
</>
```
