// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { SVGImage } from '../SVGImage';
import flagLight from './flag-light.svg';
import flag from './flag.svg';

const styles = {
  wrap: css`
    position: relative;
    width: 14px;
    height: 17px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    &:hover {
      height: 59px;
    }
  `,
  flag: css`
    position: absolute;
    left: 0;
    bottom: 0;
  `,
};

const intentions = {
  good: css`
    fill: ${colors.intentSuccessBorder};
  `,
  bad: css`
    fill: ${colors.intentDanger};
  `,
  warning: css`
    fill: ${colors.intentWarning};
  `,
};

type LeaderFlagProps = {
  className?: string,
  state: 'warning' | 'good' | 'bad',
  title?: string,
};

export const LeaderFlag = ({ className, state = 'bad', title }: LeaderFlagProps) => {
  const glyph = state === 'bad' ? flagLight : flag;

  return (
    <div className={cx(styles.wrap, className)} title={title}>
      <SVGImage glyph={glyph} className={cx(styles.flag, intentions[state])} />
    </div>
  );
};
