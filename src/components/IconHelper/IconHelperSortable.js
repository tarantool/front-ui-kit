// @flow
import React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../variables';
import { IconSortableAsc, IconSortableDesc, type GenericIconProps } from '../Icon';

type IconSortableProps = $Exact<GenericIconProps & { sort?: 'asc' | 'desc' }>;

const indeterminateStyle = css`
  fill: ${colors.dark10} !important;
`;

export const IconHelperSortable = ({ sort, className, ...props }: IconSortableProps) => {
  switch (sort) {
    case 'asc':
      return <IconSortableAsc className={className} {...props} />;
    case 'desc':
      return <IconSortableDesc className={className} {...props} />;
    default:
      return <IconSortableAsc className={cx(indeterminateStyle, className)} {...props} />;
  }
};
