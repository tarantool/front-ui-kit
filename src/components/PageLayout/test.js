import React from 'react';
import renderer from 'react-test-renderer';
import {
  Alert,
  Button,
  IconSearch,
  Input,
  Text,
  PageLayout,
  PageLayoutWithRef
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
          <Button key={0} text='Details' />,
          <Button key={1} text='Issues' />
        ]}
        wide
      />
      <PageLayout
        heading='Reports list'
        aboveComponent={({ className }) => (
          <Alert className={className} type='error'>{"Hello, I'm error!"}</Alert>
        )}
        topLeftControls={[
          <Input key={0} rightIcon={<IconSearch />} />,
          <Button key={1} text='Info' size='l' />
        ]}
        wide
      />
      <PageLayout
        heading='Reports list'
        topLeftControls={[
          <Input key={0} rightIcon={<IconSearch />} />,
          <Button key={1} text='Info' size='l' />
        ]}
        topRightControls={[
          <Button key={0} text='Details' size='l' />,
          <Button key={1} text='Info' size='l' />
        ]}
        wide
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it('PageLayoutWithRef renders succesfully', () => {
  const ref = React.createRef();

  const tree = renderer.create(
    <>
      <PageLayoutWithRef
        heading='Cluster'
        headingContent={<Text>Heading content</Text>}
        ref={ref}
        topRightControls={[
          <Button key={0} text='Details' />,
          <Button key={1} text='Issues' />
        ]}
      />
      <PageLayoutWithRef
        heading='Cluster'
        headingContent={<Text>Heading content</Text>}
        topRightControls={[
          <Button key={0} text='Details' />,
          <Button key={1} text='Issues' />
        ]}
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
