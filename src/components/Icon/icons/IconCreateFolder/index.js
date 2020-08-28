// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import image from './create-folder.svg';

const styles = css`
  width: 12px;
  height: 12px;
  fill: ${colors.intentPrimary65};
`;

export const IconCreateFolder = ({ className, onClick }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    onClick={onClick}
  />
);
