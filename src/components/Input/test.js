import React from 'react';
import renderer from 'react-test-renderer';
import { css, cx } from '@emotion/css';

import { Button, DropdownDivider, DropdownItem, IconChevron, IconSearch, Input, withDropdown } from '../../index';

const handleChange = jest.fn();
const handleClear = jest.fn();
const handleSelect = jest.fn();

const DropdownButton = withDropdown(Button);

const getDropdownOption = (prefix) => (option) =>
  (
    <DropdownItem
      key={`${prefix}|${option}`}
      onClick={() => handleSelect(`${prefix}:` + (option.indexOf(' ') > -1 ? `"${option}"` : option))}
    >
      {option}
    </DropdownItem>
  );

const DropdownControlIcon = ({ className }) => (
  <IconChevron
    direction="down"
    className={cx(
      className,
      css`
        fill: rgba(245, 34, 45, 0.65);
      `
    )}
  />
);

const dropdownExample = (
  <DropdownButton
    items={[
      ...['Healthy', 'Unhealthy'].map(getDropdownOption('status')),
      <DropdownDivider key="DropdownDivider" />,
      ...['Stateful Connector', 'Input_processor', 'Connector', 'Scheduler', 'Storage', 'Task_runner'].map(
        getDropdownOption('role')
      ),
    ]}
    intent="secondary"
    iconRight={DropdownControlIcon}
  >
    Filter
  </DropdownButton>
);

describe('Input', () => {
  it('simple', () => {
    const tree = renderer
      .create(
        <>
          <Input value="value" placeholder="Placeholder" onChange={handleChange} title="Input" />

          <Input
            value="value"
            placeholder="Filter by uri, uuid, role, alias or labels"
            onChange={handleChange}
            rightIcon={<IconSearch />}
          />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('with left-/rightElement', () => {
    const tree = renderer
      .create(
        <>
          <Input
            value="value"
            placeholder="Filter by uri, uuid, role, alias or labels"
            onChange={handleChange}
            onClearClick={handleClear}
            rightIcon={<IconSearch />}
            leftElement={dropdownExample}
          />
          <Input
            value="value"
            placeholder="Filter by uri, uuid, role, alias or labels"
            onChange={handleChange}
            rightIcon={<IconSearch />}
            rightElement={dropdownExample}
          />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
