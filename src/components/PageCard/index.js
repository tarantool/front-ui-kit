// @flow
import * as React from 'react';
import { css, cx } from 'react-emotion'
import { colors } from '../../variables';
import { Spin } from '../Spin';
import { Text } from '../Text';
import { IconClose } from '../Icon';

const styles = {
  container: css`
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
    top: 0;
    right: 0;
  `
};

type PageCardProps = {
  className?: string,
  children?: React.Node,
  showCorner?: boolean,
  onClose?: (e: MouseEvent) => void,
  loading?: boolean,
  title?: string
};

export const PageCard = ({
  className,
  children,
  showCorner, // TODO: implement
  onClose,
  loading = false,
  title = ''
}: PageCardProps) => (
  <div
    className={cx(
      styles.container,
      // { [styles.corner]: showCorner },
      className
    )}
  >
    <Spin enable={loading}>
      <Text className={styles.cardHead} variant='h2'>{title}</Text>
      {onClose && <IconClose className={styles.closeIcon} onClick={onClose} />}
      <div>{children}</div>
    </Spin>
  </div>
);
