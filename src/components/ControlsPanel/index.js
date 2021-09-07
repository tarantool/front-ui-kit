// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

const styles = {
  outer: css`
    display: flex;
    align-items: center;
  `,
  control: css`
    display: block;
    margin-right: 24px;

    &:last-child {
      margin-right: 0px;
    }
  `,
  thin: css`
    margin-right: 16px;
  `,
};

type ControlsPanelProps = {
  className?: string,
  controls?: React.Node[],
  thin?: boolean, // use thin in modals
};

export const ControlsPanel = ({ className, controls = [], thin }: ControlsPanelProps) => (
  <div className={cx(styles.outer, className)}>
    {controls &&
      controls.filter(Boolean).map((control, index) => {
        return (
          <div key={index} className={cx(styles.control, { [styles.thin]: thin })}>
            {control}
          </div>
        );
      })}
  </div>
);
