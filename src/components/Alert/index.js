// @flow
import * as React from 'react';
import { Text } from '../Text';
import { css, cx } from 'emotion';
import { colors } from '../../variables';

const styles = {
  alert: css`
    padding: 15px;
    border: 1px solid;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 16px;
  `,
  success: css`
    border-color: ${colors.intentSuccessBorder};
    background-color: ${colors.intentSuccessBg};
    color: ${colors.intentSuccess};
  `,
  error: css`
    border-color: ${colors.intentDangerBorder};
    background-color: ${colors.intentDangerBg};
    color: ${colors.intentDanger};
  `
};

type AlertProps = {
  className?: string,
  children: React.Node,
  type: 'error' | 'success'
};

export const Alert = ({
  className,
  children,
  type
}: AlertProps) => {
  return (
    <Text
      className={cx(
        styles.alert,
        styles[type],
        className
      )}
      tag='div'
    >
      {children}
    </Text>
  );
}
