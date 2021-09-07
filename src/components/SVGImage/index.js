// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

type SVGImageProps = {
  className?: string,
  glyph: SVGGlyph,
  onClick?: (evt: MouseEvent) => void,
};

export const SVGImage = ({ className, glyph, ...props }: SVGImageProps) => {
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
