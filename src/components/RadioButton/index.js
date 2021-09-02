// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';
import { colors } from '../../variables';
import { IconRadio } from '../Icon';
import { Text } from '../Text';

const styles = {
  icon: css`
    display: block;
  `,
  iconWrap: css`
    position: relative;
  `,
  children: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  childrenMargin: css`
    margin-right: 8px;
  `,
  input: css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    appearance: none;

    & + div::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: solid 1px rgba(255, 255, 255, 0);
      border-radius: 50%;
    }

    &:focus + div::before {
      border-color: ${rgba(colors.intentPrimary, 0.55)};
    }
  `,
  label: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
};

type RadioButtonProps = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  disabled?: boolean,
  name?: string,
  title?: string,
  value?: string,
  onChange?: (MouseEvent) => void,
};

export const RadioButton = ({
  checked,
  children,
  className,
  disabled,
  onChange,
  name,
  title,
  value,
}: RadioButtonProps) => (
  <label className={cx(styles.label, className)} title={title}>
    <input
      checked={checked}
      className={styles.input}
      disabled={disabled}
      type="radio"
      onChange={onChange}
      name={name}
      value={value}
    />
    <div className={cx(styles.iconWrap, { [styles.childrenMargin]: children })}>
      <IconRadio className={styles.icon} checked={checked} disabled={disabled} />
    </div>
    {typeof children === 'string' ? <Text className={styles.children}>{children}</Text> : children}
  </label>
);
