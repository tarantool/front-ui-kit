import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import checkboxCheckedDisabled from './checkbox-checked-disabled.svg';
import checkboxChecked from './checkbox-checked.svg';
import checkboxDisabled from './checkbox-disabled.svg';
import checkboxIndeterminateDisabled from './checkbox-indeterminate-disabled.svg';
import checkboxIndeterminate from './checkbox-indeterminate.svg';
import checkbox from './checkbox.svg';

import { styles } from './IconCheckbox.styles';

const INDETERMINATE = 4;
const CHECKED = 2;
const DISABLED = 1;

const states = [
  checkbox,
  checkboxDisabled,
  checkboxChecked,
  checkboxCheckedDisabled,
  checkboxIndeterminate,
  checkboxIndeterminateDisabled,
];

type IconCheckboxProps = GenericIconProps & {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};

export const IconCheckbox = ({ checked, className, disabled, indeterminate }: IconCheckboxProps) => {
  const mask =
    (indeterminate ? INDETERMINATE : 0) + (disabled ? DISABLED : 0) + (checked && !indeterminate ? CHECKED : 0);

  const glyph = states[mask];
  if (!glyph) {
    return null;
  }

  return <Icon className={cx(styles.root, { [styles.disabled]: disabled }, className)} glyph={glyph} />;
};

export const IconCheckboxChecked = (props: GenericIconProps) => <IconCheckbox {...props} checked />;

export const IconCheckboxDisabled = (props: GenericIconProps) => <IconCheckbox {...props} disabled />;

export const IconCheckboxIndeterminate = (props: GenericIconProps) => <IconCheckbox {...props} indeterminate />;

export const IconCheckboxIndeterminateDisabled = (props: GenericIconProps) => (
  <IconCheckbox {...props} indeterminate disabled />
);

export const IconCheckboxCheckedDisabled = (props: GenericIconProps) => <IconCheckbox {...props} checked disabled />;
