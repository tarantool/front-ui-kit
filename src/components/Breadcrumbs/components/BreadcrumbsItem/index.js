// @flow
import * as React from 'react';
import { cx, css } from 'emotion';
import { Link } from '../../../Link';
import { Text } from '../../../Text';

import type { BreadcrumbsItem, ActionsBreadCrumbs } from '../../index';

const styles = {
  breadcrumbElement: css`
    color: #686D77;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
  `,
  breadcrumbLinkElement: css`
    cursor: pointer:
    color: #686D77;
    
    &:hover,
    &:focus,
    a:link,
    a:visited,
    &:active {
      color: #686D77;
    }
    
    &:hover {
      text-decoration: underline;
    }
  `
}

export default class BreadcrumbsItemComponent extends React.Component<BreadcrumbsItem & ActionsBreadCrumbs>{
  render() {
    const { title, link, onLinkClick } = this.props;
    if (link && onLinkClick) {

      return (
        <Link
          href={link}
          onClick={e => {
            e.preventDefault();
            onLinkClick(link)
          }}
          className={cx(styles.breadcrumbLinkElement, styles.breadcrumbElement)}
          variant="basic"
        >
          {title}
        </Link>
      )
    }

    return (
      <Text tag="span" className={styles.breadcrumbElement}>
        {title}
      </Text>
    )
  }

}
