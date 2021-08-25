// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { nanoid } from '../../utils/nanoid';
import { colors } from '../../variables';
import { Input, type InputProps } from '../Input';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { IconInfo } from '../Icon';
import { ControlsPanel } from '../ControlsPanel';
import { commonFormFieldStyles as commonStyles } from '../FormField/commonStyles';

const styles = {
  input: css`
    margin-top: 6px;
  `,
  message: css`
    display: block;
    min-height: 20px;
  `,
  errorMessage: css`
    color: ${colors.intentDanger};
  `
};

type LabeledInputProps = {
  ...InputProps,
  inputComponent?: React.AbstractComponent<any>,
  inputClassName?: string,
  className?: string,
  id?: string,
  info?: string,
  label: string,
  largeMargins?: bool,
  subTitle?: string | React.Node,
  topRightControls?: React.Node[],
  error?: boolean,
  message?: string,
  preserveMessageSpace?: bool
};

export class LabeledInput extends React.Component<LabeledInputProps> {
  static defaultProps = {
    preserveMessageSpace: true
  };

  internalId = nanoid();

  render() {
    const {
      inputComponent: InputComponent = Input,
      topRightControls,
      className,
      id = this.internalId,
      inputClassName,
      subTitle,
      info,
      label,
      largeMargins,
      error,
      message,
      preserveMessageSpace,
      ...restProps
    } = this.props;

    return (
      <div
        className={cx(
          commonStyles.wrap,
          { [commonStyles.wrapMargin]: largeMargins },
          className
        )}
      >
        <div
          className={cx(
            commonStyles.headingPane,
            { [commonStyles.headingPaneMargin]: largeMargins }
          )}
        >
          <Text className={commonStyles.label} variant='h4' tag='label' htmlFor={id}>{label}</Text>
          {!!info && (
            <Tooltip className={commonStyles.tooltip} content={info}>
              <IconInfo />
            </Tooltip>
          )}
          {!!subTitle && (
            <Text className={commonStyles.subTitle} variant='p' tag='span'>{subTitle}</Text>
          )}
          {topRightControls && (
            <ControlsPanel className={commonStyles.topRightControls} controls={topRightControls} />
          )}
        </div>
        <InputComponent
          {...restProps}
          error={error}
          id={id}
          className={cx(styles.input, inputClassName)}
        />
        {(preserveMessageSpace || message) && (
          <Text variant='p' className={cx(styles.message, { [styles.errorMessage]: error })}>
            {message}
          </Text>
        )}
      </div>
    );
  }
}