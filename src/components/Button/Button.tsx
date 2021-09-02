import React, { ReactNode, MouseEvent, forwardRef, ComponentType, useCallback } from 'react';
import { cx } from '@emotion/css';

import { IconSpinner } from '../Icon';
import { styles, intentStyles, intentActiveStyles } from './Button.styles';

export interface ButtonIconProps {
  className?: string;
}

export interface ButtonProps<T extends unknown = unknown> {
  autoFocus?: boolean;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  icon?: ComponentType<ButtonIconProps>;
  iconRight?: ComponentType<ButtonIconProps>;
  intent?: 'primary' | 'secondary' | 'base' | 'plain' | 'dark';
  onClick?: (event: MouseEvent<HTMLButtonElement>, pass?: T) => void;
  loading?: boolean;
  size?: 'l' | 's' | 'xs' | 'm';
  text?: string;
  title?: string;
  type?: 'button' | 'submit';
  pass?: T;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
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
      pass,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const isOnlyIcon = Icon && !children && !text;

    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(event, pass);
        }
      },
      [onClick, pass]
    );

    const content: JSX.Element[] = [];

    if (Icon) {
      content.push(
        <Icon
          key="Icon"
          className={cx(styles.icon, {
            [styles.iconMargin]: !isOnlyIcon,
          })}
        />
      );
    }

    content.push(<React.Fragment key="content">{children || text}</React.Fragment>);

    if (IconRight && !isOnlyIcon) {
      content.push(<IconRight key="IconRight" className={cx(styles.icon, styles.iconRightMargin)} />);
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
            [intentActiveStyles[intent]]: !loading && !disabled,
          },
          intentStyles[intent],
          {
            [styles.loading]: loading && !disabled,
          },
          className
        )}
        disabled={disabled}
        onClick={onClick ? handleClick : undefined}
        title={title}
        type={type}
        ref={ref}
      >
        {content}
      </button>
    );
  }
);
