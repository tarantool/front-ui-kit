// @flow
import React from 'react';
import { IconSortableNone } from './IconSortableNone';
import { IconSortableAsc } from './IconSortableAsc';
import { IconSortableDesc } from './IconSortableDesc';

export type IconSortableStyleProps = {
  className?: string
}

type IconSortableProps = IconSortableStyleProps & {
  sort?: 'asc' | 'desc',
}

export const IconSortable = ({ sort, ...props }: IconSortableProps) => {
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
