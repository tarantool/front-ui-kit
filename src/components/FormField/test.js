import renderer from 'react-test-renderer';
import React from 'react';
import { Button } from '../Button';
import { FormField } from '../FormField';
import { RadioButton } from '../RadioButton';

describe('FormField', () => {
  it('renders correctly', () => {
    const handleChange = jest.fn();

    const vshard_groups = [
      { name: 'group 1' },
      { name: 'group 2' },
      { name: 'group 3' },
      { name: 'group 4' }
    ];

    const tree = renderer.create(
      <FormField
        label='VShard group'
        info='Extended text description'
        subTitle='Subtitle'
        topRightControls={[
          <Button text='Right' />,
          <Button text='Contorls' />,
          <Button text='Pane' />
        ]}
      >
        {vshard_groups && vshard_groups.map(({ name }) => (
          <RadioButton
            key={name}
            onChange={handleChange}
            name='vshard_group'
            value={name}
            checked={name === 'group 2'}
          >
            {name}
          </RadioButton>
        ))}
      </FormField>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
