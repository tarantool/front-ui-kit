// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import image from '../../images/window-no-network.svg';


type Props = {
  title?: string,
  description: string
};

export const SplashErrorNetwork = (
  {
    title,
    description
  }: Props
) => (
  <NonIdealState
    isError
    image={image}
    title={title || 'Network problem'}
    description={description}
  />
);
