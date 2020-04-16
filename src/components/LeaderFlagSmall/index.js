// @flow
import * as React from 'react';
import glyph from './flagSmall.svg';
import { SVGImage } from '../SVGImage';

type LeaderFlagSmallProps = {
  className?: string,
};

export const LeaderFlagSmall = (props: LeaderFlagSmallProps) => (
  <SVGImage
    {...props}
    glyph={glyph}
  />
);
