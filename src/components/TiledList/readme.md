```jsx
import { css } from '@emotion/css';
import { TiledList, TiledListItem, Text } from '@tarantool.io/ui-kit';

const styles = {
  row: css`
    display: flex;
    justify-content: space-between;
  `,
  wrap: css`
    padding: 40px;
    background-color: #F0F2F5;
  `,
};

const items = [
  { name: 'John', balance: 200 },
  { name: 'Emily', balance: 1500 },
  { name: 'Michael', balance: 500 },
];

<div className={styles.wrap}>
  <Text>Text outside</Text>
  <TiledList>
    {items.map(item => (
      <TiledListItem key={item.name} className={styles.row} corners="soft">
        <Text>{item.name}</Text>
        <Text variant="h5" tag="span">{`$${item.balance}`}</Text>
      </TiledListItem>
    ))}
  </TiledList>
</div>
```
