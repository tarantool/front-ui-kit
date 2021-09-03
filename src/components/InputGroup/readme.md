```jsx
import { useState } from 'react';
import { Button, Text, RadioButton } from '@tarantool.io/ui-kit';

const [value, setValue] = useState(null);

const handleChange = (value) => setValue(value);

const vshard_groups = [
  { name: 'group 1' },
  { name: 'group 2' },
  { name: 'group 3' },
  { name: 'group 4' },
  { name: 'group 5' },
  { name: 'group 6' }
];

const buttons = vshard_groups.map(({ name }) => (
  <RadioButton
    key={name}
    onChange={() => handleChange(name)}
    name="vshard_group"
    value={name}
    checked={name === value}
  >
    {name}
  </RadioButton>
));

<>
  <Text variant="h3">One column</Text>
  <InputGroup>{buttons}</InputGroup>
  <Text variant="h3">Two columns</Text>
  <InputGroup columns={2}>{buttons}</InputGroup>
  <Text variant="h3">Three columns</Text>
  <InputGroup columns={3}>{buttons}</InputGroup>
</>
```
