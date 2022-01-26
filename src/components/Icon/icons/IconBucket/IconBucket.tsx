import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './bucket.svg';

import { styles } from './IconBucket.styles';

export const IconBucket = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
