```js
import { IconSearch } from '../Icon';

initialState = { value: 'Value' };

handleChange = e => setState({ value: e.target.value });

<>
  <Input
    value={state.value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='Input'
  />
  <Input
    value={state.value}
    placeholder={'Filter by uri, uuid, role, alias or labels'}
    onChange={handleChange}
    rightIcon={<IconSearch />}
  />
</>
```
