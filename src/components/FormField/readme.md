```js
import { Button } from '../Button';
import { RadioButton } from '../RadioButton';

initialState = { value: null };

const handleChange = value => setState({ value });

const vshard_groups = [
  { name: 'group 1' },
  { name: 'group 2' },
  { name: 'group 3' },
  { name: 'group 4' }
];

<FormField
  label='VShard group'
  info='Extended text description'
  topRightControls={[
    <Button text='Right' />,
    <Button text='Contorls' />,
    <Button text='Pane' />
  ]}
>
  {vshard_groups && vshard_groups.map(({ name }) => (
    <RadioButton
      onChange={() => handleChange(name)}
      name='vshard_group'
      value={name}
      checked={name === state.value}
    >
      {name}
    </RadioButton>
  ))}
</FormField>
```
