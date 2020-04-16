// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './geo-pin.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: #F5222D;
`;

export const IconGeoPin = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
