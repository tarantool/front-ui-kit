import { css } from '@emotion/css';

import { colors } from '../../variables';

export const styles = {
  input: css`
    margin-top: 6px;
  `,
  message: css`
    display: block;
    min-height: 20px;
  `,
  errorMessage: css`
    color: ${colors.intentDanger};
  `,
};
