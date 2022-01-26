import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './link.svg';

import { styles } from './IconLink.styles';

export const IconLink = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
