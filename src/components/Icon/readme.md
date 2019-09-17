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
import { IconAttach } from './icons/IconAttach';
import { IconBox } from './icons/IconBox';
import { IconBoxNoData } from './icons/IconBoxNoData';
import { IconBucket } from './icons/IconBucket';
import { IconBurger } from './icons/IconBurger';
import { IconCancel } from './icons/IconCancel';
import { IconCheckbox } from './icons/IconCheckbox';
import { IconChevron } from './icons/IconChevron';
import { IconChip } from './icons/IconChip';
import { IconClose } from './icons/IconClose';
import { IconCluster } from './icons/IconCluster';
import { IconCrown } from './icons/IconCrown';
import { IconDownload } from './icons/IconDownload';
import { IconGear } from './icons/IconGear';
import { IconInfo } from './icons/IconInfo';
import { IconLink } from './icons/IconLink';
import { IconMore } from './icons/IconMore';
import { IconOk } from './icons/IconOk';
import { IconRadio } from './icons/IconRadio';
import { IconSearch } from './icons/IconSearch';
import { IconUser } from './icons/IconUser';
import { IconUsers } from './icons/IconUsers';

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
  <IconCrown />
  <IconDownload />
  <IconGear />
  <IconInfo />
  <IconLink />
  <IconMore />
  <IconOk />
  <IconRadio />
  <IconSearch />
  <IconUser />
  <IconUsers />
</div>
```
