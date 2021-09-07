import React from 'react';
import renderer from 'react-test-renderer';

import { UploadZone } from './index';

const handler = jest.fn();

it('UploadZone renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <UploadZone handler={handler} />
        <UploadZone handler={handler} title="Main title" subTitle="Second title" />
      </>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
