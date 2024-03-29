import React, { MouseEvent } from 'react';
import { css, cx } from '@emotion/css';

import type { SVGGlyphTypes } from '../Icon/Icon.types';

type SVGImageProps = {
  className?: string;
  glyph?: SVGGlyphTypes;
  onClick?: (evt: MouseEvent) => void;
  onMouseLeave?: (evt: MouseEvent) => void;
  onMouseEnter?: (evt: MouseEvent) => void;
};

export const SVGImage = ({ className, glyph, ...props }: SVGImageProps) => {
  if (!glyph) {
    return null;
  }

  const [width, height] = (glyph.viewBox || '').split(' ').slice(2);

  const sizingClassName =
    width && height
      ? css`
          width: ${width}px;
          height: ${height}px;
        `
      : '';

  return (
    <svg {...props} className={cx(sizingClassName, className)} viewBox={glyph.viewBox}>
      <use xlinkHref={`#${glyph.id}`} />
    </svg>
  );
};
