import React, { FC, MouseEvent } from 'react';
import { cx } from '@emotion/css';

import { SVGImage } from '../SVGImage';
import { styles } from './Icon.styled';

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

export type IconProps = {
  active?: boolean; // Выбраное состояние
  className?: string;
  glyph: SVGGlyphTypes;
  /**
   * @deprecated
   */
  hasState?: boolean; // Включение состояния: Normal, Hover, Active
  onClick?: (event: MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  stroke?: boolean; // Задавать stroke вместо fill
};

export const Icon: FC<IconProps> = React.memo<IconProps>(
  ({ active, className, glyph, onMouseLeave, onMouseEnter, onClick, stroke }: IconProps) => (
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
