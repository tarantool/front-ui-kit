import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './gear.svg';

import { styles } from './IconGear.styles';

export const IconGear = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
