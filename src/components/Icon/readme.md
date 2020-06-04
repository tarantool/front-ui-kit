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

```js
import { css, cx } from 'emotion';
import { colors } from '../../variables';
import * as icons from './index';
import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';
import { Switcher } from '../Switcher';

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
    flex-basis: 200px;
    padding: 8px;
  `,
  icon: css`
    margin-right: 8px;
  `
};

initialState = { fill: false, background: false };

const switchFill = () => setState({ fill: !state.fill });
const switchBg = () => setState({ background: !state.background });

const listBackground = state.background ? css`background-color: #e8e8e8;` : '';
const fill = state.fill ? css`fill: #0044aa; fill-opacity: 0.65;` : '';

const renderAllIcons = () => {
  const [Icon, ...inconNames] = Object.keys(icons);

  return inconNames.map(iconName => {
    const IconComponent = icons[iconName];
    return (
      <li className={styles.listItem}>
        <IconComponent className={cx(styles.icon, fill)} />
        <Text>{iconName}</Text>
      </li>
    );
  });
};

<>
  <ControlsPanel
    controls={[
      <Switcher checked={state.fill} onChange={switchFill}>Custom fill</Switcher>,
      <Switcher checked={state.background} onChange={switchBg}>Gray bg</Switcher>
    ]}
  />
  <ul className={cx(styles.list, listBackground)}>{renderAllIcons()}</ul>
</>
```
