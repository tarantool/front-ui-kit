Deprecated component. It's not recommended to use.

```jsx
import { useState } from 'react';
import { Checkbox, Spin } from '@tarantool.io/ui-kit';

const [spin, setSpin] = useState(false);

const changeState = () => setSpin(v => !v);

<>
  <Checkbox checked={spin} onChange={changeState}>spin</Checkbox>
  <div style={{ height: 200 }}>
    <Spin enable={spin}>
      Spin content
    </Spin>
  </div>
</>
```