// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './link.svg';

const styles = css`
  width: 14px;
  height: 14px;
  fill: ${colors.dark65};
`;

export const IconLink = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
