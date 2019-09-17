Use PopupFooter and PopupBody to keep modals good-looking.

```js
import { Button } from '../Button';

<PopupFooter
  controls={([
    <Button type='button'>Cancel</Button>,
    <Button intent='primary' type='button'>Create replica set</Button>
  ])}
>
  Children content
</PopupFooter>
```