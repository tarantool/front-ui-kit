// @flow
import * as React from 'react';
import { cx, css } from 'emotion';
import { Link } from '../../../Link';
import { Text } from '../../../Text';

import type { BreadcrumbItem }  from '../../index';

const styles = {
  breadcrumbElement: css`
    color: #686D77;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
  `,
  breadcrumbLinkElement: css`
    cursor: pointer:
  
    &:hover {
      text-decoration: underline;
    }
  `
}

export default class BreadcrumbItemComponent extends React.Component<BreadcrumbItem>{
  render() {
    const { title, link } = this.props;
    if (link) {

      return (
        <Link
          href={link}
          onClick={e => {
            e.preventDefault();
          }}
          className={cx(styles.breadcrumbElement, styles.breadcrumbLinkElement)}
        >
          <Text>{title}</Text>
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
