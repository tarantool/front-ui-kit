// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { IconBoldArrowRight, IconLink } from '../Icon';
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
  `,
  hereIcon: css`
    fill: ${colors.intentWarningAccent};
  `,
};

const IconHere = ({ className, ...props }) => (
  <IconBoldArrowRight className={cx(styles.hereIcon, className)} {...props} />
);

type UriLabelProps = {
  className?: string,
  icon?: React.AbstractComponent<any>,
  title?: string,
  uri?: string,
  weAreHere?: boolean,
};

export const UriLabel = ({ className, icon, title, uri, weAreHere }: UriLabelProps) => {
  const Icon = icon || (weAreHere ? IconHere : IconLink);

  return (
    <div className={cx(styles.uriWrap, className)} title={title}>
      <Icon className={styles.uriIcon} />
      <Text className={styles.uri} variant="p" tag="span">
        {uri}
      </Text>
    </div>
  );
};
