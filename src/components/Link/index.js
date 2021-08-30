// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { textStyles, type TextStyleVariants } from '../Text';

// TODO: Add focused state
const styles = {
  link: css`
    color: inherit;
    text-decoration: underline;

    /* &:focus {
      outline: solid 1px;
      outline-offset: 2px;
    } */

    &:hover,
    &:active {
      text-decoration: none;
    }
  `
};

type LinkProps = {
  children?: React.Node,
  className?: string,
  href: string,
  onClick?: (e: MouseEvent) => void,
  target?: string,
  title?: string,
  variant?: TextStyleVariants
};

export const Link = (
  {
    className,
    variant,
    ...props
  }: LinkProps
) => {
  const textStyle = (variant && textStyles[variant]) || null;

  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a
      {...props}
      className={cx(textStyle, styles.link, className)}
    />
  )
};
