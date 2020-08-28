// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './search.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.dark25};
`;

export const IconSearch = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
  />
);