import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './chevron-up.svg';

import { styles } from './IconChevron.styles';

type IconChevronProps = GenericIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};

export const IconChevron = (props: IconChevronProps) => {
  const { direction = 'up', className, ...otherProps } = props;

  return (
    <Icon
      {...otherProps}
      className={cx(
        styles.icon,
        { [styles.down]: direction === 'down' },
        { [styles.left]: direction === 'left' },
        { [styles.right]: direction === 'right' },
        className
      )}
      glyph={image}
    />
  );
};

export const IconChevronDown = (props: GenericIconProps) => <IconChevron {...props} direction="down" />;

export const IconChevronLeft = (props: GenericIconProps) => <IconChevron {...props} direction="left" />;

export const IconChevronRight = (props: GenericIconProps) => <IconChevron {...props} direction="right" />;
