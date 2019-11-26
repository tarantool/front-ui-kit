// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './delete.svg';

const styles = css`
  width: 12px;
  height: 12px;
`;

export const IconDelete = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
