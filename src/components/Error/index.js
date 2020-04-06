// @flow
import * as React from 'react';
import { NonIdealState } from '../NonIdealState';
import { IconWindowShocked } from '../Icon';


type Props = {
  title: string,
  description: string,
};

export const Error = (
  {
    description,
    title,
  }: Props
) => (
  <NonIdealState
    isError
    icon={IconWindowShocked}
    title={title}
    description={description}
  />
);
