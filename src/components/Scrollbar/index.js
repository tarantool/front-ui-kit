// @flow
import * as React from 'react';
import ReactScroll from 'react-scrollbars-custom';
import styled from 'react-emotion';
import { colors } from '../../variables';

const Track = styled.div`
  width: 4px !important;
  background: ${({ track }) => track || colors.scrollbar} !important;
  border-radius: 7px !important;
`

const Thumb = styled.div`
  background: ${({ thumb }) => thumb || colors.activeAction} !important;
`

const trackYProps = {
  renderer: props => {
    const { elementRef, style, ...rest } = props;

    return <Track {...rest} style={style} innerRef={elementRef} />;
  }
}

const thumbYProps = {
  renderer: props => {
    const { elementRef, style, ...rest } = props;

    return <Thumb {...rest} style={style} innerRef={elementRef} />;
  }
}

const wrapperProps = {
  renderer: props => {
    const { elementRef, style, ...rest } = props;

    return <div {...rest} style={{ ...style, right: 0 }} ref={elementRef} />;
  }
}

const scrollerProps = {
  renderer: props => {
    const { elementRef, style, ...rest } = props;

    return <div {...rest} style={{ ...style, marginRight: -20, paddingRight: 20 }} ref={elementRef} />;
  }
}

type ScrollbarProps = {
  children?: React.Node,
  className?: string,
  track?: string,
  thumb?: string
}

export const Scrollbar = ({ children, className, track, thumb }: ScrollbarProps) => {
  return (
    <ReactScroll
      track={track}
      thumb={thumb}
      wrapperProps={wrapperProps}
      scrollerProps={scrollerProps}
      trackYProps={{ ...trackYProps, track }}
      thumbYProps={{ ...thumbYProps, thumb }}
      style={{ width: '100%' }}
    >
      {children}
    </ReactScroll>
  )
};
