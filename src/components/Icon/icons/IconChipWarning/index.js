// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './chipWarning.svg';

const style = css`
  fill: ${colors.intentWarning};
`;

export const IconChipWarning = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(style, className)}
    glyph={image}
  />
);
