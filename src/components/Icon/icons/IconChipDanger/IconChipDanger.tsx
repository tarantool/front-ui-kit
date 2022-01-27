import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chipDanger.svg';

import { styles } from './IconChipDanger.styles';

export const IconChipDanger = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
