// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './success.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentSuccess};
`;

export const IconSuccess = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
