import { css } from '@emotion/css';

import { colors } from '../../../../variables';

export const styles = {
  root: css`
    width: 16px;
    height: 16px;
    fill: ${colors.intentPrimary};
  `,
  disabled: css`
    fill: ${colors.intentPrimaryDisabled};
  `,
};
