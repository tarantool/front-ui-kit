```js
import { Button } from '../Button';
import { IconSpinner } from '../Icon';
import {
  splashGenericErrorSvg,
  splashSelectFileSvg
} from '../../images';
import { NonIdealState, NonIdealStateAction } from './index';

<>
  <NonIdealState
    icon={IconSpinner}
    title='Loading...'
  />

  <NonIdealState
    image={splashSelectFileSvg}
    title='Please select a file'
  />

  <NonIdealStateAction
    image={splashGenericErrorSvg}
    title='Error loading component'
    description='Try to reload, please.'
    isError
    actionText='Retry'
    onActionClick={console.log}
  />
</>
```