```jsx
import { useState } from 'react';
import { css } from 'emotion';
import {
  ControlsPanel,
  Switcher,
  Text,
  TextArea
} from '@tarantool.io/ui-kit';

const styles = {
  wrap: css`display: flex;`,
  column: css`
    flex-grow: 1;
    margin: 16px;
  `,
  margin: css`margin: 8px 0;`
};

const [disabled, setDisabled] = useState(false);
const [value, setValue] = useState('Value');

const updateState = e => setValue(e.target.value);
const toggleDisabled = () => setDisabled(!disabled);

<>
  <ControlsPanel
    controls={[
      <Switcher checked={disabled} onChange={toggleDisabled}>Disabled</Switcher>
    ]}
  />

  <div className={styles.wrap}>
    <div className={styles.column}>
      <Text variant='h3'>Size L (default)</Text>
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={value}
        />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={value}
        disabled />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={value}
        error />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={value}
        rows={5} />
    </div>
    <div className={styles.column}>
      <Text variant='h3'>Size M</Text>
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={value}
        />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={value}
        disabled />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={value}
        error />
      <TextArea
        disabled={disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={value}
        rows={5} />
    </div>
  </div>
</>
```
