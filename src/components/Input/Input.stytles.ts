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

export const styles = {
  outerWithAddition: css`
    display: flex;
  `,
  inputWithAddition: css`
    width: auto;
    flex-grow: 1;
  `,
  inputWithIcon: css`
    padding-left: 15px;
    padding-right: 8px;
  `,
  iconWrap: css`
    display: flex;
    align-items: center;
  `,
  clearIcon: css`
    fill: ${colors.dark65};
  `,
  withLeftElement: css`
    & > :first-child {
      align-self: stretch;
      flex-shrink: 0;
      margin: -1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  withRightElement: css`
    & > :last-child {
      align-self: stretch;
      flex-shrink: 0;
      margin: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
};

export const wrapSizes = {
  m: css`
    height: 32px;
  `,
  l: css`
    height: 40px;
  `,
};

export const iconWrapSizes = {
  m: css`
    margin-right: 7px;
  `,
  l: css`
    margin-right: 15px;
  `,
};
