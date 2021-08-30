import React from 'react';
import { css } from '@emotion/css';
import renderer from 'react-test-renderer';
import {
  AppHeader,
  AppLayout,
  Button,
  IconCluster,
  IconCode,
  IconTrash,
  IconInfo,
  IconSearch,
  SideMenu,
  SVGImage,
  TarantoolLogoCompact,
  TarantoolLogoFull
} from '../../index';

jest.mock(
  '../Scrollbar/index.js',
  () => ({
    Scrollbar: ({ children, className }) => <div className={className}>{children}</div>
  })
);

it('AppLayout renders correctly', () => {
  const onLinkClick = jest.fn();
  const onMenuItemClick = jest.fn();
  const toggleExpand = jest.fn();

  const logoStyle = css`margin-left: 24px;`;

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

  const renderLogo = collapsed => (
    <SVGImage
      className={!collapsed && logoStyle}
      glyph={collapsed ? TarantoolLogoCompact : TarantoolLogoFull}
    />
  );

  const PreconfiguredSideMenu = () => (
    <SideMenu
      menu={menuItems}
      path='/'
      onMenuItemClick={onMenuItemClick}
      toggleExpand={toggleExpand}
      renderMenuLogo={renderLogo}
    />
  );

  const tree = renderer.create(
    <AppLayout sidebarComponent={PreconfiguredSideMenu}>
      <AppHeader
        appName='Sample app'
        breadcrumbs={breadcrumbs}
        controls={[
          <Button key={0} title='Search' intent='plain' icon={IconSearch} />,
          <Button key={1} text='Log in' />
        ]}
        onLinkClick={onLinkClick}
      />
      Content
    </AppLayout>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
