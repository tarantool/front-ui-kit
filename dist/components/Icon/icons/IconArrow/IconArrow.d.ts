import type { GenericIconProps } from '../../Icon';
export declare type IconArrowProps = GenericIconProps & {
    direction: 'up' | 'down' | 'left' | 'right';
};
export declare const IconArrow: (props: IconArrowProps) => JSX.Element;
export declare const IconArrowUp: (props: GenericIconProps) => JSX.Element;
export declare const IconArrowDown: (props: GenericIconProps) => JSX.Element;
export declare const IconArrowLeft: (props: GenericIconProps) => JSX.Element;
export declare const IconArrowRight: (props: GenericIconProps) => JSX.Element;
