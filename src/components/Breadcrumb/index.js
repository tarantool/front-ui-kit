// @flow
import * as React from 'react';
import { css, cx } from 'emotion';
import { Text } from '../Text';
import { OverflowList } from '../OverflowList';
import { DropdownItem, Dropdown } from '../Dropdown';

import BreadcrumbItemComponent from './components/BreadcrumbItem';

export type BreadcrumbItem = {
  title: string,
  link?: string,
}

export type ActionsBreadCrumbs = {
  onLinkClick?: (link: string) => void
}

type BreadcrumbProps = ActionsBreadCrumbs & {
  breadcrumbs: BreadcrumbItem[],
  appName?: string,
}

const styles = {
  breadcrumbs: css`
    display: flex;
  `,
  breadcrumbElement: css`
    white-space: nowrap;
  `,
  breadcrumbsList: css`
    width: 100%;
  `,
  breadcrumbDelimeter: css`
    margin: 0 6px;
    color: #686D77;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
  `,
  appName: css`
    position: absolute;
    white-space: nowrap;
    left: 0;
    top: 0;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #E6E7E8;
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
    line-height: 22px;
    color: #8E9199;
    
    &:hover {
      text-decoration-line: underline;
    }
  `
};

const MAX_APP_NAME_LENGTH = 40;

export class Breadcrumb extends React.Component<BreadcrumbProps>{
  render() {
    const { breadcrumbs, appName } = this.props;
    const isLongAppName = (appName: string) => appName.length > MAX_APP_NAME_LENGTH;
    return (
      <div className={styles.breadcrumbs}>
        {appName &&
        (isLongAppName(appName)
          ? <AppName appName={appName} />
          :
          <Text
            tag="span"
            className={styles.breadcrumbElement}
            variant="h3"
          >
            {appName}
          </Text>)
        }
        <OverflowList
          minVisibleItems={1}
          items={breadcrumbs}
          className={styles.breadcrumbsList}
          overflowRenderer={this.renderOverflow}
          visibleItemRenderer={this.renderBreadcrumbWrapper}
        />
      </div>
    );
  }

  renderOverflow = (items: any[]) => {
    const { onLinkClick } = this.props;
    const itemsCollection = (
        <>
          {items.map(item => (
            <DropdownItem onClick={() => onLinkClick && onLinkClick(item.link)}>
              <Text className={styles.overflowButton}>{item.title}</Text>
            </DropdownItem>
          ))}
        </>
    );

    return (
      <React.Fragment>
        <Text tag="span" className={cx(styles.breadcrumbDelimeter, styles.breadcrumbElement)}>
          /
        </Text>
        <Dropdown items={itemsCollection}>
          <Text className={styles.overflowButton}>...</Text>
        </Dropdown>
      </React.Fragment>
    )
  };

  renderBreadcrumbWrapper = (props: BreadcrumbItem, index: number) => {
    const { onLinkClick } = this.props;
    return (
      <React.Fragment>
        <Text tag="span" className={cx(styles.breadcrumbDelimeter, styles.breadcrumbElement)}>
          /
        </Text>
        <BreadcrumbItemComponent key={index} title={props.title} link={props.link} onLinkClick={onLinkClick} />
      </React.Fragment>
    )
  };
}


function AppName({ appName }) {
  const [ isHover, setHover ] = React.useState(false);
  const shoterAppName = (appName: string) => appName.length > MAX_APP_NAME_LENGTH
    ? `${appName.slice(0, MAX_APP_NAME_LENGTH)}...`
    : appName;

  return (
    <Text
      tag="span"
      className={cx(styles.breadcrumbElement, styles.breadcrumbHoveredElement)}
      variant="h3"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {shoterAppName(appName)}
      {isHover &&
        <Text
          tag="span"
          className={cx(styles.breadcrumbElement, styles.appName)}
          variant="h3"
        >
          {appName}
        </Text>
      }
    </Text>
  )
}
