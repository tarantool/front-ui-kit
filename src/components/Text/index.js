// @flow
import * as React from 'react'
import { css, cx } from 'emotion'

export const textStyles = {
  h1: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    line-height: 38px;
    font-weight: 600;
    letter-spacing: 0.48px;
    text-transform: uppercase;
    color: #000000;
  `,
  h2: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #000000;
  `,
  h3: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.32px;
    text-transform: uppercase;
    color: #cf1322;
  `,
  h4: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.32px;
    color: #000000;
  `,
  h5: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.24px;
    color: #000000;
  `,
  p: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.28px;
    color: #000000;
  `,
  code: css`
    margin: 0;
    font-family: 'Monaco', monospace;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    b {
      font-weight: 600;
    }
  `,
  basic: css`
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    b {
      font-weight: 600;
    }
  `,
  upperCase: css`
    text-transform: uppercase;
  `,
  noCase: css`
    text-transform: none;
  `
};

type TextProps = {
  className?: string,
  children?: React.Node,
  tag?: string,
  upperCase?: boolean,
  noCase?: boolean,
  title?: string,
  variant?:
    |'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'basic' | 'code',
  // colorVariant?: 'inherit' | 'primary' | 'secondary' | 'disabled' | 'white' | 'error',
};

export const Text = ({
  className,
  children,
  tag,
  upperCase,
  noCase,
  title,
  variant = 'basic'
}:
TextProps) => {
  const Element = tag || (variant === 'basic' ? 'span' : variant);

  return (
    <Element
      className={cx(
        textStyles[variant],
        {
          [textStyles.upperCase]: upperCase,
          [textStyles.noCase]: noCase
        },
        className
      )}
      title={title}
    >
      {children}
    </Element>
  );
};
