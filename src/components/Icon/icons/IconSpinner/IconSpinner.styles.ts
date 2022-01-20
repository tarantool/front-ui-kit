import { css, keyframes } from '@emotion/css';

const animations = keyframes`
  to {
    transform: rotate(-1turn);
  }
`;

export const styles = css`
  width: 16px;
  height: 16px;
  animation: ${animations} 720ms infinite steps(8);
`;
