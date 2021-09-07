// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './attach.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: #000;
`;

export const IconAttach = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
