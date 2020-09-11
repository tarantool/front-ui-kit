import React from 'react';
import renderer from 'react-test-renderer';
import { TextArea } from '../TextArea';

const updateState = jest.fn();

it('TextArea renders correctly', () => {
  const tree = renderer.create(
    <>
      <TextArea onChange={updateState} value='Example text' />
      <TextArea onChange={updateState} value='Example text' error />
      <TextArea onChange={updateState} value='Example text' disabled />
      <TextArea onChange={updateState} value='Example text' rows={5} />

      <TextArea onChange={updateState} size='m' value='Example text' />
      <TextArea onChange={updateState} size='m' value='Example text' error />
      <TextArea onChange={updateState} size='m' value='Example text' disabled />
      <TextArea onChange={updateState} size='m' value='Example text' rows={5} />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
