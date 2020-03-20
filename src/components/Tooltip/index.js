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
  tag?: string,
  popoverClassName?: string
};

type withTooltipProps = {
  children?: React.Node,
  className?: string,
  onMouseEnter?: (e: MouseEvent) => void,
  onMouseLeave?: (e: MouseEvent) => void,
  onScroll?: (e: MouseEvent) => void,
  tooltipContent?: React.Node,
  popoverClassName?: string
};

type withTooltipState = {
  cornerPositionX: number,
  visible: boolean,
  top: number,
  left: number,
  topPlacement: boolean
};

export const withTooltip = (Component: React.ComponentType<any> | string) => class extends React.Component<
  withTooltipProps,
  withTooltipState
> {
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

  wrapperRef = React.createRef<HTMLElement | React.Component<any>>();
  tooltipRef = React.createRef<HTMLElement>();

  componentDidUpdate(prevProps: withTooltipProps, prevState: withTooltipState) {
    const {
      visible
    } = this.state;

    const { wrapperRef, tooltipRef } = this;

    const tooltipElement = tooltipRef.current;
    const wrapperElement: HTMLElement = (wrapperRef.current && wrapperRef.current.elementRef)
      ? wrapperRef.current.elementRef.current
      : wrapperRef.current;

    if (((visible && !prevState.visible) || (prevProps !== this.props)) && tooltipElement && wrapperElement) {
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

  handleMouseEnter = (evt: MouseEvent) => {
    const { onMouseEnter } = this.props;
    this.showTooltip();
    if (onMouseEnter) onMouseEnter(evt);
  }

  handleMouseLeave = (evt: MouseEvent) => {
    const { onMouseLeave } = this.props;
    this.hideTooltip();
    if (onMouseLeave) onMouseLeave(evt);
  }

  handleScroll = (evt: MouseEvent) => {
    const { onScroll } = this.props;
    this.hideTooltip();
    if (onScroll) onScroll(evt);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideTooltip, true);
  }

  render() {
    const { children, className, tooltipContent, ...props } = this.props;

    return (
      <>
        <Component
          {...props}
          className={cx(styles.wrapper, className)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onScroll={this.handleScroll}
          ref={this.wrapperRef}
        >
          {children}
        </Component>
        {this.renderTooltipPortal()}
      </>
    );
  }

  renderTooltip() {
    const { tooltipContent, popoverClassName } = this.props;
    const { cornerPositionX, left, top, topPlacement } = this.state;

    return (
      <div
        className={cx(
          textStyles.p,
          styles.tooltip({ cornerPositionX }),
          { [styles.cornerUp]: !topPlacement },
          popoverClassName
        )}
        style={{
          left,
          top
        }}
        ref={this.tooltipRef}
      >
        {tooltipContent}
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

export const Tooltip = (
  {
    children,
    className,
    content,
    tag,
    popoverClassName
  }: TooltipProps
) => {
  const Component = withTooltip(tag || 'div');

  return (
    <Component
      className={cx(styles.wrapper, className)}
      tooltipContent={content}
      popoverClassName={popoverClassName}
    >
      {children}
    </Component>
  );
};
