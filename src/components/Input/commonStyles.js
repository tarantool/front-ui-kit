// @flow
import { css } from '@emotion/css';

import { baseFontFamily, colors } from '../../variables';

export const commonInputStyles = {
  outer: css`
    display: flex;
    border: solid 1px ${colors.intentBase};
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #ffffff;
  `,
  disabled: css`
    color: ${colors.intentBase};
  `,
  disabledOuter: css`
    background-color: ${colors.dark2};
  `,
  focused: css`
    border-color: ${colors.dark40};
  `,
  error: css`
    border-color: ${colors.intentDanger};
  `,
  input: css`
    display: block;
    align-self: stretch;
    width: 100%;
    min-width: 0;
    height: 100%;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    color: ${colors.dark};
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    resize: none;

    &::placeholder {
      color: ${colors.intentBase};
    }
  `,
};

export const commonInputSizes = {
  m: css`
    padding-top: 5px;
    padding-bottom: 5px;
  `,
  l: css`
    padding-top: 9px;
    padding-bottom: 9px;
  `,
};
