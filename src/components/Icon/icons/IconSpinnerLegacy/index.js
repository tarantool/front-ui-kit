// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './icon-spinner-legacy.svg';

const styles = css`
  width: 16px;
  height: 16px;
`;

/**
 * @deprecated Use the IconSpinner component instead (../IconSpinner)
 */
export const IconSpinnerLegacy = ({ className }: GenericIconProps) => (
  <Icon className={cx(styles, className)} glyph={image} />
);
