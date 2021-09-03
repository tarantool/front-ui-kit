// @flow
import * as React from 'react';
import { cx, css } from '@emotion/css';
import { colors } from '../../../../variables';
import { Link } from '../../../Link';
import { Text } from '../../../Text';

import type { BreadcrumbsItem, ActionsBreadCrumbs } from '../../index';

const styles = {
  breadcrumbElement: css`
    color: ${colors.dark40};
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
  `,
  breadcrumbLinkElement: css`
    cursor: pointer:
    color: ${colors.dark40};
    
    &:hover,
    &:focus,
    a:link,
    a:visited,
    &:active {
      color: ${colors.dark40};
    }
    
    &:hover {
      text-decoration: underline;
    }
  `,
};

export default class BreadcrumbsItemComponent extends React.Component<BreadcrumbsItem & ActionsBreadCrumbs> {
  render() {
    const { title, path, onLinkClick } = this.props;
    if (path && onLinkClick) {
      return (
        <Link
          href={path}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(path);
          }}
          className={cx(styles.breadcrumbLinkElement, styles.breadcrumbElement)}
          variant="basic"
        >
          {title}
        </Link>
      );
    }

    return (
      <Text tag="span" className={styles.breadcrumbElement}>
        {title}
      </Text>
    );
  }
}
