import React, { FC, useMemo } from 'react';
import { cx } from '@emotion/css';

import { nanoid } from '../../utils/nanoid';
import { ControlsPanel } from '../ControlsPanel';
import { commonFormFieldStyles as commonStyles } from '../FormField/commonStyles';
import { IconInfo } from '../Icon';
import type { InputProps } from '../Input';
import { Input } from '../Input';
import { Text } from '../Text';
// eslint-disable-next-line import/namespace
import { Tooltip } from '../Tooltip';

import { styles } from './LabeledInput.styles';

type LabeledInputProps = InputProps & {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  inputComponent?: React.ComponentType<any>;
  inputClassName?: string;
  className?: string;
  id?: string;
  info?: string;
  label: string;
  largeMargins?: boolean;
  subTitle?: string | React.ReactNode;
  topRightControls?: React.ReactNode[];
  error?: boolean;
  message?: string;
  preserveMessageSpace?: boolean;
};

export const LabeledInput: FC<LabeledInputProps> = ({
  inputComponent: InputComponent = Input,
  topRightControls,
  className,
  id,
  inputClassName,
  subTitle,
  info,
  label,
  largeMargins,
  error,
  message,
  preserveMessageSpace = true,
  ...props
}: LabeledInputProps) => {
  const internalId = useMemo(() => {
    return id ?? nanoid();
  }, [id]);

  return (
    <div className={cx(commonStyles.wrap, { [commonStyles.wrapMargin]: largeMargins }, className)}>
      <div className={cx(commonStyles.headingPane, { [commonStyles.headingPaneMargin]: largeMargins })}>
        <Text htmlFor={internalId} className={commonStyles.label} variant="h4" tag="label">
          {label}
        </Text>
        {!!info && (
          <Tooltip className={commonStyles.tooltip} content={info}>
            <IconInfo />
          </Tooltip>
        )}
        {!!subTitle && (
          <Text className={commonStyles.subTitle} variant="p" tag="span">
            {subTitle}
          </Text>
        )}
        {topRightControls && <ControlsPanel className={commonStyles.topRightControls} controls={topRightControls} />}
      </div>
      <InputComponent {...props} error={error} id={internalId} className={cx(styles.input, inputClassName)} />
      {(preserveMessageSpace || message) && (
        <Text variant="p" className={cx(styles.message, { [styles.errorMessage]: error })}>
          {message}
        </Text>
      )}
    </div>
  );
};
