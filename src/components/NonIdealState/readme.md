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


  <NonIdealState
    isError
    icon={IconWindowDead}
    title='Critical problem'
    description={'Sorry, the page you\'re looking for cannot be accessed'}
  />

</>
```