// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './chipDanger.svg';

const style = css`
  fill: ${colors.intentDanger};
`;

export const IconChipDanger = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(style, className)}
    glyph={image}
  />
);
