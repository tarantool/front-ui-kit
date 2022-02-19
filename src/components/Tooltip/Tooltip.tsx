import React from 'react';
import ReactDOM from 'react-dom';
import { cx } from '@emotion/css';
import memoize from 'lodash/memoize';

import { textStyles } from '../Text';

import { CORNER_HEIGHT, styles } from './Tooltip.styles';

//TODO maybe change
// type ComponentRef = { elementRef: { current?: HTMLElement } };
// type WrapperRefElement = HTMLElement | React.Component<any>;

type withTooltipProps = {
  children?: React.ReactNode;
  className?: string;
  largePadding?: boolean;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onScroll?: (e: React.MouseEvent) => void;
  tooltipContent?: React.ReactNode;
  popoverClassName?: string;
};

type withTooltipState = {
  cornerPositionX: number;
  visible: boolean;
  top: number;
  left: number;
  topPlacement: boolean;
};

type TooltipProps = {
  children: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  largePadding?: boolean;
  tag?: string;
  popoverClassName?: string;
};

const withTooltip = (
  //@TODO Fix type: in fact, withTooltip() accepts
  // only DOM intrinsics and specific class component (and no functional component)
  Component: React.ComponentType<any> | string
) =>
  class extends React.Component<withTooltipProps, withTooltipState> {
    state = {
      cornerPositionX: 0,
      visible: false,
      top: 0,
      left: 0,
      topPlacement: true,
    };

    static defaultProps = {
      placement: 'top',
    };

    wrapperRef = React.createRef<any>();
    tooltipRef = React.createRef<HTMLElement>();

    getWrapperElement() {
      const { wrapperRef } = this;

      const componentRef = wrapperRef?.current?.elementRef;
      const domNodeRef = 'test';

      return componentRef ? componentRef.current : domNodeRef;
    }

    componentDidUpdate(prevProps: withTooltipProps, prevState: withTooltipState) {
      const { visible } = this.state;
      const { tooltipRef } = this;
      const tooltipElement = tooltipRef.current;
      const wrapperElement = this.getWrapperElement();

      if (((visible && !prevState.visible) || prevProps !== this.props) && tooltipElement && wrapperElement) {
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
          topPlacement,
        });
      }
    }

    handleMouseEnter = (evt: React.MouseEvent) => {
      const { onMouseEnter } = this.props;
      this.showTooltip();
      if (onMouseEnter) onMouseEnter(evt);
    };

    handleMouseLeave = (evt: React.MouseEvent) => {
      const { onMouseLeave } = this.props;
      this.hideTooltip();
      if (onMouseLeave) onMouseLeave(evt);
    };

    handleScroll = (evt: React.MouseEvent) => {
      const { onScroll } = this.props;
      this.hideTooltip();
      if (onScroll) onScroll(evt);
    };

    componentWillUnmount() {
      window.removeEventListener('scroll', this.hideTooltip, true);
    }

    render() {
      const {
        children,
        className,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        largePadding,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        popoverClassName,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tooltipContent,
        ...props
      } = this.props;

      return (
        <>
          <Component
            {...props}
            className={cx(styles.wrapper, className)}
            onBlur={this.handleMouseLeave}
            onFocus={this.handleMouseEnter}
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
      const { largePadding, tooltipContent, popoverClassName } = this.props;
      const { cornerPositionX, left, top, topPlacement } = this.state;

      return (
        <div
          className={cx(
            textStyles.p,
            styles.tooltip({ cornerPositionX }),
            {
              [styles.cornerUp]: !topPlacement,
              [styles.largePadding]: largePadding,
            },
            popoverClassName
          )}
          style={{
            left,
            top,
          }}
          // @ts-ignore
          ref={this.tooltipRef}
        >
          {tooltipContent}
        </div>
      );
    }

    renderTooltipPortal = () => {
      if (this.state.visible && this.props.tooltipContent) {
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
          visible: true,
        });

        window.addEventListener('scroll', this.hideTooltip, true);
      }
    };

    hideTooltip = () => {
      this.setState({
        visible: false,
        top: 0,
        left: 0,
      });

      window.removeEventListener('scroll', this.hideTooltip, true);
    };
  };

const withTooltipMemoized = memoize((tag) => withTooltip(tag));

export const Tooltip = ({ children, className, content, largePadding, tag, popoverClassName }: TooltipProps) => {
  const Component = withTooltipMemoized(tag || 'div');

  return (
    <Component
      className={cx(styles.wrapper, className)}
      largePadding={largePadding}
      tooltipContent={content}
      popoverClassName={popoverClassName}
    >
      {children}
    </Component>
  );
};
