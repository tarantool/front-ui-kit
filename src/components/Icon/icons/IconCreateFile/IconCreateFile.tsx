import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './create-file.svg';

import { styles } from './IconCreateFile.styles';

export const IconCreateFile = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
