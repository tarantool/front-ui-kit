import { keyframes } from '@emotion/css';

export const appLayoutTopPanelHeight = 68;

export const pageLayoutMinWidth = 922;
export const pageLayoutMaxWidth = 1420; /* 1360 + 30 + 30 */

export const baseFontFamily = 'Inter, Arial, sans-serif';
export const monoFontFamily = "'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace";

export const colors = {
  activeAction: '#0077ff',

  intentPrimary: '#0077ff',
  intentPrimaryDisabled: '#80bbff',
  intentPrimaryActive: 'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), #0077ff',

  /**
   * @deprecated
   */
  intentPrimary45: '#0077ff',
  /**
   * @deprecated
   */
  intentPrimary50: '#0077ff',
  /**
   * @deprecated
   */
  intentPrimary65: '#0077ff',

  intentDanger: '#ff272c',
  intentDangerBg: '#fff1f0',
  intentDangerBorder: '#fea39e',
  intentDanger65: '#f96f83',

  intentBase: '#d9dadd',
  intentBaseActive: '#fafafa',
  intentBaseBg: '#f3f3f3',

  intentWarning: '#faad14',
  intentWarningAccent: '#ff272c',

  intentSuccess: '#52c41a',
  intentSuccessBg: '#f6ffee',
  intentSuccessBorder: '#b5ec8e',

  baseBg: '#f4f4f4',
  scrollbar: '#e8e8e8',
  dark2: '#fafafa',
  dark10: '#e6e7e8',
  dark25: '#c9cace',
  dark40: '#8e9199',
  dark60: '#797d86',
  dark65: '#5c606c',
  dark: '#040b1d',

  sidebar: '#3a3a3a',
};

export const navItemHeight = '40px';
export const navWidthExpanded = '256px';
export const navWidthCollapsed = '62px';

export const iconSize = '14px';

export const zIndex = {
  inline: 1,
  fixedSplash: 50, // maybe 300 (see login modal)
  modal: 100,
  notification: 150,
  dropdownMenu: 200,
  tooltip: 250,
  dragNDrop: 300,
};

export const INTERACTIVE_ELEMENT_SELECTOR = 'a, button, input, select, textarea, [tabindex="0"]';

export const keyFrames = {
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
};
