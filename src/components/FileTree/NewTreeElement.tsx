/* eslint-disable import/namespace */
import React, { ReactNode } from 'react';
import { cx } from '@emotion/css';

import { IconChevron, IconFile, IconFolder } from '../Icon';
import { Input } from '../Input';
import { withTooltip } from '../Tooltip';

import { styles } from './styles';

const ListItemWithTooltip = withTooltip('li');

type NewTreeElementProps = {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  expanded?: boolean;
  filePaths: string[];
  parentPath?: string;
  initialValue?: string;
  level?: number;
  type: 'file' | 'folder';
  onCancel: () => void;
  onConfirm: (id: string) => void;
};

export type NewTreeElementState = {
  value: string;
  fileExistsError: boolean;
};

const ENABLED_SYMBOLS_REG_EX = /^([A-Za-z0-9-._]){0,32}$/;

export class NewTreeElement extends React.Component<NewTreeElementProps, NewTreeElementState> {
  constructor(props: NewTreeElementProps) {
    super(props);

    const value = props.initialValue || '';
    this.state = {
      value,
      fileExistsError: this.isFileExists(value, props.parentPath, props.initialValue, props.filePaths),
    };
  }

  isFileExists = (
    name: string,
    parentPath: string | null | undefined,
    initial: string | null | undefined,
    paths: string[]
  ) => !!name && initial !== name && paths.includes((parentPath ? parentPath + '/' : '') + name);

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const { value } = event.target;

      if (ENABLED_SYMBOLS_REG_EX.test(value)) {
        const { initialValue, filePaths, parentPath } = this.props;

        this.setState({
          value,
          fileExistsError: this.isFileExists(value, parentPath, initialValue, filePaths),
        });
      }
    }
  };

  handleBlur = () => {
    const { value } = this.state;

    this.props.onConfirm(value);
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    const { value } = this.state;
    // const { type } = this.props;

    if (event.keyCode === 13) {
      this.props.onConfirm(value);
      // if (type === 'file') {
      //   // if (validateFileNameExtension(value))
      //   this.props.onConfirm(value);
      // } else {
      //   this.props.onConfirm(value);
      // }
    } else if (event.keyCode === 27) {
      this.props.onCancel();
    }
  };

  render() {
    const { active, className, children, expanded, initialValue, level, type } = this.props;

    const { fileExistsError, value } = this.state;

    const Icon = type === 'folder' ? IconFolder : IconFile;

    return (
      <React.Fragment>
        <ListItemWithTooltip
          className={cx(styles.row, styles.newRow, { [styles.active]: active }, className)}
          style={{
            paddingLeft: (level || 0) * 20,
          }}
          title={initialValue}
          tooltipContent={fileExistsError ? 'The name already exists' : undefined}
        >
          <IconChevron
            className={cx(styles.iconChevron, {
              [styles.iconChevronHidden]:
                type !== 'folder' || !children || (children instanceof Array && !children.length),
            })}
            direction={expanded ? 'down' : 'right'}
          />
          <Icon className={styles.fileIcon} opened={expanded} />
          <Input
            autoFocus={true}
            error={fileExistsError}
            value={value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyPress}
            size="m"
          />
        </ListItemWithTooltip>
        {expanded && children}
      </React.Fragment>
    );
  }
}
