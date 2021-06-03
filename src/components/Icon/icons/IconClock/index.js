// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './clock.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: rgba(0, 0, 0, .65);
`;

export const IconClock = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
