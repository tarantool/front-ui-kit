// @flow
import * as React from 'react';
import { Text } from '../Text';
import { css, cx } from 'emotion';

const styles = {
  alert: css`
    padding: 15px;
    border: 1px solid;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 16px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  `,
  success: css`
    border-color: #b5ec8e;
    background-color: #f6ffee;
  `,
  error: css`
    border-color: #fea39e;
    background-color: #fff1f0;
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
