// @flow
import * as React from 'react';
import { SplashError, type CommonSplashErrorProps } from '../SplashError';
import image from '../../images/window-no-network.svg';


export const SplashErrorNetwork = (
  props: CommonSplashErrorProps
) => (
  <SplashError
    {...props}
    title={props.title || 'Network problem'}
    image={image}
  />
);
