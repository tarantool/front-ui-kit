import { css } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { colors } from '../../variables';

export const styles = {
  icon: css`
    display: block;
  `,
  iconWrap: css`
    position: relative;
  `,
  children: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  childrenMargin: css`
    margin-right: 8px;
  `,
  input: css`
    clip: rect(0 0 0 0);
    width: 0;
    height: 0;
    margin: -1px;
    appearance: none;

    & + div::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: solid 1px rgba(255, 255, 255, 0);
      border-radius: 3px;
    }

    &:focus + div::before {
      border-color: ${rgba(colors.intentPrimary, 0.55)};
    }
  `,
  label: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
};
