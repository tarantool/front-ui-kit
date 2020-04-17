// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Input } from '../Input';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { IconInfo } from '../Icon';
import { ControlsPanel } from '../ControlsPanel';

const styles = {
  wrap: css`
    display: block;
    margin-bottom: 24px;
  `,
  tooltip: css`
    display: inline-block;
    margin-left: 8px;
  `,
  headingPane: css`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 8px;
  `,
  subTitle: css`
    margin-left: 32px;
  `,
  label: css`
    display: block;
  `,
  topRightControls: css`
    margin-left: auto;
  `,
  message: css`
    display: block;
    height: 20px;
    position: absolute;
  `,
  errorMessage: css`
    color: #F5222D;
  `
};

type LabeledInputProps = {
  inputComponent?: React.Node,
  inputClassName?: string,
  className?: string,
  info?: string,
  label: string,
  subTitle?: string | React.Node,
  topRightControls?: React.Node[],
  error?: boolean,
  message?: string,
};

export const LabeledInput = ({
  inputComponent: InputComponent = Input,
  topRightControls,
  className,
  inputClassName,
  subTitle,
  info,
  label,
  error,
  message,
  ...restProps
}:
LabeledInputProps) => (
  <label className={cx(styles.wrap, className)}>
    <div className={styles.headingPane}>
      <Text className={styles.label} variant='h4' tag='span'>{label}:
        {info && (
          <Tooltip className={styles.tooltip} content={info}>
            <IconInfo />
          </Tooltip>
        )}
      </Text>
      {subTitle && <Text className={styles.subTitle} variant='h5' tag='span' upperCase>{subTitle}</Text>}
      {topRightControls && <ControlsPanel className={styles.topRightControls} controls={topRightControls} />}
    </div>
    <InputComponent error={error} className={inputClassName} {...restProps} />
    <Text variant='p' className={cx(styles.message, { [styles.errorMessage]: error })}>
      {message}
    </Text>
  </label>
);
