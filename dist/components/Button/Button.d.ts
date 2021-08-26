import React, { ReactNode, MouseEvent, ComponentType } from 'react';
export interface ButtonIconProps {
    className?: string;
}
export interface ButtonProps {
    autoFocus?: boolean;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    icon?: ComponentType<ButtonIconProps>;
    iconRight?: ComponentType<ButtonIconProps>;
    intent?: 'primary' | 'secondary' | 'base' | 'plain' | 'dark';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    size?: 'l' | 's' | 'xs' | 'm';
    text?: string;
    title?: string;
    type?: 'button' | 'submit';
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
