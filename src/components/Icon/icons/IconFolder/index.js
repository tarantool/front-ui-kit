// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import folder from './folder.svg';
import folderOpened from './folder-opened.svg';

const styles = css`
  fill: #000;
  fill-opacity: 0.65;
`;

type IconFolderProps = {
  ...$Exact<GenericIconProps>,
  opened: boolean
}

export const IconFolder = ({ className, onClick, opened }: IconFolderProps) => (
  <Icon
    className={cx(styles, className)}
    glyph={opened ? folderOpened : folder}
    onClick={onClick}
  />
);

export const IconFolderOpened = (props: GenericIconProps) => (
  <IconFolder {...props} opened />
);
