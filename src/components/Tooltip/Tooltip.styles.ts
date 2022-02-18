import { css } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { colors, zIndex } from '../../variables';

export const CORNER_HEIGHT = 8;

export const styles = {
  tooltip: ({ cornerPositionX }) => css`
    position: absolute;
    z-index: ${zIndex.tooltip};
    max-width: 400px;
    padding: 5px 8px;
    color: #ffffff;
    background: ${rgba(colors.dark, 0.8)};
    border-radius: 4px;
    // TODO FIX
    border: solid 0 transparent;
    &::after {
      content: '';
      position: absolute;
      left: calc(${cornerPositionX}px - 8px);
      bottom: -${CORNER_HEIGHT}px;
      border-left: solid ${CORNER_HEIGHT}px transparent;
      border-right: solid ${CORNER_HEIGHT}px transparent;
      border-top: solid ${CORNER_HEIGHT}px ${rgba(colors.dark, 0.8)};
    }

    &::before {
      position: absolute;
      left: calc(${cornerPositionX}px - 8px);
      top: -${CORNER_HEIGHT}px;
      border-left: solid ${CORNER_HEIGHT}px transparent;
      border-right: solid ${CORNER_HEIGHT}px transparent;
      border-bottom: solid ${CORNER_HEIGHT}px ${rgba(colors.dark, 0.8)};
    }
  `,
  largePadding: css`
    padding: 16px;
  `,
  cornerUp: css`
    &::after {
      content: none;
    }

    &::before {
      content: '';
    }
  `,
  wrapper: css`
    cursor: pointer;
  `,
};
