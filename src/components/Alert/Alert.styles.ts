import { css } from '@emotion/css';

import { colors } from '../../variables';

export const styles = {
  alert: css`
    padding: 15px;
    border: 1px solid;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 16px;
  `,
  success: css`
    border-color: ${colors.intentSuccessBorder};
    background-color: ${colors.intentSuccessBg};
    color: ${colors.intentSuccess};
  `,
  error: css`
    border-color: ${colors.intentDangerBorder};
    background-color: ${colors.intentDangerBg};
    color: ${colors.intentDanger};
  `,
};
