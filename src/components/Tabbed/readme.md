```js
<Tabbed
  tabs={[
    {
      label: 'Create Replica Set',
      content: 'Tab content'
    },
    {
      label: 'Another tab',
      content: 'Another tab content'
    },
    {
      label: 'Third tab',
      content: 'Third tab content'
    }
  ]}
/>
```

```js
import { useState } from 'react';

const [ activeTab, setActiveTab ] = useState(1);

<Tabbed
  activeTab={activeTab}
  handleTabChange={setActiveTab}
  tabs={[
    {
      label: 'Create Replica Set',
      content: 'Tab content'
    },
    {
      label: 'Another tab',
      content: 'Another tab content'
    },
    {
      label: 'Third tab',
      content: 'Third tab content'
    }
  ]}
/>
```
