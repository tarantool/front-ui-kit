// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { Tag } from '../Tag';
import { Text } from '../Text';

const styles = {
  wrapper: css`
    display: flex;
    align-items: baseline;
    margin-bottom: -4px;
    user-select: none;
  `,
  heading: css`
    margin-right: 8px;
    opacity: 0.6;
  `,
  tag: css`
    margin-bottom: 4px;
  `,
};

export type TagsListProps<T> = {
  className?: string,
  heading?: string,
  highlightingOnHover?: string,
  tagClassName?: string,
  values?: T[],
  onTagClick?: (value: T) => void,
  renderItem: (value: T) => string,
};

const toString = (v: any): string => v + '';

/**
 * @deprecated
 */
export const TagsList = <T>({
  className,
  heading,
  highlightingOnHover,
  onTagClick,
  renderItem,
  tagClassName,
  values,
}: TagsListProps<T>) => (
  <div className={cx(styles.wrapper, className)}>
    {heading && (
      <Text className={styles.heading} variant="h5" tag="span">
        <b>{`${heading}:`}</b>
      </Text>
    )}
    <div>
      {(values || []).map((value, index) => (
        <Tag
          key={index}
          className={cx(styles.tag, tagClassName)}
          onClick={() => onTagClick && onTagClick(value)}
          text={renderItem ? renderItem(value) : toString(value)}
          highlightingOnHover={highlightingOnHover}
        />
      ))}
    </div>
  </div>
);
