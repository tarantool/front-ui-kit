Root component to compose default Tarantool applications layout.

```js
import { css } from 'emotion';
import {
  AppHeader,
  Button,
  IconCluster,
  IconCode,
  IconTrash,
  IconInfo,
  IconSearch,
  PageLayout,
  SideMenu,
  SVGImage,
  TarantoolLogoCompact,
  TarantoolLogoFull
} from '../../index';

const breadcrumbs = [
  {
    title: '@tarantool.io/ui-kit',
    path: '/tarantool'
  },
  {
    title: 'UI Components',
    path: '/section-ui-components'
  },
  {
    title: 'Breadcrumb',
    path: '/breadcrumb'
  },
  {
    title: 'OverflowList',
    path: '/overflow-list'
  },
  {
    title: 'ResizeSensor',
    path: '/resize-sensor'
  }
];

const menuItems = [
  {
    'selected': false,
    'expanded': false,
    'loading': false,
    'items': [],
    'icon': IconInfo,
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

const styles = {
  content: css`
    height: 1000px;
    background-color: rgba(120, 123, 223, 0.4);
    flex-grow: 1;
    flex-shrink: 0;
  `,
  logo: css`margin-left: 24px;`,
  wrap: css`height: 500px;`
};

const onMenuItemClick = (path, type) => console.log(path, type);
const toggleExpand = (path, expanded) => console.log(path, expanded);

const renderLogo = collapsed => (
  <SVGImage
    className={!collapsed && styles.logo}
    glyph={collapsed ? TarantoolLogoCompact : TarantoolLogoFull}
  />
);

const PreconfiguredSideMenu = ({ className }) => (
  <SideMenu
    className={className}
    menu={menuItems}
    path='/'
    onMenuItemClick={onMenuItemClick}
    toggleExpand={toggleExpand}
    renderMenuLogo={renderLogo}
  />
);

const onLinkClick = (link) => console.log('link', link);

<AppLayout sidebarComponent={PreconfiguredSideMenu} className={styles.wrap}>
  <AppHeader
    appName='Sample app'
    breadcrumbs={breadcrumbs}
    controls={[
      <Button title='Search' intent='plain' icon={IconSearch} />,
      <Button text='Log in' />
    ]}
    onLinkClick={onLinkClick}
  />
  <PageLayout heading='Page header'>
    <div className={styles.content}>Content</div>
  </PageLayout>
</AppLayout>
```
