// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './userpic.svg';

const styles = css`
  width: 24px;
  height: 24px;
`;

export const IconUser = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
