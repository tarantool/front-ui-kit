```js
import { Button } from '../Button';
import {
  splashGenericErrorSvg,
  splashSelectFileSvg,
  NonIdealState,
  NonIdealStateAction,
  TarantoolLogoSpinner
} from '@tarantool.io/ui-kit';

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
