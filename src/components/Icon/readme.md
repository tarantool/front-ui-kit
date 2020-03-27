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
import { css } from 'emotion';
import { Switcher } from '../Switcher';
import {
  IconAttach,
  IconAttention,
  IconBox,
  IconBoxNoData,
  IconBucket,
  IconBurger,
  IconCancel,
  IconCheckbox,
  IconChevron,
  IconChip,
  IconChipWarning,
  IconChipDanger,
  IconClose,
  IconCluster,
  IconCode,
  IconCreateFile,
  IconCreateFolder,
  IconDelete,
  IconDocumentCode,
  IconDownload,
  IconEdit,
  IconFile,
  IconFolder,
  IconGear,
  IconGeoPin,
  IconInfo,
  IconLink,
  IconMore,
  IconNewWindow,
  IconOk,
  IconRadio,
  IconRefresh,
  IconSchema,
  IconSearch,
  IconSpinner,
  IconUser,
  IconUsers
} from './index';

initialState = { fill: false };

const switchState = () => setState({ fill: !state.fill });

const className = state.fill ? css`fill: #0044aa;fill-opacity: 0.65;` : '';

<>
  <Switcher checked={state.fill} onChange={switchState}>Custom fill</Switcher>
  <div style={{ backgroundColor: 'darkgray' }}>
    <IconAttach className={className} />
    <IconAttention className={className} />
    <IconBox className={className} />
    <IconBoxNoData className={className} />
    <IconBucket className={className} />
    <IconBurger className={className} />
    <IconCancel className={className} />
    <IconCheckbox className={className} />
    <IconCheckbox checked className={className} />
    <IconChevron className={className} />
    <IconChevron direction='down' className={className} />
    <IconChevron direction='left' className={className} />
    <IconChevron direction='right' className={className} />
    <IconChip className={className} />
    <IconChipWarning className={className} />
    <IconChipDanger className={className} />
    <IconClose className={className} />
    <IconCluster className={className} />
    <IconCode className={className} />
    <IconCreateFile className={className} />
    <IconCreateFolder className={className} />
    <IconDelete className={className} />
    <IconDocumentCode className={className} />
    <IconDownload className={className} />
    <IconEdit className={className} />
    <IconFile className={className} />
    <IconFolder className={className} />
    <IconFolder opened className={className} />
    <IconGear className={className} />
    <IconGeoPin className={className} />
    <IconInfo className={className} />
    <IconLink className={className} />
    <IconMore className={className} />
    <IconNewWindow className={className} />
    <IconOk className={className} />
    <IconRadio className={className} />
    <IconRadio checked className={className} />
    <IconRefresh className={className} />
    <IconSchema className={className} />
    <IconSearch className={className} />
    <IconSpinner className={className} />
    <IconUser className={className} />
    <IconUsers className={className} />
  </div>
</>
```
