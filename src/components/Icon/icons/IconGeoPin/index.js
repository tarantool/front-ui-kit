// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './geo-pin.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: ${colors.intentDanger};
`;

export const IconGeoPin = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
