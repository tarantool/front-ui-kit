```js
import { Button } from '../Button';
import { IconDocumentCode, IconSpinner, IconCancel } from '../Icon';
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
</>
```