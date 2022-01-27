import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './attach.svg';

import { styles } from './IconAttach.styles';

export const IconAttach = ({ className }: GenericIconProps) => {
  return <Icon className={cx(styles, className)} glyph={image} />;
};
