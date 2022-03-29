import React from 'react';
export declare type InputProps = {
    autoComplete?: 'on' | 'off' | 'new-password';
    autoFocus?: boolean;
    className?: string;
    onClearClick?: (e?: React.MouseEvent) => void;
    disabled?: boolean;
    error?: boolean;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onKeyDownCapture?: (e: React.KeyboardEvent) => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    onKeyPressCapture?: (e: React.KeyboardEvent) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
    onKeyUpCapture?: (e: React.KeyboardEvent) => void;
    readOnly?: boolean;
    rightIcon?: React.ReactNode;
    title?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    value?: string | ReadonlyArray<string> | number | undefined;
    placeholder?: string;
    size?: 'm' | 'l';
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
};
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;