// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { TarantoolLogoSpinner } from '../TarantoolLogoSpinner';

const styles = {
  wrap: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 69px);
  `,
  image: css`
    height: 74px;
    width: 100px;
  `,
};

type SectionPreloaderProps = { className?: string };

export const SectionPreloader = ({ className }: SectionPreloaderProps) => (
  <div className={cx(styles.wrap, className)}>
    <TarantoolLogoSpinner className={styles.image} />
  </div>
);
