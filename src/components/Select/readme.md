```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Button,
  Select,
  ControlsPanel,
  Switcher,
  Text
} from '@tarantool.io/ui-kit';

const styles = {
  w100: css`
    width: 100%;
  `,
}

const [disabled, setDisabled] = useState(false);
const toggleDisabled = () => setDisabled(!disabled);

const [value, setValue] = useState('male');
const options = [
  { value: 'male', label: 'Male'},
  { value: 'female', label: 'Female'},
];

<>
  <ControlsPanel
    controls={[
      <Switcher key={0} checked={disabled} onChange={toggleDisabled}>Disabled</Switcher>
    ]}
  />
  <div style={{ margin: '12px' }}>
    <Button onClick={() => setValue(null)}>Reset value</Button>
  </div>
  
  <div style={{ margin: '12px' }}>
    <Select
      options={[]}
      disabled={disabled}
    />
  </div>
    
  <div style={{ margin: '12px' }}>
    <Select
      options={options}
      value={value}
      onChange={setValue}
      disabled={disabled}
    />
  </div>

  <div style={{ margin: '12px' }}>
    <Text>With search:</Text>
  </div>

  <div style={{ margin: '12px' }}>
    <Select
      options={options}
      className={styles.w100}
      value={value}
      onChange={setValue}
      disabled={disabled}
      allowSearch
    />
  </div>
</>
```
