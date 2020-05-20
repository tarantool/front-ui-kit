// @flow
import * as React from 'react'
import type { ComponentType } from 'react'
import { css, cx } from 'react-emotion'
import { rgba } from 'emotion-rgba';
import { baseFontFamily, colors } from '../../variables';
import { IconSpinner } from '../Icon';

const styles = {
  button: css`
    border: solid 1px;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: ${baseFontFamily};
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
      border-color: ${colors.intentBase};
      color: #bfbfbf;
      background-color: ${colors.intentBaseBg};
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
      cursor: default;
      color: rgba(0, 0, 0, 0);
      box-shadow: none;
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
    border-color: ${colors.intentBase};
    background-color: white;
    color: rgba(0, 0, 0, 0.65);

    &:focus,
    &:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
    }
  `,

  primary: css`
    border-color: ${colors.intentPrimary};
    background-color: ${colors.intentPrimary};
    color: #ffffff;

    &:focus,
    &:hover {
      box-shadow: 0px 10px 15px ${rgba(colors.intentPrimary, 0.15)};
    }
  `,

  secondary: css`
    border-color: ${rgba(colors.intentPrimary, 0.25)};
    background-color: white;
    color: ${rgba(colors.intentPrimary, 0.65)};

    &:focus,
    &:hover {
      border-color: ${colors.intentPrimary};
      color: ${colors.intentPrimary};
      box-shadow: 0px 10px 15px ${rgba(colors.intentPrimary, 0.15)};
    }
  `,

  iconic: css`
    border-color: transparent;
    background-color: transparent;
    color: ${rgba(colors.intentPrimary, 0.65)};

    &:focus,
    &:hover {
      border-color: ${rgba(colors.intentBase, 0.45)};
      color: ${colors.intentPrimary};
      box-shadow: 0px 10px 15px ${rgba(colors.intentPrimary, 0.15)};
    }
  `,

  plain: css`
    border-color: transparent;
    background-color: transparent;
    color: ${rgba(colors.intentPrimary, 0.65)};

    &:focus,
    &:hover {
      border-color: ${colors.intentPrimary};
      color: ${colors.intentPrimary};
      box-shadow: 0px 10px 15px ${rgba(colors.intentPrimary, 0.15)};
    }
  `
};

const intentActiveStyles = {
  base: css`
    &:active {
      border-color: ${rgba(colors.intentBase, 0.45)};
      background-color: ${colors.intentBaseActive};
      color: rgba(0, 0, 0, 0.65);
      box-shadow: none;
    }
  `,

  primary: css`
    &:active {
      border-color: ${colors.activeAction};
      background-color: ${colors.activeAction};
      box-shadow: none;
    }
  `,

  secondary: css`
    &:active {
      border-color: ${colors.activeAction};
      color: ${colors.activeAction};
      box-shadow: none;
    }
  `,

  iconic: css`
    &:active {
      border-color: ${colors.intentBaseActive};
      background-color: ${colors.intentBaseActive};
      color: ${colors.activeAction};
      box-shadow: none;
    }
  `,

  plain: css`
    &:active {
      border-color: ${colors.activeAction};
      color: ${colors.activeAction};
      box-shadow: none;
    }
  `
}

const intentLoadingStyles = {
  base: css`
    border-color: ${colors.intentBase};
  `,
  primary: css``,
  secondary: css`
    border-color: ${colors.intentPrimary};
  `,
  iconic: css`
    border-color: ${rgba(colors.intentBase, 0.45)};
  `,
  plain: css`
    border-color: ${colors.intentPrimary};
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
    fill: ${colors.activeAction};
  `,
  iconic: css`
    fill: ${colors.activeAction};
  `,
  plain: css`
    fill: ${colors.activeAction};
  `
};

export type ButtonProps = {
  autoFocus?: boolean,
  className?: string,
  children?: React.Node,
  disabled?: boolean,
  icon?: ComponentType<any>,
  intent?: 'primary' | 'secondary' | 'base' | 'iconic' | 'plain',
  onClick?: (MouseEvent) => void,
  loading?: boolean,
  size?: 's' | 'xs' | 'm',
  text?: string,
  title?: string,
  type?: 'button' | 'submit'
};

export const Button = React.forwardRef<ButtonProps, HTMLButtonElement>((
  {
    autoFocus,
    className,
    children,
    disabled,
    icon: Icon,
    intent = 'base',
    onClick,
    loading,
    size = 'm',
    text,
    title,
    type = 'button',
    ...props
  }:
  ButtonProps,
  ref
) => {
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
      {...props}
      autoFocus={autoFocus}
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
          [styles.loading]: loading && !disabled,
          [intentActiveStyles[intent]]: !loading && !disabled
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
      ref={ref}
    >
      {content}
    </button>
  );
});
