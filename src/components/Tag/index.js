// @flow
// TODO: move to uikit
import React from 'react';
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { colors } from '../../variables';

const styles = {
  tag: css`
    position: relative;
    border: none;
    border-radius: 4px;
    padding: 1px 8px 3px;
    margin: 0 2px;
    font-size: 12px;
    line-height: 18px;
    outline: none;
    transition: 0.1s ease-in-out;
    transition-property: background-color, color;

    &:focus::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: solid 1px ${rgba(colors.intentPrimary, 0.55)};
      border-radius: 3px;
    }
  `,
  interactive: (className?: string): string =>
    className
      ? css`
          color: rgba(0, 0, 0, 0.2);
          background-color: transparent;

          .${className}:hover & {
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.65);
          }

          .${className} &:hover,
          .${className} &:focus {
            background-color: #000000;
            color: #ffffff;
          }
        `
      : '',
  static: css`
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.65);

    &:hover,
    &:focus {
      background-color: #000000;
      color: #ffffff;
    }
  `,
  pointer: css`
    cursor: pointer;
  `,
};

export type TagProps = {
  className?: string,
  hoverParentClassName?: string,
  highlightingOnHover?: string,
  onClick?: (MouseEvent) => void,
  text: string,
  title?: string,
};

export const Tag = ({ highlightingOnHover, className, onClick, text, title }: TagProps) => {
  const Element = onClick ? 'button' : 'span';

  return (
    <Element
      className={cx(
        {
          [styles.interactive(highlightingOnHover)]: !!highlightingOnHover,
          [styles.static]: !highlightingOnHover,
          [styles.pointer]: onClick,
        },
        styles.tag,
        className
      )}
      onClick={onClick}
      title={title}
    >
      {text}
    </Element>
  );
};
