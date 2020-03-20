// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './edit.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: #F5222D;
  fill-opacity: 0.65;
`;

export const IconEdit = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
