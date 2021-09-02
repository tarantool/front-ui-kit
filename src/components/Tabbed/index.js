// @flow
import * as React from 'react';
import { css, cx } from '@emotion/css';
import { textStyles } from '../Text';
import { colors, zIndex } from '../../variables';

const styles = {
  default: {
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
    `,
  },
  small: {
    wrap: css`
      display: flex;
      flex-direction: column;
    `,
    tab: css`
      position: relative;
      cursor: pointer;
      border: none;
      font-size: 14px;
      color: ${colors.dark};
      width: 100%;
      margin-left: 8px;
      margin-right: 8px;
      padding: 9px 20px;
      border-radius: 4px;
      background-color: ${colors.baseBg};

      &:focus {
        background-color: ${colors.baseBg};
      }

      &:hover {
        z-index: ${zIndex.inline};
        background-color: #fff;
      }
    `,
    activeTab: css`
      background-color: #fff !important;
      box-shadow: 0px 2px 2px rgba(4, 11, 29, 0.05);
    `,
    tabs: css`
      display: flex;
      justify-content: space-around;
      padding 7px 8px;
      background-color: ${colors.baseBg};
      border-radius: 4px;
    `,
  },
};

type Tab = {
  label: string,
  content: React.Node,
};

type TabbedProps = {
  tabs?: Tab[],
  className?: string,
  activeTab?: number,
  handleTabChange?: (i: number, e: MouseEvent) => void,
  size: 'default' | 'small',
};

type TabbedState = {
  activeTab: number,
};

export class Tabbed extends React.Component<TabbedProps, TabbedState> {
  static defaultProps = {
    size: 'default',
  };

  state = {
    activeTab: 0,
  };

  render() {
    const { className, tabs = [], activeTab: activeTabProps, size } = this.props;
    const { activeTab } = this.state;
    const tabIndex = activeTabProps ?? activeTab;

    return (
      <div className={cx(styles[size].wrap, className)}>
        <div className={styles[size].tabs}>
          {tabs &&
            tabs.map(({ label }, i) => (
              <button
                key={i}
                className={cx({ [textStyles.h3]: size === 'default' }, styles[size].tab, {
                  [styles[size].activeTab]: tabIndex === i,
                })}
                onClick={(e) => this.handleTabChange(i, e)}
              >
                {label}
              </button>
            ))}
        </div>
        {tabs[tabIndex].content}
      </div>
    );
  }

  handleTabChange(i: number, e: MouseEvent) {
    e.preventDefault();
    this.setState({ activeTab: i });
    this.props?.handleTabChange?.(i, e);
  }
}
