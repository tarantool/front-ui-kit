import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './empty-box-no-data.svg';

import { styles } from './IconBoxNoData.styles';

export const IconBoxNoData = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
