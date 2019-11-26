// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './file.svg';

export const IconFile = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={className}
    glyph={image}
    onClick={onClick}
  />
);
