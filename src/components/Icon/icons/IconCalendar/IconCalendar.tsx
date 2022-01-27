import React from 'react';
import { cx } from '@emotion/css';

import { GenericIconProps, Icon } from '../../Icon';
import image from './calendar.svg';

import { styles } from './IconCalendar.styles';

export const IconCalendar = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
