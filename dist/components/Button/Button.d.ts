import React, { ComponentType, MouseEvent, ReactNode, Ref } from 'react';
export interface ButtonIconProps {
    className?: string;
}
export interface ButtonProps<T extends unknown = unknown> {
    autoFocus?: boolean;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    icon?: ComponentType<ButtonIconProps>;
    iconRight?: ComponentType<ButtonIconProps>;
    intent?: 'primary' | 'secondary' | 'base' | 'plain' | 'dark';
    onClick?: (event: MouseEvent<HTMLButtonElement>, pass?: T) => void;
    loading?: boolean;
    size?: 'l' | 's' | 'xs' | 'm';
    text?: string;
    title?: string;
    type?: 'button' | 'submit';
    pass?: T;
}
export declare const Button: <T extends unknown = unknown>(props: ButtonProps<T> & {
    ref?: React.Ref<HTMLButtonElement> | undefined;
}) => JSX.Element;
