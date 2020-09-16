import React from 'react';
import renderer from 'react-test-renderer';
import { AppHeader, Button, IconSearch } from '../../index';

it('AppHeader renders correctly', () => {
  const onLinkClick = jest.fn();

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
    },
    {
      title: 'ResizeSensor again',
      path: '/resize-sensor-again'
    }
  ];

  const tree = renderer.create(
    <AppHeader
      breadcrumbs={breadcrumbs}
      appName='Project name'
      onLinkClick={onLinkClick}
      controls={[
        <Button title='Search' intent='plain' icon={IconSearch} />,
        <Button text='Log in' />
      ]}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
