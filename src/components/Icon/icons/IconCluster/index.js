// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './cluster.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: #fff;
`;

export const IconCluster = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
