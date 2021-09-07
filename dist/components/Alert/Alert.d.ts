import { ReactNode } from 'react';
export interface AlertProps {
    className?: string;
    children: ReactNode;
    type: 'error' | 'success';
}
export declare const Alert: ({ className, children, type }: AlertProps) => JSX.Element;
