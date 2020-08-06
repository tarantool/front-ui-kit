// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { colors } from '../../variables';
import { BaseModal, type BaseModalProps } from '../BaseModal';
import { Text } from '../Text';
import logo from './images/tarantool-logo.svg';
import { SVGImage } from '../SVGImage';

const styles = {
  modal: css`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    min-height: 250px;
    border-radius: 2px;
    overflow: hidden;
  `,
  shim: css`
    background-color: ${colors.baseBg};
  `,
  subTitleWrap: css`
    margin: 16px 0 48px 0;
  `,
  subTitle: css`
    color: rgba(0, 0, 0, 0.65);
  `,
  logoContainer: css`
    width: 68px;
    flex-grow: 0;
    flex-shrink: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  `,
  logo: css`
    width: 210px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0) rotate(-90deg);
    left: 50%;
    top: 50%;
  `,
  formContainer: css`
    flex-grow: 1;
    padding: 24px 32px;
  `
};


export type SplashModalProps = BaseModalProps & {
  title: string,
  subTitle: string
};

export const SplashModal = (
  {
    children,
    className,
    shimClassName,
    subTitle,
    title,
    ...props
  }: SplashModalProps
) => (
  <BaseModal
    {...props}
    className={cx(styles.modal, className)}
    shimClassName={cx(styles.shim, shimClassName)}
  >
    <div className={styles.logoContainer}>
      <SVGImage glyph={logo} className={styles.logo} />
    </div>
    <div className={styles.formContainer}>
      {title && (<Text variant='h1'>{title}</Text>)}
      {subTitle && (
        <div className={styles.subTitleWrap}>
          <Text variant='basic' className={styles.subTitle}>{subTitle}</Text>
        </div>
      )}
      {children}
    </div>
  </BaseModal>
);
