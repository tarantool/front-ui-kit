// @flow
import * as React from 'react';
import { createRef } from 'react';
import { css, cx } from 'react-emotion';
import { commonInputStyles, commonInputSizes } from './commonStyles';
import { IconCancel } from '../Icon';

const styles = {
  outerWithAddition: css`
    display: flex;
  `,
  inputWithAddition: css`
    width: auto;
    flex-grow: 1;
  `,
  inputWithIcon: css`
    padding-left: 15px;
    padding-right: 8px;
  `,
  iconWrap: css`
    display: flex;
    align-items: center;
  `,
  withLeftElement: css`
    & > :first-child {
      align-self: stretch;
      flex-shrink: 0;
      margin: -1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  withRightElement: css`
    & > :last-child {
      align-self: stretch;
      flex-shrink: 0;
      margin: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `
};

const wrapSizes = {
  m: css`height: 32px;`,
  l: css`height: 40px;`
};

const iconWrapSizes = {
  m: css`margin-right: 7px;`,
  l: css`margin-right: 15px;`
};

export type InputProps = {
  autoComplete?: 'on' | 'off',
  autoFocus?: boolean,
  className?: string,
  onClearClick?: (e?: MouseEvent) => any,
  disabled?: boolean,
  error?: boolean,
  name?: string,
  onBlur?: (e: MouseEvent) => any,
  onChange?: (e: SyntheticInputEvent<HTMLInputElement>) => any,
  onFocus?: (e: MouseEvent) => any,
  onKeyDown?: (e: KeyboardEvent) => any,
  onKeyDownCapture?: (e: KeyboardEvent) => any,
  onKeyPress?: (e: KeyboardEvent) => any,
  onKeyPressCapture?: (e: KeyboardEvent) => any,
  onKeyUp?: (e: KeyboardEvent) => any,
  onKeyUpCapture?: (e: KeyboardEvent) => any,
  readOnly?: boolean,
  rightIcon?: React.Node,
  title?: string,
  type?: 'text' | 'password' | 'email' | 'number',
  value?: string,
  placeholder?: string,
  size?: 'm' | 'l',
  leftElement: React.Node,
  rightElement: React.Node
};

type InputState = {
  focused: boolean;
};

const noop = () => {}

export class Input extends React.Component<InputProps, InputState> {
  elementRef = createRef<HTMLInputElement>();

  state = {
    focused: false
  };

  focus = () => {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.focus();
    }
  }

  render() {
    const {
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
    } = this.props;

    const { focused } = this.state;

    const hasAddition = !!leftElement || !!rightElement;
    return (
      <div
        className={cx(
          commonInputStyles.outer,
          wrapSizes[size || 'l'],
          {
            [commonInputStyles.disabled]: disabled,
            [commonInputStyles.focused]: focused,
            [commonInputStyles.error]: error,
            [styles.outerWithAddition]: hasAddition,
            [styles.withLeftElement]: !!leftElement,
            [styles.withRightElement]: !!rightElement
          },
          className
        )}
        title={title}
      >
        {leftElement}
        <input
          {...props}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={cx(
            commonInputStyles.input,
            commonInputSizes[size || 'l'],
            {
              [styles.inputWithAddition]: hasAddition,
              [styles.inputWithIcon]: rightIcon || onClearClick
            },
          )}
          disabled={disabled}
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyDownCapture={onKeyDownCapture}
          onKeyPress={onKeyPress}
          onKeyPressCapture={onKeyPressCapture}
          onKeyUp={onKeyUp}
          onKeyUpCapture={onKeyUpCapture}
          onBlur={this.handleInputBlur}
          onFocus={this.handleInputFocus}
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={this.elementRef}
        />
        {(onClearClick || rightIcon) && (
          <div className={cx(styles.iconWrap, iconWrapSizes[size || 'l'])}>
            {onClearClick && (!rightIcon || value)
              ? <IconCancel onClick={(!(disabled || readOnly) && this.handleClearClick) || noop} />
              : rightIcon}
          </div>
        )}

        {rightElement}
      </div>
    );
  }

  handleInputFocus = (e: Object) => {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus(e);
  };

  handleInputBlur = (e: Object) => {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur(e);
  };

  handleClearClick = () => {
    this.focus();
    this.props.onClearClick && this.props.onClearClick();
  }
}
