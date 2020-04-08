```js
import { Input } from '../Input';

initialState = { value: '' };

handleChange = e => setState({ value: e.target.value });

<>
  <LabeledInput
    label={"Label"}
    info={"Info LabeledInput component"}
    errorMessage={"Field is required"}
  >
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
      error={true}
    />
  </LabeledInput>
  <LabeledInput
    label={"Label"}
    subTitle={"Sub title"}
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
