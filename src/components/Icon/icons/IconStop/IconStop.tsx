import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './stop.svg';

import { styles } from './IconStop.styles';

export const IconStop = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
