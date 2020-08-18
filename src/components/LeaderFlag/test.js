import React from 'react';
import renderer from 'react-test-renderer';
import { LeaderFlag } from './index';

it('LeaderFlag renders correctly', () => {
  const tree = renderer.create(
    <>
      <LeaderFlag state='good' title='Good' />
      <LeaderFlag state='bad' title='Bad' />
      <LeaderFlag state='warning' title='Bad' />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
