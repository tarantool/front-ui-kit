// @flow
import * as React from 'react';
import ReactScroll from 'react-scrollbars-custom';
import styled from '@emotion/styled';

import { colors } from '../../variables';

const Track = styled.div`
  width: 4px !important;
  background: ${({ track }) => track || colors.scrollbar} !important;
  border-radius: 7px !important;
`;

const Thumb = styled.div`
  background: ${({ thumb }) => thumb || colors.activeAction} !important;
`;

const trackYProps = (track?: string) => ({
  track,
  renderer: (props) => {
    const { elementRef, style, ...rest } = props;

    return <Track {...rest} style={style} ref={elementRef} />;
  },
});

const thumbYProps = (thumb?: string) => ({
  thumb,
  renderer: (props) => {
    const { elementRef, style, ...rest } = props;

    return <Thumb {...rest} style={style} ref={elementRef} />;
  },
});

const wrapperProps = {
  renderer: (props) => {
    const { elementRef, style, ...rest } = props;

    return <div {...rest} style={{ ...style, right: 0 }} ref={elementRef} />;
  },
};

const scrollerProps = {
  renderer: (props) => {
    const { elementRef, style, ...rest } = props;

    return <div {...rest} style={{ ...style, marginRight: -20, paddingRight: 20 }} ref={elementRef} />;
  },
};

type ScrollbarProps = {
  children?: React.Node,
  className?: string,
  track?: string,
  thumb?: string,
};

const style = { width: '100%' };

/**
 * @deprecated Use genericStyles.scrollbars instead
 */
export const Scrollbar = ({ children, className, track, thumb }: ScrollbarProps) => {
  const trackYPropsMemo = React.useMemo(() => trackYProps(track), [track]);
  const thumbYPropsMemo = React.useMemo(() => thumbYProps(thumb), [thumb]);
  return (
    <ReactScroll
      track={track}
      thumb={thumb}
      wrapperProps={wrapperProps}
      scrollerProps={scrollerProps}
      trackYProps={trackYPropsMemo}
      thumbYProps={thumbYPropsMemo}
      style={style}
      className={className}
    >
      {children}
    </ReactScroll>
  );
};
