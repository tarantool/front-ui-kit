import React, { FC } from 'react';
import { InputProps } from '../Input';
declare type Option = {
    label: string;
    value: string;
    icon?: React.ReactNode;
};
declare type SelectProps = {
    options: Option[];
    value: string | null;
    onChange: (value: string, option: Option) => void;
    className?: string;
    inputClassName?: string;
    dropdownClassName?: string;
    allowSearch?: boolean;
    disabled?: boolean;
    inputProps?: InputProps;
};
export declare const Select: FC<SelectProps>;
export {};
