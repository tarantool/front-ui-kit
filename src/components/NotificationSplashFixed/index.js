// @flow
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { css, cx } from '@emotion/css'
import { NotificationSplash, type NotificationSplashProps } from '../NotificationSplash';
import { zIndex } from '../../variables';

const styles = {
  splash: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${zIndex.fixedSplash};
  `
};

type NotificationSplashFixedProps = NotificationSplashProps & {
  visible?: boolean
};

export class NotificationSplashFixed extends React.Component<NotificationSplashFixedProps> {
  isVisible = (): boolean => this.props.visible !== false;

  renderSplash() {
    const {
      className,
      children,
      controls,
      onClose
    } = this.props;

    return (
      <NotificationSplash
        className={cx(styles.splash, className)}
        controls={controls}
        onClose={onClose}
      >
        {children}
      </NotificationSplash>
    );
  }

  render() {
    if (!this.isVisible())
      return null;

    const root = document.body;

    if (root) {
      return ReactDOM.createPortal(this.renderSplash(), root);
    }

    return null
  }
}
