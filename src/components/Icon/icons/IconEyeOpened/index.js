// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './icon-eye-opened.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: #F5222D;
`;

export const IconEyeOpened = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
