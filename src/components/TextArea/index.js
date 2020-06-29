// @flow
import * as React from 'react';
import { createRef } from 'react';
import { css, cx } from 'react-emotion';
import { rgba } from 'emotion-rgba';
import { baseFontFamily, colors } from '../../variables';

const styles = {
  outer: css`
    display: flex;
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
    resize: none;
  `
};

export type TextAreaProps = {
  autoComplete?: 'on' | 'off',  // ?
  autoFocus?: boolean,
  className?: string,
  disabled?: boolean,
  error?: boolean,
  name?: string,
  onBlur?: (e: MouseEvent) => any,
  onChange?: (e: SyntheticInputEvent<HTMLTextAreaElement>) => any,
  onFocus?: (e: MouseEvent) => any,
  onKeyDown?: (e: KeyboardEvent) => any,
  onKeyDownCapture?: (e: KeyboardEvent) => any,
  onKeyPress?: (e: KeyboardEvent) => any,
  onKeyPressCapture?: (e: KeyboardEvent) => any,
  onKeyUp?: (e: KeyboardEvent) => any,
  onKeyUpCapture?: (e: KeyboardEvent) => any,
  rows?: number,
  readOnly?: boolean,
  title?: string,
  value?: string,
  placeholder?: string
};

type TextAreaState = {
  focused: boolean;
};

export class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  elementRef = createRef<HTMLTextAreaElement>();

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
      rows,
      title,
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
        <textarea
          {...props}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={styles.input}
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
          value={value}
          placeholder={placeholder}
          rows={rows}
          readOnly={readOnly}
          ref={this.elementRef}
        />
      </div>
    );
  }

  handleInputFocus = () => this.setState({ focused: true });

  handleInputBlur = (e: Object) => {
    this.setState({ focused: false });
    this.props.onBlur && this.props.onBlur(e);
  };
}
