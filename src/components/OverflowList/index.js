// @flow

import * as React from 'react';

import { ResizeSensor } from '../ResizeSensor';
import { css, cx } from 'emotion';
import { shallowCompareKeys } from './utils';
import type { Entries } from '../ResizeSensor';

export interface IOverflowListProps<T> {
  items: T[],
  className?: string,
  minVisibleItems?: number,
  observeParents?: boolean,
  onOverflow?: (overflowItems: T[]) => void;
  overflowRenderer: (overflowItems: T[]) => React.Node;
  style?: string;
  tagName?: string;
  visibleItemRenderer: (item: T, index: number) => React.Node;
}

export interface IOverflowListState<T> {
  direction: string;
  lastOverflowCount: number;
  overflow: T[];
  visible: T[];
}

const OverflowDirection = {
  NONE: 'none',
  GROW: 'grow',
  SHRINK: 'shrink'
};

const styles = {
  overFlowList: css`
     display: flex;
     flex-wrap: nowrap;
     min-width: 0;
  `,
  overflowListSpacer: css`
    flex-shrink: 1;
    width: 1px;
  `
};

export class OverflowList<T> extends React.Component<IOverflowListProps<T>, IOverflowListState<T>> {
  static defaultProps = {
    minVisibleItems: 0
  };

  state: IOverflowListState<T> = {
    direction: OverflowDirection.NONE,
    lastOverflowCount: 0,
    overflow: [],
    visible: this.props.items
  };

  previousWidths = new Map<Element, number>();
  spacer: Element | null = null;

  componentDidMount() {
    this.repartition(false);
  }

  shouldComponentUpdate(_nextProps: IOverflowListProps<T>, nextState: IOverflowListState<T>) {
    return !(this.state !== nextState && shallowCompareKeys(this.state, nextState));
  }

  componentDidUpdate(prevProps: IOverflowListProps<T>, prevState: IOverflowListState<T>) {
    if (
      prevProps.items !== this.props.items ||
      prevProps.minVisibleItems !== this.props.minVisibleItems ||
      prevProps.overflowRenderer !== this.props.overflowRenderer ||
      prevProps.visibleItemRenderer !== this.props.visibleItemRenderer
    ) {
      this.setState({
        direction: OverflowDirection.GROW,
        lastOverflowCount: 0,
        overflow: [],
        visible: this.props.items
      });
    }

    if (!shallowCompareKeys(prevState, this.state)) {
      this.repartition(false);
    }
    const { direction, overflow, lastOverflowCount } = this.state;
    if (
      direction === OverflowDirection.NONE &&
      direction !== prevState.direction &&
      overflow.length !== lastOverflowCount
    ) {
      this.props.onOverflow && this.props.onOverflow(overflow);

    }
  }

  render() {
    const {
      className, observeParents, style, tagName = 'div', visibleItemRenderer
    } = this.props;
    const overflow = this.maybeRenderOverflow();
    const list = React.createElement(
      tagName,
      {
        className: cx(styles.overFlowList, className),
        style
      },
      overflow,
      this.state.visible.map(visibleItemRenderer),
      null,
      <div className={styles.overflowListSpacer} ref={ref => (this.spacer = ref)}/>
    );

    return (
      <ResizeSensor onResize={this.resize} observeParents={observeParents}>
        {list}
      </ResizeSensor>
    );
  }

  maybeRenderOverflow() {
    const { overflow } = this.state;
    if (overflow.length === 0) {
      return null;
    }
    return this.props.overflowRenderer(overflow);
  }

  resize = (entries: Entries) => {
    const growing = entries.some(entry => {
      const previousWidth = this.previousWidths.get(entry.target) || 0;
      return entry.contentRect.width > previousWidth;
    });
    this.repartition(growing);
    entries.forEach(entry => this.previousWidths.set(entry.target, entry.contentRect.width));
  };

  repartition(growing: boolean) {
    if (this.spacer == null) {
      return;
    }
    if (growing) {
      this.setState(state => ({
        direction: OverflowDirection.GROW,
        // store last overflow if this is the beginning of a resize (for check in componentDidUpdate).
        lastOverflowCount:
          state.direction === OverflowDirection.NONE ? state.overflow.length : state.lastOverflowCount,
        overflow: [],
        visible: this.props.items
      }));
    } else if (this.spacer.getBoundingClientRect().width < 0.9) {
      this.setState(state => {
        if (state.visible.length <= Number(this.props.minVisibleItems)) {
          return null;
        }
        const visible = state.visible.slice();
        const next = visible.shift();
        if (next === undefined) {
          return null;
        }
        const overflow = [...state.overflow, next];
        return {
          direction: state.direction === OverflowDirection.NONE ? OverflowDirection.SHRINK : state.direction,
          overflow,
          visible
        };
      });
    } else {
      this.setState({ direction: OverflowDirection.NONE });
    }
  }
}
