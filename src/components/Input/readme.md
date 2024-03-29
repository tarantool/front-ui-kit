```jsx
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  ControlsPanel,
  DropdownItem,
  DropdownDivider,
  Button,
  IconChevron,
  IconSearch,
  Input,
  Switcher,
  Text,
  withDropdown
} from '@tarantool.io/ui-kit';

const [disabled, setDisabled] = useState(false);
const [value, setValue] = useState('Value');

const handleChange = (e) => setValue(e.target.value);
const handleClear = () => setValue('');
const handleSelect = (value) => setValue(value);
const toggleDisabled = () => setDisabled(!disabled);

const DropdownButton = withDropdown(Button);

const getDropdownOption = (prefix) => (option, index) => (
  <DropdownItem key={`ddo-${prefix}-${index}`} onClick={() => handleSelect(`${prefix}:${option.indexOf(' ') !== -1 ? `"${option}"` : option}`)}>{option}</DropdownItem>
);

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction="down"
    className={cx(className, css`fill: rgba(245, 34, 45, 0.65);`)}
  />
);

const dropdownExample = (
  <DropdownButton
    items={[
      ...['Healthy', 'Unhealthy'].map(getDropdownOption('status')),
      <DropdownDivider key="divider" />,
      ...[
        'Stateful Connector',
        'Input_processor',
        'Connector',
        'Scheduler',
        'Storage',
        'Task_runner',
      ].map(getDropdownOption('role'))
    ]}
    intent="dark"
    iconRight={DropdownControlIcon}
  >
    Filter
  </DropdownButton>
);

<>
  <ControlsPanel
    controls={[
      <Switcher key={0} checked={disabled} onChange={toggleDisabled}>Disabled</Switcher>
    ]}
  />

  <div style={{ margin: '12px' }}>
    <Input
      disabled={disabled}
      autoFocus={true}
      value={value}
      placeholder="Placeholder"
      onChange={handleChange}
      title="Input Auto Focus"
      size="l"
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      disabled={disabled}
      value={value}
      placeholder="Filter by uri, uuid, role, alias or labels"
      onChange={handleChange}
      rightIcon={<IconSearch />}
    />
  </div>

  <div style={{ width: '250px', margin: '12px' }}>
    <Input
      disabled={disabled}
      value={value}
      placeholder="Filter by uri, uuid, role, alias or labels"
      onChange={handleChange}
      rightIcon={<IconSearch />}
      size="m"
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Text>With left-/rightElement:</Text>
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      disabled={disabled}
      value={value}
      placeholder="Filter by uri, uuid, role, alias or labels"
      onChange={handleChange}
      onClearClick={handleClear}
      rightIcon={<IconSearch />}
      leftElement={dropdownExample}
      size="m"
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      disabled={disabled}
      value={value}
      placeholder="Filter by uri, uuid, role, alias or labels"
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={dropdownExample}
      size="m"
    />
  </div>

  <div style={{ width: '250px', margin: '12px' }}>
    <Input
      disabled={disabled}
      value={value}
      placeholder="Filter by uri, uuid, role, alias or labels"
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={dropdownExample}
      size="m"
    />
  </div>
</>
```
