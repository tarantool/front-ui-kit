// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { textStyles } from '../Text';
import { colors, zIndex } from '../../variables';

const styles = {
  wrap: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  tab: css`
    position: relative;
    padding: 14px 0;
    border: none;
    margin-right: 30px;
    margin-bottom: -1px;
    border-bottom: solid 2px transparent;
    color: ${colors.dark40};
    background-color: transparent;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      z-index: ${zIndex.inline};
      color: ${colors.dark65};
    }

    &:last-child {
      margin-right: 0;
    }
  `,
  activeTab: css`
    color: ${colors.dark};
    border-bottom-color: ${colors.dark};
  `,
  tabs: css`
    border-bottom: solid 1px ${colors.intentBase};
  `
};

type Tab = {
  label: string,
  content: React.Node
};

type TabbedProps = {
  tabs?: Tab[],
  className?: string,
  activeTab?: number,
  handleTabChange?: (i: number) => void
};

type TabbedState = {
  activeTab: number,
}

export class Tabbed extends React.Component<TabbedProps, TabbedState> {
  state = {
    activeTab: 0
  };

  render() {
    const { className, tabs = [], activeTab: activeTabProps } = this.props;
    const { activeTab } = this.state;
    const tabIndex = activeTabProps ?? activeTab;

    return (
      <div className={cx(styles.wrap, className)}>
        <div className={styles.tabs}>
          {tabs && tabs.map(({ label }, i) => (
            <button
              className={cx(
                textStyles.h3,
                styles.tab,
                { [styles.activeTab]: tabIndex === i }
              )}
              onClick={() => this.handleTabChange(i)}
            >
              {label}
            </button>
          ))}
        </div>
        {tabs[tabIndex].content}
      </div>
    );
  }

  handleTabChange(i: number) {
    this.setState({ activeTab: i })
    this.props?.handleTabChange?.(i);
  }
}
