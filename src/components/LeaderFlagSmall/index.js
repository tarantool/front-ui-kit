// @flow
import React from 'react';

import { SVGImage } from '../SVGImage';
import glyph from './flagSmall.svg';

type LeaderFlagSmallProps = {
  className?: string,
};

export const LeaderFlagSmall = (props: LeaderFlagSmallProps) => <SVGImage {...props} glyph={glyph} />;
