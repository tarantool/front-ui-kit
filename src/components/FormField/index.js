// @flow
import * as React from 'react';
import { cx } from '@emotion/css';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { IconInfo } from '../Icon';
import { ControlsPanel } from '../ControlsPanel';
import { InputGroup } from '../InputGroup';
import { commonFormFieldStyles as commonStyles } from './commonStyles';

type FormFieldProps = {
  children?: React.Node,
  className?: string,
  columns?: 1 | 2 | 3,
  info?: string | React.Node,
  itemClassName?: string,
  label?: string,
  largeMargins?: bool,
  subTitle?: string | React.Node,
  topRightControls?: React.Node[],
  verticalSort?: boolean
};

export const FormField = ({
  children,
  topRightControls,
  itemClassName,
  className,
  subTitle,
  columns,
  info,
  label,
  largeMargins,
  verticalSort
}:
FormFieldProps) => (
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
      <div className={commonStyles.headingPaneLeft}>
        {label && (
          <Text className={commonStyles.label} variant='h4' tag='span'>{label}</Text>
        )}
        {!!info && (
          <Tooltip className={commonStyles.tooltip} content={info}>
            <IconInfo />
          </Tooltip>
        )}
        {!!subTitle && (
          <Text className={commonStyles.subTitle} variant='p' tag='span'>{subTitle}</Text>
        )}
      </div>
      {topRightControls && (
        <ControlsPanel className={commonStyles.topRightControls} controls={topRightControls} />
      )}
    </div>
    <InputGroup columns={columns} itemClassName={itemClassName} verticalSort={verticalSort}>{children}</InputGroup>
  </div>
);