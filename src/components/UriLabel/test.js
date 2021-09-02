import React from 'react';
import renderer from 'react-test-renderer';
import { UriLabel } from './index';
import { IconGeoPin } from '../Icon';

it('Text renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <UriLabel uri="jh74gvr3-ec3-datacenter-southern.awa132.com" title="UriLabel" />
        <UriLabel uri="jh74gvr3-ec3-datacenter-southern.awa132.com" title="UriLabel" weAreHere />
        <UriLabel uri="jh74gvr3-ec3-datacenter-southern.awa132.com" title="UriLabel" icon={IconGeoPin} />
      </>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
