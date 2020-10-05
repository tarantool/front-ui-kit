// @flow
import * as React from 'react'
import { css, cx } from 'emotion'
import { baseFontFamily, colors, monoFontFamily } from '../../variables';

export const textStyles = {
  h1: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    color: ${colors.baseHeading};
    -webkit-font-smoothing: antialiased;
  `,
  h2: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    color: ${colors.baseHeading};
    -webkit-font-smoothing: antialiased;
  `,
  h3: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.baseHeading};
    -webkit-font-smoothing: antialiased;
  `,
  h4: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: ${colors.baseHeading};
    -webkit-font-smoothing: antialiased;
  `,
  h5: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 12px;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    color: ${colors.baseHeading};
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
  `,
  p: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 12px;
    line-height: 20px;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  `,
  code: css`
    margin: 0;
    font-family: ${monoFontFamily};
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    b {
      font-weight: 600;
    }
  `,
  basic: css`
    margin: 0;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    -webkit-font-smoothing: antialiased;
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

export type TextStyleVariants =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'basic' | 'code'

type TextProps = {
  className?: string,
  children?: React.Node,
  tag?: string,
  upperCase?: boolean,
  noCase?: boolean,
  title?: string,
  variant?: TextStyleVariants,
  // colorVariant?: 'inherit' | 'primary' | 'secondary' | 'disabled' | 'white' | 'error',
};

export const Text = React.forwardRef<TextProps, HTMLElement>((
  {
    className,
    children,
    tag,
    upperCase,
    noCase,
    variant = 'basic',
    ...props
  }: TextProps,
  ref
) => {
  const Element = tag || (variant === 'basic' ? 'span' : variant);

  return (
    <Element
      {...props}
      className={cx(
        textStyles[variant],
        {
          [textStyles.upperCase]: upperCase,
          [textStyles.noCase]: noCase
        },
        className
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
});
