import { FC, MouseEvent } from 'react';
export declare type GenericIconProps = {
    className?: string;
    onClick?: (event: MouseEvent) => void;
};
export declare type SVGGlyphTypes = {
    content: string;
    id: string;
    node: SVGSVGElement;
    viewBox: string;
};
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
