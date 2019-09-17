```
import { Button } from '../Button';

initialState = { opened: false };

const openModal = () => setState({ opened: true });
const closeModal = () => setState({ opened: false });

<>
  <Button onClick={openModal} text='Open ConfirmModal' />
  <ConfirmModal
    title="Please confirm"
    visible={state.opened}
    onCancel={closeModal}
    onConfirm={console.log}
    confirmText="Remove"
  >
    Removing user John Appleseed
  </ConfirmModal>
</>
```
