// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './ok.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentSuccess};
`;

export const IconOk = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
