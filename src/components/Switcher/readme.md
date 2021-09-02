```jsx
import { useState } from 'react';
import { Switcher } from '@tarantool.io/ui-kit';

const [checked, setChecked] = useState(false);

handleChange = () => setChecked((v) => !v);

<>
  <Switcher title="First switcher" onChange={handleChange} checked={checked}>Unchecked</Switcher>
  <br />
  <Switcher onChange={handleChange} checked={!checked}>Checked</Switcher>
  <br />
  <Switcher disabled>Disabled</Switcher>
  <br />
  <Switcher checked disabled>Checked disabled</Switcher>
  <br />
</>
```
