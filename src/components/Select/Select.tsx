import React, { FC, useCallback, useEffect, useState } from 'react';
import { cx } from '@emotion/css';

import { Dropdown, DropdownItem } from '../Dropdown';
import { IconChevron, IconChevronDown } from '../Icon';
import { Input, InputProps } from '../Input';

import { styles } from './Select.styles';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value: string | null;
  onChange: (value: string, option: Option) => void;
  className?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  allowSearch?: boolean;
  disabled?: boolean;
  inputProps?: InputProps;
};

export const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  inputClassName,
  dropdownClassName,
  allowSearch,
  disabled,
  inputProps,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [valueOptions, setValueOptions] = useState('');

  useEffect(() => {
    setValueOptions('');
  }, [dropdownVisible]);

  const onChangeInput = (e) => (allowSearch ? setValueOptions(e.target.value) : undefined);

  const getLabel = useCallback(() => {
    if (!value) {
      return '';
    }
    const option = options.find((o) => o.value === value);
    return option ? option.label : value;
  }, [value, options]);

  const getSelectOptions = useCallback(() => {
    if (!options || !options.length) {
      return [];
    }
    if (!valueOptions) {
      return options;
    }
    return options.filter((o) => o.label.toLowerCase().includes(valueOptions.toLowerCase()));
  }, [valueOptions, options]);

  const Icon = dropdownVisible ? IconChevron : IconChevronDown;

  return (
    <Dropdown
      popoverClassName={dropdownClassName}
      disabled={disabled}
      className={className}
      onDropdownVisibleChange={setDropdownVisible}
      autoFocus={!allowSearch}
      items={
        getSelectOptions().length ? (
          getSelectOptions().map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onChange(option.value, option)}
              className={cx({ [styles.selected]: option.value === value })}
            >
              {option.label}
            </DropdownItem>
          ))
        ) : (
          <DropdownItem className={styles.noData}>No data</DropdownItem>
        )
      }
    >
      <Input
        value={allowSearch && dropdownVisible && value ? value : getLabel()}
        placeholder={allowSearch && dropdownVisible ? getLabel() : ''}
        onChange={onChangeInput}
        disabled={disabled}
        className={cx({ [styles.input]: !allowSearch && !disabled }, inputClassName)}
        autoComplete="new-password"
        rightIcon={<Icon className={styles.icon} />}
        {...inputProps}
      />
    </Dropdown>
  );
};
