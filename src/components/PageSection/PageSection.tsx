import React, { ReactNode } from 'react';
import { cx } from '@emotion/css';

import { ControlsPanel } from '../ControlsPanel';
import { Text } from '../Text';

import { styles } from './PageSection.styles';

export interface PageSectionProps {
  children?: ReactNode;
  className?: string;
  title?: string | ReactNode;
  titleCounter?: number;
  subTitle?: string | ReactNode;
  topRightControls?: ReactNode[];
}

export const PageSection = ({
  children,
  className,
  titleCounter,
  subTitle,
  title,
  topRightControls,
}: PageSectionProps) => {
  const isHeadingPaneVisible = title || titleCounter !== undefined || subTitle || topRightControls;

  return (
    <section className={cx(styles.section, className)}>
      {isHeadingPaneVisible && (
        <div className={cx(styles.headingPane, { [styles.headingPaneMargin]: Boolean(children) })}>
          {title && (
            <Text className={styles.heading} variant="h2">
              {title}
            </Text>
          )}
          {titleCounter !== undefined && (
            <Text className={styles.counter} variant="h2">
              &nbsp;
              {titleCounter}
            </Text>
          )}
          {subTitle && (
            <Text className={styles.subTitle} variant="p" tag="span">
              {subTitle}
            </Text>
          )}
          {topRightControls && <ControlsPanel className={styles.topRightControls} controls={topRightControls} />}
        </div>
      )}
      {children}
    </section>
  );
};
