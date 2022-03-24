import type { MouseEvent } from 'react';

export type GenericIconProps = {
  className?: string;
  onClick?: (event: MouseEvent) => void;
};

export type SVGGlyphTypes = {
  content: string;
  id: string;
  node: SVGSVGElement;
  viewBox: string;
};
