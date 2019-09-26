Button example:

```js
<div style={{ padding: '12px' }}>
  <Button>Click me</Button>
  <Button intent='primary'>Click me</Button>
  <Button intent='secondary'>Click me</Button>
  <Button intent='iconic'>Click me</Button>
  <Button intent='plain'>Click me</Button>
  <Button disabled>Click me</Button>
</div>
<div style={{ padding: '12px' }}>
  <Button size='s'>Click me</Button>
  <Button intent='primary' size='s'>Click me</Button>
  <Button intent='secondary' size='s'>Click me</Button>
  <Button intent='iconic' size='s'>Click me</Button>
  <Button intent='plain' size='s'>Click me</Button>
  <Button disabled size='s'>Click me</Button>
</div>
<div style={{ padding: '12px' }}>
  <Button size='xs'>Click me</Button>
  <Button intent='primary' size='xs'>Click me</Button>
  <Button intent='secondary' size='xs'>Click me</Button>
  <Button intent='iconic' size='xs'>Click me</Button>
  <Button intent='plain' size='xs'>Click me</Button>
  <Button disabled size='xs'>Click me</Button>
</div>
```

Buttons with icons:

```js
import { IconOk } from '../Icon';

<>
  <div style={{ padding: '12px' }}>
    <Button icon={IconOk}>Click me</Button>
    <Button intent='primary' icon={IconOk}>Click me</Button>
    <Button intent='secondary' icon={IconOk}>Click me</Button>
    <Button disabled icon={IconOk}>Click me</Button>
  </div>
  <div style={{ padding: '12px' }}>
    <Button size='s' icon={IconOk}>Click me</Button>
    <Button intent='primary' size='s' icon={IconOk}>Click me</Button>
    <Button intent='secondary' size='s' icon={IconOk}>Click me</Button>
    <Button disabled size='s' icon={IconOk}>Click me</Button>
  </div>
</>
```

<!-- TODO: add examples with icons -->
