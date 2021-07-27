// @flow
import * as React from 'react'
import { css, cx } from 'emotion'
import { colors } from '../../variables';
import { ControlsPanel } from '../ControlsPanel';
import { IconHelperClose } from '../IconHelper';
import { Text } from '../Text';

const styles = {
  splash: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${colors.intentDangerBg};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.11);
    color: ${colors.intentWarningAccent};
  `,
  children: css`
    color: ${colors.intentWarningAccent};
  `,
  close: css`
    position: absolute;
    top: calc(50% - 8px);
    right: 16px;
  `,
  closePadding: css`
    padding-right: 48px;
  `,
  controls: css`
    flex-shrink: 0;
  `,
  controlsMargin: css`
    margin-left: 24px;
  `
}

export type NotificationSplashProps = {
  className?: string,
  children?: React.Node,
  controls?: React.Node[],
  onClose?: (e: MouseEvent) => void
};

export const NotificationSplash = (
  {
    className,
    children,
    controls,
    onClose
  }: NotificationSplashProps
) => (
  <div
    className={cx(
      styles.splash,
      { [styles.closePadding]: onClose },
      className
    )}
  >
    <Text className={styles.children} tag='span'>
      {children}
    </Text>
    <ControlsPanel
      className={cx(
        styles.controls,
        { [styles.controlsMargin]: children && controls }
      )}
      controls={controls}
    />
    {onClose && <IconHelperClose className={styles.close} onClick={onClose} />}
  </div>
);
