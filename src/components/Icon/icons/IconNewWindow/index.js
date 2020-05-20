// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './new-window.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.intentPrimary};
  fill-opacity: 0.65;
`;

export const IconNewWindow = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);