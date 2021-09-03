// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './moreBurger.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary65};
`;

export const IconMoreBurger = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
