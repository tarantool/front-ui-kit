// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './attention.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: #000;
  fill-opacity: 0.65;
`;

export const IconAttention = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
