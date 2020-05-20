// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './geo-pin.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: ${colors.intentDanger};
`;

export const IconGeoPin = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
