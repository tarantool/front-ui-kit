import { MouseEvent } from 'react';
import type { SVGGlyphTypes } from '../Icon/Icon.types';
declare type SVGImageProps = {
    className?: string;
    glyph?: SVGGlyphTypes;
    onClick?: (evt: MouseEvent) => void;
    onMouseLeave?: (evt: MouseEvent) => void;
    onMouseEnter?: (evt: MouseEvent) => void;
};
export declare const SVGImage: ({ className, glyph, ...props }: SVGImageProps) => JSX.Element | null;
export {};
