// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './window-shocked.svg';

const styles = css`
  width: 200px;
  height: 182px;
`;

export const IconWindowShocked = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
