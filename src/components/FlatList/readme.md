```jsx
import { css } from '@emotion/css';
import { FlatList, FlatListItem, Text } from '@tarantool.io/ui-kit';

const styles = {
  row: css`
    display: flex;
    justify-content: space-between;
  `,
  wrap: css`
    padding: 40px;
  `,
};

const items = [
  { name: 'John', balance: 200 },
  { name: 'Emily', balance: 1500 },
  { name: 'Michael', balance: 500 },
];

<div className={styles.wrap}>
  <Text>Text outside</Text>
  <FlatList>
    {items.map(item => (
      <FlatListItem className={styles.row} key={item.name}>
        <Text>{item.name}</Text>
        <Text variant="h5" tag="span">{`$${item.balance}`}</Text>
      </FlatListItem>
    ))}
  </FlatList>
</div>
```
