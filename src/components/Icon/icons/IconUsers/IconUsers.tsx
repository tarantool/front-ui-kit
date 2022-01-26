import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './users.svg';

import { styles } from './IconUsers.styles';

export const IconUsers = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
