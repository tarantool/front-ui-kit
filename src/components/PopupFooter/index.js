// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { ControlsPanel } from '../ControlsPanel';

const styles = {
  wrap: css`
    display: flex;
    padding: 8px 16px;
  `,
  controls: css`
    padding-left: 16px;
    margin-left: auto;
  `
};

type PopupFooterProps = {
  children?: React.Node,
  className?: string,
  controls?: React.Node[]
};

export const PopupFooter = ({ children, className, controls }: PopupFooterProps) => (
  <div className={cx(styles.wrap, className)}>
    {children}
    {controls && (
      <ControlsPanel className={cx(styles.controls)} thin>
        {controls}
      </ControlsPanel>
    )}
  </div>
);
