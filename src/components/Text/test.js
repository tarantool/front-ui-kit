import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './index';

it('Text renders correctly', () => {
  const tree = renderer.create(
    <>
      <Text variant='h1' title='Text title'>Heading 1 - 24px, 38px, 600, spacing 0.48px</Text>
      <Text variant='h2'>Heading 2 - 20px, 28px, 600, spacing 0.4px</Text>
      <Text variant='h3'>Heading 3 - 16px, 24px, 600, spacing 0.32px</Text>
      <Text variant='h4'>Heading 4 - 16px, 24px, 600, spacing 0.32px</Text>
      <Text variant='h5'>Heading 5 - 12px, 22px, 400, spacing 0.24px</Text>
      <Text variant='p'>paragraph - 12px, 20px, 400, spacing: 0.28px</Text>
      <Text>basic - 14px, 22px, 400</Text>
      <Text variant='code'>code - 14px, 22px, 400</Text>
      <Text variant='h3' tag='span'>H3 styled span</Text>
      <Text variant='h4' tag='span'>H4 styled span</Text>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
