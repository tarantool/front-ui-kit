// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import type { GenericIconProps } from '../Icon';
import { IconClose } from '../Icon';

const styles = {
  closeIcon: css`
    fill: ${colors.dark40};
    transition-timing-function: ease-in-out;
    transition-duration: 0.12s;
    transition-property: fill;
    cursor: pointer;

    &:hover {
      fill: ${colors.dark25};
    }
  `,
};

export const IconHelperClose = ({ className, onClick }: GenericIconProps) => (
  <IconClose className={cx(styles.closeIcon, className)} onClick={onClick} />
);
