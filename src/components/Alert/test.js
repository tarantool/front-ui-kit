import React from 'react';
import renderer from 'react-test-renderer';

import { Alert } from '.';

it('error type renders correctly', () => {
  const tree = renderer.create(<Alert type="error">Error alert</Alert>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('success type renders correctly', () => {
  const tree = renderer.create(<Alert type="success">Success alert</Alert>).toJSON();

  expect(tree).toMatchSnapshot();
});
