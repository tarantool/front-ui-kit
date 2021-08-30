// @flow
import * as React from 'react'
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';
import { colors, iconSize } from '../../variables';
import { SVGImage } from '../SVGImage';

const styles = {
  icon: css`
    flex-shrink: 0;
    vertical-align: middle;
    width: ${iconSize};
    height: ${iconSize};
  `,
  state: css`
    fill: red;

    &:hover {
      fill: greenyellow;
    }

    &.active {
      fill: blue;
    }
  `,
  stroke: css`
    stroke: red;

    &:hover {
      fill: greenyellow;
    }

    &.active {
      fill: blue;
    }
  `,
  clickable: css`
    cursor: pointer;
  `,
  active: css``,
  button: css`
    display: block;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;

    &:focus::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: solid 1px ${rgba(colors.intentPrimary, 0.55)};
      border-radius: 3px;
    }
  `
};

type IconProps = {
  active?: boolean; // Выбраное состояние
  className?: string;
  glyph: SVGGlyph,
  hasState?: boolean, // Включение состояния: Normal, Hover, Active
  onClick?: (evt: MouseEvent) => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  stroke?: boolean // Задавать stroke вместо fill
};

export type GenericIconProps = {
  className?: string,
  onClick?: (e: MouseEvent) => void
};


export const Icon = React.memo<IconProps>(({
  active,
  className,
  glyph,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hasState, // TODO: 'hasState' is defined but never used.
  onMouseLeave,
  onMouseEnter,
  onClick,
  stroke
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
        [styles.active]: active
      },
      className
    )}
  />
));
