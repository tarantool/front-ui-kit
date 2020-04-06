// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import { IconWindowDead } from '../Icon';


type Props = {
  title: string,
  description: string,
};

export const ErrorFatal = (
  {
    description,
    title,
  }: Props
) => (
  <NonIdealState
    isError
    icon={IconWindowDead}
    title={title}
    description={description}
  />
);
