// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './burger.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: #000;
  fill-opacity: 0.65;
`;

export const IconBurger = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
