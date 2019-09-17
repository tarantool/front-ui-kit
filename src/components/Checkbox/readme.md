Checkbox example:

```js
initialState = { checked: false };

const changeState = () => setState({ checked: !state.checked });

<>
  <Checkbox checked={state.checked} onChange={changeState}>Initial</Checkbox>
  <br />
  <Checkbox checked={!state.checked} onChange={changeState}>Checked</Checkbox>
  <br />
  <Checkbox checked={state.checked} onChange={changeState} disabled>Disabled</Checkbox>
  <br />
  <Checkbox checked={!state.checked} onChange={changeState} disabled>Checked disabled</Checkbox>
  <br />
</>
```
