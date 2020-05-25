```js
import { css, cx } from 'emotion';
import {
  Text,
  withDropdown,
  DropdownItem,
  DropdownDivider,
  Button,
  Scrollbar,
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
    items={(
      <Scrollbar className={css`height: 200px; width: 10em;`}>
        {
          [
            'Healthy',
            'Unhealthy',
          ].map(getDropdownOption('status'))
        }
        <DropdownDivider />
        {
          [
            'Stateful Connector',
            'Input_processor',
            'Connector',
            'Scheduler',
            'Storage',
            'Task_runner',
          ].map(getDropdownOption('role'))
        }
      </Scrollbar>
    )}
    intent='secondary'
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
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={dropdownExample}
    />
  </div>
</>
```
