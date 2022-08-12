/// <reference types="react" />
import type { GenericIconProps } from '../../Icon';
declare type IconRadioProps = GenericIconProps & {
    checked?: boolean;
    disabled?: boolean;
};
export declare const IconRadio: ({ checked, className, disabled }: IconRadioProps) => JSX.Element;
export declare const IconRadioChecked: (props: GenericIconProps) => JSX.Element;
export declare const IconRadioDisabled: (props: GenericIconProps) => JSX.Element;
export declare const IconRadioCheckedDisabled: (props: GenericIconProps) => JSX.Element;
export {};
