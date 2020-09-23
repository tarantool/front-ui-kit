// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';

const styles = {
  page: css`
    display: flex;
    flex-direction: column;
    max-width: 1420px; /* 1360 + 30 + 30 */
    min-width: 922px;
    padding: 0 30px;
    margin: 30px auto 30px;
  `,
  wide: css`
    max-width: none;
  `,
  headingPanel: css`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
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
  `
};

type PageLayoutProps = {
  children: React.Node,
  className?: string,
  topLeftControls?: React.Node[],
  topRightControls?: React.Node[],
  heading?: string,
  headingContent?: React.Node,
  wide?: boolean
};

export const PageLayout = ({
  children,
  className,
  topLeftControls,
  topRightControls,
  heading,
  headingContent,
  wide
}: PageLayoutProps) => (
  <div className={cx(styles.page, { [styles.wide]: wide }, className)}>
    {(heading || topRightControls || headingContent) && (
      <div className={styles.headingPanel}>
        {heading && (
          <Text
            className={cx({ [styles.divider]: !topLeftControls })}
            variant='h1'
          >
            {heading}
          </Text>
        )}
        {topLeftControls && (
          <ControlsPanel
            className={cx(styles.leftControls, styles.divider)}
            controls={topLeftControls}
            thin
          />
        )}
        {headingContent}
        {topRightControls && (
          <ControlsPanel
            className={styles.rightControls}
            controls={topRightControls}
            thin
          />
        )}
      </div>
    )}
    {children}
  </div>
);
