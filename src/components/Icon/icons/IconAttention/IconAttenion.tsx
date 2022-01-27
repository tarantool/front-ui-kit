import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './attention.svg';

import { styles } from './IconAttenion.styles';

export const IconAttention = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
