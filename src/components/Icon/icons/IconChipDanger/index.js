// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './chipDanger.svg';

const style = css`
  fill: #F5222D;
`;

export const IconChipDanger = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(style, className)}
    glyph={image}
  />
);
