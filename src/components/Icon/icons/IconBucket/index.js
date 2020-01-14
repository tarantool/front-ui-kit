// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './bucket.svg';

export const IconBucket = ({ className }: GenericIconProps) => (
  <Icon
    className={className}
    glyph={image}
  />
);
