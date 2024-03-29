// @flow
// TODO: move to uikit
import React from 'react';
import { css, cx } from '@emotion/css';
import * as R from 'ramda';

import { colors } from '../../variables';

const COLORS = {
  success: colors.intentSuccess,
  warning: colors.intentWarning,
  danger: colors.intentDanger,
};

const style = css`
  position: relative;
  height: 4px;
  width: 100%;
  border-radius: 3px;
  background-color: #e1e1e1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    min-width: 4px;
    border-radius: 3px;
  }
`;

const defineStatus = R.cond([
  [R.lt(66), R.always('danger')],
  [R.lt(33), R.always('warning')],
  [R.T, R.always('success')],
]);

type ProgressBarProps = {
  className?: string,
  percents: number,
  intention?: 'danger' | 'warning' | 'success',
};

export const ProgressBar = ({ className, percents, intention = defineStatus(percents) }: ProgressBarProps) => {
  const bar = css`
    &::before {
      width: ${percents}%;
      background-color: ${COLORS[intention]};
    }
  `;

  return <div className={cx(style, bar, className)} />;
};
