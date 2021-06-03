> *Do not pass React.Node to popoverContent*
>
> This type has been kept for compatibility reasons
> and will be deleted soon.

```js
import { css } from '@emotion/css';
import {
  withPopover,
  Button,
  ControlsPanel,
  IconMore,
  Input,
  Checkbox,
  Popover,
  Text,
  colors
} from '@tarantool.io/ui-kit';

const styles = {
  row: css`
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  leftCell: css`
    display: inline-block;
    width: 100px;
    color: ${colors.dark65};
    font-weight: 500;
  `,
  rightCell: css`
    color: ${colors.dark40};
    display: inline-block;
  `
};

const PopoverButton = withPopover(Button);

<ControlsPanel
  controls={[
    <PopoverButton
      popoverContent={() => <>
        <div className={styles.row}>
          <Text className={styles.leftCell}>subject ID</Text>
          <Text className={styles.rightCell}>—</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.leftCell}>subject</Text>
          <Text className={styles.rightCell}>anonymous</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.leftCell}>request ID</Text>
          <Text className={styles.rightCell}>9098df5yt</Text>
        </div>
        <div className={styles.row}>
          <Text className={styles.leftCell}>module</Text>
          <Text className={styles.rightCell}>common.admin.auth</Text>
        </div>
      </>}
    >
      Hey
    </PopoverButton>,
    <PopoverButton
      icon={IconMore}
      popoverContent={({ closePopover }) => <>
        <Button text='Click me twice' onClick={closePopover} />
        <Input type='text' />
        <Checkbox>Accept agreement</Checkbox>
        <Text>I'm text inside popover.</Text>
      </>}
    />
  ]}
/>
```
