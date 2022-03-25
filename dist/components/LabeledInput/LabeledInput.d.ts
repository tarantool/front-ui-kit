import React, { FC } from 'react';
import type { InputProps } from '../Input';
declare type LabeledInputProps = InputProps & {
    inputComponent?: React.ComponentType<any>;
    inputClassName?: string;
    className?: string;
    id?: string;
    info?: string;
    label: string;
    largeMargins?: boolean;
    subTitle?: string | React.ReactNode;
    topRightControls?: React.ReactNode[];
    error?: boolean;
    message?: string;
    preserveMessageSpace?: boolean;
};
export declare const LabeledInput: FC<LabeledInputProps>;
export {};
