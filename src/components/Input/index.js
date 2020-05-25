// @flow
import * as React from 'react';
import { createRef } from 'react';
import { css, cx } from 'react-emotion';
import { rgba } from 'emotion-rgba';
import { baseFontFamily, colors } from '../../variables';
import { IconCancel } from '../Icon';

const styles = {
  outer: css`
    display: flex;
    height: 32px;
    border: solid 1px ${colors.intentBase};
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #ffffff;
  `,
  disabled: css`
    background-color: ${colors.intentBaseBg};
  `,
  focused: css`
    border-color: rgba(0, 0, 0, 0.26);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.24);
  `,
  error: css`
    border-color: ${colors.intentDanger};
    box-shadow: 0px 0px 3px ${rgba(colors.intentDanger, 0.65)};
  `,
  outerWithAddition: css`
    display: flex;
  `,
  inputWithAddition: css`
    width: auto;
    flex-grow: 1;
  `,
  input: css`
    display: block;
    align-self: stretch;
    width: 100%;
    min-width: 0;
    height: 100%;
    border: 0;
    padding: 5px 16px;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: ${baseFontFamily};
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    outline: none;
  `,
  inputWithIcon: css`
    padding: 5px 8px 5px 16px;
  `,
  iconWrap: css`
    margin-right: 7px;
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
      leftElement,
      rightElement,
      ...props
    } = this.props;

    const { focused } = this.state;

    const hasAddition = !!leftElement || !!rightElement;
    return (
      <div
        className={cx(
          styles.outer,
          {
            [styles.disabled]: disabled,
            [styles.focused]: focused,
            [styles.error]: error,
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
          className={cx(styles.input, {
            [styles.inputWithAddition]: hasAddition,
            [styles.inputWithIcon]: rightIcon || onClearClick
          })}
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
          <div className={styles.iconWrap}>
            {onClearClick && (!rightIcon || value)
              ? <IconCancel onClick={(!(disabled || readOnly) && this.handleClearClick) || noop} />
              : rightIcon}
          </div>
        )}

        {rightElement}
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
