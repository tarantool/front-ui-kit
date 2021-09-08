// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { ControlsPanel } from '../../../ControlsPanel';

const styles = {
  wrap: css`
    flex-shrink: 0;
    display: flex;
    padding: 0;
    margin: 20px 0 0;
  `,
  controls: css`
    padding-left: 16px;
    margin-left: auto;
  `,
};

type ModalFooterProps = {
  children?: React.Node,
  className?: string,
  controls?: React.Node[],
};

export const ModalFooter = ({ children, className, controls }: ModalFooterProps) => (
  <div className={cx(styles.wrap, className)}>
    {children}
    {controls && <ControlsPanel className={cx(styles.controls)} controls={controls} thin />}
  </div>
);
