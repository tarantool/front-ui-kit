import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-bell.svg';

import { styles } from './IconBell.styles';

export const IconBell = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
