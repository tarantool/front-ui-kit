import { FC, MouseEvent } from 'react';
import type { GenericIconProps, SVGGlyphTypes } from './Icon.types';
export type { SVGGlyphTypes, GenericIconProps };
export declare type IconProps = {
    active?: boolean;
    className?: string;
    glyph: SVGGlyphTypes;
    /**
     * @deprecated
     */
    hasState?: boolean;
    onClick?: (event: MouseEvent) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    stroke?: boolean;
};
export declare const Icon: FC<IconProps>;
