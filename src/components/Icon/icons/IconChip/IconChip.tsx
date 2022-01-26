import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chip.svg';

import { styles } from './IconChip.styles';

export const IconChip = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
