// @flow
import React, { useCallback, useState, useEffect } from 'react';
import { css, cx } from 'emotion';
import { Input } from '../Input';
import { Dropdown, DropdownItem } from '../Dropdown';
import { IconChevronDown, IconChevron } from '../Icon';
import { colors } from '../../variables';

const styles = {
  icon: css`
    fill: #595959;
  `,
  input: css`
     & > :first-child {
      cursor: pointer;
      caret-color: transparent;
      user-select: none;
    }
  `,
  selected: css`
    background-color: ${colors.dark2}
  `,
  noData: css`
    text-align: center;
  `
};

type Option = {
  label: string,
  value: any
}

type SelectProps = {
  options: Option[],
  value: string,
  onChange: (value: any, option: Option) => void,
  className?: string,
  dropdownClassName?: string,
  allowSearch?: boolean,
  disabled?: boolean,
  inputProps?: any
}

export const Select = (props: SelectProps) => {
  const [ dropdownVisible, setDropdownVisible ] = useState(false);
  const [ value, setValue ] = useState('');
  useEffect(() => {
    setValue('');
  }, [ dropdownVisible ]);
  const onChangeInput = e => props.allowSearch ? setValue(e.target.value) : undefined;
  const getLabel = useCallback(() => {
    if (!props.value) {
      return undefined;
    }

    const option = props.options.find(o => o.value === props.value);
    return option ? option.label : props.value;
  }, [ props.value, props.options ]);
  const getSelectOptions = useCallback(() => {
    if (!props.options || props.options.length === 0) {
      return [];
    }

    if (!value) {
      return props.options
    }

    return props.options.filter(o => o.label.toLowerCase().includes(value.toLowerCase()));
  }, [ value, props.options ]);

  const Icon = dropdownVisible ? IconChevron : IconChevronDown;
  return (
    <Dropdown
      popoverClassName={props.dropdownClassName}
      disabled={props.disabled}
      onDropdownVisibleChange={setDropdownVisible}
      autoFocus={!props.allowSearch}
      items={
        getSelectOptions().length > 0 ? getSelectOptions().map(
          option => (
            <DropdownItem
              key={option.value}
              onClick={() => props.onChange(option.value, option)}
              className={cx({ [styles.selected ]: option.value === props.value })}
            >
              {option.label}
            </DropdownItem>
          )
        ) : (
          <DropdownItem className={styles.noData}>
            No data
          </DropdownItem>
        )
      }
    >
      <Input
        value={props.allowSearch && dropdownVisible ? value : getLabel()}
        placeholder={props.allowSearch && dropdownVisible ? getLabel() : ''}
        onChange={onChangeInput}
        disabled={props.disabled}
        className={cx({ [styles.input]: !props.allowSearch }, props.className)}
        autocomplete="new-password"
        rightIcon={<Icon className={styles.icon} />}
        {...props.inputProps}
      />
    </Dropdown>
  )
};
