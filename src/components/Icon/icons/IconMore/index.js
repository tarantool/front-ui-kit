// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './more.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary65};
`;

export const IconMore = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);