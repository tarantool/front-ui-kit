// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../variables';
import { Text } from '../Text';
import { IconHelperClose } from '../IconHelper';
import { keyFrames } from '../../variables';

const styles = {
  wrap: css`
    position: relative;
    width: 530px;
    padding: 20px;
    border: solid 1px;
    box-sizing: border-box;
    border-radius: 10px;
    animation: 0.2s linear ${keyFrames.fadeIn};
  `,
  closeBtn: css`
    position: absolute;
    top: 20px;
    right: 20px;
  `,
  heading: css`
    display: block;
    margin: 0 25px 5px 0;
    overflow: hidden;
  `,
  text: css`
    display: block;
    margin: 0 25px 0 0;
    overflow: hidden;
    color: ${colors.dark};
  `,
  btmMargin: css`
    margin-bottom: 5px;
  `
};

const intentStyles = {
  error: {
    wrap: css`
      border-color: ${colors.intentDangerBorder};
      background-color: ${colors.intentDangerBg};
    `,
    heading: css`
      color: ${colors.intentWarningAccent};
    `
  },
  success: {
    wrap: css`
      border-color: ${colors.intentSuccessBorder};
      background-color: ${colors.intentSuccessBg};
    `,
    heading: css`
      color: ${colors.intentSuccess};
    `
  }
};

type Props = {
  heading: string,
  text?: string,
  children?: React.Node,
  className?: string,
  intent: 'error' | 'success',
  onClose: (e: MouseEvent) => void
};

export const PopupNotificationItem = (
  {
    heading,
    text,
    children,
    className,
    intent = 'success',
    onClose
  }: Props
) => (
  <div
    className={cx(
      styles.wrap,
      intentStyles[intent].wrap,
      className
    )}
  >
    <Text className={cx(styles.heading, intentStyles[intent].heading)} variant='h4' tag='span'>{heading}</Text>
    <Text className={cx(styles.text, { [styles.btmMargin]: !!children })}>{text}</Text>
    {children}
    <IconHelperClose className={styles.closeBtn} onClick={onClose} />
  </div>
);
