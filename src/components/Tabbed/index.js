// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { rgba } from 'emotion-rgba';
import { baseFontFamily, colors, zIndex } from '../../variables';

const styles = {
  wrap: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  tab: css`
    position: relative;
    padding: 16px;
    border: none;
    border-bottom: solid 2px transparent;
    font-family: ${baseFontFamily};
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      z-index: ${zIndex.inline};
      border-bottom-color: ${rgba(colors.activeAction, 0.5)};
    }
  `,
  activeTab: css`
    color: ${colors.activeAction};
    border-bottom-color: ${colors.activeAction};
  `,
  tabs: css``
};

type Tab = {
  label: string,
  content: React.Node
};

type TabbedProps = {
  tabs?: Tab[],
  className?: string,
};

type TabbedState = {
  activeTab: number,
}

export class Tabbed extends React.Component<TabbedProps, TabbedState> {
  state = {
    activeTab: 0
  };

  render() {
    const { className, tabs = [] } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={cx(styles.wrap, className)}>
        <div className={styles.tabs}>
          {tabs && tabs.map(({ label }, i) => (
            <button
              className={cx(
                styles.tab,
                { [styles.activeTab]: activeTab === i }
              )}
              onClick={() => this.handleTabChange(i)}
            >
              {label}
            </button>
          ))}
        </div>
        {tabs[activeTab].content}
      </div>
    );
  }

  handleTabChange(i: number) {
    this.setState({ activeTab: i })
  }
}
