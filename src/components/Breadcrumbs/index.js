// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { colors } from '../../variables';
import { Dropdown, DropdownItem } from '../Dropdown';
import { OverflowList } from '../OverflowList';
import { Text } from '../Text';
import BreadcrumbsItemComponent from './components/BreadcrumbsItem';

export type BreadcrumbsItem = {
  title: string,
  path?: string,
};

export type ActionsBreadCrumbs = {
  onLinkClick?: (path: string) => void,
};

export type BreadcrumbsProps = ActionsBreadCrumbs & {
  appName?: string,
  items: BreadcrumbsItem[],
  className?: string,
};

const styles = {
  breadcrumbs: css`
    display: flex;
    align-items: baseline;
    width: 100%;
    overflow: hidden;
  `,
  breadcrumbElement: css`
    white-space: nowrap;
  `,
  breadcrumbsList: css`
    width: 100%;
  `,
  breadcrumbDelimiter: css`
    margin: 0 6px;
    color: ${colors.dark40};
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
  `,
  appName: css`
    position: absolute;
    white-space: nowrap;
    left: 0;
    top: 0;
    background: #ffffff;
    box-shadow: 0px 0px 10px #e6e7e8;
    border-radius: 2px;
    margin-left: -10px;
    padding: 0 10px;
  `,
  breadcrumbHoveredElement: css`
    position: relative;
    cursor: pointer;
  `,
  overflowButton: css`
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    color: #8e9199;

    &:hover {
      text-decoration-line: underline;
    }
  `,
};

const MAX_APP_NAME_LENGTH = 40;

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {
  render() {
    const { items, appName, className } = this.props;
    const isLongAppName = (appName: string) => appName.length > MAX_APP_NAME_LENGTH;
    return (
      <div className={cx(styles.breadcrumbs, className)}>
        {appName &&
          (isLongAppName(appName) ? (
            <AppName appName={appName} />
          ) : (
            <Text tag="span" className={styles.breadcrumbElement} variant="h3">
              {appName}
            </Text>
          ))}
        <OverflowList
          minVisibleItems={1}
          items={items}
          className={styles.breadcrumbsList}
          overflowRenderer={this.renderOverflow}
          visibleItemRenderer={this.renderBreadcrumbWrapper}
        />
      </div>
    );
  }

  renderOverflow = (items: BreadcrumbsItem[]) => {
    const onLinkClick = this.props.onLinkClick;

    const itemsCollection = (
      <>
        {items.map((item) => (
          <DropdownItem
            key={`${item.title}|${item.path || ''}`}
            onClick={item.path && onLinkClick ? () => (item.path ? onLinkClick(item.path) : undefined) : undefined}
          >
            {item.title}
          </DropdownItem>
        ))}
      </>
    );

    return (
      <React.Fragment>
        <Text tag="span" className={cx(styles.breadcrumbDelimiter, styles.breadcrumbElement)}>
          /
        </Text>
        <Dropdown items={itemsCollection}>
          <Text className={styles.overflowButton}>...</Text>
        </Dropdown>
      </React.Fragment>
    );
  };

  renderBreadcrumbWrapper = (props: BreadcrumbsItem, index: number) => {
    const { onLinkClick } = this.props;
    return (
      <React.Fragment key={index}>
        <Text tag="span" className={cx(styles.breadcrumbDelimiter, styles.breadcrumbElement)}>
          /
        </Text>
        <BreadcrumbsItemComponent title={props.title} path={props.path} onLinkClick={onLinkClick} />
      </React.Fragment>
    );
  };
}

const shorterAppName = (appName: string) =>
  appName.length > MAX_APP_NAME_LENGTH ? `${appName.slice(0, MAX_APP_NAME_LENGTH)}...` : appName;

function AppName({ appName }) {
  const [isHover, setHover] = React.useState(false);

  return (
    <Text
      tag="span"
      className={cx(styles.breadcrumbElement, styles.breadcrumbHoveredElement)}
      variant="h3"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {shorterAppName(appName)}
      {isHover && (
        <Text tag="span" className={cx(styles.breadcrumbElement, styles.appName)} variant="h3">
          {appName}
        </Text>
      )}
    </Text>
  );
}
