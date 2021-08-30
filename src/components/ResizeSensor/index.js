// @flow

import * as React from 'react';
import { findDOMNode } from 'react-dom';
import ResizeObserver from 'resize-observer-polyfill';

export type Entries = $ReadOnlyArray<ResizeObserverEntry>;

type ResizeSensorProps = {
  onResize: (entries: any) => void,
  observeParents?: boolean,
  children: React.Node,
}

export class ResizeSensor extends React.PureComponent<ResizeSensorProps> {
  element: Element | null = null;
  observer = new ResizeObserver((entries: any) => this.props.onResize(entries));

  componentDidMount() {
    this.observeElement();
  }

  componentDidUpdate(prevProps: ResizeSensorProps) {
    this.observeElement(this.props.observeParents !== prevProps.observeParents);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    return React.Children.only(this.props.children);
  }

  observeElement(force: boolean = false) {
    const element = this.getElement();
    if (!(element instanceof Element)) {
      this.observer.disconnect();
      return;
    }

    if (element === this.element && !force) {
      return;
    } else {
      this.observer.disconnect();
      this.element = element;
    }

    this.observer.observe(element);

    if (this.props.observeParents) {
      let parent = element.parentElement;
      while (parent != null) {
        this.observer.observe(parent);
        parent = parent.parentElement;
      }
    }
  }

  getElement() {
    try {
      // eslint-disable-next-line react/no-find-dom-node
      return findDOMNode(this);
    } catch {
      // swallow error if findDOMNode is run on unmounted component.
      return null;
    }
  }
}
