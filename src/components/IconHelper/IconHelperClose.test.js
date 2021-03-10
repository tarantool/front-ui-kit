import React from 'react';
import renderer from 'react-test-renderer';
import { IconHelperClose } from './index';

it('IconHelperClose renders correctly', () => {
  const tree = renderer.create(
    <>
      <IconHelperClose />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

