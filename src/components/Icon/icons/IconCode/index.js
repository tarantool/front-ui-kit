// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './code.svg';

export const IconCode = ({ className }: GenericIconProps) => (
  <Icon className={className} glyph={image} />
);
