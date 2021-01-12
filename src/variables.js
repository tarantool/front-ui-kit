// @flow

export const appLayoutTopPanelHeight = 68;

export const pageLayoutMinWidth = 922;
export const pageLayoutMaxWidth = 1420; /* 1360 + 30 + 30 */

export const baseFontFamily = `Inter, Arial, sans-serif`;
export const monoFontFamily = `'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace`;

export const colors = {
  // navBg: '#000000',
  // navBgActive: '#212121',
  // navActiveItemEdge: '#FF272C',
  // navFont: '#ffffff',

  activeAction: '#d01d26',

  intentPrimary: '#f5222d',
  intentPrimaryDisabled: '#fcc8cb',
  intentPrimary45: '#fb9dac',
  intentPrimary50: '#f28a91',
  intentPrimary65: '#f96f83',

  intentDanger: '#f5222d',
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

  baseBg: '#f0f2f5',
  scrollbar: '#e8e8e8',
  dark2: '#fafafa',
  dark10: '#e6e7e8',
  dark25: '#c9cace',
  dark40: '#8e9199',
  dark60: '#797d86',
  dark65: '#5c606c',
  dark: '#040b1d'
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
  tooltip: 250
};

export const INTERACTIVE_ELEMENT_SELECTOR = 'a, button, input, select, textarea, [tabindex="0"]';
