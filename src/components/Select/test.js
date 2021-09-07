import React from 'react';
import renderer from 'react-test-renderer';

import { Select } from './index';

const noop = () => void 0;

describe('Select', () => {
  it('Render empty', () => {
    const tree = renderer
      .create(
        <>
          <Select options={[]} value={undefined} onChange={noop} />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Render with data', () => {
    const tree = renderer
      .create(
        <>
          <Select options={[{ label: 'Male', value: 'male' }]} value={'male'} onChange={noop} />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Render with data and allow search', () => {
    const tree = renderer
      .create(
        <>
          <Select options={[{ label: 'Male', value: 'male' }]} value={'male'} onChange={noop} allowSearch />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
