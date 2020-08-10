import React from 'react';
import renderer from 'react-test-renderer';
import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  const breadcrumbs = [{
    title: '@tarantool.io/ui-kit',
    link: '/tarantool'
  },
  {
    title: 'UI Components',
    link: '/section-ui-components'
  },
  {
    title: 'Breadcrumb',
    link: '/breadcrumb'
  },
  {
    title: 'OverflowList',
    link: '/overflow-list'
  },
  {
    title: 'ResizeSensor',
    link: '/resize-sensor'
  }];
  const onLinkClick = () => {};

  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          appName={'Project name'}
          onLinkClick={onLinkClick}
        />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('renders correctly long name', () => {
    const tree = renderer.create(
      <>
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          appName={'Project name-2948474770249-999-20299547789123123141'}
          onLinkClick={onLinkClick}
        />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('block with small width', () => {
    const tree = renderer.create(
      <>
        <div style={{ width: '300px' }}>
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            appName={'Project name-2948474770249-999-20299547789123123141'}
            onLinkClick={onLinkClick}
          />
        </div>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
