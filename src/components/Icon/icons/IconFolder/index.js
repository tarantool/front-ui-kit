// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Icon, type GenericIconProps } from '../../Icon';
import { colors } from '../../../../variables';
import folder from './folder.svg';
import folderOpened from './folder-opened.svg';

const styles = css`
  fill: ${colors.dark65};
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
