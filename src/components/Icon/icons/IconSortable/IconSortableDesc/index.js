// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../../variables';
import { Icon, type GenericIconProps } from '../../../Icon';
import sortUp from '../sortUp.svg';
import sortDown from '../sortDown.svg';

const styles = {
  icon: css`
    display: inline-flex;
    flex-direction: column;
    vertical-align: middle;
  `,
  baseIcon: css`
    width: 6px;
    height: 4px;
    fill: #C4C4C4;
    margin: 1px;
  `,
  styledIcon: css`
    fill: ${colors.intentPrimary};
  `
};

export const IconSortableDesc = ({ className, ...props }: GenericIconProps) => (
  <span className={cx(styles.icon, className)}>
    <Icon
      {...props}
      className={cx(styles.baseIcon)}
      glyph={sortUp}
    />
    <Icon
      {...props}
      className={cx(styles.baseIcon, styles.styledIcon)}
      glyph={sortDown}
    />
  </span>
);
