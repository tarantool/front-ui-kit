// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import { IconWindowNoNetwork } from '../Icon';


type Props = {
  description: string,
};

export const ErrorNoNetwork = (
  {
    description,
  }: Props
) => (
  <NonIdealState
    isError
    icon={IconWindowNoNetwork}
    title='Network problem'
    description={description}
  />
);
