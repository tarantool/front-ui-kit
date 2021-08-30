// @flow

import React from 'react';
import { cx } from '@emotion/css';

import { Text } from '../../Text';
import { isSafari } from '../../../utils/browser';

import type { TopRowProps } from '../types';
import { styles } from '../TableRow';

export const TableStickyRow = React.memo<TopRowProps>(({
  cellsLength,
  topRowClassName,
  topRowStickySide,
  headerRef,
  children
}: TopRowProps) => {
  const [ theadHeight, setTHeadHeight ] = React.useState<number>(0);

  React.useEffect(() => {
    if (isSafari && headerRef.current) {
      setTHeadHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);

  return (
    <tr>
      <Text
        tag='td'
        colSpan={cellsLength}
        className={
          cx(
            styles.topRow,
            { [styles.sticky]: !Number.isNaN(Number(topRowStickySide)) },
            topRowClassName
          )
        }
        style={{ top: isSafari ? Number(topRowStickySide) - theadHeight : topRowStickySide }}
      >
        {children}
      </Text>
    </tr>
  );
});
