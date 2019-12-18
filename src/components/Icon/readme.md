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
  IconCreateFile,
  IconCreateFolder,
  IconCrown,
  IconDelete,
  IconDownload,
  IconEdit,
  IconFile,
  IconFolder,
  IconGear,
  IconInfo,
  IconLink,
  IconMore,
  IconNewWindow,
  IconOk,
  IconRadio,
  IconRefresh,
  IconSchema,
  IconSpinner,
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
  <IconCheckbox checked />
  <IconChevron />
  <IconChevron direction='down' />
  <IconChevron direction='left' />
  <IconChevron direction='right' />
  <IconChip />
  <IconClose />
  <IconCluster />
  <IconCode />
  <IconCreateFile />
  <IconCreateFolder />
  <IconCrown />
  <IconDelete />
  <IconDownload />
  <IconEdit />
  <IconFile />
  <IconFolder />
  <IconFolder opened />
  <IconGear />
  <IconInfo />
  <IconLink />
  <IconMore />
  <IconNewWindow />
  <IconOk />
  <IconRadio />
  <IconRadio checked />
  <IconRefresh />
  <IconSearch />
  <IconSchema />
  <IconSpinner />
  <IconUser />
  <IconUsers />
</div>
```
