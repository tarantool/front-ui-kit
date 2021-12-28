// @flow
import React from 'react';
import { css, cx, keyframes } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-spinner.svg';

const animations = keyframes`
  to {
    transform: rotate(-1turn);
  }
`;

const styles = css`
  width: 16px;
  height: 16px;
  animation: ${animations} 720ms infinite steps(8);
`;

export const IconSpinner = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
