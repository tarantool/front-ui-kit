// @flow
import React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../variables';

const styles = {
  indicator: css`
    display: inline-block;
    flex-shrink: 0;
    margin: 8px;
    background-color: ${colors.intentBaseBg};
    border-radius: 50%;
  `,
  state: {
    bad: css`
      background-color: ${colors.intentDanger};
    `,
    good: css`
      background-color: ${colors.intentSuccess};
    `,
    inactive: css`
      background-color: ${colors.intentBaseBg};
    `,
    middle: css`
      background-color: ${colors.intentWarning};
    `,
  },
  size: {
    s: css`
      width: 6px;
      height: 6px;
    `,
    // m: css`
    //   width: 13px;
    //   height: 13px;
    // `,
    // l: css`
    //   width: 16px;
    //   height: 16px;
    // `
  },
};

type DotIndicatorProps = {
  className?: string,
  // size?: 's',
  state: 'inactive' | 'good' | 'bad' | 'middle',
};

export const DotIndicator = ({
  className,
  // size = 's',
  state = 'inactive',
}: DotIndicatorProps) => {
  return <span className={cx(styles.indicator, styles.state[state], styles.size.s, className)} />;
};
