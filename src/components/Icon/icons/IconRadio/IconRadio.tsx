import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon, SVGGlyphTypes } from '../../Icon';
import radioSelectedDisabled from './radio-checked-disabled.svg';
import radioSelected from './radio-checked.svg';
import radioDisabled from './radio-disabled.svg';
import radio from './radio.svg';

import { styles, stylesDisabled } from './IconRadio.styles';

const CHECKED = 1;
const DISABLED = 2;

const states = [radio, radioSelected, radioDisabled, radioSelectedDisabled];

type IconRadioProps = GenericIconProps & {
  checked?: boolean;
  disabled?: boolean;
};

export const IconRadio = ({ checked, className, disabled }: IconRadioProps) => {
  const mask = (disabled ? DISABLED : 0) + (checked ? CHECKED : 0);
  return (
    // ask Timur
    <Icon className={cx(styles, { [stylesDisabled]: disabled }, className)} glyph={states[mask] as SVGGlyphTypes} />
  );
};

export const IconRadioChecked = (props: GenericIconProps) => <IconRadio {...props} checked />;

export const IconRadioDisabled = (props: GenericIconProps) => <IconRadio {...props} disabled />;

export const IconRadioCheckedDisabled = (props: GenericIconProps) => <IconRadio {...props} checked disabled />;
