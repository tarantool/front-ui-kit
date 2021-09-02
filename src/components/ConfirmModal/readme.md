```jsx
import { useState } from 'react';
import { Button, ConfirmModal, Text } from '@tarantool.io/ui-kit';

const [{ loading, opened }, setState] = useState({
  loading: false,
  opened: false,
});

const openModal = () => setState((value) => ({
  ...value,
  opened: true,
}));

const closeModal = () => setState((value) => ({
  ...value,
  opened: false,
}));

const apply = () => {
  setState((value) => ({
    ...value,
    loading: true,
  }));
  setTimeout(
    () => {
      setState(() => ({
        loading: false,
        opened: false,
      }));
    },
    1200,
  );
};

<>
  <Button onClick={openModal} text="Open ConfirmModal" />
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
