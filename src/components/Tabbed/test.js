import React from 'react';
import renderer from 'react-test-renderer';
import { Tabbed } from './index';

it('Tabbed renders correctly', () => {
  const tree = renderer.create(
    <Tabbed
      tabs={[
        {
          label: 'Create Replica Set',
          content: 'Tab content'
        },
        {
          label: 'Another tab',
          content: 'Another tab content'
        },
        {
          label: 'Third tab',
          content: 'Third tab content'
        }
      ]}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
