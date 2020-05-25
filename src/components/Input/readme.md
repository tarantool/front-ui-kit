```js
import { css, cx } from 'emotion';
import { IconSearch } from '../Icon';
import {
  Text,
  withDropdown,
  DropdownItem,
  DropdownDivider,
  Button,
  Scrollbar,
  IconChevron,
} from '../../index';

initialState = { value: 'Value' };

handleChange = e => setState({ value: e.target.value });
handleClear = () => setState({ value: '' });

const handleSelect = value => setState({ value });
const handleInput = e => setState({ value: e.target.value });

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
  <div style={{ padding: '12px' }}>
    <Input
      value={state.value}
      placeholder='Placeholder'
      onChange={handleChange}
      title='Input'
    />
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
    />
  </div>

  <Text>With left-/rightElement:</Text>
  <div style={{ padding: '12px' }}>
    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      onClearClick={handleClear}
      rightIcon={<IconSearch />}
      leftElement={dropdownExample}
    />

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
