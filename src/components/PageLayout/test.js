import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { Text } from '../Text';
import { PageLayout } from './index';

it('PageLayout renders succesfully', () => {
  const tree = renderer.create(
    <>
      <PageLayout
        heading='Cluster'
        headingContent={<Text>Heading content</Text>}
      />
      <PageLayout
        heading='Cluster'
        controls={[
          <Button text='Details' />,
          <Button text='Issues' />
        ]}
        wide
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
