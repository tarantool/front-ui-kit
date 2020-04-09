// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import image from '../../images/window-shocked.svg';


type Props = {
  title: string,
  description: string,
};

export const SplashError = (
  {
    description,
    title
  }: Props
) => (
  <NonIdealState
    isError
    image={image}
    title={title}
    description={description}
  />
);
