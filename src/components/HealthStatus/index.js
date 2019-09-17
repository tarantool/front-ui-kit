// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { DotIndicator } from '../DotIndicator';
import { Text } from '../Text';

const styles = {
  status: css`
    display: flex;
    align-items: baseline;
    flex-basis: 153px;
    color: rgba(0, 0, 0, 0.65);
  `
};

type HealthStatusProps = {
  className?: string,
  defaultMessage?: string,
  status?: string,
  message?: string
};

export const HealthStatus = ({
  className,
  defaultMessage,
  status,
  message
}:
HealthStatusProps) => (
  <Text className={cx(styles.status, className)} variant='p' tag='div'>
    <DotIndicator state={status === 'healthy' ? 'good' : 'bad'} />
    {message || defaultMessage || status}
  </Text>
);
