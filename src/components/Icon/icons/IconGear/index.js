// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './gear.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.intentPrimary};
`;

export const IconGear = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
