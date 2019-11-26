// @flow
import * as React from 'react';
import { Icon, type GenericIconProps } from '../../Icon';
import folder from './folder.svg';
import folderOpened from './folder-opened.svg';

type IconFolderProps = {
  ...$Exact<GenericIconProps>,
  opened: boolean
}

export const IconFolder = ({ className, onClick, opened }: IconFolderProps) => (
  <Icon
    className={className}
    glyph={opened ? folderOpened : folder}
    onClick={onClick}
  />
);
