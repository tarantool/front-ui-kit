```js
import { css } from 'emotion';
import { Text } from '../Text';

const styles = {
  row: css`
    display: flex;
    justify-content: space-between;
  `,
  wrap: css`
    padding: 40px;
    background-color: #F0F2F5;
  `
};

<div className={styles.wrap}>
  <Text>Text outside</Text>
  <TiledList
    itemClassName={styles.row}
    items={[
      {
        name: 'John',
        balance: 200
      },
      {
        name: 'Emily',
        balance: 1500
      },
      {
        name: 'Michael',
        balance: 500
      }
    ]}
    itemKey='name'
    itemRender={item => (
      <>
        <Text>{item.name}</Text>
        <Text variant='h5' tag='span'>{`$${item.balance}`}</Text>
      </>
    )}
  />
</div>
```
