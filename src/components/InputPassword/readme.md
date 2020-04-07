```js
import { css } from 'emotion';
import { Input } from '../Input';

initialState = { value: 'Value' };

handleChange = e => setState({ value: e.target.value });

<div className={css`display: flex;`}>
  <InputPassword
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='InputPassword'
  />
  <InputPassword
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='InputPassword'
    disabled
  />
</div>
```
