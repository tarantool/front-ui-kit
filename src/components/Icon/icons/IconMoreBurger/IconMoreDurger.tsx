import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './moreBurger.svg';

import { styles } from './IconMoreBurger.styles';

export const IconMoreBurger = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
