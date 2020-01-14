// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css, cx } from 'emotion';
import { textStyles } from '../Text';
import { zIndex } from '../../variables';

const CORNER_HEIGHT = 8;

const styles = {
  tooltip: ({ cornerPositionX }) => css`
    position: absolute;
    z-index: ${zIndex.tooltip};
    max-width: 400px;
    padding: 5px 16px;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.65) !important;
    border-radius: 4px;

    &::after {
      content: '';
      position: absolute;
      left: calc(${cornerPositionX}px - 8px);
      bottom: -${CORNER_HEIGHT}px;
      border: solid 0 transparent;
      border-left: solid ${CORNER_HEIGHT}px transparent;
      border-right: solid ${CORNER_HEIGHT}px transparent;
      border-top: solid ${CORNER_HEIGHT}px rgba(0, 0, 0, 0.65);
    }
  `,
  cornerUp: css`
    &::after {
      top: -${CORNER_HEIGHT}px;
      bottom: auto;
      border: solid 0 transparent;
      border-left: solid ${CORNER_HEIGHT}px transparent;
      border-right: solid ${CORNER_HEIGHT}px transparent;
      border-bottom: solid ${CORNER_HEIGHT}px rgba(0, 0, 0, 0.65);
    }
  `,
  wrapper: css`
    cursor: pointer;
  `
};

type TooltipProps = {
  children: React.Node,
  className?: string,
  content?: React.Node,
  tag?: string
};

type TooltipState = {
  cornerPositionX: number,
  visible: boolean,
  top: number,
  left: number,
  topPlacement: boolean
};

export class Tooltip extends React.Component<TooltipProps, TooltipState> {
  state = {
    cornerPositionX: 0,
    visible: false,
    top: 0,
    left: 0,
    topPlacement: true
  };

  static defaultProps = {
    placement: 'top'
  };

  wrapperRef = React.createRef<HTMLElement>();
  tooltipRef = React.createRef<HTMLElement>();

  componentDidUpdate(prevProps: TooltipProps, prevState: TooltipState) {
    const {
      visible
    } = this.state;

    const tooltipElement = this.tooltipRef.current;
    const wrapperElement = this.wrapperRef.current;

    if (visible && !prevState.visible && tooltipElement && wrapperElement) {
      const bodyWidth = document.body ? document.body.clientWidth : 0;
      const wrapperRect = wrapperElement.getBoundingClientRect();
      const wrapperCenterX = window.scrollX + wrapperRect.left + wrapperElement.offsetWidth / 2;
      const topPlacement = wrapperRect.top - (tooltipElement.offsetHeight + CORNER_HEIGHT) >= 0;
      let tooltipShiftLeft = Math.min(wrapperCenterX - tooltipElement.offsetWidth / 2, 0);
      let left = Math.max(wrapperCenterX - tooltipElement.offsetWidth / 2, 0);
      const tooltipOffsetRight = bodyWidth - left - tooltipElement.offsetWidth;

      if (tooltipOffsetRight < 0) {
        left = left + tooltipOffsetRight;
        tooltipShiftLeft = -tooltipOffsetRight;
      }

      const cornerPositionX = tooltipElement.offsetWidth / 2 + tooltipShiftLeft;

      window.wrapperElement = wrapperElement;
      window.tooltipElement = tooltipElement;

      this.setState({
        cornerPositionX,
        top: topPlacement
          ? window.scrollY + wrapperRect.top - tooltipElement.offsetHeight - CORNER_HEIGHT
          : window.scrollY + wrapperRect.top + wrapperElement.offsetHeight + CORNER_HEIGHT,
        left,
        topPlacement
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideTooltip, true);
  }

  render() {
    const { children, className, tag } = this.props;

    const Component = tag || 'div';

    return (
      <Component
        className={cx(styles.wrapper, className)}
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        onScroll={this.hideTooltip}
        ref={this.wrapperRef}
      >
        {this.renderTooltipPortal()}
        {children}
      </Component>
    );
  }

  renderTooltip() {
    const { content } = this.props;
    const { cornerPositionX, left, top, topPlacement } = this.state;

    return (
      <div
        className={cx(
          textStyles.p,
          styles.tooltip({ cornerPositionX }),
          { [styles.cornerUp]: !topPlacement }
        )}
        style={{
          left,
          top
        }}
        ref={this.tooltipRef}
      >
        {content}
      </div>
    );
  }

  renderTooltipPortal = () => {
    if (this.state.visible) {
      const root = document.body;

      if (root) {
        return ReactDOM.createPortal(this.renderTooltip(), root);
      }
    }

    return null;
  };

  showTooltip = () => {
    const { visible } = this.state;

    if (!visible) {
      this.setState({
        visible: true
      });

      window.addEventListener('scroll', this.hideTooltip, true);
    }
  }

  hideTooltip = () => {
    this.setState({
      visible: false,
      top: 0,
      left: 0
    });

    window.removeEventListener('scroll', this.hideTooltip, true);
  }
};
