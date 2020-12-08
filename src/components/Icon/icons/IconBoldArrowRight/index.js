// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './icon-bold-arrow-right.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.dark65};
`;

export const IconBoldArrowRight = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
