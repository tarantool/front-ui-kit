// @flow
import * as React from 'react';
import { SplashError } from '../SplashError';
import image from '../../images/window-dead.svg';


type Props = {
  title: string,
  description: string,
  details?: React.Node,
  children?: React.Node,
};

export const SplashErrorFatal = (
  props: Props
) => (
  <SplashError
    {...props}
    image={image}
  />
);
