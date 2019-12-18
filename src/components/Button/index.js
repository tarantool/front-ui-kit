// @flow
import * as React from 'react'
import type { ComponentType } from 'react'
import { css, cx } from 'react-emotion'
import { IconSpinner } from '../Icon';

const styles = {
  button: css`
    border: solid 1px;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.07s;
    transition-property: border, background-color, color, box-shadow;
    outline: none;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      border-color: #d9d9d9;
      color: #bfbfbf;
      background-color: #f3f3f3;
      box-shadow: none;
      cursor: default;
    }

    &:disabled svg {
      filter: grayscale(1) brightness(1.5);
    }
  `,

  icon: css`
    margin-bottom: 2px;
  `,

  iconMargin: css`
    margin-right: 8px;
  `,

  loading: css`
    position: relative;
    color: rgba(0, 0, 0, 0);
    transition: none;

    &:hover,
    &:focus,
    &:active {
      color: rgba(0, 0, 0, 0);
    }

    & > *,
    &:hover > *,
    &:active > *,
    &:focus > * {
      visibility: hidden;
    }

    & > *:last-child {
      visibility: visible;
    }
  `,

  loadingWrap: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  m: css`
    padding: 4px 15px;
  `,

  s: css`
    padding: 0px 15px;
  `,

  xs: css`
    padding: 0 8px;
    line-height: 18px;
    font-size: 12px;
  `,

  iconicM: css`
    padding: 4px 7px;
  `,

  iconicS: css`
    padding: 0px 3px;
  `
};

const intentStyles = {
  base: css`
    border-color: #d9d9d9;
    background-color: white;
    color: rgba(0, 0, 0, 0.65);

    &:focus,
    &:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
    }

    &:active {
      border-color: rgba(217, 217, 217, 0.45);
      background-color: #fafafa;
      color: rgba(0, 0, 0, 0.65);
      box-shadow: none;
    }
  `,

  primary: css`
    border-color: #f5222d;
    background-color: #f5222d;
    color: #ffffff;

    &:focus,
    &:hover {
      box-shadow: 0px 10px 15px rgba(245, 34, 45, 0.15);
    }

    &:active {
      border-color: #cf1322;
      background-color: #cf1322;
      box-shadow: none;
    }
  `,

  secondary: css`
    border-color: rgba(245, 34, 45, 0.25);
    background-color: white;
    color: rgba(245, 34, 45, 0.65);

    &:focus,
    &:hover {
      border-color: #f5222d;
      color: #f5222d;
      box-shadow: 0px 10px 15px rgba(245, 34, 45, 0.15);
    }

    &:active {
      border-color: #cf1322;
      color: #cf1322;
      box-shadow: none;
    }
  `,

  iconic: css`
    border-color: transparent;
    background-color: transparent;
    color: rgba(245, 34, 45, 0.65);

    &:focus,
    &:hover {
      border-color: rgba(217, 217, 217, 0.45);
      color: #f5222d;
      box-shadow: 0px 10px 15px rgba(245, 34, 45, 0.15);
    }

    &:active {
      border-color: #fafafa;
      background-color: #fafafa;
      color: #cf1322;
      box-shadow: none;
    }
  `,

  plain: css`
    border-color: transparent;
    background-color: transparent;
    color: rgba(245, 34, 45, 0.65);

    &:focus,
    &:hover {
      border-color: #f5222d;
      color: #f5222d;
      box-shadow: 0px 10px 15px rgba(245, 34, 45, 0.15);
    }

    &:active {
      border-color: #cf1322;
      color: #cf1322;
      box-shadow: none;
    }
  `
};

const intentLoadingStyles = {
  base: css`
    border-color: #d9d9d9;
  `,
  primary: css``,
  secondary: css`
    border-color: #f5222d;
  `,
  iconic: css`
    border-color: rgba(217, 217, 217, 0.45);
  `,
  plain: css`
    border-color: #f5222d;
  `
};

const spinnerStyles = {
  base: css`
    fill: rgba(0, 0, 0, 0.65);
  `,
  primary: css`
    fill: #ffffff;
  `,
  secondary: css`
    fill: #CF1322;
  `,
  iconic: css`
    fill: #CF1322;
  `,
  plain: css`
    fill: #CF1322;
  `
};

type ButtonProps = {
  className?: string,
  children?: React.Node,
  disabled?: boolean,
  icon?: ComponentType<any>,
  intent?: 'primary' | 'secondary' | 'base' | 'iconic' | 'plain',
  onClick?: (MouseEvent) => void,
  loading?: boolean,
  size?: 's' | 'xs' | 'm',
  text?: string,
  type?: 'button' | 'submit'
};

export const Button = ({
  className,
  children,
  disabled,
  icon: Icon,
  intent = 'base',
  onClick,
  loading,
  size = 'm',
  text,
  type = 'button'
}:
ButtonProps) => {
  const isOnlyIcon = Icon && !children && !text;

  const content = []

  if (Icon) {
    content.push(
      <Icon
        className={cx(
          styles.icon,
          {
            [styles.iconMargin]: !isOnlyIcon
          }
        )}
      />
    )
  }

  content.push(children || text)

  if(loading && !disabled) {
    content.push(
      <div className={styles.loadingWrap}>
        <IconSpinner className={spinnerStyles[intent]} />
      </div>
    );
  }

  return (
    <button
      className={cx(
        styles.button,
        intentStyles[intent],
        {
          [styles.iconicM]: isOnlyIcon && size === 'm',
          [styles.iconicS]: isOnlyIcon && size === 's',
          [styles.m]: !isOnlyIcon && size === 'm',
          [styles.s]: !isOnlyIcon && size === 's',
          [styles.xs]: !isOnlyIcon && size === 'xs',
          [intentLoadingStyles[intent]]: loading && !disabled,
          [styles.loading]: loading && !disabled
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
