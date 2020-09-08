// @flow
import * as React from 'react';
import { createRef } from 'react';
import { cx } from 'react-emotion';
import { commonInputStyles, commonInputSizes } from '../Input/commonStyles';

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
  size?: 'm' | 'l',
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
      size,
      ...props
    } = this.props;

    const { focused } = this.state;

    return (
      <div
        className={cx(
          commonInputStyles.outer,
          {
            [commonInputStyles.disabled]: disabled,
            [commonInputStyles.focused]: focused,
            [commonInputStyles.error]: error
          },
          className
        )}
        title={title}
      >
        <textarea
          {...props}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={cx(commonInputStyles.input, commonInputSizes[size || 'l'])}
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
