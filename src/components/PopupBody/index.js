// @flow

// TODO: move popup components inside Modal
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Scrollbar } from '../Scrollbar';

const styles = {
  wrap: css`
    width: 100%;
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden;
  `,
  scrollableWrap: css`
    height: 100%;
    margin-left: -30px;
    margin-right: -30px;
  `,
  scrollableBody: css`
    padding-left: 32px;
    padding-right: 32px;
  `
};

type PopupBodyProps = {
  children?: React.Node,
  className?: string,
  innerClassName?: string,
  scrollable?: boolean
};

export const PopupBody = ({ children, className, innerClassName, scrollable }: PopupBodyProps) => scrollable
  ? (
    <Scrollbar className={cx(styles.scrollableWrap, className)}>
      <div className={cx(styles.scrollableBody, innerClassName)}>
        {children}
      </div>
    </Scrollbar>
  )
  : (
    <div className={cx(styles.wrap, className)}>
      {children}
    </div>
  );
