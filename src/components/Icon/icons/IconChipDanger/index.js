// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chipDanger.svg';

const style = css`
  fill: ${colors.intentDanger};
`;

export const IconChipDanger = ({ className }: GenericIconProps) => (
  <Icon className={cx(style, className)} glyph={image} />
);
