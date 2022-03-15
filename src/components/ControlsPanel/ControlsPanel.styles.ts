import { css } from '@emotion/css';

export const styles = {
  outer: css`
    display: flex;
    align-items: center;
  `,
  control: css`
    display: block;
    margin-right: 24px;

    &:last-child {
      margin-right: 0px;
    }
  `,
  thin: css`
    margin-right: 16px;
  `,
};
