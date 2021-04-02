```js
import { IconOk, IconCancel, PageCard, Text } from '@tarantool.io/ui-kit';

<PageCard title="Bootstrap vshard" onClose={() => console.log('Close clicked')}>
  <Text variant='h4'>When you finish edition topology. To render storages operable.</Text>
  <Text>
    <IconOk />
    One role vshard-router enabled
  </Text>
  <Text>
    <IconCancel />
    One role vshard-storage enabled
  </Text>
  <Text>Afterwards, any change in topology will trigger data rebalancing</Text>
</PageCard>
```