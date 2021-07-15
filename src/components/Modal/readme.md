There are two ways to use modals: with scroll and without it.

In first case modal will fit to content. It's recommended to use modals this way.

*Scrolling inside modals is unstable and not recommended to use.*

But if you put large content in modal it might need scrollbars in some cases.
To enable scrollbars in body, you should set `fit` prop and `max-height` for Modal and use PopupBody with `scrollable` prop. In this mode modal won't fit to content size.

### Forms

To create popup forms easy way use prop `onSubmit` and pass button with `type='submit'` to `footerControls`.
Additional `<form>` don't need.

```jsx
import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Button,
  ControlsPanel,
  Input,
  LabeledInput,
  Modal,
  PopupBody,
  PopupFooter,
  Tabbed,
  Text
} from '@tarantool.io/ui-kit';

const [opened, setOpened] = useState(null);

const sampleText = 'But I must explain to you how all this mistaken idea of denouncing \
pleasure and praising pain was born and I will give you a complete account of the system, \
and expound the actual teachings of the great explorer of the truth, \
the master-builder of human happiness.';

const tabStyles = css`padding: 24px 0 0;`;

const openModal = (modalName) => setOpened(modalName);
const closeModal = () => setOpened(null);

const tabs = [
  {
    label: 'Create Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      <Text>{sampleText.repeat(10)}</Text>
    </PopupBody>
  },
  {
    label: 'Join Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      <Text>{sampleText.repeat(40)}</Text>
    </PopupBody>
  },
  {
    label: 'Bad example tab',
    content: <PopupBody className={tabStyles}>
      Bad example (without scroll).
      <Text>{sampleText.repeat(40)}</Text>
    </PopupBody>
  }
];

<>
  <ControlsPanel
    controls={[
      <Button onClick={() => openModal('simple')} text='simple Modal' />,
      <Button onClick={() => openModal('wide')} text='Wide Modal' />,
      <Button onClick={() => openModal('wide-scrollable')} text='Wide scrollable Modal' />,
      <Button onClick={() => openModal('tabbed')} text='Wide Modal with scrollable body' />,
      <Button onClick={() => openModal('form')} text='Modal with form' />
    ]}
  />
  <Modal
    footerControls={[
      <Button intent='primary' size='l' text='Accept' />,
      <Button size='l' text='Decline' onClick={closeModal} />
    ]}
    title='Simple Modal'
    visible={opened === 'simple'}
    onClose={closeModal}
  >
    <Text>{sampleText}</Text>
  </Modal>
  <Modal
    footerControls={[
      <Button intent='primary' size='l' text='Accept' />,
      <Button size='l' text='Decline' onClick={closeModal} />
    ]}
    title='Configure server'
    visible={opened === 'wide'}
    onClose={closeModal}
    wide
  >
    <Text>{sampleText.repeat(40)}</Text>
  </Modal>

  <Modal
    footerControls={[
      <Button intent='primary' size='l' text='Accept' />,
      <Button size='l' text='Decline' onClick={closeModal} />
    ]}
    title='Configure server'
    visible={opened === 'wide-scrollable'}
    onClose={closeModal}
    fit
    thinBorders
    wide
  >
    <PopupBody scrollable>
      <Text>{sampleText.repeat(40)}</Text>
    </PopupBody>
  </Modal>

  <Modal
    title='Configure server'
    visible={opened === 'tabbed'}
    onClose={closeModal}
    wide
    fit
    thinBorders
  >
    <Tabbed tabs={tabs} />
    <PopupFooter
      controls={[
        <Button intent='primary' size='l' text='Accept' />,
        <Button size='l' text='Decline' onClick={closeModal} />
      ]}
    />
  </Modal>
  <Modal
    title='Configure server'
    visible={opened === 'form'}
    onClose={closeModal}
    onSubmit={() => console.log('submit')}
    footerControls={[
      <Button intent='primary' size='l' text='Accept' type='submit' />,
      <Button size='l' text='Decline' onClick={closeModal} />
    ]}
  >
    <LabeledInput label='First input' autoFocus />
  </Modal>
</>
```
