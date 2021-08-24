```js
import { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { DraggableTable } from '@tarantool.io/ui-kit';

const columns = [
  {
    header: 'Field',
    accessor: 'field'
  },
  {
    header: 'Type',
    accessor: 'type'
  },
];

const [ data, setData ] = useState(Array.apply(null, { length: 10 }).map((_, index) => ({
  id: index,
  uuid: index,
  field: `field ${index}`,
  type: `type ${index}`,
  selected: index % 2,
})));

const onChange = ({ oldIndex, newIndex }) => {
  setData(data => arrayMoveImmutable(data, oldIndex, newIndex));
};

const onSelectRow = (selected, row) => {
  setData(data => data.map(item => {
    return item.id === row.id ? {...item, selected} : item;
  }));
};

<>
  <DraggableTable
    columns={columns}
    data={data}
    onChange={onChange}
    onSelectRow={onSelectRow}
    withPositionCol
    draggableOnlySelected
 />
</>
```
