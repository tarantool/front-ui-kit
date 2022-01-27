import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-refresh.svg';

import { styles } from './IconRefresh.styles';

export const IconRefresh = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
