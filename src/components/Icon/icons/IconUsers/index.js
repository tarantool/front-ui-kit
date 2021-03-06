// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './users.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: #fff;
`;

export const IconUsers = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
