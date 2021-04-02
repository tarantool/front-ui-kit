```jsx
import { useState } from 'react';
import { BaseModal, Button } from '@tarantool.io/ui-kit';

const [opened, setOpened] = useState(false);

const openModal = () => setOpened(true);
const closeModal = () => setOpened(false);

<>
  <Button onClick={openModal} text='Open BaseModal' />
  <BaseModal
    visible={opened}
    onClose={closeModal}
  />
</>
```
