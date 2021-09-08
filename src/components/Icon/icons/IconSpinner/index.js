// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-spinner.svg';

const styles = css`
  width: 16px;
  height: 16px;
`;

export const IconSpinner = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
