// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon/Icon';
import { Icon } from '../../Icon/Icon';
import image from './icon-drag-file.svg';

const styles = css`
  width: 16px;
  height: 16px;
`;

export const IconDragFile = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
