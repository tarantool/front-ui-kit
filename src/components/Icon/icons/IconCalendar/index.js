// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import image from './calendar.svg';

const styles = css`
  width: 16px;
  height: 16px;
  fill: rgba(0, 0, 0, .65);
`;

export const IconCalendar = ({ className, ...props }: GenericIconProps) => (
  <Icon
    {...props}
    className={cx(styles, className)}
    glyph={image}
  />
);
