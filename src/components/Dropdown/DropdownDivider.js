// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';

const styles = {
  divider: css`
    border-bottom: 1px solid ${colors.intentBaseBg};
    margin: 3px 8px 4px;
  `,
};

type DropdownDividerProps = { className?: string };

export const DropdownDivider = ({ className }: DropdownDividerProps) => (
  <div className={cx(styles.divider, className)} onClick={(e) => e.stopPropagation()} />
);
