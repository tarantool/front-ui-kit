// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { rgba } from 'emotion-rgba';
import { colors } from '../../variables';
import { textStyles, type TextStyleVariants } from '../Text';

const styles = {
  link: css`
    color: ${rgba(colors.intentPrimary, 0.65)};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${colors.intentPrimary};
    }

    &:active {
      color: ${colors.activeAction};
    }
  `
};

type LinkProps = {
  children:? React.Node,
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
    children,
    href,
    onClick,
    target,
    title,
    variant
  }: LinkProps
) => {
  const textStyle = (variant && textStyles[variant]) || null;

  return (
    <a
      className={cx(textStyle, styles.link, className)}
      href={href}
      onClick={onClick}
      target={target}
      title={title}
    >
      {children}
    </a>
  )
};
