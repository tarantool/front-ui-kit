// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../../../variables';
import type { GenericIconProps } from '../../Icon';
import { Icon } from '../../Icon';
import folderOpened from './folder-opened.svg';
import folder from './folder.svg';

const styles = css`
  fill: ${colors.dark65};
`;

type IconFolderProps = $Exact<GenericIconProps> & {
  opened: boolean,
};

export const IconFolder = ({ className, onClick, opened }: IconFolderProps) => (
  <Icon className={cx(styles, className)} glyph={opened ? folderOpened : folder} onClick={onClick} />
);

export const IconFolderOpened = (props: GenericIconProps) => <IconFolder {...props} opened />;
