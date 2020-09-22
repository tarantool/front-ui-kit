```js
import { Button } from '../Button';
import { Text } from '../Text';
import { RadioButton } from '../RadioButton';

initialState = { value: null };

const handleChange = value => setState({ value });

const vshard_groups = [
  { name: 'group 1' },
  { name: 'group 2' },
  { name: 'group 3' },
  { name: 'group 4' },
  { name: 'group 5' },
  { name: 'group 6' }
];

const renderRadioButtons = () => vshard_groups.map(({ name }) => (
  <RadioButton
    onChange={() => handleChange(name)}
    name='vshard_group'
    value={name}
    checked={name === state.value}
  >
    {name}
  </RadioButton>
));

<>
  <Text variant='h3'>One column</Text>
  <InputGroup>{renderRadioButtons()}</InputGroup>
  <Text variant='h3'>Two columns</Text>
  <InputGroup columns={2}>{renderRadioButtons()}</InputGroup>
  <Text variant='h3'>Three columns</Text>
  <InputGroup columns={3}>{renderRadioButtons()}</InputGroup>
</>
```
