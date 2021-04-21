import React from 'react';
import renderer from 'react-test-renderer';
import { DraggableTable } from './index';

it('DraggableTable renders correctly', () => {
  const columns = [
    {
      header: 'Field',
      accessor: 'field'
    },
    {
      header: 'Type',
      accessor: 'type'
    }
  ];

  const data = Array.apply(null, { length: 10 }).map((_, index) => ({
    id: index,
    uuid: index,
    field: `field ${index}`,
    type: `type ${index}`,
    selected: index % 2
  }));


  const tree = renderer.create(
    <DraggableTable
      columns={columns}
      data={data}
      onChange={() => {}}
      onSelectRow={() => {}}
      withPositionCol
      draggableOnlySelected
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
