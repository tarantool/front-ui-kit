import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-copy.svg';

import { styles } from './IconCopy.styles';

export const IconCopy = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
