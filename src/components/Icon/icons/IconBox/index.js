// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './empty-box.svg';

const styles = css`
  width: 48px;
  height: 48px;
  fill: #F5222D;
`;

export const IconBox = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
