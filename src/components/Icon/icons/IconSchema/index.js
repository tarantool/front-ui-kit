// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './schema.svg';

const styles = css`
  fill: #fff;
`;

export const IconSchema = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
