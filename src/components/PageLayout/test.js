import React from 'react';
import renderer from 'react-test-renderer';
import {
  Alert,
  Button,
  IconSearch,
  Input,
  Text,
  PageLayout
} from '../../index';

it('PageLayout renders succesfully', () => {
  const tree = renderer.create(
    <>
      <PageLayout
        heading='Cluster'
        headingContent={<Text>Heading content</Text>}
      />
      <PageLayout
        heading='Cluster'
        topRightControls={[
          <Button text='Details' />,
          <Button text='Issues' />
        ]}
        wide
      />
      <PageLayout
        heading='Reports list'
        aboveComponent={({ className }) => (
          <Alert className={className} type='error'>Hello, I'm error!</Alert>
        )}
        topLeftControls={[
          <Input rightIcon={<IconSearch />} />,
          <Button text='Info' size='l' />
        ]}
        wide
      />
      <PageLayout
        heading='Reports list'
        topLeftControls={[
          <Input rightIcon={<IconSearch />} />,
          <Button text='Info' size='l' />
        ]}
        topRightControls={[
          <Button text='Details' size='l' />,
          <Button text='Info' size='l' />
        ]}
        wide
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
