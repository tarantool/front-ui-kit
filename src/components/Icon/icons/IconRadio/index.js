// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import radio from './radio.svg';
import radioSelected from './radio-checked.svg';
import radioDisabled from './radio-disabled.svg';
import radioSelectedDisabled from './radio-checked-disabled.svg';

const CHECKED = 1;
const DISABLED = 2;

const states = [radio, radioSelected, radioDisabled, radioSelectedDisabled];

const styles = css`
  width: 16px;
  height: 16px;
  fill: ${colors.intentPrimary};
  stroke: ${colors.intentPrimary};
`;

const stylesDisabled = css`
  fill: ${colors.intentPrimaryDisabled};
  stroke: ${colors.intentPrimaryDisabled};
`;

type IconRadioProps = {
  ...$Exact<GenericIconProps>,
  checked?: boolean,
  disabled?: boolean,
};

export const IconRadio = ({ checked, className, disabled }: IconRadioProps) => {
  const mask = (disabled ? DISABLED : 0) + (checked ? CHECKED : 0);
  return <Icon className={cx(styles, { [stylesDisabled]: disabled }, className)} glyph={states[mask]} />;
};

export const IconRadioChecked = (props: GenericIconProps) => <IconRadio {...props} checked />;

export const IconRadioDisabled = (props: GenericIconProps) => <IconRadio {...props} disabled />;

export const IconRadioCheckedDisabled = (props: GenericIconProps) => <IconRadio {...props} checked disabled />;
