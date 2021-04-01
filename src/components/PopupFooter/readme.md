Use PopupFooter to keep modals good-looking.

```js
import { Button, PopupFooter } from '@tarantool.io/ui-kit';

<PopupFooter
  controls={([
    <Button size='l' type='button'>Cancel</Button>,
    <Button size='l' intent='primary' type='button'>Create replica set</Button>
  ])}
>
  Children content
</PopupFooter>
```