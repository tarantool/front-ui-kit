// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './attention.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.dark65};
`;

export const IconAttention = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
