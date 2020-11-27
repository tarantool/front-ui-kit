```js
initialState = { checked: false };

handleChange = () => setState(({ checked }) => ({ checked: !checked }));

<>
  <Switcher title='First switcher' onChange={handleChange} checked={state.checked}>Unchecked</Switcher>
  <br />
  <Switcher onChange={handleChange} checked={!state.checked}>Checked</Switcher>
  <br />
  <Switcher disabled>Disabled</Switcher>
  <br />
  <Switcher checked disabled>Checked disabled</Switcher>
  <br />
</>
```
