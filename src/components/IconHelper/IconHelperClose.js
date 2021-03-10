// @flow
import React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../variables';
import { IconClose, type GenericIconProps } from '../Icon';

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
  `
};

export const IconHelperClose = ({ className, onClick, ...props }: GenericIconProps) => (
  <IconClose className={cx(styles.closeIcon, className)} onClick={onClick} />
);
