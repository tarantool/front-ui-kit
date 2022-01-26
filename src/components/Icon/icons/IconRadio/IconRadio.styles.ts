import { css } from '@emotion/css';

import { colors } from '../../../../variables';

export const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary};
  stroke: ${colors.intentPrimary};
`;

export const stylesDisabled = css`
  fill: ${colors.intentPrimaryDisabled};
  stroke: ${colors.intentPrimaryDisabled};
`;
