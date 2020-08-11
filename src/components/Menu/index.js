// @flow

import React, { useState } from 'react'
import { css, keyframes, cx } from 'react-emotion'
import { MenuItem } from './components/MenuItem'
import { Scrollbar } from '../Scrollbar'
import { SVGImage } from '../SVGImage'
import { tarantoolLogoShort, tarantoolLogoFull } from '../../images'
import { IconArrow, IconInfo } from '../Icon';
import { colors } from '../../variables';

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
    background: ${colors.baseHeading};
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 6px 0 rgba(0, 21, 41, 0.35);
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
  logo: css`
    width: 210px;
    height: 28px;
  `,
  shortLogo: css`
    width: 46px;
    height: 28px;
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

export type MenuItemType = {|
  label: string,
  path: string,
  selected: boolean,
  expanded: boolean,
  loading: boolean,
  icon: string | Object,
  items?: Array<MenuItemType>
|}

type MenuProps = {
  menu: MenuItemType[],
  path: string,
  onMenuItemClick: (path: string) => void,
  toggleExpand: (path: string, expanded: boolean) => void,
  className?: string,
  pathPrefix?: string,
}

export function Menu(props: MenuProps) {
  const {
    menu, className, onMenuItemClick, toggleExpand, pathPrefix
  } = props;
  const [isShort, setIsShort] = useState(false)

  const onClick = (evt, path) => {
    evt.preventDefault();
    onMenuItemClick(path);
  };

  const onExpand = (evt, path, expanded) => {
    evt.preventDefault();
    if (isShort) {
      setIsShort(false)
    }
    toggleExpand(path, expanded);
  };

  return (
    <div className={cx(styles.container, { [styles.shortContainer]: isShort }, className)}>
      <div className={cx(styles.logoContainer, { [styles.logoCenter]: isShort })}>
        <SVGImage
          glyph={isShort ? tarantoolLogoShort : tarantoolLogoFull }
          className={isShort ? styles.shortLogo : styles.logo}
        />
      </div>
      <Scrollbar track={'#212121'}>
        <div className={styles.menuList}>
          {menu.map((x, i) => (
            <MenuItem key={i} {...x} onClick={onClick} expand={onExpand} pathPrefix={pathPrefix} short={isShort} />
          ))}
        </div>
      </Scrollbar>
      <div className={styles.bottomButtons}>
        <MenuItem
          pathPrefix
          key={'documentation'}
          icon={<IconInfo className={styles.iconStyle} />}
          label={'Documentation'}
          onClick={(evt, path) => window.open(path, '_blank')}
          short={isShort}
          path={'https://www.tarantool.io/en/doc'}
        />
        <MenuItem
          key={'collapse'}
          isCollapse={true}
          icon={
            <IconArrow direction={isShort ? 'right' : 'left'} />
          }
          label={'Collapse menu'}
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
