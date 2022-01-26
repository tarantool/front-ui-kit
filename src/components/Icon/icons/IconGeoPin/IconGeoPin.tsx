import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './geo-pin.svg';

import { styles } from './IconGeoPin.styles';

export const IconGeoPin = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
