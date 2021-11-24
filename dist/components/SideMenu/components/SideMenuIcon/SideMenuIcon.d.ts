import { ComponentType } from 'react';
export interface SideMenuIconProps {
    className?: string;
    icon: string | ComponentType<{
        className?: string;
    }> | unknown;
}
export declare const SideMenuIcon: ({ icon: IconComponent, className }: {
    icon: any;
    className: any;
}) => JSX.Element | null;
