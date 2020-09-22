```js
import { css, cx } from 'emotion';
import {
  Text,
  withDropdown,
  DropdownItem,
  DropdownDivider,
  Button,
  IconChevron,
  IconSearch
} from '../../index';

initialState = { value: 'Value' };

const handleChange = e => setState({ value: e.target.value });
const handleClear = () => setState({ value: '' });
const handleSelect = value => setState({ value });

const DropdownButton = withDropdown(Button);

const getDropdownOption = (prefix) => (option) => (
  <DropdownItem onClick={() => handleSelect(`${prefix}:${option.indexOf(' ') !== -1 ? `"${option}"` : option}`)}>{option}</DropdownItem>
);

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction='down'
    className={cx(className, css`fill: rgba(245, 34, 45, 0.65);`)}
  />
);

const dropdownExample = (
  <DropdownButton
    items={[
      ...['Healthy', 'Unhealthy'].map(getDropdownOption('status')),
      <DropdownDivider />,
      ...[
        'Stateful Connector',
        'Input_processor',
        'Connector',
        'Scheduler',
        'Storage',
        'Task_runner',
      ].map(getDropdownOption('role'))
    ]}
    intent='dark'
    iconRight={DropdownControlIcon}
  >
    Filter
  </DropdownButton>
);

<>
  <div style={{ margin: '12px' }}>
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
      size='l'
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
    />
  </div>

  <div style={{ width: '250px', margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
      size='m'
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Text>With left-/rightElement:</Text>
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      onClearClick={handleClear}
      rightIcon={<IconSearch />}
      leftElement={dropdownExample}
      size='m'
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={dropdownExample}
      size='m'
    />
  </div>

  <div style={{ width: '250px', margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={dropdownExample}
      size='m'
    />
  </div>
</>
```
