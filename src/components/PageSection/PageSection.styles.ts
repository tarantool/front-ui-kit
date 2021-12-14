import { css } from '@emotion/css';

import { colors } from '../../variables';

export const styles = {
  section: css`
    margin: 0 0 40px;
  `,
  headingPane: css`
    display: flex;
    flex-direction: row;
    align-items: baseline;
  `,
  headingPaneMargin: css`
    margin-bottom: 15px;
  `,
  heading: css`
    /* display: inline; */
  `,
  counter: css`
    color: ${colors.dark15};
  `,
  subTitle: css`
    margin-left: 32px;
  `,
  topRightControls: css`
    margin-left: auto;
  `,
};
