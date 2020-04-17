import React from 'react';
import renderer from 'react-test-renderer';
import { Checkbox } from './index';

it('Checkbox renders correctly', () => {
  const changeState = () => null;

  const tree = renderer.create(
    <>
      <Checkbox checked onChange={changeState} title='Initial'>Checked</Checkbox>
      <Checkbox onChange={changeState}>Initial</Checkbox>
      <Checkbox checked onChange={changeState} disabled>Checked disabled</Checkbox>
      <Checkbox onChange={changeState} disabled>Disabled</Checkbox>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
