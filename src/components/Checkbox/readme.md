Checkbox example:

```js
import { useState } from 'react';
import { css } from 'emotion';
import { Checkbox, ControlsPanel, Text } from '@tarantool.io/ui-kit';

const variants = [
  { indeterminate: true, disabled: false },
  { indeterminate: false, disabled: false },
  { indeterminate: false, disabled: false },
  { indeterminate: true, disabled: true },
  { indeterminate: false, disabled: true },
  { indeterminate: false, disabled: true }
];

const [checked, setChecked] = useState([false, true, false, false, true, false]);

const changeState = i => () => {
  checked[i] = !checked[i];
  setChecked([...checked]);
};

<>
  <ControlsPanel
    className={css`display: flex;`}
    controls={variants.map((props, i) => (
      <Checkbox {...props} checked={checked[i]} onChange={changeState(i)} title={`Checkbox ${i} title`}>{`Checkbox ${i}`}</Checkbox>
    ))}
  />
  <Text variant='code'>{JSON.stringify(checked, null, 2)}</Text>
</>
```
