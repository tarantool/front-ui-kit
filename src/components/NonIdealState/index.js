// @flow
import * as React from 'react';
import type { ComponentType } from 'react'
import { css, cx } from 'emotion';
import { Button } from '../Button';
import { Text } from '../Text';

const styles = {
  wrap: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  `,
  icon: css`
    width: 36px;
    height: 36px;
    fill: rgba(0, 0, 0, 0.45);
  `,
  iconMargin: css`
    margin-bottom: 16px;
  `,
  title: css`
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.65);
  `
};

type NonIdealStateProps = {
  children: React.Node,
  className?: string,
  icon: ComponentType<any>,
  title: string,
};

export const NonIdealState = (
  {
    children,
    className,
    icon: Icon,
    title
  }: NonIdealStateProps
) => (
  <div className={cx(styles.wrap, className)}>
    {Icon
      ? <Icon className={cx(styles.icon, { [styles.iconMargin]: title })} />
      : null
    }
    <Text className={styles.title}>{title}</Text>
    {children}
  </div>
);

type NonIdealStateActionProps = {
  actionText: string,
  children: React.Node,
  className?: string,
  icon: ComponentType<any>,
  onActionClick: (e: MouseEvent) => void,
  title: string,
};

export const NonIdealStateAction = (
  {
    actionText,
    className,
    icon,
    onActionClick,
    title
  }: NonIdealStateActionProps
) => (
  <NonIdealState
    className={className}
    icon={icon}
    title={title}
  >
    <Button autoFocus text={actionText} onClick={onActionClick} />
  </NonIdealState>
);
