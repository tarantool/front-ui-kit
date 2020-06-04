// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../variables';
import { SVGImage } from '../../../SVGImage';
import sortUp from '../sortUp.svg';
import sortDown from '../sortDown.svg';
import type { IconSortableStyleProps } from '../index';

const styles = {
  icon: css`
    display: inline-flex;
    flex-direction: column;
    vertical-align: middle;
  `,
  baseIcon: css`
    width: 6px;
    height: 4px;
    fill: #000000a6;
    margin: 1px;
  `,
  styledIcon: css`
    fill: ${colors.intentPrimary};
  `
};

export const IconSortableAsc = ({ className }: IconSortableStyleProps) => (
  <span className={cx(styles.icon, className)}>
    <SVGImage
      className={cx(styles.baseIcon, styles.styledIcon)}
      glyph={sortUp}
    />
    <SVGImage
      className={cx(styles.baseIcon)}
      glyph={sortDown}
    />
  </span>
);
