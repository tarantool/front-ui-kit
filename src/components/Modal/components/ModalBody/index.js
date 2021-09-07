// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { genericStyles } from '../../../../genericStyles';

const styles = {
  wrap: css`
    width: 100%;
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden;
  `,
  scrollableWrap: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  scrollableBody: css`
    padding-right: 30px;
    position: absolute;
    inset: 0px;
    overflow: auto;
  `,
};

type ModalBodyProps = {
  children?: React.Node,
  className?: string,
  innerClassName?: string,
  scrollable?: boolean,
};

export const ModalBody = ({ children, className, innerClassName, scrollable }: ModalBodyProps) =>
  scrollable ? (
    <div className={cx(styles.scrollableWrap, className)}>
      <div className={cx(styles.scrollableBody, genericStyles.scrollbars, innerClassName)}>{children}</div>
    </div>
  ) : (
    <div className={cx(styles.wrap, className)}>{children}</div>
  );
