```js
import { css } from 'emotion';
import {
  IconSuccess,
  IconCluster,
  IconCode,
  IconTrash,
  IconInfo,
  SideMenu,
  SVGImage,
  TarantoolLogoCompact,
  TarantoolLogoFull
} from '@tarantool.io/ui-kit';

const logoStyle = css`margin-left: 24px;`;
const IconSuccessGreen = ({ className, ...props }) => <IconSuccess {...props} />
const renderLogo = collapsed => (
  <SVGImage
    className={!collapsed && logoStyle}
    glyph={collapsed ? TarantoolLogoCompact : TarantoolLogoFull}
  />
);

const menu = [
    {
      'selected': false,
      'expanded': false,
      'loading': false,
      'items': [],
      'icon': IconSuccessGreen,
      'label': 'My Test',
      'path': '/mytest/test',
      'namespace': 'mytest'
    },
    {
      'selected': false,
      'expanded': true,
      'loading': false,
      'items': [{
        'selected': true,
        'expanded': false,
        'loading': false,
        'items': [],
        'label': 'My Test',
        'path': '/mytest/test',
        'namespace': 'mytest'
      },
      {
        'selected': false,
        'expanded': false,
        'loading': false,
        'items': [],
        'icon': '',
        'label': 'Other',
        'path': '/other/test',
        'namespace': 'other'
      },
      {
        'selected': false,
        'expanded': false,
        'loading': false,
        'items': [],
        'icon': '',
        'label': 'Other2',
        'path': '/other/test2',
        'namespace': 'other'
      },
      {
        'selected': false,
        'expanded': false,
        'loading': false,
        'items': [],
        'label': 'Other4',
        'path': '/other/test3',
        'namespace': 'other'
      }],
      'icon': IconCode,
      'label': 'Other',
      'path': '/other/test',
      'namespace': 'other'
    },
    {
      'selected': false,
      'expanded': false,
      'loading': false,
      'items': [],
      'icon': IconCluster,
      'label': 'Other2',
      'path': '/other/test2',
      'namespace': 'other'
    },
    {
      'selected': false,
      'expanded': false,
      'loading': false,
      'items': [],
      'icon': IconTrash,
      'label': 'Other4',
      'path': '/other/test3',
      'namespace': 'other'
    },
    {
      'selected': false,
      'expanded': false,
      'loading': false,
      'items': [],
      'icon': IconInfo,
      'label': 'Documentation',
      'path': '/other/test3',
      'namespace': 'doc',
      'type': 'external',
      'pinBottom': true
    }
  ];

const onMenuItemClick = (path, type) => console.log(path, type);
const toggleExpand = (path, expanded) => console.log(path, expanded);

<div style={{ height: '80vh' }}>
  <SideMenu
    menu={menu}
    path='/'
    onMenuItemClick={onMenuItemClick}
    toggleExpand={toggleExpand}
    renderMenuLogo={renderLogo}
  />
</div>
```
