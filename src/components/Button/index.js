// @flow
import * as React from 'react';
import { css, cx } from 'emotion'

const styles = {
  btn: css`
    border: solid 1px gray;
  `
}

type ButtonProps = {
  className?: string,
  children?: React.Node,
  onClick?: (MouseEvent) => void
};

export default ({ children, className, ...props }: ButtonProps) => (
  <button className={cx(className, styles.btn)} {...props}>{children}</button>
);
