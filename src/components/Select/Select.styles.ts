import { css } from '@emotion/css';

import { colors } from '../../variables';

export const styles = {
  icon: css`
    fill: #595959;
  `,
  input: css`
    & > :first-child {
      cursor: pointer;
      caret-color: transparent;
      user-select: none;
    }
  `,
  selected: css`
    background-color: ${colors.dark2};
  `,
  noData: css`
    text-align: center;
  `,
};
