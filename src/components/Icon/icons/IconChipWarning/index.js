// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chipWarning.svg';

const style = css`
  fill: ${colors.intentWarning};
`;

export const IconChipWarning = ({ className }: GenericIconProps) => (
  <Icon className={cx(style, className)} glyph={image} />
);
