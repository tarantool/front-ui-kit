// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './edit.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.intentPrimary65};
`;

export const IconEdit = ({ className, onClick }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} onClick={onClick} />
);
