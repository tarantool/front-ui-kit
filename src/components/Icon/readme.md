Icon can be static or interactive

### Icon adding guide

Add new icon as a component in `src/components/Icon/icons` folder.
Use `IconChevron` as a reference. Basic concepts:

* Create new folder and name it `Icon[Name]`
* Place your code inside index.js
* Use https://jakearchibald.github.io/svgomg/ to optimize svg code
* Place svg beside js
* If icon have states (normal, hover, active), remove all `fill` attributes in svg and pass prop `hasState` to component

### Icons set

```
import {
  IconAttach,
  IconBox,
  IconBoxNoData,
  IconBucket,
  IconBurger,
  IconCancel,
  IconCheckbox,
  IconChevron,
  IconChip,
  IconClose,
  IconCluster,
  IconCode,
  IconCrown,
  IconDownload,
  IconGear,
  IconInfo,
  IconLink,
  IconMore,
  IconOk,
  IconRadio,
  IconSchema,
  IconSearch,
  IconUser,
  IconUsers
} from './index';


<div style={{ backgroundColor: 'darkgray' }}>
  <IconAttach />
  <IconBox />
  <IconBoxNoData />
  <IconBucket />
  <IconBurger />
  <IconCancel />
  <IconCheckbox />
  <IconChevron />
  <IconChevron direction='bottom' />
  <IconChip />
  <IconClose />
  <IconCluster />
  <IconCode />
  <IconCrown />
  <IconDownload />
  <IconGear />
  <IconInfo />
  <IconLink />
  <IconMore />
  <IconOk />
  <IconRadio />
  <IconRadio checked />
  <IconSearch />
  <IconSchema />
  <IconUser />
  <IconUsers />
</div>
```
