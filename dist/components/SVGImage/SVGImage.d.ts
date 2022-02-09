import { MouseEvent } from 'react';
import { SVGGlyphTypes } from '../Icon';
declare type SVGImageProps = {
    className?: string;
    glyph?: SVGGlyphTypes;
    onClick?: (evt: MouseEvent) => void;
    onMouseLeave?: (evt: MouseEvent) => void;
    onMouseEnter?: (evt: MouseEvent) => void;
};
export declare const SVGImage: ({ className, glyph, ...props }: SVGImageProps) => JSX.Element | null;
export {};
