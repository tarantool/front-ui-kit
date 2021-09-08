// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './more.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.dark65};
`;

export const IconMore = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
