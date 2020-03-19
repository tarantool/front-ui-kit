// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './info.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: #F5222D;
`;

export const IconInfo = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
