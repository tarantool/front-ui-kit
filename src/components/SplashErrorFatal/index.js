// @flow
import * as React from 'react';
import { SplashError, type CommonSplashErrorProps } from '../SplashError';
import image from '../../images/window-dead.svg';


export const SplashErrorFatal = (
  props: CommonSplashErrorProps
) => (
  <SplashError
    {...props}
    image={image}
  />
);
