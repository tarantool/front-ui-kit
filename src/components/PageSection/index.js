// @flow
// TODO: move to uikit
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';

const styles = {
  section: css`
    margin: 0 0 40px;
  `,
  headingPane: css`
    display: flex;
    flex-direction: row;
    align-items: baseline;
  `,
  headingPaneMargin: css`
    margin-bottom: 15px;
  `,
  heading: css`
    /* display: inline; */
  `,
  subTitle: css`
    margin-left: 32px;
  `,
  topRightControls: css`
    margin-left: auto;
  `
};

type PageSectionProps = {
  children?: React.Node,
  className?: string,
  subTitle?: string | React.Node,
  title?: string | React.Node,
  topRightControls?: React.Node[]
};

export const PageSection = ({
  children,
  className,
  subTitle,
  title,
  topRightControls
}:
PageSectionProps) => {
  const isHeadingPaneVisible = title || subTitle || topRightControls;

  return (
    <section className={cx(styles.section, className)}>
      {isHeadingPaneVisible && (
        <div
          className={cx(
            styles.headingPane,
            { [styles.headingPaneMargin]: children }
          )}
        >
          {title && (<Text className={styles.heading} variant='h2'>{title}</Text>)}
          {subTitle && (<Text className={styles.subTitle} variant='p' tag='span'>{subTitle}</Text>)}
          {topRightControls && <ControlsPanel className={styles.topRightControls} controls={topRightControls} />}
        </div>
      )}
      {children}
    </section>
  );
};
