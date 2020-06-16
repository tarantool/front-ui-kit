It is highly recommended to use the `withDropdown` HOC.
The `Dropdown` component adds an additional `<div>` wrap and may be removed in the future.

```js
import { css } from 'emotion';
import * as R from 'ramda';
import { Dropdown, DropdownItem, DropdownDivider, withDropdown } from './index';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { ControlsPanel } from '../ControlsPanel';
import { Modal } from '../Modal';
import { IconMore } from '../Icon';
import { colors } from '../../variables';

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

const initialState = {
  customMenuContent: false,
  rows: 5,
  width: 1,
  modalOpened: false
};

const getStateValueNatural = key => {
  let value = parseInt(state[key]);

  if (isNaN(value)) return initialState[key];
  if (value < 1) return 1;
  return value;
};

const setStateKey = key => value => setState({ [key]: value });

const toggleState = key => () => setState(prevState => ({ [key]: !prevState[key] }));

const itemsCollection = state.customMenuContent
  ? R.times(
    i => (i % 10 === 0 && i > 0)
    ? <DropdownDivider />
    : (
      <DropdownItem onClick={() => console.log(`Clicked Item ${i}`)}>
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
          <DropdownItem onClick={() => setStateKey('rows')(value)}>{`${value} rows`}</DropdownItem>
        ))}
        title='Dropdown menu rows'
        text={`${state.rows} rows`}
      />,
      <DropdownButton
        disabled={!state.customMenuContent}
        items={menuItemWidthPresets.map(value => (
          <DropdownItem onClick={() => setStateKey('width')(value)}>{`${value} repeats`}</DropdownItem>
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
    <Dropdown items={itemsCollection} className={css`position: absolute; right: 0;`}>
      <Button
        icon={IconMore}
        intent='secondary'
      />
    </Dropdown>
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
