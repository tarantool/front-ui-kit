```js
import { Checkbox } from '../Checkbox';

initialState = { spin: false };

const changeState = () => setState({ spin: !state.spin });

<>
  <Checkbox checked={state.spin} onChange={changeState}>spin</Checkbox>
  <div style={{ height: 200 }}>
    <Spin enable={state.spin}>
      Spin content
    </Spin>
  </div>
</>
```