import type { ReactNode } from 'react';
import type { SideMenuItemType, SideMenuItemTypes } from './SideMenu.types';
export interface SideMenuProps {
    menu: SideMenuItemType[];
    path: string;
    onMenuItemClick: (path: string, type: SideMenuItemTypes) => void;
    toggleExpand: (path: string, expanded: boolean) => void;
    renderMenuLogo?: (isShort: boolean) => ReactNode;
    className?: string;
    pathPrefix?: string;
    onCollapse?: (isCollapsed: boolean | ((isCollapsed: boolean) => boolean)) => void;
    isCollapsed?: boolean;
}
export declare function SideMenu({ menu, className, onMenuItemClick, toggleExpand, pathPrefix, renderMenuLogo, onCollapse, isCollapsed, }: SideMenuProps): JSX.Element;
