// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './failed.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentDanger};
`;

export const IconFailed = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
