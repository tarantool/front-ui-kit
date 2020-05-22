It is highly recommended to use the `withDropdown` HOC.
The `Dropdown` component adds an additional `<div>` wrap and may be removed in the future.

```js
import { css } from 'emotion';
import { Dropdown, DropdownItem, withDropdown } from './index';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { IconCancel, IconMore } from '../Icon';

const initialState = { modalOpened: false };

const toggleModal = () => setState(({ modalOpened }) => ({ modalOpened: !modalOpened }));

const items = (
  <>
    <DropdownItem onClick={() => console.log('Clicked Item 1')}>Item 1</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 2')}>Item 2</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 3</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 4</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 5</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 6</DropdownItem>
  </>
);

const DropdownButton = withDropdown(Button);

<div>
  <div className={css`position: relative;`}>
    <Dropdown items={items} />
    <Dropdown items={items}>
      Alternative trigger
    </Dropdown>
    <Dropdown items={items} className={css`position: absolute; right: 0;`}>
      <Button
        icon={IconCancel}
        intent='secondary'
      />
    </Dropdown>
  </div>

  <div className={css`height: 400px;`} />

  <DropdownButton items={items} icon={IconMore} intent='iconic' />
  <DropdownButton items={items} text='Another Dropdown' />
  <Button text='Open modal' onClick={toggleModal} />
  <Modal onClose={toggleModal} visible={state.modalOpened} title='Modal'>
    Modal content
    <DropdownButton items={items} text='Dropdown' />
  </Modal>
</div>
```
