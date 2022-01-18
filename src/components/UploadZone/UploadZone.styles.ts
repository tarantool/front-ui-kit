import { css } from '@emotion/css';

import { colors } from '../../variables';

export const styles = {
  root: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${colors.intentBase};
    border-style: dashed;
    background-color: ${colors.intentBaseActive};
    transition: border 0.24s ease-in-out;
    outline: none;
    cursor: pointer;
  `,
  dragover: css`
    border-color: ${colors.intentPrimary};
  `,
  icon: css`
    width: 100px;
    height: 80px;
    margin-bottom: 16px;
  `,
  preloader: css`
    width: 68px;
    height: 48px;
    margin-bottom: 16px;
  `,
  notice: css`
    margin-top: 10px;
    color: ${colors.dark65};
    text-align: center;
    white-space: pre-line;
  `,
};
