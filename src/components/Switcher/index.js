// @flow
import React from 'react';
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { colors } from '../../variables';
import { Text } from '../Text';

const styles = {
  input: css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    appearance: none;

    &:focus + div::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: solid 1px rgba(255, 255, 255, 0);
      border-radius: 15px;
    }

    &:focus + div::before {
      border-color: ${rgba(colors.intentPrimary, 0.55)};
    }
  `,
  switcher: css`
    position: relative;
    flex-shrink: 0;
    width: 42px;
    height: 22px;
    border: solid 1px transparent;
    border-radius: 12px;
    margin-right: 8px;
    box-sizing: border-box;
    background-color: #a6a6a6;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #ffffff;
    }
  `,
  children: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  childrenMargin: css`
    margin-right: 8px;
  `,
  basicDisabled: css`
    cursor: default;
  `,
  notDisabled: css`
    background-color: rgba(0, 0, 0, 0.25);

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.35);
    }
  `,
  checked: css`
    background-color: ${colors.intentPrimary};

    &:hover,
    &:focus {
      background-color: ${colors.activeAction};
    }

    &::after {
      left: auto;
      right: 1px;
    }
  `,
  disabled: css`
    border-color: ${colors.intentBase};
    background-color: ${colors.intentBaseBg};
    cursor: default;

    &::after {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    }
  `,
  checkedDisabled: css`
    background-color: ${colors.intentPrimaryDisabled};

    &::after {
      left: auto;
      right: 1px;
    }
  `,
  label: css`
    display: flex;
    align-items: center;
  `,
};

type SwitcherProps = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  disabled?: boolean,
  name?: string,
  onChange?: (MouseEvent) => void,
  title?: string,
};

export const Switcher = ({ checked, children, className, disabled, name, onChange, title }: SwitcherProps) => (
  <label className={cx(styles.label, className)} title={title}>
    <input
      checked={checked}
      className={styles.input}
      disabled={disabled}
      name={name}
      type="checkbox"
      onChange={onChange}
    />
    <div
      className={cx(styles.switcher, {
        [styles.notDisabled]: !checked && !disabled,
        [styles.checked]: checked && !disabled,
        [styles.disabled]: !checked && disabled,
        [styles.basicDisabled]: disabled,
        [styles.checkedDisabled]: checked && disabled,
        [styles.childrenMargin]: children,
      })}
    />
    {typeof children === 'string' ? <Text className={styles.children}>{children}</Text> : children}
  </label>
);
