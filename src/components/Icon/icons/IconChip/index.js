// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './chip.svg';

export const IconChip = ({ className }: GenericIconProps) => (
  <Icon
    className={className}
    glyph={image}
  />
);