import { css } from '@emotion/css';

import { colors } from '../../../../variables';

export const styles = {
  icon: css`
    width: 16px;
    height: 16px;
    fill: ${colors.dark65};
  `,
  asc: css`
    transform: rotateX(180deg);
  `,
};
