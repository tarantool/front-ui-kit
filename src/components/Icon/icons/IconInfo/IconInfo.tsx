import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './info.svg';

import { styles } from './IconInfo.styles';

export const IconInfo = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
