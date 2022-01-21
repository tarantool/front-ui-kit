import React from 'react';
import { cx } from '@emotion/css';

import { GenericIconProps, Icon } from '../../Icon';
import image from './icon-spinner.svg';

import { styles } from './IconSpinner.styles';

export type IconSpinnerProps = GenericIconProps;

export const IconSpinner = ({ className, ...other }: IconSpinnerProps) => (
  <Icon className={cx(styles, className)} {...other} glyph={image} />
);
