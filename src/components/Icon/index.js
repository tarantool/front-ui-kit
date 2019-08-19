// @flow
import * as React from 'react'
import { css, cx } from 'emotion';
import { iconSize } from '../../variables';

const styles = {
  icon: css`
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

  clicked: css`
    cursor: pointer;
  `,

  active: css``
};

type Glyph = {
  content: string,
  id: string,
  node: any,
  viewBox: string,
};

interface IconProps {
  active?: boolean; // Выбраное состояние
  className?: string;
  glyph: Glyph,
  hasState?: boolean, // Включение состояния: Normal, Hover, Active
  onClick?: (evt: MouseEvent) => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  stroke?: boolean // Задавать stroke вместо fill
}

const Icon = ({
  active,
  className,
  glyph,
  hasState,
  onMouseLeave,
  onMouseEnter,
  onClick,
  stroke
}: IconProps) => {
  const isInteractive = onClick || onMouseEnter || onMouseLeave;

  const svg = (
    <svg
      viewBox={glyph.viewBox}
      className={cx(
        styles.icon,
        {
          [styles.state]: hasState,
          [styles.stroke]: stroke,
          [styles.clicked]: !!onClick,
          [styles.active]: active
        },
        className,
      )}
    >
      <use xlinkHref={`#${glyph.id}`}/>
    </svg>
  );

  return isInteractive
    ? (
      <button
        className={cx(
          styles.icon,
          {
            [styles.state]: hasState,
            [styles.stroke]: stroke,
            [styles.clicked]: !!onClick,
            [styles.active]: active
          },
          className,
        )}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        type='button'
      >
        {svg}
      </button>
    )
    : svg;
};

export default Icon;
