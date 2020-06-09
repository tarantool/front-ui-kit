It is highly recommended to use the `withDropdown` HOC.
The `Dropdown` component adds an additional `<div>` wrap and may be removed in the future.

```js
import { css } from 'emotion';
import { Dropdown, DropdownItem, DropdownDivider, withDropdown } from './index';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { IconCancel, IconMore } from '../Icon';

const initialState = { modalOpened: false };

const toggleModal = () => setState(({ modalOpened }) => ({ modalOpened: !modalOpened }));

const itemsCollectionSmall = (
  <>
    <DropdownItem onClick={() => console.log('Clicked Item 1')}>{'Large text in Item 1 '.repeat(15)}</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 2')}>Item 2</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 3</DropdownItem>
  </>
);

const itemsCollectionLarge = (
  <>
    <DropdownItem onClick={() => console.log('Clicked Item 1')}>Item 1</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 2')}>Item 2</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 3</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 4</DropdownItem>
    <DropdownDivider />
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 5</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 6</DropdownItem>
  </>
);

const DropdownButton = withDropdown(Button);

<div>
  <div className={css`position: relative;`}>
    <Dropdown items={itemsCollectionLarge} />
    <Dropdown items={itemsCollectionSmall}>
      Alternative trigger
    </Dropdown>
    <Dropdown items={itemsCollectionSmall} className={css`position: absolute; right: 40px;`}>
      <Button
        icon={IconCancel}
        intent='secondary'
      />
    </Dropdown>
    <Dropdown items={itemsCollectionLarge} className={css`position: absolute; right: 0;`}>
      <Button
        icon={IconCancel}
        intent='secondary'
      />
    </Dropdown>
  </div>

  <div className={css`height: 400px; max-width: 400px; border: solid 3px lightgray; overflow: scroll;`}>
    <div className={css`width: 300px; height: 300px; padding-left: 200px; padding-top: 200px;`}>
      <DropdownButton items={itemsCollectionSmall} icon={IconMore} text='Dropdown' />
    </div>
  </div>

  <DropdownButton items={itemsCollectionSmall} icon={IconMore} intent='iconic' />
  <DropdownButton items={itemsCollectionLarge} text='Another Dropdown' />
  <Button text='Open modal' onClick={toggleModal} />
  <Modal onClose={toggleModal} visible={state.modalOpened} title='Modal'>
    Modal content
    <DropdownButton items={itemsCollectionLarge} text='Dropdown' />
  </Modal>
</div>
```
