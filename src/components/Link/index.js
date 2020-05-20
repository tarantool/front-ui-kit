// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { rgba } from 'emotion-rgba';
import { colors } from '../../variables';

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
  title?: string
};

export const Link = (
  {
    className,
    children,
    href,
    onClick,
    target,
    title
  }: LinkProps
) => {
  return (
    <a
      className={cx(styles.link, className)}
      href={href}
      onClick={onClick}
      target={target}
      title={title}
    >
      {children}
    </a>
  )
};
