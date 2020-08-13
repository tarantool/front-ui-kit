// @flow

import React from 'react'
import { css, cx } from 'react-emotion'
import { MenuIcon } from '../MenuIcon'
import { Text } from '../../../Text';
import { IconChevronDown } from '../../../Icon';

type handleClickType = (event: MouseEvent, handler: (T) => void, ...args: T) => void

const handleClick: handleClickType = (event, handler, ...args) => {
  if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    event.preventDefault()
    handler(...args)
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
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

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
  icon: css`
    position: absolute;
    left: 24px;
    top: calc(50% - 7px);
    display: flex;
    height: 14px;
    width: 14px;
    font-size: 14px;
    color: #fff;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
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
    padding: 4px 0;
    background: rgba(255, 255, 255, 0.05);
  `,
  titleSelected: css`
    font-weight: 600;
  `,
  collapse: css`
    opacity: 0.65;
    background: #212121;
    &:hover {
      opacity: 1;
    }
  `,
  expanded: css`
    cursor: default;
    &:hover {
      background: none;
    }
  `
}

export const MenuItem = ({
  path,
  selected,
  label,
  loading,
  expanded,
  items = [],
  onClick,
  isSubitem = false,
  icon = 'hdd',
  short,
  expand,
  isCollapse,
  pathPrefix
}) => {
  const tag = path ? 'a' : 'button'

  if (short) {
    return (
      <Text
        tag={tag}
        className={cx(styles.shortItem, { [styles.itemSelected]: selected || (items && items.find(x => x.selected)) })}
        onClick={
          items && items.length ? evt => expand(evt, path, !expanded) : evt => handleClick(evt, onClick, evt, path)
        }
        href={pathPrefix + path}
        title={label}
      >
        <MenuIcon icon={icon} className={styles.icon} />
      </Text>
    )
  }

  let subItems = null;
  if (expanded && !short && items && items.length > 0) {
    subItems = (
      <div className={styles.submenuList}>
        {items.map(x => (
          <MenuItem key={x.path} {...x} onClick={onClick} isSubitem={true} />
        ))}
      </div>
    )
  }

  const expandButton =
    items && items.length > 0 ? (
      <IconChevronDown className={cx(styles.expandButton, { [styles.expandButtonUnexpand]: !expanded })}/>
    ) : null;

  return (
    <React.Fragment>
      <Text
        tag={tag}
        className={cx(styles.item, {
          [styles.itemSelected]: selected,
          [styles.subItemSelected]: selected && isSubitem,
          [styles.collapse]: isCollapse
        })}
        href={pathPrefix + path}
        onClick={
          items && items.length ? evt => expand(evt, path, !expanded) : evt => handleClick(evt, onClick, evt, path)
        }
        title={label}
      >
        {isSubitem ? null : <MenuIcon icon={icon} className={styles.icon} />}
        <span
          className={cx(styles.title, {
            [styles.titleSelected]: selected,
            [styles.expanded]: expanded
          })}
        >
          {label}
        </span>
        {expandButton}
      </Text>

      {subItems}
    </React.Fragment>
  )
}
