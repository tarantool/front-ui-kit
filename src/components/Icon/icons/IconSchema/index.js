// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './schema.svg';

export const IconSchema = ({ className }: GenericIconProps) => (
  <Icon className={className} glyph={image} />
);
