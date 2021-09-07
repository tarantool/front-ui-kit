import { ReactNode } from 'react';
import { textStyles } from './Text.styles';
export { textStyles };
export declare type TextStyleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'basic' | 'code';
export interface TextProps {
    className?: string;
    children?: ReactNode;
    tag?: string;
    upperCase?: boolean;
    noCase?: boolean;
    title?: string;
    variant?: TextStyleVariants;
}
export declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLElement>>;
