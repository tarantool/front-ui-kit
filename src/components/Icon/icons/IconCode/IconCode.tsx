import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './code.svg';

import { styles } from './IconCode.styles';

export const IconCode = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
