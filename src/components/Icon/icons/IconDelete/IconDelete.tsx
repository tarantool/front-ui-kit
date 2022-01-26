import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './delete.svg';

import { styles } from './IconDelete.styles';

export const IconDelete = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
