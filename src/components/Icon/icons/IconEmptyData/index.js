// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-empty-data.svg';

const styles = css`
  width: 36px;
  height: 45px;
`;

export const IconEmptyData = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
