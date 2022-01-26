import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chipWarning.svg';

import { styles } from './IconChipWarning.styles';

export const IconChipWarning = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
