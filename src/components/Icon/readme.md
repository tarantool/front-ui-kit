Icon can be static or interactive

### Usage notes

Many icons have overrideable fill color, you can change it via `fill` and `fill-opacity` css rules.
Change icon size the same way.

### Icon adding guide

Add new icon as a component in `src/components/Icon/icons` folder.
Use `IconChevron` as a reference. Basic concepts:

* Create new folder and name it `Icon[Name]`
* Place your code inside index.js
* Use https://jakearchibald.github.io/svgomg/ to optimize svg code
* Place svg beside js, use unique file name
* If icon have states (normal, hover, active), remove all `fill` attributes in svg and pass prop `hasState` to component

### Icons set

```jsx noeditor
import { useState } from 'react';
import { css, cx } from 'emotion';
import * as icons from './index';
import {
  ControlsPanel,
  colors,
  Switcher,
  Text,
  withCopyToClipboard
} from '@tarantool.io/ui-kit';

const styles = {
  list: css`
    display: flex;
    padding: 0;
    margin: 0 -8px;
    flex-wrap: wrap;
    list-style: none;
  `,
  listItem: css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-basis: 280px;
    padding: 8px;
  `,
  icon: css`
    margin-right: 8px;
  `
};

const [fill, setFill] = useState(false);
const [background, setBackground] = useState(false);

const switchFill = () => setFill(!fill);
const switchBg = () => setBackground(!background);

const listBackgroundStyle = background ? css`background-color: #e8e8e8;` : '';
const fillStyle = fill ? css`fill: #0044aa;` : '';

const CopyText = withCopyToClipboard(Text);

const renderAllIcons = () => {
  const [Icon, ...iconNames] = Object.keys(icons);

  return iconNames.map(iconName => {
    const IconComponent = icons[iconName];
    return (
      <li className={styles.listItem}>
        <IconComponent className={cx(styles.icon, fillStyle)} />
        <CopyText content={iconName}>{iconName}</CopyText>
      </li>
    );
  });
};

<>
  <ControlsPanel
    controls={[
      <Switcher checked={fill} onChange={switchFill}>Custom fill</Switcher>,
      <Switcher checked={background} onChange={switchBg}>Gray bg</Switcher>
    ]}
  />
  <ul className={cx(styles.list, listBackgroundStyle)}>{renderAllIcons()}</ul>
</>
```
