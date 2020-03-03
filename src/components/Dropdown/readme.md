```js
import { css } from 'emotion';
import { Dropdown, DropdownItem } from './index';
import { Button } from '../Button';
import { IconCancel } from '../Icon';

const items = (
  <>
    <DropdownItem onClick={() => console.log('Clicked Item 1')}>Item 1</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 2')}>Item 2</DropdownItem>
    <DropdownItem onClick={() => console.log('Clicked Item 3')}>Item 3</DropdownItem>
  </>
);

<div className={css`position: relative;`}>
  <Dropdown items={items} />
  <Dropdown
    items={items}
  >
    Alternative trigger
  </Dropdown>
  <Dropdown items={items} className={css`position: absolute; right: 0;`}>
    <Button
      icon={IconCancel}
      intent='secondary'
    />
  </Dropdown>
</div>
```
