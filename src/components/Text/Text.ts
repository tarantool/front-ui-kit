import { MouseEvent, ReactNode, createElement, forwardRef } from 'react';
import { cx } from '@emotion/css';

import { textStyles } from './Text.styles';

export { textStyles };

export type TextStyleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'basic' | 'code';

export interface TextProps {
  className?: string;
  htmlFor?: string;
  children?: ReactNode;
  tag?: string;
  href?: string;
  upperCase?: boolean;
  noCase?: boolean;
  title?: string;
  variant?: TextStyleVariants;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  // colorVariant?: 'inherit' | 'primary' | 'secondary' | 'disabled' | 'white' | 'error',
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, children, tag, upperCase, noCase, variant = 'basic', ...props }, ref) => {
    const Element = tag || (variant === 'basic' ? 'span' : variant);

    return createElement(
      Element,
      {
        ...props,
        className: cx(
          textStyles[variant],
          {
            [textStyles.upperCase]: upperCase,
            [textStyles.noCase]: noCase,
          },
          className
        ),
        ref,
      },
      children
    );
  }
);
