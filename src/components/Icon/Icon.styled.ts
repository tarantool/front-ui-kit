import { css } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { colors, iconSize } from '../../variables';

export const styles = {
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
  `,
};
