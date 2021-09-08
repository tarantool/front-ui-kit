// @flow
import React from 'react';
import { css, cx } from '@emotion/css';

import { IconChevronDown } from '../../../Icon';
import { Text } from '../../../Text';
import type { SideMenuItemType } from '../../index';
import { SideMenuIcon } from '../SideMenuIcon';

type handleClickType = (event: MouseEvent, handler: (...params: any) => void, ...args: any) => void;

const handleClick: handleClickType = (event, handler, ...args) => {
  if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    event.preventDefault();
    handler(...args);
  }
};

const styles = {
  item: css`
    display: block;
    width: 100%;
    height: 40px;
    position: relative;
    cursor: pointer;
    border: none;
    text-align: left;
    text-decoration: none;
    background: transparent;
    outline: none;

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.05);
    }
  `,
  shortItem: css`
    display: block;
    width: 100%;
    height: 40px;
    position: relative;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.05);
    }
  `,
  itemSelected: css`
    background: rgba(255, 255, 255, 0.05);
    &:after {
      display: block;
      height: 100%;
      left: 0;
      top: 0;
      width: 4px;
      background: #ff272c;
      content: '';
      position: absolute;
    }
  `,
  subItemSelected: css`
    background: rgba(255, 255, 255, 0.05);
  `,
  title: css`
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 170px;
    &:hover,
    &:visited {
      color: #fff;
    }
  `,
  iconWrap: css`
    position: absolute;
    left: 24px;
    top: calc(50% - 8px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;
  `,
  icon: css`
    fill: #ffffff;
  `,
  expandButton: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
  `,
  expandButtonUnexpand: css`
    transform: translateY(-50%) rotate(180deg);
  `,
  submenuList: css`
    background: rgba(255, 255, 255, 0.05);
  `,
  subItemTitle: css`
    left: 60px;
  `,
  titleSelected: css`
    font-weight: 600;
  `,
  collapse: css`
    background: rgba(255, 255, 255, 0.05);
    opacity: 0.65;
    &:hover {
      opacity: 1;
    }
  `,
};

export const SideMenuItem = ({
  path,
  selected,
  label,
  expanded,
  items = [],
  onClick,
  isSubitem = false,
  icon,
  short,
  expand,
  isCollapse,
  pathPrefix,
  type = 'internal',
}: SideMenuItemType) => {
  const tag = path ? 'a' : 'button';

  if (short) {
    return (
      <Text
        tag={tag}
        className={cx(styles.shortItem, {
          [styles.itemSelected]: selected || (items && items.find((x) => x.selected)),
        })}
        onClick={
          items && items.length
            ? (evt) => expand && expand(evt, path, !expanded)
            : (evt) => handleClick(evt, onClick, evt, path, type)
        }
        href={pathPrefix ? pathPrefix + path : path}
        title={label}
      >
        <div className={styles.iconWrap}>
          <SideMenuIcon icon={icon} className={styles.icon} />
        </div>
      </Text>
    );
  }

  let subItems = null;
  if (expanded && !short && items && items.length > 0) {
    subItems = (
      <div className={styles.submenuList}>
        {items.map((x) => (
          <SideMenuItem {...x} key={x.path} onClick={onClick} isSubitem={true} />
        ))}
      </div>
    );
  }

  const expandButton =
    items && items.length > 0 ? (
      <IconChevronDown className={cx(styles.expandButton, { [styles.expandButtonUnexpand]: !expanded })} />
    ) : null;

  return (
    <React.Fragment>
      <Text
        tag={tag}
        className={cx(styles.item, {
          [styles.itemSelected]: selected,
          [styles.subItemSelected]: selected && isSubitem,
          [styles.collapse]: isCollapse,
        })}
        href={pathPrefix ? pathPrefix + path : path}
        onClick={
          items && items.length
            ? (evt) => expand && expand(evt, path, !expanded)
            : (evt) => handleClick(evt, onClick, evt, path, type)
        }
        title={label}
      >
        {isSubitem ? null : (
          <div className={styles.iconWrap}>
            <SideMenuIcon icon={icon} className={styles.icon} />
          </div>
        )}
        <span
          className={cx(styles.title, {
            [styles.subItemTitle]: isSubitem,
            [styles.titleSelected]: selected,
          })}
        >
          {label}
        </span>
        {expandButton}
      </Text>

      {subItems}
    </React.Fragment>
  );
};
