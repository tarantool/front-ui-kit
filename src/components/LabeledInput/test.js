import React from 'react';
import renderer from 'react-test-renderer';
import { LabeledInput } from './index';
import { InputPassword } from '../InputPassword';
import { TextArea } from '../TextArea';

const testValue = 'qwertyuiop';

const handleChange = () => void 0;

it('LabeledInput renders correctly', () => {
  const tree = renderer.create(
    <>
      <LabeledInput
        label='Label'
        id='1'
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
        id='2'
        subTitle='Sub title'
        value={testValue}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
      />
      <LabeledInput
        label='Label'
        id='3'
        subTitle='Sub title'
        message='Field is required'
        value={testValue}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
      />
      <LabeledInput
        label='Multiline labeled input'
        id='4'
        subTitle='Sub title'
        message='Field is required'
        inputComponent={TextArea}
        value={testValue}
        rows={4}
        placeholder='Placeholder'
        onChange={handleChange}
        title='Input'
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
