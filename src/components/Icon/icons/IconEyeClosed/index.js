// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './icon-eye-closed.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary};
`;

export const IconEyeClosed = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
