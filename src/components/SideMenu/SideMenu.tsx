import React, { useCallback, useMemo, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { cx } from '@emotion/css';
import * as R from 'ramda';

import { genericStyles } from '../../genericStyles';
import { IconArrowLeft, IconArrowRight } from '../Icon';
import { SideMenuItem } from './components/SideMenuItem';
import type { SideMenuItemType, SideMenuItemTypes } from './SideMenu.types';

import { styles } from './SideMenu.styles';

export interface SideMenuProps {
  menu: SideMenuItemType[];
  path: string;
  onMenuItemClick: (path: string, type: SideMenuItemTypes) => void;
  toggleExpand: (path: string, expanded: boolean) => void;
  renderMenuLogo?: (isShort: boolean) => ReactNode;
  className?: string;
  pathPrefix?: string;
  onCollapse?: (isCollapsed: boolean | ((isCollapsed: boolean) => boolean)) => void;
  isCollapsed?: boolean;
}

const items = [];

export function SideMenu({
  menu,
  className,
  onMenuItemClick,
  toggleExpand,
  pathPrefix,
  renderMenuLogo,
  onCollapse,
  isCollapsed,
}: SideMenuProps) {
  const [isShortLocal, setIsShortLocal] = useState(false);

  const isShort = typeof isCollapsed === 'undefined' ? isShortLocal : isCollapsed;

  const onClick = useCallback(
    (event: MouseEvent<HTMLElement>, path: string, type: SideMenuItemTypes) => {
      event.preventDefault();
      onMenuItemClick(path, type);
    },
    [onMenuItemClick]
  );

  const onExpand = useCallback(
    (event: MouseEvent<HTMLElement>, path: string, expanded: boolean) => {
      event.preventDefault();

      if (onCollapse) {
        onCollapse(false);
      } else {
        setIsShortLocal(false);
      }

      toggleExpand(path, expanded);
    },
    [toggleExpand]
  );

  const handleShortToggle = useCallback((event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (onCollapse) {
      onCollapse((value) => !value);
    } else {
      setIsShortLocal((value) => !value);
    }
  }, []);

  const topMenu = useMemo(() => {
    return menu.filter((item) => !item.pinBottom);
  }, [menu]);

  const pinnedMenuItem = useMemo(() => {
    const pinnedMenu = menu.filter((item) => item.pinBottom);
    return R.last(pinnedMenu);
  }, [menu]);

  return (
    <div className={cx(styles.container, { [styles.shortContainer]: isShort }, className)}>
      <div className={cx(styles.logoContainer, { [styles.logoCenter]: isShort })}>
        {renderMenuLogo ? renderMenuLogo(isShort) : null}
      </div>
      <div className={cx(styles.menuList, genericStyles.scrollbars)}>
        {topMenu.map((x: SideMenuItemType, i) => (
          <SideMenuItem {...x} key={i} onClick={onClick} expand={onExpand} pathPrefix={pathPrefix} short={isShort} />
        ))}
      </div>
      <div className={styles.bottomButtons}>
        {pinnedMenuItem && (
          <SideMenuItem
            key="pinned-element"
            {...pinnedMenuItem}
            onClick={onClick}
            expand={onExpand}
            pathPrefix={pathPrefix}
            short={isShort}
          />
        )}
        <SideMenuItem
          key="collapse"
          items={items}
          path=""
          isCollapse
          selected={false}
          expanded={false}
          icon={isShort ? IconArrowRight : IconArrowLeft}
          label="Collapse menu"
          onClick={handleShortToggle}
          short={isShort}
        />
      </div>
    </div>
  );
}
