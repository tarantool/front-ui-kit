```jsx
import { useState } from 'react';
import { Button, ConfirmModal, Text } from '@tarantool.io/ui-kit';

const [opened, setOpened] = useState(false);
const [loading, setLoading] = useState(false);

const openModal = () => setOpened(true);
const closeModal = () => setOpened(false);

const apply = () => {
  setLoading(true);
  setTimeout(
    () => { setLoading(false); setOpened(false); },
    1200
  );
};

<>
  <Button onClick={openModal} text='Open ConfirmModal' />
  <ConfirmModal
    title="Please confirm"
    visible={opened}
    onCancel={closeModal}
    onConfirm={apply}
    confirmText="Remove"
    confirmPreloader={loading}
  >
    <Text>Removing user John Appleseed</Text>
  </ConfirmModal>
</>
```
