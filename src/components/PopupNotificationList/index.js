// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { PopupNotificationItem } from './PopupNotificationItem';
import { zIndex } from '../../variables';

const styles = {
  container: css`
    position: fixed;
    right: 35px;
    bottom: 0;
    z-index: ${zIndex.notification};
    max-height: calc(100vh - 35px);
    overflow: hidden;
    mask-image: linear-gradient(0deg, transparent 0, rgba(0, 0, 0, 1.0) 40px);
  `,
  item: css`
    margin-bottom: 35px;
  `
};

export type Notification = {
  heading: string,
  text?: string,
  details?: React.Node,
  intent: 'error' | 'success',
  key?: string | number,
  onClose: (e: MouseEvent) => void,
  onMouseEnter?: (e: MouseEvent) => void,
  onMouseLeave?: (e: MouseEvent) => void
};

type Props = {
  notifications?: Notification[],
  className?: string
};

export const PopupNotificationList = ({ className, notifications }: Props) => (
  <div className={cx(styles.container, className)}>
    {notifications && [...notifications].reverse().map(({
      details,
      text,
      onClose,
      heading,
      intent,
      key,
      onMouseEnter,
      onMouseLeave
    }) => (
      <PopupNotificationItem
        className={styles.item}
        heading={heading}
        intent={intent}
        onClose={onClose}
        text={text}
        key={key}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {details}
      </PopupNotificationItem>
    ))}
  </div>
);
