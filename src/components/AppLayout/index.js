// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../variables';
import { genericStyles } from '../../genericStyles';

const styles = {
  main: css`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  content: css`
    display: block;
    background: ${colors.baseBg};
    flex-grow: 1;
    max-height: 100vh;
    overflow: auto;
  `,
  sidebar: css`
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    z-index: 1;
  `,
};

type AppLayoutProps = {
  children: React.Node,
  className?: string,
  sidebarComponent: React.AbstractComponent<{ className: string }>,
};

export const AppLayout = ({ children, className, sidebarComponent: Sidebar }: AppLayoutProps) => (
  <div className={cx(styles.main, className)}>
    <Sidebar className={styles.sidebar} />
    <div className={cx(styles.content, genericStyles.scrollbars)}>{children}</div>
  </div>
);
