// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './chip.svg';

const style = css`
  fill: #000;
  fill-opacity: 0.65;
`;

export const IconChip = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(style, className)}
    glyph={image}
  />
);