// @flow

import * as React from 'react';
import { useState } from 'react';
import { css, keyframes, cx } from 'react-emotion'
import { SideMenuItem } from './components/SideMenuItem'
import { Scrollbar } from '../Scrollbar'
import { IconArrowLeft, IconArrowRight } from '../Icon';
import { colors } from '../../variables';
import * as R from 'ramda';

const translateFromRight = keyframes`
  from{
    transform: translate3d(200px, 0, 0);
  }
  to{
    transform: translate3d(0, 0, 0);
  }
`;

const styles = {
  container: css`
    border-top: none;
    overflow: hidden;
    width: 256px;
    background: ${colors.dark};
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  `,
  shortContainer: css`
    width: 62px;
  `,
  menuTitle: css`
    display: block;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.65);
  `,
  menuList: css`
    flex-grow: 1;
    overflow: hidden;
  `,
  item: css`
    height: 40px;
    margin-bottom: 4px;
    position: relative;
  `,
  expandButton: css`
    position: absolute;
    right: 28px;
    top: 11px;
    &:after {
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid #fff;
    }
  `,
  expandButtonUnexpand: css`
    &:after {
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #fff;
    }
  `,
  menuItem: css`
    display: block;
    font-size: 19px;
    font-family: Roboto;
    font-weight: 400;
    text-align: left;
    cursor: pointer;
    color: white;
    width: 154px;
    padding: 0 0 5px;
    border: none;
    background-color: transparent;
    transition: color 300ms;
    text-decoration: none;
    :focus,
    :hover {
      color: #e32636;
      text-decoration: none;
      outline: none;
    }
  `,
  selectedMenuItem: css`
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 39, 44, 1);
    cursor: default;
    :hover {
      color: rgba(255, 39, 44, 1);
    }
  `,
  submenuItem: css`
    display: block;
    margin-bottom: 15px;
    font-size: 18px;
    color: white;
    margin-left: 30px;
    cursor: pointer;
    :before {
      content: '> ';
      display: inline-block;
      width: 20px;
      position: relative;
    }
    :hover {
      color: #ca0009;
      :before {
        content: '@';
        display: inline-block;
        width: 20px;
        position: relative;
      }
    }
    animation: ${translateFromRight} 1s;
  `,
  submenuList: css`
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  `,
  itemLoading: css``,
  logoContainer: css`
    padding: 24px 0 32px 0;
  `,
  logoCenter: css`
    text-align: center;
  `,
  bottomButtons: css`
    flex-grow: 0;
    flex-shrink: 0;
    margin-top: 16px;
  `,
  iconStyle: css`
    width: 14px;
    height: 14px;
    fill: #fff;
  `
};


export type SideMenuItemTypes = 'internal' | 'external'

export type SideMenuItemType = {
  label: string,
  path: string,
  selected: boolean,
  expanded: boolean,
  icon: string | Object,
  items: Array<SideMenuItemType>,
  type?: SideMenuItemTypes,
  pinBottom?: boolean,
  pathPrefix?: string,
  onClick: (evt: MouseEvent, path: string, type: SideMenuItemTypes) => void,
  short?: boolean,
  isSubitem?: boolean,
  isCollapse?: boolean,
  expand?: (evt: MouseEvent, path: string, expanded: boolean) => void,
  pathPrefix?: string,
}


type SideMenuProps = {
  menu: SideMenuItemType[],
  path: string,
  onMenuItemClick: (path: string, type: SideMenuItemTypes) => void,
  toggleExpand: (path: string, expanded: boolean) => void,
  renderMenuLogo?: (isShort: boolean) => React.Node,
  className?: string,
  pathPrefix?: string,
}

export function SideMenu(props: SideMenuProps) {
  const {
    menu, className, onMenuItemClick, toggleExpand, pathPrefix, renderMenuLogo
  } = props;
  const [isShort, setIsShort] = useState(false);

  const topMenu = menu.filter((item: SideMenuItemType) => !item.pinBottom);

  const getPinnedElement = () => {
    const pinnedMenu = menu.filter((item: SideMenuItemType) => item.pinBottom);

    return R.last(pinnedMenu);
  };

  const onClick = (evt: MouseEvent, path: string, type: SideMenuItemTypes) => {
    evt.preventDefault();
    onMenuItemClick(path, type);
  };

  const onExpand = (evt: MouseEvent, path: string, expanded: boolean) => {
    evt.preventDefault();
    if (isShort) {
      setIsShort(false)
    }
    toggleExpand(path, expanded);
  };

  const pinnedMenuItem = getPinnedElement();

  return (
    <div className={cx(styles.container, { [styles.shortContainer]: isShort }, className)}>
      <div className={cx(styles.logoContainer, { [styles.logoCenter]: isShort })}>
        {renderMenuLogo ? renderMenuLogo(isShort) : null}
      </div>
      <Scrollbar track='#212121'>
        <div className={styles.menuList}>
          {topMenu.map((x: SideMenuItemType, i) => (
            <SideMenuItem {...x} key={i} onClick={onClick} expand={onExpand} pathPrefix={pathPrefix} short={isShort}/>
          ))}
        </div>
      </Scrollbar>
      <div className={styles.bottomButtons}>
        {pinnedMenuItem && (
          <SideMenuItem
            key='pinned-element'
            {...pinnedMenuItem}
            onClick={onClick}
            expand={onExpand}
            pathPrefix={pathPrefix}
            short={isShort}
          />
        )}
        <SideMenuItem
          key='collapse'
          items={[]}
          path=''
          isCollapse
          selected={false}
          expanded={false}
          icon={isShort ? IconArrowRight : IconArrowLeft}
          label='Collapse menu'
          onClick={e => {
            e.preventDefault();
            setIsShort(!isShort)
          }}
          short={isShort}
        />
      </div>
    </div>
  )
}
