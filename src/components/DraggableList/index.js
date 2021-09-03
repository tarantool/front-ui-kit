// @flow

import * as React from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { css } from '@emotion/css';
import { zIndex } from '../../variables';

const styles = {
  helper: css`
    z-index: ${zIndex.dragNDrop};
  `,
};

type DraggableListBase = {
  className?: string,
  children: React.Node,
  tag?: string,
};

type FuncData = {
  oldIndex: number,
  newData: number,
};

export type DraggableListProps = {
  items: React.Node[],
  wrapperClassName?: string,
  onChange: (data: FuncData) => void,
};

export const DraggableList = ({ wrapperClassName, items, onChange }: DraggableListProps) => {
  return (
    <DraggableListContainer helperClass={styles.helper} className={wrapperClassName} onSortEnd={onChange}>
      {items}
    </DraggableListContainer>
  );
};

export const DraggableListItem = sortableElement(
  ({ children, className = '', tag: Element = 'div' }: DraggableListBase) => (
    <Element className={className}>{children}</Element>
  )
);

export const DraggableListContainer = sortableContainer(
  ({ children, className = '', tag: Element = 'div' }: DraggableListBase) => {
    return <Element className={className}>{children}</Element>;
  }
);
