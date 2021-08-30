// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
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
  message?: string,
  title?: string
};

export const HealthStatus = ({
  className,
  defaultMessage,
  status,
  message,
  title
}: HealthStatusProps) => (
  <Text className={cx(styles.status, className)} variant='p' tag='div' title={title}>
    <DotIndicator state={status === 'healthy' ? 'good' : 'bad'} />
    {message || defaultMessage || status}
  </Text>
);
