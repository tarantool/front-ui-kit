import React from 'react';
import { cx } from '@emotion/css';

import { GenericIconProps, Icon } from '../../Icon';
import image from './icon-spinner-legacy.svg';

import { styles } from './IconSpinnerLegacy.styles';

export type IconSpinnerLegacyProps = GenericIconProps;

/**
 * @deprecated Use the IconSpinner component instead (../IconSpinner)
 */
export const IconSpinnerLegacy = ({ className, ...other }: IconSpinnerLegacyProps) => (
  <Icon className={cx(styles, className)} {...other} glyph={image} />
);
