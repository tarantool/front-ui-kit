// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import image from './arrow-left.svg';

const styles = {
  icon: css`
    width: 16px;
    height: 16px;
    fill: #ffffff;
  `,
  right: css`
    transform: rotate(180deg);
  `,
  down: css`
    transform: rotate(270deg);
  `,
  up: css`
    transform: rotate(90deg);
  `,
};
type IconArrowProps = $Exact<GenericIconProps> & {
  direction: 'up' | 'down' | 'left' | 'right',
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
      hasState={true}
    />
  );
};

export const IconArrowUp = (props: GenericIconProps) => <IconArrow {...props} direction="up" />;

export const IconArrowDown = (props: GenericIconProps) => <IconArrow {...props} direction="down" />;

export const IconArrowLeft = (props: GenericIconProps) => <IconArrow {...props} direction="left" />;

export const IconArrowRight = (props: GenericIconProps) => <IconArrow {...props} direction="right" />;
