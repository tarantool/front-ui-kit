Checkbox example:

```js
import { css } from 'emotion';
import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';

const variants = [
  { indeterminate: true, disabled: false },
  { indeterminate: false, disabled: false },
  { indeterminate: false, disabled: false },
  { indeterminate: true, disabled: true },
  { indeterminate: false, disabled: true },
  { indeterminate: false, disabled: true }
];

initialState = { checked: [false, true, false, false, true, false] };

const changeState = i => () => setState(({ checked }) => {
  checked[i] = !checked[i];
  return { checked: [...checked] };
});

<>
<ControlsPanel
  className={css`display: flex;`}
  controls={variants.map((props, i) => (
    <Checkbox {...props} checked={state.checked[i]} onChange={changeState(i)} title={`Checkbox ${i} title`}>{`Checkbox ${i}`}</Checkbox>
  ))}
/>
<Text variant='code'>{JSON.stringify(state, null, 2)}</Text>
</>
```
