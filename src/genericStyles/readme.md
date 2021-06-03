<!-- UI-Kit has a small collection of useful CSS-classes
which will help you improve inerface appearance. -->

## Scrollbars styling

Scrollbars styling is one of 'painful' parts of web-platform.
Scrollbars behave different depends on
operating system, browser and user settings.

For most use-cases suggested method is using `genericStyles.scrollbars` class.
<!-- UI Kit components already use it. -->

```js
import { css, cx } from '@emotion/css';
import { genericStyles, Text } from '..';

const styles = {
  layout: css`
    display: flex;
    justify-content: space-between;
  `,
  cell: css`
    width: 250px;
    height: 350px;
    overflow: auto;
  `,
  cellContent: css`
    width: 750px;
    height: 750px;
    background: rgb(2,0,36);
    background: linear-gradient(141deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  `,
  txt: css`
    color: white;
    white-space: pre-wrap;
  `
};

<>
  <div className={styles.layout}>
    <div className={cx(genericStyles.scrollbars, styles.cell)}>
      <div className={styles.cellContent}>
        <Text className={styles.txt}>{'System-depend styled scrollbars\n(recommended to use)'}</Text>
      </div>
    </div>
    <div className={cx(genericStyles.systemIndependentScrollbars, styles.cell)}>
      <div className={styles.cellContent}>
        <Text className={styles.txt}>Always styled scrollbars</Text>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.cellContent}>
        <Text className={styles.txt}>System scrollbars</Text>
      </div>
    </div>
  </div>
</>
```
