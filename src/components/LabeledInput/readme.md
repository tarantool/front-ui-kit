To keep good looking UI, pass to `message` text which can fit at one row.

```js
import { InputPassword } from '../InputPassword';

initialState = { value: '' };

handleChange = e => setState({ value: e.target.value });

<>
  <LabeledInput
    label='Label'
    info='Info LabeledInput component'
    message='Field is required'
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='Input'
    error
  />
  <LabeledInput
    inputComponent={InputPassword}
    label='Label'
    subTitle='Sub title'
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='Input'
  />
  <LabeledInput
    label='Label'
    subTitle='Sub title'
    message='Field is required'
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='Input'
   />
</>
```
