```jsx
import { css } from 'emotion';

const wrap = css`
  margin: 16px;
`;

initialState = { value: '' };

updateState = e => setState({ value: e.target.value });

<>
  <TextArea placeholder='Type here' className={wrap} onChange={updateState} value={state.value} />
  <TextArea placeholder='Type here' className={wrap} onChange={updateState} value={state.value} disabled />
  <TextArea placeholder='Type here' className={wrap} onChange={updateState} value={state.value} error />
  <TextArea placeholder='Type here' className={wrap} onChange={updateState} value={state.value} rows={5} />
</>
```
