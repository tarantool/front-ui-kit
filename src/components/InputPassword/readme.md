```js
import { useState } from 'react';
import { css } from '@emotion/css';
import { Input, InputPassword } from '@tarantool.io/ui-kit';

const [value, setValue] = useState('Value');

const handleChange = e => setValue(e.target.value);

<div className={css`display: flex;`}>
  <InputPassword
    value={value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='InputPassword'
  />
  <InputPassword
    value={value}
    placeholder='Placeholder'
    onChange={handleChange}
    title='InputPassword'
    disabled
  />
</div>
```
