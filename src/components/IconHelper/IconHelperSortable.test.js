import React from 'react';
import renderer from 'react-test-renderer';
import { IconHelperSortable } from './index';

it('IconHelperSortable renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <IconHelperSortable sort="asc" />
        <IconHelperSortable sort="desc" />
        <IconHelperSortable />
      </>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
