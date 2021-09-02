// @flow
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import { rgba } from 'emotion-rgba';
import { colors } from '../../variables';
import { Text } from '../Text';
import { IconCheckbox } from '../Icon/icons/IconCheckbox';

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
    clip: rect(0 0 0 0);
    width: 0;
    height: 0;
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
      border-radius: 3px;
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

type CheckboxProps = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  disabled?: boolean,
  indeterminate?: boolean,
  name?: string,
  title?: string,
  value?: string,
  onChange?: (MouseEvent) => void,
};

export const Checkbox = ({
  checked = false,
  children,
  className,
  disabled = false,
  indeterminate = false,
  onChange,
  name,
  title,
  value,
}: CheckboxProps) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && (inputRef.current.indeterminate = indeterminate);
  }, [indeterminate]);

  return (
    <label className={cx(styles.label, className)} title={title}>
      <input
        checked={checked}
        className={styles.input}
        disabled={disabled}
        type="checkbox"
        onChange={onChange}
        name={name}
        value={value}
        ref={inputRef}
      />
      <div className={cx(styles.iconWrap, { [styles.childrenMargin]: children })}>
        <IconCheckbox className={styles.icon} checked={checked} indeterminate={indeterminate} disabled={disabled} />
      </div>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </label>
  );
};
