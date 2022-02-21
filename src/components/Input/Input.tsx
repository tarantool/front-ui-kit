import React, { forwardRef, useRef, useState } from 'react';
import { cx } from '@emotion/css';

import { IconCancel } from '../Icon';
import { commonInputSizes, commonInputStyles, iconWrapSizes, styles, wrapSizes } from './Input.stytles';

export type InputProps = {
  autoComplete?: 'on' | 'off' | 'new-password';
  autoFocus?: boolean;
  className?: string;
  onClearClick?: (e?: React.MouseEvent) => void;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onKeyDownCapture?: (e: React.KeyboardEvent) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  onKeyPressCapture?: (e: React.KeyboardEvent) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  onKeyUpCapture?: (e: React.KeyboardEvent) => void;
  readOnly?: boolean;
  rightIcon?: React.ReactNode;
  title?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  placeholder?: string;
  size?: 'm' | 'l';
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onFocus,
      onBlur,
      autoComplete,
      autoFocus,
      className,
      onClearClick,
      onKeyDown,
      onKeyDownCapture,
      onKeyPress,
      onKeyPressCapture,
      onKeyUp,
      onKeyUpCapture,
      disabled,
      error,
      name,
      onChange,
      readOnly,
      rightIcon,
      title,
      type,
      value,
      placeholder,
      size,
      leftElement,
      rightElement,
      ...props
    }: InputProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const localRef = useRef<HTMLInputElement>(null);

    const usedRef = ref || localRef;

    const focus = () => {
      if (localRef && localRef.current) {
        localRef.current?.focus();
      }
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus && onFocus(e);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur && onBlur(e);
    };

    const handleClearClick = () => {
      focus();
      onClearClick && onClearClick();
    };

    const hasAddition = !!leftElement || !!rightElement;

    const withIcon = !!rightIcon || !!onClearClick;

    const wrapperStyle = cx(
      commonInputStyles.outer,
      wrapSizes[size || 'l'],
      {
        [commonInputStyles.disabledOuter]: disabled,
        [commonInputStyles.focused]: focused,
        [commonInputStyles.error]: error,
        [styles.outerWithAddition]: hasAddition,
        [styles.withLeftElement]: !!leftElement,
        [styles.withRightElement]: !!rightElement,
      },
      className
    );

    const commonStyles = cx(commonInputStyles.input, commonInputSizes[size || 'l'], {
      [styles.inputWithAddition]: hasAddition,
      [commonInputStyles.disabled]: disabled,
      [styles.inputWithIcon]: withIcon,
    });

    return (
      <div className={wrapperStyle} title={title}>
        {leftElement}
        <input
          {...props}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={commonStyles}
          disabled={disabled}
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyDownCapture={onKeyDownCapture}
          onKeyPress={onKeyPress}
          onKeyPressCapture={onKeyPressCapture}
          onKeyUp={onKeyUp}
          onKeyUpCapture={onKeyUpCapture}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={usedRef}
        />
        {(onClearClick || rightIcon) && (
          <div className={cx(styles.iconWrap, iconWrapSizes[size || 'l'])}>
            {onClearClick && (!rightIcon || value) ? (
              <IconCancel
                className={styles.clearIcon}
                onClick={(!(disabled || readOnly) && handleClearClick) || undefined}
              />
            ) : (
              rightIcon
            )}
          </div>
        )}
        {rightElement}
      </div>
    );
  }
);
