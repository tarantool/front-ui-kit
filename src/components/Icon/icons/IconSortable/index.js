// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../variables';
import { Icon, type GenericIconProps } from '../../Icon';
import sortUp from './icon-sort-desc.svg';

const styles = {
  icon: css`
    width: 16px;
    height: 16px;
    fill: ${colors.dark65};
  `,
  asc: css`transform: rotateX(180deg);`
};

export const IconSortableDesc = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles.icon, className)}
    glyph={sortUp}
  />
);

export const IconSortableAsc = ({ className }: GenericIconProps) => (
  <Icon
    className={cx(styles.icon, styles.asc, className)}
    glyph={sortUp}
  />
);
