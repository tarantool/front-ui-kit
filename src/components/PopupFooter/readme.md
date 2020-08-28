Use PopupFooter and PopupBody to keep modals good-looking.

```js
import { Button } from '../Button';

<PopupFooter
  controls={([
    <Button size='l' type='button'>Cancel</Button>,
    <Button size='l' intent='primary' type='button'>Create replica set</Button>
  ])}
>
  Children content
</PopupFooter>
```