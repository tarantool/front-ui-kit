```js
import { Button } from '../Button';
import { Text } from '../Text';

initialState = { loading: false, opened: false };

const openModal = () => setState({ opened: true });
const closeModal = () => setState({ opened: false });
const apply = () => {
  setState({ loading: true });
  setTimeout(() => setState({ loading: false, opened: false }), 1200);
};

<>
  <Button onClick={openModal} text='Open ConfirmModal' />
  <ConfirmModal
    title="Please confirm"
    visible={state.opened}
    onCancel={closeModal}
    onConfirm={apply}
    confirmText="Remove"
    confirmPreloader={state.loading}
  >
    <Text>Removing user John Appleseed</Text>
  </ConfirmModal>
</>
```
