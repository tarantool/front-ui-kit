import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './more.svg';

import { styles } from './IconMore.styles';

export const IconMore = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
