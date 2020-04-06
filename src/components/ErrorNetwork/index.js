// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import { IconWindowNoNetwork } from '../Icon';


type Props = {
  title?: string,
  description: string,
};

export const ErrorNetwork = (
  {
    title,
    description,
  }: Props
) => (
  <NonIdealState
    isError
    icon={IconWindowNoNetwork}
    title={title || 'Network problem'}
    description={description}
  />
);
