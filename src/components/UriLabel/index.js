// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { IconLink } from '../Icon';
import { Text } from '../Text';

const styles = {
  uriWrap: css`
    display: flex;
    align-items: center;
  `,
  uriIcon: css`
    margin-right: 4px;
  `,
  uri: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.65);
  `
};

type UriLabelProps = {
  className?: string,
  title?: string,
  uri?: string,
};

export const UriLabel = ({ className, title, uri }: UriLabelProps) => (
  <div className={cx(styles.uriWrap, className)} title={title}>
    <IconLink className={styles.uriIcon} />
    <Text className={styles.uri} variant='h5' tag='span'>{uri}</Text>
  </div>
);
