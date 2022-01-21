import React, { ChangeEventHandler, FC, useEffect, useRef } from 'react';
import { cx } from '@emotion/css';

import { IconCheckbox } from '../Icon';
import { Text } from '../Text';

import { styles } from './Checkbox.styles';

type CheckboxProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  title: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  children,
  className,
  disabled = false,
  indeterminate = false,
  onChange,
  name,
  title,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
      <div className={cx(styles.iconWrap, { [styles.childrenMargin]: !!children })}>
        <IconCheckbox className={styles.icon} checked={checked} indeterminate={indeterminate} disabled={disabled} />
      </div>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </label>
  );
};
