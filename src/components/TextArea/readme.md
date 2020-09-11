```jsx
import { css } from 'emotion';
import { Text } from '../../index';

const styles = {
  wrap: css`display: flex;`,
  column: css`
    flex-grow: 1;
    margin: 16px;
  `,
  margin: css`margin: 8px 0;`
};

initialState = { value: '' };

updateState = e => setState({ value: e.target.value });

<div className={styles.wrap}>
  <div className={styles.column}>
    <Text variant='h3'>Size L (default)</Text>
    <TextArea placeholder='Type here' className={styles.margin} onChange={updateState} value={state.value} />
    <TextArea placeholder='Type here' className={styles.margin} onChange={updateState} value={state.value} disabled />
    <TextArea placeholder='Type here' className={styles.margin} onChange={updateState} value={state.value} error />
    <TextArea placeholder='Type here' className={styles.margin} onChange={updateState} value={state.value} rows={5} />
  </div>
  <div className={styles.column}>
    <Text variant='h3'>Size M</Text>
    <TextArea placeholder='Type here' size='m' className={styles.margin} onChange={updateState} value={state.value} />
    <TextArea placeholder='Type here' size='m' className={styles.margin} onChange={updateState} value={state.value} disabled />
    <TextArea placeholder='Type here' size='m' className={styles.margin} onChange={updateState} value={state.value} error />
    <TextArea placeholder='Type here' size='m' className={styles.margin} onChange={updateState} value={state.value} rows={5} />
  </div>
</div>
```
