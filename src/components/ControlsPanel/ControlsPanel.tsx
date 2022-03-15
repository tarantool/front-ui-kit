import React, { FC } from 'react';
import { cx } from '@emotion/css';

import { styles } from './ControlsPanel.styles';

type ControlsPanelProps = {
  className?: string;
  controls?: React.ReactNode[];
  thin?: boolean; // use thin in modals
};

export const ControlsPanel: FC<ControlsPanelProps> = ({ className, controls = [], thin }: ControlsPanelProps) => (
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
