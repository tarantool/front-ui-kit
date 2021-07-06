// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './chevron-up.svg';

const styles = {
  icon: css`
    fill: #ffffff;
  `,
  down: css`
    transform: rotate(180deg);
  `,
  left: css`
    transform: rotate(270deg);
  `,
  right: css`
    transform: rotate(90deg);
  `
};

type IconChevronProps = {
  ...$Exact<GenericIconProps>,
  direction?: 'up' | 'down' | 'left' | 'right'
}

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
      hasState={true}
    />
  );
};

// export const IconChevronUp = (props: GenericIconProps) => (
//   <IconChevron {...props} direction='up' />
// );

export const IconChevronDown = (props: GenericIconProps) => (
  <IconChevron {...props} direction='down' />
);

export const IconChevronLeft = (props: GenericIconProps) => (
  <IconChevron {...props} direction='left' />
);

export const IconChevronRight = (props: GenericIconProps) => (
  <IconChevron {...props} direction='right' />
);
