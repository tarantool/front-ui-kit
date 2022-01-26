import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-empty-data.svg';

import { styles } from './IconEmptyData.styles';

export const IconEmptyData = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
