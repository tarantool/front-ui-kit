```js
import { Input } from '../Input';

initialState = { value: '' };

handleChange = e => setState({ value: e.target.value });

<>
  <LabeledInput
    label='Label'
    info='Info LabeledInput component'
    message='Field is required'
    error
  >
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
      error
    />
  </LabeledInput>
  <LabeledInput
    label='Label'
    subTitle='Sub title'
    message='Field is required'
  >
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
    />
  </LabeledInput>
  <LabeledInput
    label='Label'
    subTitle='Sub title'
  >
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
    />
  </LabeledInput>
</>
```
