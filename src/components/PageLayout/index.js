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
    margin-bottom: 15px;
  `,
  heading: css`
    margin-right: auto;
  `
};

type PageLayoutProps = {
  children: React.Node,
  className?: string,
  controls?: React.Node[],
  heading?: string,
  headingContent?: React.Node,
  wide?: boolean
};

export const PageLayout = ({
  children,
  className,
  controls,
  heading,
  headingContent,
  wide
}: PageLayoutProps) => (
  <div className={cx(styles.page, { [styles.wide]: wide }, className)}>
    {(heading || controls || headingContent) && (
      <div className={styles.headingPanel}>
        {heading && <Text className={styles.heading} variant='h1'>{heading}</Text>}
        {headingContent}
        {controls && <ControlsPanel controls={controls} />}
      </div>
    )}
    {children}
  </div>
);
