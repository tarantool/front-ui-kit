```js
import { Button } from '../Button';
import {
  splashGenericErrorSvg,
  splashSelectFileSvg,
} from '../../images';
import { NonIdealState, NonIdealStateAction, TarantoolLogoSpinner } from '../../index';

console.log(NonIdealState);
console.log(TarantoolLogoSpinner);

<>
  <NonIdealState
    icon={TarantoolLogoSpinner}
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
