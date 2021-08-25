// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import checkbox from './checkbox.svg';
import checkboxChecked from './checkbox-checked.svg';
import checkboxDisabled from './checkbox-disabled.svg';
import checkboxIndeterminate from './checkbox-indeterminate.svg';
import checkboxCheckedDisabled from './checkbox-checked-disabled.svg';
import checkboxIndeterminateDisabled from './checkbox-indeterminate-disabled.svg';

const INDETERMINATE = 4;
const CHECKED = 2;
const DISABLED = 1;

const states = [
  checkbox,
  checkboxDisabled,
  checkboxChecked,
  checkboxCheckedDisabled,
  checkboxIndeterminate,
  checkboxIndeterminateDisabled
];

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary};
`;

const stylesDisabled = css`
  fill: ${colors.intentPrimaryDisabled};
`;

type IconCheckboxProps = {
  ...$Exact<GenericIconProps>,
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
}

export const IconCheckbox = ({ checked, className, disabled, indeterminate }: IconCheckboxProps) => {
  const mask = (indeterminate ? INDETERMINATE : 0)
    + (disabled ? DISABLED : 0)
    + (checked && !indeterminate ? CHECKED : 0);

  return (
    <Icon
      className={cx(styles, { [stylesDisabled]: disabled }, className)}
      glyph={states[mask]}
    />
  );
};

export const IconCheckboxChecked = (props: GenericIconProps) => (
  <IconCheckbox {...props} checked />
);

export const IconCheckboxDisabled = (props: GenericIconProps) => (
  <IconCheckbox {...props} disabled />
);

export const IconCheckboxIndeterminate = (props: GenericIconProps) => (
  <IconCheckbox {...props} indeterminate />
);

export const IconCheckboxIndeterminateDisabled = (props: GenericIconProps) => (
  <IconCheckbox {...props} indeterminate disabled />
);

export const IconCheckboxCheckedDisabled = (props: GenericIconProps) => (
  <IconCheckbox {...props} checked disabled />
);
