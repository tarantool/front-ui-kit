// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon/Icon';
import { colors } from '../../../variables';
import image from './icon-drag-file.svg';

const styles = css`
  width: 16px;
  height: 16px;
`;

export const IconDragFile = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);
