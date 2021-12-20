import React, { MouseEvent, useMemo } from 'react';
import { cx } from '@emotion/css';

import { IconChevronDown } from '../../../Icon';
import { Text } from '../../../Text';
import type { SideMenuItemType } from '../../SideMenu.types';
import { SideMenuIcon } from '../SideMenuIcon';

import { styles } from './SideMenuItem.styles';

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
  const some = items && items.length > 0;

  const handleClick = useMemo(() => {
    if (some) {
      return (event: MouseEvent<HTMLElement>) => expand && expand(event, path, !expanded);
    }

    return (event: MouseEvent<HTMLElement>) => {
      if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        onClick(event, path, type);
      }
    };
  }, [some, expand, onClick, path, type, expanded]);

  if (short) {
    const itemSelected = Boolean(selected || (items && items.find((x) => x.selected)));
    return (
      <Text
        tag={tag}
        className={cx(styles.shortItem, {
          [styles.itemSelected]: itemSelected,
        })}
        onClick={handleClick}
        href={pathPrefix ? pathPrefix + path : path}
        title={label}
      >
        <div className={styles.iconWrap}>
          <SideMenuIcon icon={icon} className={styles.icon} />
        </div>
      </Text>
    );
  }

  let subItems: JSX.Element | null = null;
  if (expanded && !short && items && items.length > 0) {
    subItems = (
      <div className={styles.submenuList}>
        {items.map((x) => (
          <SideMenuItem {...x} key={x.path} onClick={onClick} isSubitem={true} pathPrefix={pathPrefix} />
        ))}
      </div>
    );
  }

  const expandButton =
    items && items.length > 0 ? (
      <IconChevronDown className={cx(styles.expandButton, { [styles.expandButtonUnexpand]: !expanded })} />
    ) : null;

  return (
    <>
      <Text
        tag={tag}
        className={cx(styles.item, {
          [styles.itemSelected]: selected,
          [styles.subItemSelected]: selected && isSubitem,
          [styles.collapse]: isCollapse,
        })}
        href={pathPrefix ? pathPrefix + path : path}
        onClick={handleClick}
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
    </>
  );
};
