// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { TarantoolLogoSpinner } from '../TarantoolLogoSpinner';

const styles = {
  wrap: css`
    position: relative;
  `,

  spin: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,

  icon: css`
    width: 100px;
    height: 74px;
    fill: rgba(0, 0, 0, 0.25);
  `,

  container: css`
    &.blur {
      pointer-events: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      overflow: hidden;
      opacity: .5;
    }
  `
};

type SpinProps = {
  children?: React.Node,
  enable?: boolean
};

export class Spin extends React.Component<SpinProps> {
  static defaultProps = {
    enable: false
  };

  render() {
    const { children, enable } = this.props;
    return (
      <div className={styles.wrap}>
        {enable && this.renderSpin()}
        <div className={cx(styles.container, { 'blur': enable })}>{children}</div>
      </div>
    );
  }

  renderSpin(){
    return <div className={styles.spin}>
      <TarantoolLogoSpinner className={styles.icon} />
    </div>;
  }
}
