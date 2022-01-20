import React, { FC } from 'react';
import { cx } from '@emotion/css';

import { GenericIconProps, Icon } from '../../Icon';
import image from './icon-spinner.svg';

import { styles } from './IconSpinner.styles';

type Props = {
  className?: string;
};

export const IconSpinner: FC<Props> = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
