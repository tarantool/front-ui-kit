import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { PageLayout } from './index';

it('PageLayout renders succesfully', () => {
  const tree = renderer.create(
    <>
      <PageLayout
        heading='Cluster'
        headingContent={<Button text='Details' />}
      />
      <PageLayout
        heading='Cluster'
        headingContent={<Button text='Details' />}
        wide
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
