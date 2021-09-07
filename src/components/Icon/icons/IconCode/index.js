// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './code.svg';

const styles = css`
  fill: #fff;
`;

export const IconCode = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
