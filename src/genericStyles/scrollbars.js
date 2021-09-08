// @flow
import { css } from '@emotion/css';
import { rgba } from 'emotion-rgba';

import { getOS } from '../utils/getOS';
import { colors } from '../variables';

export const systemIndependentScrollbars = css`
  & {
    scrollbar-width: thin;
    scrollbar-color: ${rgba(colors.dark65, 0.5)} transparent;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${rgba(colors.dark65, 0.5)};
    border-radius: 4px;
  }
`;

const isScrollbarStyleRequired = ['Mac OS', 'iOS', 'Android'].indexOf(getOS()) === -1;

export const scrollbars = isScrollbarStyleRequired ? systemIndependentScrollbars : '';
