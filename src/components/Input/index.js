// @flow
import * as React from 'react';
import { createRef } from 'react';
import { css, cx } from 'react-emotion';
import { IconCancel } from '../Icon';

const styles = {
  outer: css`
    position: relative;
    border: solid 1px #D9D9D9;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #ffffff;
  `,
  disabled: css`
    background-color: #F3F3F3;
  `,
  focused: css`
    border-color: rgba(0, 0, 0, 0.26);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.24);
  `,
  error: css`
    border-color: #F5222D;
    box-shadow: 0px 0px 3px rgba(245, 34, 45, 0.65);
  `,
  input: css`
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 5px 16px;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    outline: none;
  `,
  inputWithIcon: css`
    padding: 5px 32px 5px 16px;
  `,
  iconWrap: css`
    position: absolute;
    top: 7px;
    right: 7px;
    bottom: 7px;
    display: flex;
    align-items: center;
  `
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
  type?: 'text' | 'password' | 'email',
  value?: string,
  placeholder?: string
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
      ...props
    } = this.props;

    const { focused } = this.state;

    return (
      <div
        className={cx(
          styles.outer,
          {
            [styles.disabled]: disabled,
            [styles.focused]: focused,
            [styles.error]: error
          },
          className
        )}
        title={title}
      >
        <input
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={cx(styles.input, { [styles.inputWithIcon]: rightIcon || onClearClick })}
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
          {...props}
        />
        {(onClearClick || rightIcon) && (
          <div className={styles.iconWrap}>
            {onClearClick && (!rightIcon || value)
              ? <IconCancel onClick={(!(disabled || readOnly) && this.handleClearClick) || noop} />
              : rightIcon}
          </div>
        )}
      </div>
    );
  }

  handleInputFocus = () => this.setState({ focused: true });

  handleInputBlur = (e: Object) => {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur(e);
  };

  handleClearClick = () => {
    this.focus();
    this.props.onClearClick && this.props.onClearClick();
  }
}
