import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-eye-opened.svg';

import { styles } from './IconEyeOpened.styles';

export const IconEyeOpened = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
