// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { appLayoutTopPanelHeight, pageLayoutMinWidth } from '../../variables';
import type { ActionsBreadCrumbs, BreadcrumbsItem } from '../Breadcrumbs';
import { Breadcrumbs } from '../Breadcrumbs';
import { ControlsPanel } from '../ControlsPanel';

const styles = {
  header: css`
    height: ${appLayoutTopPanelHeight}px;
    min-width: ${pageLayoutMinWidth}px;
    background: #ffffff;
    width: 100%;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  crumbs: css`
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  `,
  controls: css`
    display: flex;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 20px;
  `,
};

type AppHeaderProps = {
  ...ActionsBreadCrumbs,
  appName?: string,
  breadcrumbs: BreadcrumbsItem[],
  className?: string,
  controls?: React.Node[],
};

export const AppHeader = ({ appName, breadcrumbs, className, controls, onLinkClick }: AppHeaderProps) => (
  <div className={cx(styles.header, className)}>
    <Breadcrumbs className={styles.crumbs} items={breadcrumbs} appName={appName} onLinkClick={onLinkClick} />
    <ControlsPanel className={styles.controls} controls={controls} thin />
  </div>
);
