// @flow
import * as React from 'react'
import type { ComponentType } from 'react'
import { css, cx } from 'react-emotion'
import { rgba } from 'emotion-rgba';
import { baseFontFamily, colors } from '../../variables';
import { IconSpinner } from '../Icon';

const localColors = {
  intentPrimaryDark: '#d01d26',
  intentPrimaryLight: '#f28a91',
  intentSecondaryDisabledText: '#d9dadd',
  darkHover: '#c4c6ca'
}

const styles = {
  button: css`
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.05s;
    transition-property: border, background-color, color, box-shadow;
    outline: none;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      cursor: default;
    }
  `,

  icon: css`
    margin-bottom: 2px;
  `,

  iconMargin: css`
    margin-right: 8px;
  `,

  iconRightMargin: css`
    margin-left: 8px;
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

  l: css`
    padding: 9px 20px;

    &:disabled {
      padding: 8px 19px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `,

  m: css`
    padding: 5px 16px;

    &:disabled {
      padding: 4px 15px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `,

  s: css`
    padding: 1px 16px;

    &:disabled {
      padding: 0 15px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `,

  xs: css`
    padding: 1px 9px;
    line-height: 18px;
    font-size: 12px;

    &:disabled {
      padding: 0 8px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `,

  iconicM: css`
    padding: 5px 9px;

    &:disabled {
      padding: 4px 8px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `,

  iconicS: css`
    padding: 1px 5px;

    &:disabled {
      padding: 0 4px;
      border: solid 1px ${localColors.intentSecondaryDisabledText};
    }
  `
};

const intentStyles = {
  base: css`
    border-color: ${colors.intentBase};
    background-color: white;
    color: ${colors.dark65};

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      color: ${localColors.intentSecondaryDisabledText};
      background-color: ${colors.intentBaseActive};
      box-shadow: none;
      cursor: default;
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${localColors.intentSecondaryDisabledText};
    }
  `,

  primary: css`
    background-color: ${colors.intentPrimary};
    color: #ffffff;

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: ${localColors.intentPrimaryLight};
      border-color: ${localColors.intentPrimaryLight};
      color: #ffffff;
      cursor: default;
    }

    & svg {
      fill: #ffffff;
    }

    &:disabled svg {
      fill: #ffffff;
    }
  `,

  secondary: css`
    background-color: ${colors.dark10};
    color: ${colors.dark65};

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: ${colors.intentBaseActive};
      color: ${localColors.intentSecondaryDisabledText};
      cursor: default;
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${localColors.intentSecondaryDisabledText};
    }
  `,

  plain: css`
    border-color: transparent;
    background-color: transparent;
    color: ${colors.dark65};

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: ${colors.intentBaseActive};
      color: ${localColors.intentSecondaryDisabledText};
      cursor: default;
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${localColors.intentSecondaryDisabledText};
    }
  `
};

const intentActiveStyles = {
  base: css`
    &:focus,
    &:hover {
      background-color: ${colors.dark10};
    }

    &:active {
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  primary: css`
    &:focus,
    &:hover {
      background-color: ${localColors.intentPrimaryDark};
    }

    &:active {
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  secondary: css`
    &:focus,
    &:hover {
      background-color: ${localColors.darkHover};
    }

    &:active {
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  plain: css`
    &:focus,
    &:hover {
      background-color: ${colors.dark10};
    }
  `
};

export type ButtonProps = {
  autoFocus?: boolean,
  className?: string,
  children?: React.Node,
  disabled?: boolean,
  icon?: ComponentType<any>,
  iconRight?: ComponentType<any>,
  intent?: 'primary' | 'secondary' | 'base' | 'plain',
  onClick?: (MouseEvent) => void,
  loading?: boolean,
  size?: 'l' | 's' | 'xs' | 'm',
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
    iconRight: IconRight,
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

  if (IconRight && !isOnlyIcon) {
    content.push(
      <IconRight
        className={cx(
          styles.icon,
          styles.iconRightMargin
        )}
      />
    )
  }

  if (loading && !disabled) {
    content.push(
      <div className={styles.loadingWrap}>
        <IconSpinner />
      </div>
    );
  }

  return (
    <button
      {...props}
      autoFocus={autoFocus}
      className={cx(
        styles.button,
        {
          [styles.iconicM]: isOnlyIcon && size === 'm',
          [styles.iconicS]: isOnlyIcon && size === 's',
          [styles.l]: size === 'l',
          [styles.m]: !isOnlyIcon && size === 'm',
          [styles.s]: !isOnlyIcon && size === 's',
          [styles.xs]: size === 'xs',
          [intentActiveStyles[intent]]: !loading && !disabled
        },
        intentStyles[intent],
        {
          [styles.loading]: loading && !disabled
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
