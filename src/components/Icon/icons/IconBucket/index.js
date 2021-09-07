// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './bucket.svg';

const styles = css`
  fill: ${colors.dark65};
`;

export const IconBucket = ({ className }: GenericIconProps) => <Icon className={cx(styles, className)} glyph={image} />;
