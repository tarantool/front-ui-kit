It is highly recommended to use the `withDropdown` HOC.
The `Dropdown` component adds an additional `<div>` wrap and may be removed in the future.

```jsx
import { css } from '@emotion/css';
import * as R from 'ramda';
import { useState } from 'react';
import {
  Button,
  Checkbox,
  ControlsPanel,
  colors,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  IconMore,
  Modal,
  withDropdown
} from '@tarantool.io/ui-kit';

const styles = {
  scrollableBox: css`
    height: 400px;
    max-width: 400px;
    border: solid 3px lightgray;
    overflow: scroll;
  `,
  scrollableContent: css`
    width: 1000px;
    height: 1000px;
    padding-left: 400px;
    padding-top: 400px;
  `,
  shadow: css`
    box-shadow: 0 0 600px 40px yellow;

    &:hover,
    &:focus {
      box-shadow: 0 0 600px 40px yellow;
    }
  `
};

const menuLengthPresets = [5, 10, 15, 25, 45, 100];
const menuItemWidthPresets = [1, 3, 10, 30];

const [state, setState] = useState({
  customMenuContent: true,
  rows: 100,
  width: 1,
  modalOpened: false
});

const setStateKey = key => value => setState((state) => ({ ...state, [key]: value }));
const toggleState = key => () => setState((state) => ({ ...state, [key]: !state[key] }));

const itemsCollection = state.customMenuContent
  ? R.times(
    i => (i % 10 === 0 && i > 0)
    ? <DropdownDivider key={i} />
    : (
      <DropdownItem key={i} onClick={() => console.log(`Clicked Item ${i}`)}>
        {`Text in item ${i} `.repeat(state.width).trim()}
      </DropdownItem>
    ),
    state.rows
  )
  : (
    <>
      <DropdownItem onClick={console.log}>Item 1</DropdownItem>
      <DropdownItem onClick={console.log}>Item 2</DropdownItem>
      <DropdownItem onClick={console.log}>Item 3</DropdownItem>
      <DropdownItem onClick={console.log}>Item 4</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={console.log}>Item 5</DropdownItem>
      <DropdownItem onClick={console.log} color={colors.intentDanger}>Item 6</DropdownItem>
    </>
  )

const DropdownButton = withDropdown(Button);

<div>
  <ControlsPanel
    controls={[
      <Checkbox
        checked={state.customMenuContent}
        onChange={toggleState('customMenuContent')}
      >
        Custom menu
      </Checkbox>,
      <DropdownButton
        disabled={!state.customMenuContent}
        items={menuLengthPresets.map(value => (
          <DropdownItem key={value} onClick={() => setStateKey('rows')(value)}>{`${value} rows`}</DropdownItem>
        ))}
        title='Dropdown menu rows'
        text={`${state.rows} rows`}
      />,
      <DropdownButton
        disabled={!state.customMenuContent}
        items={menuItemWidthPresets.map(value => (
          <DropdownItem key={value} onClick={() => setStateKey('width')(value)}>{`${value} repeats`}</DropdownItem>
        ))}
        title='Menu items width'
        text={`${state.width} repeats`}
      />
    ]}
  />
  <div className={css`position: relative;`}>
    <Dropdown items={itemsCollection} />
    <Dropdown items={itemsCollection}>
      Alternative wide wide trigger
    </Dropdown>
    <div className={css`position: absolute; right: 0;`}>
      <Dropdown items={itemsCollection}>
        <Button
          icon={IconMore}
          intent='secondary'
        />
      </Dropdown>
      <Dropdown items={itemsCollection}>
        Wide wide wide trigger
      </Dropdown>
    </div>
  </div>

  <div className={styles.scrollableBox}>
    <div className={styles.scrollableContent}>
      <DropdownButton className={styles.shadow} items={itemsCollection} icon={IconMore} text='Dropdown' />
    </div>
  </div>

  <DropdownButton items={itemsCollection} text='Another Dropdown' />
  <Button text='Open modal' onClick={toggleState('modalOpened')} />
  <Modal onClose={toggleState('modalOpened')} visible={state.modalOpened} title='Modal'>
    Modal content
    <DropdownButton items={itemsCollection} text='Dropdown' />
  </Modal>
</div>
```
