// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './icon-box.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.dark65};
`;

export const IconBox = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
