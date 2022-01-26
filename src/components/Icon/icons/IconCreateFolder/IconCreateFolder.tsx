import React from 'react';
import { cx } from '@emotion/css';

import { GenericIconProps, Icon } from '../../Icon';
import image from './create-folder.svg';

import { styles } from './IconCraeteFolder.styles';

export const IconCreateFolder = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
