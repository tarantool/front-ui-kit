// @flow
import * as React from 'react';
import { css, cx } from 'emotion';

const styles = {
  link: css`
    color: rgba(245, 34, 45, 0.65);
    text-decoration: none;

    &:hover,
    &:focus {
      color: #f5222d;
    }

    &:active {
      color: #cf1322;
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
