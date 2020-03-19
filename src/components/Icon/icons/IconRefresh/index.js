// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './refresh.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: #F5222D;
  fill-opacity: 0.45;
`;

export const IconRefresh = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);