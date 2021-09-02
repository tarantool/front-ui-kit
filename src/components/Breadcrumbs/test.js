import React from 'react';
import renderer from 'react-test-renderer';

import { Breadcrumbs } from '.';

const noop = () => void 0;

describe('Breadcrumbs', () => {
  const breadcrumbs = [
    {
      title: '@tarantool.io/ui-kit',
      path: '/tarantool',
    },
    {
      title: 'UI Components',
      path: '/section-ui-components',
    },
    {
      title: 'Breadcrumb',
      path: '/breadcrumb',
    },
    {
      title: 'OverflowList',
      path: '/overflow-list',
    },
    {
      title: 'ResizeSensor',
      path: '/resize-sensor',
    },
  ];

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <>
          <Breadcrumbs items={breadcrumbs} appName={'Project name'} onLinkClick={noop} />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly long name', () => {
    const tree = renderer
      .create(
        <>
          <Breadcrumbs
            items={breadcrumbs}
            appName={'Project name-2948474770249-999-20299547789123123141'}
            onLinkClick={noop}
          />
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('block with small width', () => {
    const tree = renderer
      .create(
        <>
          <div style={{ width: '300px' }}>
            <Breadcrumbs
              items={breadcrumbs}
              appName={'Project name-2948474770249-999-20299547789123123141'}
              onLinkClick={noop}
            />
          </div>
        </>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
