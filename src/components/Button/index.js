// @flow
import * as React from 'react'
import type { ComponentType } from 'react'
import { css, cx } from '@emotion/css'
import { baseFontFamily, colors } from '../../variables';
import { IconSpinner } from '../Icon';

const styles = {
  button: css`
    white-space: nowrap;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.07s;
    transition-property: background-color, color;
    outline: none;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;

    &:hover, &:focus, &:active {
      transition-property: background-color, color, box-shadow;
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      cursor: default;
    }
  `,

  icon: css`
    width: 16px;
    height: 16px;
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

    &:hover, &:focus, &:active {
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
  `,

  m: css`
    padding: 5px 16px;
  `,

  s: css`
    padding: 1px 16px;
  `,

  xs: css`
    padding: 1px 9px;
    line-height: 18px;
    font-size: 12px;
  `,

  iconicL: css`
    padding: 9px 12px;
  `,

  iconicM: css`
    padding: 5px 8px;
  `,

  iconicS: css`
    padding: 1px 4px;
  `
};

const intentStyles = {
  base: css`
    background-color: white;
    color: ${colors.dark65};
    box-shadow: inset 0 0 0 1px ${colors.baseBg};

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      color: ${colors.intentBase};
      background-color: ${colors.intentBaseActive};
      box-shadow: inset 0 0 0 1px ${colors.intentBase};
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${colors.intentBase};
    }
  `,

  dark: css`
    background-color: ${colors.dark40};
    color: #ffffff;

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      color: ${colors.intentBase};
      background-color: ${colors.intentBaseActive};
    }

    & svg {
      fill: #ffffff;
    }

    &:disabled svg {
      fill: ${colors.intentBase};
    }
  `,

  primary: css`
    background-color: ${colors.intentPrimary};
    color: #ffffff;

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: ${colors.intentPrimary50};
      color: #ffffff;
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
      color: ${colors.intentBase};
      box-shadow: inset 0 0 0 1px ${colors.intentBase};
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${colors.intentBase};
    }
  `,

  plain: css`
    background-color: transparent;
    color: ${colors.dark65};

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background-color: ${colors.intentBaseActive};
      color: ${colors.intentBase};
    }

    & svg {
      fill: ${colors.dark65};
    }

    &:disabled svg {
      fill: ${colors.intentBase};
    }
  `
};

const intentActiveStyles = {
  base: css`
    &:focus,
    &:hover {
      background-color: ${colors.dark10};
      box-shadow: none;
    }

    &:active {
      background-color: ${colors.dark10};
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  dark: css`
    &:focus,
    &:hover {
      background-color: ${colors.dark60};
    }

    &:active {
      background-color: ${colors.dark60};
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  primary: css`
    &:focus,
    &:hover {
      background-color: ${colors.activeAction};
    }

    &:active {
      background-color: ${colors.activeAction};
      box-shadow: inset 0 4px 0 rgba(4, 11, 29, 0.1);
    }
  `,

  secondary: css`
    &:focus,
    &:hover {
      background-color: ${colors.dark25};
    }

    &:active {
      background-color: ${colors.dark25};
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
  intent?: 'primary' | 'secondary' | 'base' | 'plain' | 'dark',
  onClick?: (e: MouseEvent) => void,
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
        key="Icon"
        className={cx(
          styles.icon,
          {
            [styles.iconMargin]: !isOnlyIcon
          }
        )}
      />
    )
  }

  content.push(<React.Fragment key="content">{children || text}</React.Fragment>)

  if (IconRight && !isOnlyIcon) {
    content.push(
      <IconRight
        key="IconRight"
        className={cx(
          styles.icon,
          styles.iconRightMargin
        )}
      />
    )
  }

  if (loading && !disabled) {
    content.push(
      <div key="loading" className={styles.loadingWrap}>
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
          [styles.iconicL]: isOnlyIcon && size === 'l',
          [styles.iconicM]: isOnlyIcon && size === 'm',
          [styles.iconicS]: isOnlyIcon && size === 's',
          [styles.l]: !isOnlyIcon && size === 'l',
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
