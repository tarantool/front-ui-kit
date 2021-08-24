UI-Kit components may contain colors that are not yet included in the global collection.
Before adding a new color, make sure that it is necessary. Probably the color you need or similar is already in the collection.

```js
import { css, cx } from '@emotion/css';
import { colors, Text } from '@tarantool.io/ui-kit';

const styles = {
  colorWrap: css`
    display: flex;
    padding: 6px 0;
    margin-left: -8px;
    margin-right: -8px;
  `,
  colorPreview: css`
    flex-shrink: 0;
    width: 30px;
    height: 20px;
    border: solid 1px gray;
    box-sizing: border-box;
  `,
  cell: css`
    margin-left: 8px;
    margin-right: 8px;
  `
}

const Color = ({ name, color }) => (
  <div className={styles.colorWrap}>
    <div className={cx(styles.colorPreview, styles.cell)} style={{ backgroundColor: color }} />
    <Text className={styles.cell} variant='code'>{color}</Text>
    <Text className={styles.cell}>{name}</Text>
  </div>
);

const colorsArray = Object.entries(colors);

<>
  <Text>Colors</Text>
  <div>
    {colorsArray.map(([name, color]) => <Color key={name} name={name} color={color} />)}
  </div>
</>
```
