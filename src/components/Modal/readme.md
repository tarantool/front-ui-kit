There are two ways to use modals: with scroll and without it.

In first case modal will fit to content.

But if you put large content in modal it might need scrollbars in some cases.
To enable scrollbars in body, you should set `fit` prop and `max-height` for Modal and use PopupBody with `scrollable` prop. In this mode modal won't fit to content size.

### Forms

To create popup forms easy way use prop `onSubmit` and pass button with `type='submit'` to `footerControls`.
Additional `<form>` don't need.

```js
import { css } from 'emotion';
import { Button } from '../Button';
import { Tabbed } from '../Tabbed';
import { ControlsPanel } from '../ControlsPanel';
import { PopupBody } from '../PopupBody';
import { PopupFooter } from '../PopupFooter';
import { Input } from '../Input';
import { LabeledInput } from '../LabeledInput';

initialState = { opened: null };

const sampleText = 'But I must explain to you how all this mistaken idea of denouncing \
pleasure and praising pain was born and I will give you a complete account of the system, \
and expound the actual teachings of the great explorer of the truth, \
the master-builder of human happiness.';

const tabStyles = css`padding: 24px 0 0;`;

const openModal = (modalName) => setState({ opened: modalName });
const closeModal = () => setState({ opened: null });

const tabs = [
  {
    label: 'Create Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      {sampleText.repeat(10)}
    </PopupBody>
  },
  {
    label: 'Join Replica Set',
    content: <PopupBody className={tabStyles} scrollable>
      {sampleText.repeat(40)}
    </PopupBody>
  },
  {
    label: 'Bad example tab',
    content: <PopupBody className={tabStyles}>
      Bad example (without scroll).
      {sampleText.repeat(40)}
    </PopupBody>
  }
];

<>
  <ControlsPanel
    controls={[
      <Button onClick={() => openModal('simple')} text='simple Modal' />,
      <Button onClick={() => openModal('wide')} text='Wide Modal' />,
      <Button onClick={() => openModal('tabbed')} text='Wide Modal with scrollable body' />,
      <Button onClick={() => openModal('form')} text='Modal with form' />
    ]}
  />
  <Modal
    footerControls={[
      <Button intent='primary' text='Accept' />,
      <Button text='Decline' />
    ]}
    title='Simple Modal'
    visible={state.opened === 'simple'}
    onClose={closeModal}
  >
    {sampleText}
  </Modal>
  <Modal
    footerControls={[
      <Button intent='primary' text='Accept' />,
      <Button text='Decline' />
    ]}
    title='Configure server'
    visible={state.opened === 'wide'}
    onClose={closeModal}
    wide
  >
    {sampleText.repeat(40)}
  </Modal>
  <Modal
    title='Configure server'
    visible={state.opened === 'tabbed'}
    onClose={closeModal}
    wide
    fit
    thinBorders
  >
    <Tabbed tabs={tabs} />
    <PopupFooter
      controls={[
        <Button intent='primary' text='Accept' />,
        <Button text='Decline' />
      ]}
    />
  </Modal>
  <Modal
    title='Configure server'
    visible={state.opened === 'form'}
    onClose={closeModal}
    onSubmit={() => console.log('submit')}
    footerControls={[
      <Button intent='primary' text='Accept' type='submit' />,
      <Button text='Decline' onClick={closeModal} />
    ]}
  >
    <LabeledInput label='First input' />
  </Modal>
</>
```
