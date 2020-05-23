```js
import { Button } from '../Button';

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
    Removing user John Appleseed
  </ConfirmModal>
</>
```
