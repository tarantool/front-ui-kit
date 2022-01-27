import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-sort-desc.svg';

import { styles } from './IconSortable.styles';

export const IconSortableDesc = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles.icon, className)} glyph={image} />
);

export const IconSortableAsc = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles.icon, styles.asc, className)} glyph={image} />
);
