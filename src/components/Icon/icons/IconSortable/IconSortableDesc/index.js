// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../variables';
import { SVGImage } from '../../../SVGImage';
import sortUp from '../sortAsc.svg';
import type { IconSortableStyleProps } from '../index';

const styles = {
  icon: css`
    width: 16px;
    height: 10px;
    fill: ${colors.dark65};
    transform: rotateX(180deg);
  `
};

export const IconSortableDesc = ({ className }: IconSortableStyleProps) => (
  <SVGImage
    className={cx(styles.icon, className)}
    glyph={sortUp}
  />
);
