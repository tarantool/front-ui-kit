/// <reference types="react" />
import type { GenericIconProps } from '../../Icon';
declare type IconChevronProps = GenericIconProps & {
    direction?: 'up' | 'down' | 'left' | 'right';
};
export declare const IconChevron: (props: IconChevronProps) => JSX.Element;
export declare const IconChevronDown: (props: GenericIconProps) => JSX.Element;
export declare const IconChevronLeft: (props: GenericIconProps) => JSX.Element;
export declare const IconChevronRight: (props: GenericIconProps) => JSX.Element;
export {};
