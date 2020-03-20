// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './search.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: #000;
  fill-opacity: 0.25;
`;

export const IconSearch = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);