// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css'
import { colors } from '../../variables';
import { Text } from '../Text';
import { IconHelperClose } from '../IconHelper';

const styles = {
  container: css`
    position: relative;
    padding: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    margin: 0 -16px 48px;
    background: #ffffff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
  `,
  cardHead: css`
    padding-bottom: 16px;
    border-bottom: 1px solid ${colors.intentBaseBg};
    margin-bottom: 16px;
  `,
  closeIcon: css`
    position: absolute;
    top: 16px;
    right: 16px;
  `
};

type PageCardProps = {
  className?: string,
  children?: React.Node,
  showCorner?: boolean,
  onClose?: (e: MouseEvent) => void,
  title?: string
};

export const PageCard = ({
  className,
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showCorner, // TODO: implement
  onClose,
  title = ''
}: PageCardProps) => (
  <div
    className={cx(
      styles.container,
      // { [styles.corner]: showCorner },
      className
    )}
  >
    <Text className={styles.cardHead} variant='h2'>{title}</Text>
    {onClose && <IconHelperClose className={styles.closeIcon} onClick={onClose} />}
    <div>{children}</div>
  </div>
);
