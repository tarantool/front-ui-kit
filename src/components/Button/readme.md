Button example:

```js
import { IconOk } from '../Icon';
import { Switcher } from '../Switcher';
import { Text } from '../Text';

initialState = { loading: false };

const changeState = () => setState({ loading: !state.loading });

<>
  <Switcher onChange={changeState} checked={state.loading}>Loading state</Switcher>

  <Text>Simple buttons:</Text>
  <div style={{ padding: '12px' }}>
    <Button loading={state.loading} title='Click me right meow!'>Click me</Button>
    <Button loading={state.loading} intent='primary'>Click me</Button>
    <Button loading={state.loading} intent='secondary'>Click me</Button>
    <Button loading={state.loading} intent='iconic'>Click me</Button>
    <Button loading={state.loading} intent='plain'>Click me</Button>
    <Button loading={state.loading} disabled>Click me</Button>
  </div>
  <div style={{ padding: '12px' }}>
    <Button loading={state.loading} size='s'>Click me</Button>
    <Button loading={state.loading} intent='primary' size='s'>Click me</Button>
    <Button loading={state.loading} intent='secondary' size='s'>Click me</Button>
    <Button loading={state.loading} intent='iconic' size='s'>Click me</Button>
    <Button loading={state.loading} intent='plain' size='s'>Click me</Button>
    <Button loading={state.loading} disabled size='s'>Click me</Button>
  </div>
  <div style={{ padding: '12px' }}>
    <Button loading={state.loading} size='xs'>Click me</Button>
    <Button loading={state.loading} intent='primary' size='xs'>Click me</Button>
    <Button loading={state.loading} intent='secondary' size='xs'>Click me</Button>
    <Button loading={state.loading} intent='iconic' size='xs'>Click me</Button>
    <Button loading={state.loading} intent='plain' size='xs'>Click me</Button>
    <Button loading={state.loading} disabled size='xs'>Click me</Button>
  </div>

  <Text>With icons:</Text>
  <div style={{ padding: '12px' }}>
    <Button loading={state.loading} icon={IconOk}>Click me</Button>
    <Button loading={state.loading} intent='primary' icon={IconOk}>Click me</Button>
    <Button loading={state.loading} intent='secondary' icon={IconOk}>Click me</Button>
    <Button loading={state.loading} disabled icon={IconOk}>Click me</Button>
  </div>
  <div style={{ padding: '12px' }}>
    <Button loading={state.loading} size='s' icon={IconOk}>Click me</Button>
    <Button loading={state.loading} intent='primary' size='s' icon={IconOk}>Click me</Button>
    <Button loading={state.loading} intent='secondary' size='s' icon={IconOk}>Click me</Button>
    <Button loading={state.loading} disabled size='s' icon={IconOk}>Click me</Button>
  </div>
</>
```
