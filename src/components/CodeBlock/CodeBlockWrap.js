// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { CopyToClipboard } from '../CopyToClipboard';
import { IconCopy } from '../Icon';
import { colors } from '../../variables';

const styles = {
  block: css`
    max-width: 100%;
    padding: 20px;
    border-radius: 10px;
    overflow: auto;
    background-color: ${colors.dark};
    color: white;
  `,
  withBtn: css`
    position: relative;
    padding-right: 20px;
  `,
  copyBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
  `,
  copyIcon: css`
    fill: white;
  `
};

const Icon = ({ className, ...props }) => <IconCopy className={cx(className, styles.copyIcon)} {...props} />;

type CodeBlockWrapProps = {
  className?: string,
  children?: React.Node,
  textToCopy?: ?string
};

export const CodeBlockWrap = ({ className, children, textToCopy }: CodeBlockWrapProps) => (
  <pre
    className={cx(
      styles.block,
      { [styles.withBtn]: !!textToCopy },
      className
    )}
  >
    {!!textToCopy && (
      <CopyToClipboard className={styles.copyBtn} icon={Icon} intent='plain' content={textToCopy} size='s' />
    )}
    {children}
  </pre>
);
