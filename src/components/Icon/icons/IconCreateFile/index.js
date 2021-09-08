// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './create-file.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.intentPrimary65};
`;

export const IconCreateFile = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
