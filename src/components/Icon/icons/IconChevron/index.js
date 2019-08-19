import * as React from 'react';
import { css, cx } from 'emotion';
import Icon, { type IconProps } from '../../index';
import image from './chevron-up.svg';

const styles = {
  down: css`
    transform: rotate(180deg);
  `
};

interface IconChevronProps extends IconProps {
  direction: 'top' | 'bottom';
}

export default (props: IconChevronProps) => {
  const { direction, ...otherProps } = props;

  return (
    <Icon
      className={cx({
        [styles.down]: direction === 'bottom'
      })}
      glyph={image}
      hasState={true}
      {...otherProps}
    />
  );
};
