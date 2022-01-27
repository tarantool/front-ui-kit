import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-box.svg';

import { styles } from './IconBox.styles';

export const IconBox = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
