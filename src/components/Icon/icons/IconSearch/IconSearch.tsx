import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './search.svg';

import { styles } from './IconSearch.styles';

export const IconSearch = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
