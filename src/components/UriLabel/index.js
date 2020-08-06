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
    width: 14px;
    height: 14px;
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
  icon?: React.AbstractComponent<any>,
  title?: string,
  uri?: string,
};

export const UriLabel = ({ className, icon, title, uri }: UriLabelProps) => {
  const Icon = icon || IconLink;

  return (
    <div className={cx(styles.uriWrap, className)} title={title}>
      <Icon className={styles.uriIcon} />
      <Text className={styles.uri} variant='p' tag='span'>{uri}</Text>
    </div>
  );
}
