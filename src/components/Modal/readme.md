```js
import { css } from 'emotion';
import { Button } from '../Button';
import { Tabbed } from '../Tabbed';
import { PopupFooter } from '../PopupFooter';

initialState = { opened: false };

const styles = {
  tabContent: css`
    padding: 24px 0 0;
  `
}

const openModal = () => setState({ opened: true });
const closeModal = () => setState({ opened: false });

const tabs = [
  {
    label: 'Create Replica Set',
    content: <div className={styles.tabContent}>Create Replica Set tab content</div>
  },
  {
    label: 'Join Replica Set',
    content: <div className={styles.tabContent}>Join Replica Set tab content</div>
  }
];

<>
  <Button onClick={openModal} text='Open Modal' />
  <Modal
    title='Configure server'
    visible={state.opened}
    onClose={closeModal}
    wide
  >
    <Tabbed tabs={tabs} />
    <PopupFooter
      controls={[
        <Button intent='primary' text='Accept' />,
        <Button text='Decline' />
      ]}
    />
  </Modal>
</>
```
