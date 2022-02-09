import { ChangeEventHandler, FC } from 'react';
declare type CheckboxProps = {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    title: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
export declare const Checkbox: FC<CheckboxProps>;
export {};
