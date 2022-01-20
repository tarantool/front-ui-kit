import React, { FC, MouseEvent } from 'react';
import { cx } from '@emotion/css';

import { SVGImage } from '../SVGImage';
import { styles } from './Icon.styled';

type IconProps = {
  active?: boolean; // Выбраное состояние
  className?: string;
  glyph?: SVGGlyphTypes;
  hasState?: boolean; // Включение состояния: Normal, Hover, Active
  onClick?: (evt: MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  stroke?: boolean; // Задавать stroke вместо fill
};

export type GenericIconProps = {
  className?: string;
  onClick?: (e: MouseEvent) => void;
};

export type SVGGlyphTypes = {
  content: string;
  id: string;
  node: SVGSVGElement;
  viewBox: string;
};

export const Icon: FC<IconProps> = React.memo<IconProps>(
  ({
    active,
    className,
    glyph,
    // hasState, // TODO: 'hasState' is defined but never used.
    onMouseLeave,
    onMouseEnter,
    onClick,
    stroke,
  }: IconProps) => (
    <SVGImage
      glyph={glyph}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={cx(
        styles.icon,
        {
          [styles.stroke]: stroke,
          [styles.clickable]: !!onClick,
          [styles.active]: active,
        },
        className
      )}
    />
  )
);
