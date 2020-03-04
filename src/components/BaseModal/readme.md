```js
import { Button } from '../Button';

initialState = { opened: false };

const openModal = () => setState({ opened: true });
const closeModal = () => setState({ opened: false });

<>
  <Button onClick={openModal} text='Open BaseModal' />
  <BaseModal
    visible={state.opened}
    onClose={closeModal}
  />
</>
```
