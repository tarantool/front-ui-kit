import React from 'react';
import renderer from 'react-test-renderer';
import { Checkbox } from './index';

it('Checkbox renders correctly', () => {
  const changeState = () => null;

  const tree = renderer.create(
    <>
      <Checkbox indeterminate onChange={changeState} title='Indeterminate'>Checked</Checkbox>
      <Checkbox checked indeterminate onChange={changeState} >Checked</Checkbox>
      <Checkbox checked onChange={changeState} title='Initial'>Checked</Checkbox>
      <Checkbox onChange={changeState}>Initial</Checkbox>
      <Checkbox disabled checked indeterminate onChange={changeState}>Checked disabled</Checkbox>
      <Checkbox disabled indeterminate onChange={changeState}>Disabled</Checkbox>
      <Checkbox disabled checked onChange={changeState}>Checked disabled</Checkbox>
      <Checkbox disabled onChange={changeState}>Disabled</Checkbox>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
