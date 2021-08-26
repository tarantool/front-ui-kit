import React from 'react';
import renderer from 'react-test-renderer';
import { DraggableList, DraggableListItem } from './index';
import { Text } from '../Text';
import { IconBurger } from '../Icon';
import { LeaderFlagSmall } from '../LeaderFlagSmall';
import { UriLabel } from '../UriLabel';

const noop = () => void 0;

it('DraggableList renders correctly', () => {
  const data = Array.apply(null, { length: 10 }).map((_, index) => ({
    key: index,
    uuid: index,
    alias: `alias ${index}`,
    uri: `uri ${index}`
  }));

  const items = data.map((item, index) => (
    <DraggableListItem
      num={index}
      index={index}
      key={item.key}
    >
      <div>
        <Text tag='div'>
          <IconBurger />
          {item.alias || item.uuid}
        </Text>
        <LeaderFlagSmall/>
        <UriLabel
          uri={item.uri}
        />
      </div>
    </DraggableListItem>
  ));

  const tree = renderer.create(
    <DraggableList items={items} onChange={noop} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
