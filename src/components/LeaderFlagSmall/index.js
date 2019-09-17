// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import glyph from './flagSmall.svg';

const styles = {
  flag: css`
    width: 42px;
    height: 8px;
  `
};

type LeaderFlagSmallProps = {
  className?: string,
};

export const LeaderFlagSmall = ({ className }: LeaderFlagSmallProps) => (
  <svg
    viewBox={glyph.viewBox}
    className={cx(styles.flag, className)}
  >
    <use xlinkHref={`#${glyph.id}`}/>
  </svg>
);
