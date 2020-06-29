To keep good looking UI, pass to `message` text which can fit at one row.

```js
import { InputPassword } from '../InputPassword';
import { TextArea } from '../TextArea';
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
  <LabeledInput
    label='Multiline labeled input'
    subTitle='Sub title'
    message='Field is required'
    inputComponent={TextArea}
    value={state.value}
    rows={4}
    placeholder='Placeholder'
    onChange={handleChange}
    title='Input'
   />
</>
```
