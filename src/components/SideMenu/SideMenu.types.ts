import type { ComponentType, MouseEvent } from 'react';

export type SideMenuItemTypes = 'internal' | 'external';

export type SideMenuItemType = {
  label: string;
  path: string;
  selected: boolean;
  expanded: boolean;
  icon: string | ComponentType<{ className?: string }> | unknown;
  items: SideMenuItemType[];
  type?: SideMenuItemTypes;
  pinBottom?: boolean;
  pathPrefix?: string;
  onClick: (evt: MouseEvent<HTMLElement>, path: string, type: SideMenuItemTypes) => void;
  short?: boolean;
  isSubitem?: boolean;
  isCollapse?: boolean;
  expand?: (evt: MouseEvent<HTMLElement>, path: string, expanded: boolean) => void;
  forceToUseHrefAttribute?: boolean;
};
