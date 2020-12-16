import React from 'react';
import renderer from 'react-test-renderer';
import { Switcher } from './index';

it('Switcher renders correctly', () => {
  const changeState = () => null;

  const tree = renderer.create(
    <>
      <Switcher
        checked
        onChange={changeState}
        title='Initial'
        name='switcherChecked'
      >
        Checked
      </Switcher>
      <Switcher
        onChange={changeState}
        name='switcher'
      >
        Initial
      </Switcher>
      <Switcher
        disabled
        checked
        onChange={changeState}
        name='switcherCheckedDisabled'
      >
        Checked disabled
      </Switcher>
      <Switcher
        disabled
        onChange={changeState}
        name='switcherDisabled'
      >
        Disabled
      </Switcher>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
