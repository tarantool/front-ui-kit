import type { GenericIconProps } from '../../Icon';
declare type IconCheckboxProps = GenericIconProps & {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
};
export declare const IconCheckbox: ({ checked, className, disabled, indeterminate }: IconCheckboxProps) => JSX.Element | null;
export declare const IconCheckboxChecked: (props: GenericIconProps) => JSX.Element;
export declare const IconCheckboxDisabled: (props: GenericIconProps) => JSX.Element;
export declare const IconCheckboxIndeterminate: (props: GenericIconProps) => JSX.Element;
export declare const IconCheckboxIndeterminateDisabled: (props: GenericIconProps) => JSX.Element;
export declare const IconCheckboxCheckedDisabled: (props: GenericIconProps) => JSX.Element;
export {};
