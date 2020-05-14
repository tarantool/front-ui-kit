```js
import { css, cx } from 'emotion';
import { IconSearch } from '../Icon';
import {
  Text,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Button,
  Scrollbar,
  IconChevron,
} from '../../index';

initialState = { value: 'Value' };

handleChange = e => setState({ value: e.target.value });

const handleSelect = value => setState({ value });
const handleInput = e => setState({ value: e.target.value });

const getDropdownOption = (prefix) => (option) => (
  <DropdownItem onClick={() => handleSelect(`${prefix}:${option.indexOf(' ') !== -1 ? `"${option}"` : option}`)}>{option}</DropdownItem>
);

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction='down'
    className={cx(className, css`fill: rgba(245, 34, 45, 0.65);`)}
  />
);

const getDropdownExample = (isRightElement = false) => (
  <Dropdown items={(
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
)}>
    <Button
      className={isRightElement ?
        css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 2.4em;
        `
        :
        css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 2.4em;
        `
      }
      intent='secondary'
      iconRight={DropdownControlIcon}
    >
      Filter
    </Button>
  </Dropdown>
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
      rightIcon={<IconSearch />}
      leftElement={getDropdownExample()}
    />

    <Input
      value={state.value}
      placeholder={'Filter by uri, uuid, role, alias or labels'}
      onChange={handleChange}
      rightIcon={<IconSearch />}
      rightElement={getDropdownExample(true)}
    />
  </div>
</>
```
