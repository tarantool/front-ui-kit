// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './document-code.svg';

const styles = css`
  width: 36px;
  height: 36px;
`;

export const IconDocumentCode = ({ className, ...props }: GenericIconProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={image}
    {...props}
  />
);
