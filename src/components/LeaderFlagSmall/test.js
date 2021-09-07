import React from 'react';
import renderer from 'react-test-renderer';

import { LeaderFlagSmall } from './index';

it('LeaderFlagSmall renders correctly', () => {
  const tree = renderer.create(<LeaderFlagSmall />).toJSON();

  expect(tree).toMatchSnapshot();
});
