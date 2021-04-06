```js
import { useState } from 'react';
import { arrayMove } from 'react-sortable-hoc';

import { DraggableTable } from './index';
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
  setData(arrayMove(data, oldIndex, newIndex));
};
const onSelectRow = (selected, row) => {
  setData(data.map(item => {
    if (item.id === row.id) {
      return {
        ...item,
        selected
      } 
    }
    return item;
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
