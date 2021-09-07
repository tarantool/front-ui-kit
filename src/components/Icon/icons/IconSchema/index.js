// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './schema.svg';

const styles = css`
  fill: #fff;
`;

export const IconSchema = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
