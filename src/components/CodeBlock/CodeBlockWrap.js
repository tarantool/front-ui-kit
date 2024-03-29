// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { CopyToClipboard } from '../CopyToClipboard';
import { IconCopy } from '../Icon';

const styles = {
  block: css`
    max-width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: ${colors.dark};
    color: white;
  `,
  inner: css`
    overflow: hidden;
    overflow-x: auto;
  `,
  withBtn: css`
    position: relative;
    padding-right: 20px;
  `,
  copyBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: ${colors.dark};
  `,
  copyIcon: css`
    fill: white;
  `,
};

const Icon = ({ className, ...props }) => <IconCopy className={cx(className, styles.copyIcon)} {...props} />;

type CodeBlockWrapProps = {
  className?: string,
  children?: React.Node,
  textToCopy?: ?string,
};

export const CodeBlockWrap = ({ className, children, textToCopy }: CodeBlockWrapProps) => (
  <pre className={cx(styles.block, { [styles.withBtn]: !!textToCopy }, className)}>
    {!!textToCopy && (
      <CopyToClipboard className={styles.copyBtn} icon={Icon} intent="plain" content={textToCopy} size="s" />
    )}
    <div className={styles.inner}>{children}</div>
  </pre>
);
