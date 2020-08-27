// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../../../../variables';
import { SVGImage } from '../../../../SVGImage';
import sortUp from '../sortDesc.svg';
import type { IconSortableStyleProps } from '../index';

const styles = {
  icon: css`
    width: 16px;
    height: 16px;
    fill: ${colors.dark10};
    transform: rotateX(180deg);
  `
};

export const IconSortableNone = ({ className }: IconSortableStyleProps) => (
  <SVGImage
    className={cx(styles.icon, className)}
    glyph={sortUp}
  />
);
