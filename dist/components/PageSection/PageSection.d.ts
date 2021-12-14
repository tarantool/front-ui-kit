import { ReactNode } from 'react';
export interface PageSectionProps {
    children?: ReactNode;
    className?: string;
    title?: string | ReactNode;
    titleCounter?: number;
    subTitle?: string | ReactNode;
    topRightControls?: ReactNode[];
}
export declare const PageSection: ({ children, className, titleCounter, subTitle, title, topRightControls, }: PageSectionProps) => JSX.Element;
