import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './document-code.svg';

import { styles } from '../IconBox/IconBox.styles';

export const IconDocumentCode = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
