```js
import { Button } from '../Button';
import {
  IconDocumentCode,
  IconSpinner,
  IconCancel,
  IconWindowDead,
} from '../Icon';
import { NonIdealState, NonIdealStateAction } from './index';

<>
  <NonIdealState
    icon={IconSpinner}
    title='Loading...'
  />

  <NonIdealState
    icon={IconDocumentCode}
    title='Please select a file'
  />

  <NonIdealStateAction
    icon={IconCancel}
    title='Error loading component'
    actionText='Retry'
    onActionClick={console.log}
  />

  <NonIdealStateAction
    icon={IconWindowDead}
    title={(
      <div>
        <h3 style={{
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>Artificial error</h3>
        <p>An error occured and your request couldn't be complited</p>
      </div>
    )}
    actionText='Details'
    onActionClick={console.log}
  />
</>
```