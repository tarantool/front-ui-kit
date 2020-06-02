// @flow
import React from 'react';
import { IconSortableNone } from './IconSortableNone';
import { IconSortableAsc } from './IconSortableAsc';
import { IconSortableDesc } from './IconSortableDesc';
import type { GenericIconProps } from '../../Icon';


export const IconSortable = ({ sort, ...props }: GenericIconProps & { sort?: 'asc' | 'desc'}) => {
  switch (sort) {
    case 'asc':
      return <IconSortableAsc {...props} />;
    case 'desc':
      return <IconSortableDesc {...props} />;
    default:
      return <IconSortableNone {...props} />;
  }
};

export { IconSortableNone, IconSortableAsc, IconSortableDesc }
