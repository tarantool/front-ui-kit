// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
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
  errorMessage: css`
    display: block;
    height: 20px;
    color: #F5222D;
    position: absolute;
  `
};

type LabeledInputProps = {
  children?: React.Node,
  className?: string,
  info?: string,
  label: string,
  subTitle?: string | React.Node,
  topRightControls?: React.Node[],
  errorMessage?: string,
};

export const LabeledInput = ({
  children,
  topRightControls,
  className,
  subTitle,
  info,
  label,
  errorMessage
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
    {children}
    <Text variant='p' className={styles.errorMessage}>{errorMessage}</Text>
  </label>
);
