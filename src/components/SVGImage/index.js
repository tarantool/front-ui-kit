// @flow
import * as React from 'react'
import { css, cx } from 'emotion';

type SVGImageProps = {
  className?: string;
  glyph: SVGGlyph,
  onClick?: (evt: MouseEvent) => void
};

export const SVGImage = (
  {
    className,
    glyph,
    ...props
  }: SVGImageProps
) => {
  const [width, height] = (glyph.viewbox || '').split(' ').slice(2);
  const sizingClassName = width && height
    ? css`
      width: ${width}px;
      height: ${height}px;
    `
    : '';

  return (
    <svg
      {...props}
      className={cx(sizingClassName, className)}
      viewBox={glyph.viewbox}
    >
      <use xlinkHref={`#${glyph.id}`}/>
    </svg>
  );
};