import React from 'react';
import renderer from 'react-test-renderer';
import { LabeledInput } from './index';
import { InputPassword } from '../InputPassword';

const testValue = 'qwertyuiop';

const handleChange = e => null;

it('LabeledInput renders correctly', () => {
  const tree = renderer.create(
    <>
      <LabeledInput
        label='Label'
        info='Info LabeledInput component'
        message='Field is required'
        value={testValue}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
        error
      />
      <LabeledInput
        inputComponent={InputPassword}
        label='Label'
        subTitle='Sub title'
        value={testValue}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
      />
      <LabeledInput
        label='Label'
        subTitle='Sub title'
        message='Field is required'
        value={testValue}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});