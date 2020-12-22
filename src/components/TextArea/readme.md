```jsx
import { css } from 'emotion';
import {
  ControlsPanel,
  Switcher,
  Text,
} from '../../index';

const styles = {
  wrap: css`display: flex;`,
  column: css`
    flex-grow: 1;
    margin: 16px;
  `,
  margin: css`margin: 8px 0;`
};

initialState = {
  disabled: false,
  value: 'Value'
};

const updateState = e => setState({ value: e.target.value });
const toggleDisabled = () => setState(({ disabled }) => ({ disabled: !disabled }));

<>
  <ControlsPanel
    controls={[
      <Switcher checked={state.disabled} onChange={toggleDisabled}>Disabled</Switcher>
    ]}
  />

  <div className={styles.wrap}>
    <div className={styles.column}>
      <Text variant='h3'>Size L (default)</Text>
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        disabled />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        error />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        rows={5} />
    </div>
    <div className={styles.column}>
      <Text variant='h3'>Size M</Text>
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        disabled />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        error />
      <TextArea
        disabled={state.disabled}
        placeholder='Type here'
        size='m'
        className={styles.margin}
        onChange={updateState}
        value={state.value}
        rows={5} />
    </div>
  </div>
</>
```
