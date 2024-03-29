// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { appLayoutTopPanelHeight, pageLayoutMaxWidth, pageLayoutMinWidth } from '../../variables';
import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';

const styles = {
  page: css`
    display: flex;
    flex-direction: column;
    max-width: ${pageLayoutMaxWidth}px;
    min-width: ${pageLayoutMinWidth}px;
    height: calc(100% - ${appLayoutTopPanelHeight}px - 60px);
    padding: 0 30px;
    margin: 30px auto 30px;
    box-sizing: border-box;
  `,
  pageWithAbovePanel: css`
    margin-top: 20px;
  `,
  wide: css`
    max-width: none;
  `,
  aboveHeadingPanel: css`
    flex-shrink: 0;
    margin: 0 0 20px;
  `,
  headingPanel: css`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    flex-shrink: 0;
    margin-bottom: 15px;
  `,
  leftControls: css`
    align-self: center;
    margin-left: 40px;
  `,
  rightControls: css`
    align-self: center;
  `,
  divider: css`
    margin-right: auto;
  `,
};

export type PageLayoutProps = {
  children: React.Node,
  className?: string,
  topLeftControls?: React.Node[],
  topRightControls?: React.Node[],
  aboveComponent?: React.AbstractComponent<{ className: string }>,
  heading?: string,
  headingContent?: React.Node,
  wide?: boolean,
};

export const PageLayout = (
  {
    children,
    className,
    heading,
    headingContent,
    aboveComponent: AboveComponent,
    topLeftControls,
    topRightControls,
    wide,
  }: PageLayoutProps,
  ref: Function
) => (
  <div
    className={cx(
      styles.page,
      {
        [styles.wide]: wide,
        [styles.pageWithAbovePanel]: !!AboveComponent,
      },
      className
    )}
    ref={ref && 'current' in ref ? ref : null}
  >
    {!!AboveComponent && <AboveComponent className={styles.aboveHeadingPanel} />}
    {(heading || topRightControls || headingContent) && (
      <div className={styles.headingPanel}>
        {heading && (
          <Text className={cx({ [styles.divider]: !topLeftControls })} variant="h1">
            {heading}
          </Text>
        )}
        {topLeftControls && (
          <ControlsPanel className={cx(styles.leftControls, styles.divider)} controls={topLeftControls} thin />
        )}
        {headingContent}
        {topRightControls && <ControlsPanel className={styles.rightControls} controls={topRightControls} thin />}
      </div>
    )}
    {children}
  </div>
);

export const PageLayoutWithRef = React.forwardRef<PageLayoutProps, HTMLElement>(PageLayout);
