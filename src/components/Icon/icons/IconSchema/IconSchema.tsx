import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './schema.svg';

import { styles } from './IconSchema.styles';

export const IconSchema = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
