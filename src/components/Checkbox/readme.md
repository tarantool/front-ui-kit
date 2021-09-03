Checkbox example:

```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
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

const changeState = (i) => () => {
  setChecked((checked) => {
    const result = [...checked];
    result[i] = !result[i];
    return result;
  });
};

<>
  <ControlsPanel
    className={css`display: flex;`}
    controls={variants.map((props, i) => (
      <Checkbox key={i} {...props} checked={checked[i]} onChange={changeState(i)} title={`Checkbox ${i} title`}>{`Checkbox ${i}`}</Checkbox>
    ))}
  />
  <Text variant="code">{JSON.stringify(checked, null, 2)}</Text>
</>
```
