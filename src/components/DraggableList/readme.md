```js
import { useState } from 'react';
import { css, cx } from '@emotion/css';
import { arrayMoveImmutable } from 'array-move';
import {
  IconBurger,
  LeaderFlagSmall,
  Text,
  UriLabel,
  DraggableList,
  DraggableListItem
} from '@tarantool.io/ui-kit';

const styles = {
  alias: css`
    flex-basis: 404px;
    max-width: 404px;
    margin-right: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  serverUriWrap: css`
    flex-basis: 445px;
    max-width: 445px;
    justify-content: flex-end;
    margin-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  leaderFlag: css`
    flex-shrink: 0;
    align-self: center;
    margin-left: 8px;
    margin-right: 8px;
  `,
  iconMargin: css`
    margin-right: 8px;
  `,
  sortableItem: css`
    position: relative;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: solid 1px lightgray;
    margin-bottom: 8px;
    display: flex; 
    flex-direction: row;
    cursor: move;

    &:last-child {
      border-bottom: none;
    }
  `,
  container: css`
    display: flex; 
    flex-direction: column; 
    width: 100%;
  `
}

const [ data, setData ] = useState(Array.apply(null, { length: 10 }).map((_, index) => ({
  key: index,
  uuid: index,
  alias: `alias ${index}`,
  uri: `uri ${index}`,
})));

const items = data.map((item, index) => (
  <DraggableListItem
    num={index}
    index={index}
    key={item.key}
  >
    <div className={styles.sortableItem}>
      <Text className={styles.alias} tag='div'>
        <IconBurger className={styles.iconMargin} />
        {item.alias || item.uuid}
      </Text>
      <LeaderFlagSmall
        className={styles.leaderFlag}
      />
      <UriLabel
        className={styles.serverUriWrap}
        uri={item.uri}
      />
    </div>
  </DraggableListItem>
));

const onChange = ({ oldIndex, newIndex }) => {
  setData(data => arrayMoveImmutable(data, oldIndex, newIndex));
};

<>
  <DraggableList className={styles.container} items={items} onChange={onChange} />
</>
```
