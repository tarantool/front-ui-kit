// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './chip.svg';

const style = css`
  fill: ${colors.dark65};
`;

export const IconChip = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(style, className)}
    glyph={image}
  />
);