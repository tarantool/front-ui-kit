import { css } from '@emotion/css';

import { colors } from '../../../../variables';

export const styles = {
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
      background: ${colors.activeAction};
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
