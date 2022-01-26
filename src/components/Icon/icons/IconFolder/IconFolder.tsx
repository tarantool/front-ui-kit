import React from 'react';
import { cx } from '@emotion/css';

import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import folderOpened from './folder-opened.svg';
import folder from './folder.svg';

import { styles } from './IconFolder.styles';

type IconFolderProps = GenericIconProps & {
  opened: boolean;
};

export const IconFolder = ({ className, onClick, opened }: IconFolderProps) => (
  <Icon className={cx(styles, className)} glyph={opened ? folderOpened : folder} onClick={onClick} />
);

export const IconFolderOpened = (props: GenericIconProps) => <IconFolder {...props} opened />;
