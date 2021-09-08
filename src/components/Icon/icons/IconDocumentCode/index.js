// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './document-code.svg';

const styles = css`
  width: 36px;
  height: 36px;
`;

export const IconDocumentCode = ({ className, ...props }: GenericIconProps) => (
  <Icon {...props} className={cx(styles, className)} glyph={image} />
);
