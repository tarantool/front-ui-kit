import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../Text';
import { PageCard } from './index';

it('PageCard renders with close button', () => {
  const tree = renderer.create(
    <>
      <PageCard title="Bootstrap vshard" onClose={() => console.log('Close clicked')}>
        <Text variant='h4'>When you finish edition topology. To render storages operable.</Text>
      </PageCard>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('PageCard renders without close button', () => {
  const tree = renderer.create(
    <>
      <PageCard title="Bootstrap vshard">
        <Text>Afterwards, any change in topology will trigger data rebalancing</Text>
      </PageCard>
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
