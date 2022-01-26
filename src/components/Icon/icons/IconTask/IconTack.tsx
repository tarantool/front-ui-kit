import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import { styles } from './IconTask.styled';
import image from './task.svg';

export const IconTask = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
