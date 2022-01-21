import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './arrow-left.svg';

import { styles } from './IconArrow.styles';

export type IconArrowProps = GenericIconProps & {
  direction: 'up' | 'down' | 'left' | 'right';
};

export const IconArrow = (props: IconArrowProps) => {
  const { direction, className, ...otherProps } = props;

  return (
    <Icon
      {...otherProps}
      className={cx(
        styles.icon,
        { [styles.down]: direction === 'down' },
        { [styles.right]: direction === 'right' },
        { [styles.up]: direction === 'up' },
        className
      )}
      glyph={image}
    />
  );
};

export const IconArrowUp = (props: GenericIconProps) => <IconArrow {...props} direction="up" />;

export const IconArrowDown = (props: GenericIconProps) => <IconArrow {...props} direction="down" />;

export const IconArrowLeft = (props: GenericIconProps) => <IconArrow {...props} direction="left" />;

export const IconArrowRight = (props: GenericIconProps) => <IconArrow {...props} direction="right" />;
