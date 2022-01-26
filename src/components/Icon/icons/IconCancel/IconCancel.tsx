import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './cancel.svg';

import { styles } from './IconCancel.styles';

export const IconCancel = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
