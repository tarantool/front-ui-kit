import React, { forwardRef, useCallback, createElement, createRef, useRef, useEffect, useContext, Fragment, useState } from 'react';
import { keyframes, cx, css } from '@emotion/css';
import { rgba } from 'emotion-rgba';
import ReactDOM, { findDOMNode } from 'react-dom';
import { throttle, noop as noop$1 } from 'lodash';
import ResizeObserver from 'resize-observer-polyfill';
import Prism from 'prismjs';
import { sortableElement, sortableContainer } from 'react-sortable-hoc';
import * as R from 'ramda';
import MD from 'markdown-to-jsx';
import { withEmotionCache, ThemeContext } from '@emotion/react';
import ReactScroll from 'react-scrollbars-custom';
import { useTable, useSortBy, usePagination, useRowSelect, useMountedLayoutEffect } from 'react-table';
import { useDropzone } from 'react-dropzone';

var appLayoutTopPanelHeight = 68;
var pageLayoutMinWidth = 922;
var pageLayoutMaxWidth = 1420;
/* 1360 + 30 + 30 */

var baseFontFamily = 'Inter, Arial, sans-serif';
var monoFontFamily = "'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace";
var colors = {
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
var navItemHeight = '40px';
var navWidthExpanded = '256px';
var navWidthCollapsed = '62px';
var iconSize = '14px';
var zIndex = {
  inline: 1,
  fixedSplash: 50,
  modal: 100,
  notification: 150,
  dropdownMenu: 200,
  tooltip: 250,
  dragNDrop: 300
};
var INTERACTIVE_ELEMENT_SELECTOR = 'a, button, input, select, textarea, [tabindex="0"]';
var keyFrames = {
  fadeIn: /*#__PURE__*/keyframes({
    name: "5j8bii",
    styles: "from{opacity:0;}to{opacity:1;}"
  } )
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _excluded$B = ["className", "glyph"];
var SVGImage = function SVGImage(_ref) {
  var className = _ref.className,
      glyph = _ref.glyph,
      props = _objectWithoutProperties(_ref, _excluded$B);

  var _split$slice = (glyph.viewBox || '').split(' ').slice(2),
      _split$slice2 = _slicedToArray(_split$slice, 2),
      width = _split$slice2[0],
      height = _split$slice2[1];

  var sizingClassName = width && height ? /*#__PURE__*/css("width:", width, "px;height:", height, "px;" + ("" ), "" ) : '';
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    className: cx(sizingClassName, className),
    viewBox: glyph.viewBox
  }), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#".concat(glyph.id)
  }));
};

var styles$1N = {
  icon: /*#__PURE__*/css("flex-shrink:0;vertical-align:middle;width:", iconSize, ";height:", iconSize, ";" + ("" ), "" ),
  state: /*#__PURE__*/css({
    name: "116chn8",
    styles: "fill:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"
  } ),
  stroke: /*#__PURE__*/css({
    name: "17h6o3n",
    styles: "stroke:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"
  } ),
  clickable: /*#__PURE__*/css({
    name: "e0dnmk",
    styles: "cursor:pointer"
  } ),
  active: /*#__PURE__*/css("" , "" ),
  button: /*#__PURE__*/css("display:block;padding:0;border:none;outline:none;background:transparent;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px ", rgba(colors.intentPrimary, 0.55), ";border-radius:3px;}" + ("" ), "" )
};
var Icon$1 = /*#__PURE__*/React.memo(function (_ref) {
  var _cx;

  var active = _ref.active,
      className = _ref.className,
      glyph = _ref.glyph;
      _ref.hasState;
      var onMouseLeave = _ref.onMouseLeave,
      onMouseEnter = _ref.onMouseEnter,
      onClick = _ref.onClick,
      stroke = _ref.stroke;
  return /*#__PURE__*/React.createElement(SVGImage, {
    glyph: glyph,
    onClick: onClick,
    onMouseLeave: onMouseLeave,
    onMouseEnter: onMouseEnter,
    className: cx(styles$1N.icon, (_cx = {}, _defineProperty(_cx, styles$1N.stroke, stroke), _defineProperty(_cx, styles$1N.clickable, !!onClick), _defineProperty(_cx, styles$1N.active, active), _cx), className)
  });
});

var img$17 = {id: "MuFebTlZKhTOdSfvH9QV2", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1M = /*#__PURE__*/css({
  name: "103jtqw",
  styles: "width:16px;height:16px;fill:#000"
} );
var IconAttach = function IconAttach(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1M, className),
    glyph: img$17
  });
};

var img$16 = {id: "GFfIG-AjlmP8r1WtEj3cJ", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1L = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.dark65, ";" + ("" ), "" );
var IconAttention = function IconAttention(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1L, className),
    glyph: img$16
  });
};

var img$15 = {id: "j9mCuTwTRU_jjZHdN2LIy", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path d=\"M12.436 6.298h-9.15c-.003 0-.004-.003-.003-.003l3.452-3.318a.701.701 0 1 0-.973-1.011L1.063 6.482a.705.705 0 0 0 0 1.01l4.725 4.542a.699.699 0 0 0 .992-.02.702.702 0 0 0-.02-.991L3.31 7.705c-.002-.002 0-.003.002-.003h9.14a.702.702 0 0 0 .701-.659.712.712 0 0 0-.716-.745z\"/></svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var _excluded$A = ["direction", "className"];
var styles$1K = {
  icon: /*#__PURE__*/css({
    name: "1kngnrc",
    styles: "width:16px;height:16px;fill:#ffffff"
  } ),
  right: /*#__PURE__*/css({
    name: "21xn5r",
    styles: "transform:rotate(180deg)"
  } ),
  down: /*#__PURE__*/css({
    name: "1icn1af",
    styles: "transform:rotate(270deg)"
  } ),
  up: /*#__PURE__*/css({
    name: "jbgpyq",
    styles: "transform:rotate(90deg)"
  } )
};
var IconArrow = function IconArrow(props) {
  var direction = props.direction,
      className = props.className,
      otherProps = _objectWithoutProperties(props, _excluded$A);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, otherProps, {
    className: cx(styles$1K.icon, _defineProperty({}, styles$1K.down, direction === 'down'), _defineProperty({}, styles$1K.right, direction === 'right'), _defineProperty({}, styles$1K.up, direction === 'up'), className),
    glyph: img$15,
    hasState: true
  }));
};
var IconArrowUp = function IconArrowUp(props) {
  return /*#__PURE__*/React.createElement(IconArrow, Object.assign({}, props, {
    direction: "up"
  }));
};
var IconArrowDown = function IconArrowDown(props) {
  return /*#__PURE__*/React.createElement(IconArrow, Object.assign({}, props, {
    direction: "down"
  }));
};
var IconArrowLeft = function IconArrowLeft(props) {
  return /*#__PURE__*/React.createElement(IconArrow, Object.assign({}, props, {
    direction: "left"
  }));
};
var IconArrowRight = function IconArrowRight(props) {
  return /*#__PURE__*/React.createElement(IconArrow, Object.assign({}, props, {
    direction: "right"
  }));
};

var img$14 = {id: "QyY1IdF0ELCCnrxqeU7br", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M13.44 13H13V6a5 5 0 00-4.44-4.97V.56a.56.56 0 10-1.12 0v.47A5 5 0 003 6v7h-.44a.56.56 0 100 1.13h4.31v.74a1.12 1.12 0 102.25 0v-.74h4.32a.56.56 0 100-1.13zm-1.56 0H4.12V6a3.87 3.87 0 117.75 0v7z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1J = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconBell = function IconBell(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1J, className),
    glyph: img$14
  });
};

var img$13 = {id: "HlCeltQNsltrzSzS-QTfh", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.7 7.14l-4.98-3.97c-.51-.4-1.29-.04-1.29.62v1.33c0 .42-.28.8-.7.8H.76a.75.75 0 00-.77.75v2.09c0 .4.35.77.77.77H8.7c.43 0 .71.34.71.76v1.33c0 .65.78 1 1.28.6l4.98-3.86c.41-.3.43-.9.03-1.22z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$z = ["className"];
var styles$1I = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconBoldArrowRight = function IconBoldArrowRight(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$z);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1I, className),
    glyph: img$13
  }));
};

var img$12 = {id: "lhpaKnKpwzPvCXVKgbdmR", content: "<svg width=\"12\" height=\"12\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M47.907 19.837l-.013-.05-7.19-18.064A2.471 2.471 0 0038.348 0H9.204C8.114 0 7.147.716 6.84 1.749L.118 19.629l-.02.044-.012.05c-.083.31-.109.628-.064.938a4.828 4.828 0 00-.013.304v23.183C.009 46.27 1.759 48 3.905 48h40.19c2.146 0 3.895-1.73 3.902-3.852V20.965c0-.082 0-.165-.007-.234.026-.31 0-.609-.083-.894zm-18.954-2.724l-.02.995c-.05 2.845-2.037 4.758-4.94 4.758-1.416 0-2.633-.45-3.511-1.305-.878-.856-1.359-2.047-1.384-3.453l-.02-.995H5.892l5.095-12.247h25.58L41.8 17.113H28.953zm-24.03 4.866h10.08c1.557 3.618 4.87 5.753 8.997 5.753 2.16 0 4.165-.596 5.786-1.724 1.422-.988 2.531-2.37 3.249-4.03h10.028v21.156H4.923V21.98z\"/></svg>", viewbox: "0 0 48 48", viewBox: "0 0 48 48" };

var styles$1H = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconBox = function IconBox(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1H, className),
    glyph: img$12
  });
};

var img$11 = {id: "qE6jy_qIeD2qn7L47bnWL", content: "<svg width=\"64\" height=\"41\" viewBox=\"0 0 64 41\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\"></ellipse><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\"></path><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\"></path></g></g></svg>", viewbox: "0 0 64 41", viewBox: "0 0 64 41" };

var styles$1G = /*#__PURE__*/css({
  name: "1jbnfkh",
  styles: "width:64px;height:41px"
} );
var IconBoxNoData = function IconBoxNoData(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1G, className),
    glyph: img$11
  });
};

var img$10 = {id: "X3IpxqkdyIg4Oa-j2Lu9l", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1F = /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" );
var IconBucket = function IconBucket(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1F, className),
    glyph: img$10
  });
};

var img$$ = {id: "qCX50aLfXF0HSHC_e7zrV", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1E = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconBurger = function IconBurger(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1E, className),
    glyph: img$$,
    onClick: onClick
  });
};

var img$_ = {id: "43EdGJib8Hk9kSllZDxLd", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1D = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentDanger, ";" + ("" ), "" );
var IconCancel = function IconCancel(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1D, className),
    glyph: img$_,
    onClick: onClick
  });
};

var img$Z = {id: "ZS2UaP-WaCnhhPTVeJ_Da", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M13.104 2.375h-.625V1.333h-1.041v1.042H4.563V1.333H3.52v1.042h-.625c-.862 0-1.563.7-1.563 1.562v9.167c0 .862.701 1.563 1.563 1.563h10.208c.862 0 1.563-.701 1.563-1.563V3.937c0-.861-.701-1.562-1.563-1.562zM2.896 3.417h.625v1.041h1.042V3.417h6.875v1.041h1.041V3.417h.625c.287 0 .521.233.521.52v1.25H2.375v-1.25c0-.287.234-.52.52-.52zm10.208 10.208H2.896a.521.521 0 0 1-.521-.52V6.228h11.25v6.875c0 .287-.234.52-.52.52zM9.563 12.53h3.124V9.406H9.563v3.125zm1.041-2.083h1.042v1.041h-1.042v-1.041z\"/></g><defs><clipPath id=\"clip0\"><path transform=\"translate(1.333 1.333)\" d=\"M0 0h13.333v13.333H0z\"/></clipPath></defs></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$y = ["className"];
var styles$1C = /*#__PURE__*/css({
  name: "1td8b17",
  styles: "width:16px;height:16px;fill:rgba(0, 0, 0, 0.65)"
} );
var IconCalendar = function IconCalendar(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$y);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1C, className),
    glyph: img$Z
  }));
};

var img$Y = {id: "QvfZzM4VCGj6SV5O0TyNT", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$X = {id: "CBncCjT3ukL8WQT7mPYCd", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$W = {id: "BqX6cmzUlZKaLFuPOSJWL", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$V = {id: "0x7dR3WNoVsdbEP2Mh4X0", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/><path d=\"M5 5h6v6H5z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$U = {id: "G3wQvDM3gm2Uno_38m_WS", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/><path d=\"M5 5h6v6H5z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$T = {id: "oNC9V-o-SzSy-CZKigEkm", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\"/></g></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var INDETERMINATE = 4;
var CHECKED$1 = 2;
var DISABLED$1 = 1;
var states$1 = [img$T, img$W, img$X, img$Y, img$U, img$V];
var styles$1B = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentPrimary, ";" + ("" ), "" );
var stylesDisabled$1 = /*#__PURE__*/css("fill:", colors.intentPrimaryDisabled, ";" + ("" ), "" );
var IconCheckbox = function IconCheckbox(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate;
  var mask = (indeterminate ? INDETERMINATE : 0) + (disabled ? DISABLED$1 : 0) + (checked && !indeterminate ? CHECKED$1 : 0);
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1B, _defineProperty({}, stylesDisabled$1, disabled), className),
    glyph: states$1[mask]
  });
};
var IconCheckboxChecked = function IconCheckboxChecked(props) {
  return /*#__PURE__*/React.createElement(IconCheckbox, Object.assign({}, props, {
    checked: true
  }));
};
var IconCheckboxDisabled = function IconCheckboxDisabled(props) {
  return /*#__PURE__*/React.createElement(IconCheckbox, Object.assign({}, props, {
    disabled: true
  }));
};
var IconCheckboxIndeterminate = function IconCheckboxIndeterminate(props) {
  return /*#__PURE__*/React.createElement(IconCheckbox, Object.assign({}, props, {
    indeterminate: true
  }));
};
var IconCheckboxIndeterminateDisabled = function IconCheckboxIndeterminateDisabled(props) {
  return /*#__PURE__*/React.createElement(IconCheckbox, Object.assign({}, props, {
    indeterminate: true,
    disabled: true
  }));
};
var IconCheckboxCheckedDisabled = function IconCheckboxCheckedDisabled(props) {
  return /*#__PURE__*/React.createElement(IconCheckbox, Object.assign({}, props, {
    checked: true,
    disabled: true
  }));
};

var img$S = {id: "SHRBYvqnDGtfBdtJ-YE0t", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var _excluded$x = ["direction", "className"];
var styles$1A = {
  icon: /*#__PURE__*/css({
    name: "5blccd",
    styles: "fill:#ffffff"
  } ),
  down: /*#__PURE__*/css({
    name: "21xn5r",
    styles: "transform:rotate(180deg)"
  } ),
  left: /*#__PURE__*/css({
    name: "1icn1af",
    styles: "transform:rotate(270deg)"
  } ),
  right: /*#__PURE__*/css({
    name: "jbgpyq",
    styles: "transform:rotate(90deg)"
  } )
};
var IconChevron = function IconChevron(props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'up' : _props$direction,
      className = props.className,
      otherProps = _objectWithoutProperties(props, _excluded$x);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, otherProps, {
    className: cx(styles$1A.icon, _defineProperty({}, styles$1A.down, direction === 'down'), _defineProperty({}, styles$1A.left, direction === 'left'), _defineProperty({}, styles$1A.right, direction === 'right'), className),
    glyph: img$S,
    hasState: true
  }));
}; // export const IconChevronUp = (props: GenericIconProps) => (
//   <IconChevron {...props} direction='up' />
// );

var IconChevronDown = function IconChevronDown(props) {
  return /*#__PURE__*/React.createElement(IconChevron, Object.assign({}, props, {
    direction: "down"
  }));
};
var IconChevronLeft = function IconChevronLeft(props) {
  return /*#__PURE__*/React.createElement(IconChevron, Object.assign({}, props, {
    direction: "left"
  }));
};
var IconChevronRight = function IconChevronRight(props) {
  return /*#__PURE__*/React.createElement(IconChevron, Object.assign({}, props, {
    direction: "right"
  }));
};

var img$R = {id: "GX1xpD2tJ0ddhQzunZ__A", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$5 = /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" );
var IconChip = function IconChip(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(style$5, className),
    glyph: img$R
  });
};

var img$Q = {id: "JvboS3--N5iV6pk89hvrN", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$4 = /*#__PURE__*/css("fill:", colors.intentWarning, ";" + ("" ), "" );
var IconChipWarning = function IconChipWarning(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(style$4, className),
    glyph: img$Q
  });
};

var img$P = {id: "7tVopr6U1M75ESFwIrkfA", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$3 = /*#__PURE__*/css("fill:", colors.intentDanger, ";" + ("" ), "" );
var IconChipDanger = function IconChipDanger(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(style$3, className),
    glyph: img$P
  });
};

var img$O = {id: "f5t0mrNI9ztFybdQrVSuZ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 13.125A6.132 6.132 0 0 1 1.875 8 6.132 6.132 0 0 1 8 1.875 6.132 6.132 0 0 1 14.125 8 6.132 6.132 0 0 1 8 14.125z\"/><path d=\"M8.499 4h-1v4.206l2.646 2.646.707-.707-2.353-2.353V3.999z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$w = ["className"];
var styles$1z = /*#__PURE__*/css({
  name: "1td8b17",
  styles: "width:16px;height:16px;fill:rgba(0, 0, 0, 0.65)"
} );
var IconClock = function IconClock(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$w);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1z, className),
    glyph: img$O
  }));
};

var img$N = {id: "NsNcDqResefz1Qy5D7zaZ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.384 8l6.33-6.328a.976.976 0 0 0 0-1.382.974.974 0 0 0-1.382 0L8 6.616 1.668.287a.974.974 0 0 0-1.381 0 .976.976 0 0 0 0 1.382L6.617 8l-6.33 6.33a.976.976 0 0 0 .69 1.668c.251 0 .5-.094.691-.285L8 9.382l6.332 6.332a.97.97 0 0 0 .69.286.976.976 0 0 0 .69-1.668L9.385 8.001z\"/></svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1y = /*#__PURE__*/css({
  name: "103jtqw",
  styles: "width:16px;height:16px;fill:#000"
} );
var IconClose = function IconClose(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1y, className),
    glyph: img$N,
    onClick: onClick
  });
};

var img$M = {id: "NKe1isAgQtAHroGGLjn-L", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var _excluded$v = ["className"];
var styles$1x = /*#__PURE__*/css({
  name: "e102ul",
  styles: "width:14px;height:14px;fill:#fff"
} );
var IconCluster = function IconCluster(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$v);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1x, className),
    glyph: img$M
  }));
};

var img$L = {id: "IkCrEccVfFc87rINBvynO", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1w = /*#__PURE__*/css({
  name: "1j7hh44",
  styles: "fill:#fff"
} );
var IconCode = function IconCode(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1w, className),
    glyph: img$L
  });
};

var img$K = {id: "xg5OvP_XAArmEQjFi9NnO", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.2 11.2v3.2c0 .922-.678 1.6-1.6 1.6h-8C.678 16 0 15.322 0 14.4v-8c0-.922.678-1.6 1.6-1.6h3.2V1.6C4.8.678 5.478 0 6.4 0h8c.922 0 1.6.678 1.6 1.6v8c0 .922-.678 1.6-1.6 1.6h-3.2zm-1.6 0H6.4c-.922 0-1.6-.678-1.6-1.6V6.4H1.6v8h8v-3.2zM6.4 1.6v8h8v-8h-8z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1v = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconCopy = function IconCopy(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1v, className),
    glyph: img$K
  });
};

var img$J = {id: "BYBGvq5AT9ID2cUKdR0xP", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1u = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.intentPrimary65, ";" + ("" ), "" );
var IconCreateFile = function IconCreateFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1u, className),
    glyph: img$J,
    onClick: onClick
  });
};

var img$I = {id: "XWZPjL9-Dhni5Rlk20JL-", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1t = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.intentPrimary65, ";" + ("" ), "" );
var IconCreateFolder = function IconCreateFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1t, className),
    glyph: img$I,
    onClick: onClick
  });
};

var img$H = {id: "-0FVSup8MAH57V-3vC8_3", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1s = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.intentDanger65, ";" + ("" ), "" );
var IconDelete = function IconDelete(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1s, className),
    glyph: img$H,
    onClick: onClick
  });
};

var img$G = {id: "kIxvlSMIlmiodrqe-vf6j", content: "<svg width=\"35\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\"/><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\"/></g></svg>", viewbox: "0 0 35 35", viewBox: "0 0 35 35" };

var _excluded$u = ["className"];
var styles$1r = /*#__PURE__*/css({
  name: "bgbjt4",
  styles: "width:36px;height:36px"
} );
var IconDocumentCode = function IconDocumentCode(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$u);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1r, className),
    glyph: img$G
  }));
};

var img$F = {id: "rNi9oUufCNJE-Nu-4rJXj", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5804 12.8625a.6211.6211 0 00.875 0l2.7839-2.7839a.6175.6175 0 000-.8732.6133.6133 0 00-.4357-.1804.6132.6132 0 00-.4357.1804l-1.7304 1.7303V.6179A.618.618 0 008.0196 0a.618.618 0 00-.6178.6179v10.3178L5.6714 9.2054c-.241-.2411-.6321-.2411-.8714 0a.6192.6192 0 00-.0018.8732l2.7822 2.7839zm7.8017-2.5696a.618.618 0 00-.6178.6178V14.4a.3685.3685 0 01-.3679.3679H1.6018a.3685.3685 0 01-.3679-.3679v-3.4911a.618.618 0 00-.6178-.6178c-.3411 0-.6161.2785-.6161.6178v3.9804c0 .6125.4982 1.1089 1.109 1.1089H14.891c.6125 0 1.1089-.4982 1.1089-1.1089v-3.9804c0-.3393-.2768-.616-.6179-.616z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1q = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconDownload = function IconDownload(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1q, className),
    glyph: img$F,
    onClick: onClick
  });
};

var img$E = {id: "Xx6KbOLAKYz7gujpa21z7", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1p = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.intentPrimary65, ";" + ("" ), "" );
var IconEdit = function IconEdit(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1p, className),
    glyph: img$E,
    onClick: onClick
  });
};

var img$D = {id: "xOnSq2thX9bGUAWRW8IK8", content: "<svg width=\"120\" height=\"96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M79.382 57.127l.28.162c.093.054.186.108.279.16 4.903 2.831 7.657 4.42 9.082 6.188 2.381 2.952 2.381 6.36 0 9.312-1.425 1.767-4.179 3.356-9.082 6.187l-.559.323c-4.903 2.83-7.657 4.42-10.717 5.243-5.114 1.374-11.017 1.374-16.13 0-3.061-.823-5.815-2.413-10.718-5.243l-.558-.323c-4.904-2.83-7.658-4.42-9.083-6.187-2.381-2.952-2.381-6.36 0-9.312 1.425-1.767 4.179-3.357 9.083-6.187l.279-.161.279-.162c4.903-2.83 7.657-4.42 10.718-5.243 5.113-1.375 11.017-1.375 16.13 0 3.06.823 5.814 2.413 10.717 5.243zm-1.8 1.361c-5.259-3.036-7.629-4.386-10.158-5.066-4.327-1.163-9.322-1.163-13.649 0-2.529.68-4.899 2.03-10.159 5.067-5.26 3.036-7.598 4.404-8.775 5.864-2.015 2.498-2.015 5.382 0 7.88 1.177 1.46 3.515 2.828 8.775 5.864 5.26 3.037 7.63 4.387 10.16 5.067 4.326 1.163 9.321 1.163 13.648 0 2.53-.68 4.899-2.03 10.159-5.067 5.26-3.036 7.598-4.404 8.776-5.864 2.014-2.498 2.014-5.382 0-7.88-1.178-1.46-3.516-2.828-8.776-5.864z\" fill=\"#8E9199\"/><g filter=\"url(#filter0_b)\"><rect width=\"58.888\" height=\"58.888\" rx=\"12\" transform=\"scale(1.22477 .70706) rotate(45 -9.64 73.966)\" fill=\"#e3e3e3\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.427 17.268l.107.062c3.867 2.232 6.84 3.948 8.99 5.44 2.175 1.506 3.605 2.846 4.29 4.344.845 1.846.845 3.787 0 5.634-.685 1.497-2.115 2.837-4.29 4.344-2.15 1.491-5.123 3.207-8.99 5.44l-.107.062c-3.867 2.232-6.84 3.948-9.423 5.19-2.61 1.255-4.931 2.08-7.525 2.476-3.198.488-6.56.488-9.759 0-2.594-.396-4.915-1.221-7.525-2.476-2.583-1.242-5.556-2.958-9.422-5.19l-.108-.063c-3.867-2.232-6.84-3.948-8.99-5.439-2.174-1.507-3.604-2.847-4.29-4.344-.844-1.847-.844-3.788 0-5.634.686-1.498 2.116-2.838 4.29-4.345 2.15-1.49 5.123-3.207 8.99-5.44l.108-.061c3.866-2.232 6.839-3.949 9.422-5.19 2.61-1.255 4.931-2.08 7.525-2.476a32.73 32.73 0 019.759 0c2.594.395 4.915 1.22 7.525 2.476 2.583 1.241 5.556 2.958 9.423 5.19zm-11.303-3.886c-2.453-1.18-4.388-1.834-6.396-2.14a27.696 27.696 0 00-8.257 0c-2.007.306-3.943.96-6.395 2.14-2.468 1.186-5.348 2.847-9.279 5.117s-6.809 3.932-8.864 5.356c-2.042 1.416-3.175 2.533-3.706 3.692-.714 1.562-.714 3.205 0 4.767.53 1.16 1.664 2.277 3.706 3.692 2.055 1.425 4.933 3.087 8.864 5.357 3.931 2.27 6.811 3.93 9.279 5.117 2.452 1.179 4.388 1.833 6.395 2.14 2.706.412 5.551.412 8.257 0 2.008-.307 3.944-.961 6.396-2.14 2.467-1.187 5.347-2.848 9.278-5.117 3.931-2.27 6.809-3.932 8.864-5.357 2.042-1.415 3.176-2.533 3.706-3.692.715-1.562.715-3.205 0-4.767-.53-1.159-1.664-2.276-3.706-3.692-2.055-1.424-4.933-3.087-8.864-5.356-3.931-2.27-6.81-3.93-9.278-5.117z\" fill=\"#8E9199\"/><defs><filter id=\"filter0_b\" x=\"-8.313\" y=\"-.348\" width=\"137.824\" height=\"99.856\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter></defs></svg>\n", viewbox: "0 0 120 96", viewBox: "0 0 120 96" };

var styles$1o = /*#__PURE__*/css({
  name: "1c2jlrb",
  styles: "width:36px;height:45px"
} );
var IconEmptyData = function IconEmptyData(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1o, className),
    glyph: img$D
  });
};

var img$C = {id: "_4B7SLE5xYj9g9H2H0LD3", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.8521 7.0442a.6363.6363 0 10-.977-.8156C12.7541 7.5716 10.5797 8.5455 8 8.5455s-4.754-.974-5.8751-2.317a.6364.6364 0 10-.977.8157c.3197.383.698.7343 1.125 1.0486v1.089a.6364.6364 0 001.2727 0v-.3295a9.29 9.29 0 001.2727.4968v1.1054a.6363.6363 0 001.2727 0v-.7999a10.994 10.994 0 001.273.1458l-.0003.0178v1.2728a.6363.6363 0 001.2728 0V9.8182l-.0003-.0178c.4337-.0244.859-.0736 1.273-.1458v.7999a.6364.6364 0 001.2728 0V9.3491a9.2909 9.2909 0 001.2727-.497v.3297a.6363.6363 0 101.2727 0V8.0926c.4268-.3143.8051-.6655 1.1247-1.0484z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1n = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconEyeClosed = function IconEyeClosed(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1n, className),
    glyph: img$C,
    onClick: onClick
  });
};

var img$B = {id: "k0kDptZqEgjdDkwGf9osZ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8317 7.6849a1.3328 1.3328 0 010 1.2968c-1.5475 2.7806-4.4621 4.6848-7.8316 4.6848-3.3697 0-6.2844-1.9042-7.8318-4.6848a1.3333 1.3333 0 010-1.2968C1.7157 4.9042 4.6303 3 8 3c3.3695 0 6.2841 1.9042 7.8316 4.6849zM8.0001 4.3333c2.8486 0 5.3357 1.6088 6.6665 4-1.3308 2.3911-3.8179 3.9999-6.6666 3.9999s-5.3359-1.6088-6.6665-4C2.664 5.9422 5.1513 4.3334 8 4.3334zm1.3333 4c0 .7364-.597 1.3333-1.3333 1.3333-.7364 0-1.3334-.597-1.3334-1.3333C6.6667 7.5969 7.2637 7 8.0001 7c.7363 0 1.3333.5969 1.3333 1.3333zm1.3333 0c0 1.4728-1.1939 2.6666-2.6667 2.6666-1.4727 0-2.6666-1.1938-2.6666-2.6666 0-1.4728 1.1939-2.6667 2.6666-2.6667 1.4728 0 2.6667 1.1939 2.6667 2.6667z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1m = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconEyeOpened = function IconEyeOpened(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1m, className),
    glyph: img$B,
    onClick: onClick
  });
};

var img$A = {id: "F_P5xpQmI9w9oMDKciuVD", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1l = /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" );
var IconFile = function IconFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1l, className),
    glyph: img$A,
    onClick: onClick
  });
};

var img$z = {id: "u-Txnh62ZVT51PQqwbWDU", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var img$y = {id: "lb-6qDmLsWFwDdiOzugNR", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1k = /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" );
var IconFolder = function IconFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      opened = _ref.opened;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1k, className),
    glyph: opened ? img$z : img$y,
    onClick: onClick
  });
};
var IconFolderOpened = function IconFolderOpened(props) {
  return /*#__PURE__*/React.createElement(IconFolder, Object.assign({}, props, {
    opened: true
  }));
};

var img$x = {id: "-yl_wtod2deMxvH_ApuAK", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\"/></svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$1j = /*#__PURE__*/css("width:12px;height:12px;fill:", colors.intentPrimary, ";" + ("" ), "" );
var IconGear = function IconGear(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1j, className),
    glyph: img$x
  });
};

var img$w = {id: "dX1TvCpp62i3vFJc5p2MC", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var _excluded$t = ["className"];
var styles$1i = /*#__PURE__*/css("width:14px;height:14px;fill:", colors.intentDanger, ";" + ("" ), "" );
var IconGeoPin = function IconGeoPin(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$t);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1i, className),
    glyph: img$w
  }));
};

var img$v = {id: "QZX7WAhcPPtY2oYjW4pFO", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 0C3.58125 0 0 3.58125 0 8c0 4.4188 3.58125 8 8 8 4.4188 0 8-3.5812 8-8 0-4.41875-3.5812-8-8-8zm4.8609 12.8609c-.6312.6313-1.3671 1.1282-2.1859 1.4735-.84687.3594-1.74687.5406-2.675.5406-.92812 0-1.82812-.1812-2.675-.5391-.81875-.3468-1.55312-.8421-2.18594-1.4734-.63125-.6312-1.12812-1.3672-1.47344-2.1859C1.30625 9.82812 1.125 8.92813 1.125 8c0-.92812.18125-1.82812.53906-2.675.34688-.81875.84219-1.55312 1.47344-2.18594.63125-.63125 1.36719-1.12812 2.18594-1.47344C6.17188 1.30625 7.07188 1.125 8 1.125c.92813 0 1.82813.18125 2.675.53906.8188.34688 1.5531.84219 2.1859 1.47344.6313.63125 1.1282 1.36719 1.4735 2.18594.3594.84844.5406 1.74844.5406 2.67656 0 .92813-.1812 1.82813-.5391 2.675-.3468.8188-.8421 1.5547-1.475 2.1859zM9.84688 11.025H8.51562V5.55469c0-.31094-.25156-.5625-.5625-.5625h-1.5c-.31093 0-.5625.25156-.5625.5625s.25157.5625.5625.5625h.9375V11.025H6.05938c-.31094 0-.5625.2516-.5625.5625s.25156.5625.5625.5625H9.84688c.31092 0 .56252-.2516.56252-.5625s-.2516-.5625-.56252-.5625zM7.39062 3.44531c0 .31066.25185.5625.5625.5625.31067 0 .5625-.25184.5625-.5625s-.25183-.5625-.5625-.5625c-.31065 0-.5625.25184-.5625.5625z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1h = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconInfo = function IconInfo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1h, className),
    glyph: img$v
  });
};

var img$u = {id: "xZdPxOXo6_6lfg2aWTuhv", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1g = /*#__PURE__*/css("width:14px;height:14px;fill:", colors.dark65, ";" + ("" ), "" );
var IconLink = function IconLink(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1g, className),
    glyph: img$u
  });
};

var img$t = {id: "Fr7ZGP38l-8yzCU952YTo", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"2\" cy=\"8\" r=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"2\"/><circle cx=\"14\" cy=\"8\" r=\"2\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1f = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconMore = function IconMore(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1f, className),
    glyph: img$t
  });
};

var img$s = {id: "gZatIPgLyjsg9p6BLoDn6", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".65\"><path d=\"M2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/></g><rect x=\"5\" y=\"2\" width=\"9\" height=\"2\" rx=\"1\"/><rect x=\"5\" y=\"7\" width=\"9\" height=\"2\" rx=\"1\"/><rect x=\"5\" y=\"12\" width=\"9\" height=\"2\" rx=\"1\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1e = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentPrimary65, ";" + ("" ), "" );
var IconMoreBurger = function IconMoreBurger(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1e, className),
    glyph: img$s
  });
};

var img$r = {id: "CdDS7Wx_UvLcUUxLfS5pO", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/>\n</svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$s = ["className"];
var styles$1d = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentSuccess, ";" + ("" ), "" );
var IconOk = function IconOk(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$s);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$1d, className),
    glyph: img$r
  }));
};

var img$q = {id: "rxr-wZMI23JpzQsVyzqd8", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$p = {id: "epPKOMKegjCGjOdk1e-qs", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$o = {id: "tpy2oIUtuJaOHfVk-Ka5X", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$n = {id: "-fkK13-iy5PALaDNph-aQ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var CHECKED = 1;
var DISABLED = 2;
var states = [img$n, img$p, img$o, img$q];
var styles$1c = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentPrimary, ";stroke:", colors.intentPrimary, ";" + ("" ), "" );
var stylesDisabled = /*#__PURE__*/css("fill:", colors.intentPrimaryDisabled, ";stroke:", colors.intentPrimaryDisabled, ";" + ("" ), "" );
var IconRadio = function IconRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED : 0) + (checked ? CHECKED : 0);
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1c, _defineProperty({}, stylesDisabled, disabled), className),
    glyph: states[mask]
  });
};
var IconRadioChecked = function IconRadioChecked(props) {
  return /*#__PURE__*/React.createElement(IconRadio, Object.assign({}, props, {
    checked: true
  }));
};
var IconRadioDisabled = function IconRadioDisabled(props) {
  return /*#__PURE__*/React.createElement(IconRadio, Object.assign({}, props, {
    disabled: true
  }));
};
var IconRadioCheckedDisabled = function IconRadioCheckedDisabled(props) {
  return /*#__PURE__*/React.createElement(IconRadio, Object.assign({}, props, {
    checked: true,
    disabled: true
  }));
};

var img$m = {id: "ot2jjTc3L5ZftecYi2i2o", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.646 4H9.6v1.6h5.6V0h-1.6v2.616C12.22.946 10.243 0 8 0a8 8 0 108 8h-1.6A6.4 6.4 0 118 1.6c1.915 0 3.557.863 4.646 2.4z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$1b = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" );
var IconRefresh = function IconRefresh(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1b, className),
    glyph: img$m
  });
};

var img$l = {id: "NbgqbVhQQbMvTnYZfDyVe", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$1a = /*#__PURE__*/css({
  name: "1j7hh44",
  styles: "fill:#fff"
} );
var IconSchema = function IconSchema(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$1a, className),
    glyph: img$l
  });
};

var img$k = {id: "k1ewDs_0kOwwgiILzTOBD", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$19 = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark25, ";" + ("" ), "" );
var IconSearch = function IconSearch(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$19, className),
    glyph: img$k
  });
};

var img$j = {id: "Md8yHRnE8Gbfmm2JuCEdB", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"3\" width=\"16\" height=\"2\" rx=\"1\" /><rect y=\"7\" width=\"11\" height=\"2\" rx=\"1\" /><rect y=\"11\" width=\"7\" height=\"2\" rx=\"1\" /></svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$18 = {
  icon: /*#__PURE__*/css("width:16px;height:16px;fill:", colors.dark65, ";" + ("" ), "" ),
  asc: /*#__PURE__*/css({
    name: "eufijl",
    styles: "transform:rotateX(180deg)"
  } )
};
var IconSortableDesc = function IconSortableDesc(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$18.icon, className),
    glyph: img$j
  });
};
var IconSortableAsc = function IconSortableAsc(_ref2) {
  var className = _ref2.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$18.icon, styles$18.asc, className),
    glyph: img$j
  });
};

var img$i = {id: "69BbyiMu8_wWzUePxvJ06", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"64\" height=\"64\" viewBox=\"0 0 128 128\"><g><circle cx=\"16\" cy=\"64\" r=\"16\"/><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\"/><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\"/></g></svg>", viewbox: "0 0 128 128", viewBox: "0 0 128 128" };

var styles$17 = /*#__PURE__*/css({
  name: "157xhr7",
  styles: "width:16px;height:16px"
} );
var IconSpinner = function IconSpinner(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$17, className),
    glyph: img$i
  });
};

var img$h = {id: "07ic80gZeFKl8eymdhNVM", content: "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\"/><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\"/></svg>", viewbox: "0 0 24 24", viewBox: "0 0 24 24" };

var _excluded$r = ["className"];
var styles$16 = /*#__PURE__*/css({
  name: "rrel8y",
  styles: "width:24px;height:24px"
} );
var IconUser = function IconUser(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$r);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$16, className),
    glyph: img$h
  }));
};

var img$g = {id: "e3YWLzfK-3u_IzOR_BScz", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var _excluded$q = ["className"];
var styles$15 = /*#__PURE__*/css({
  name: "e102ul",
  styles: "width:14px;height:14px;fill:#fff"
} );
var IconUsers = function IconUsers(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$q);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$15, className),
    glyph: img$g
  }));
};

var img$f = {id: "INRW_J-4xZH91VeoQeVR4", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.4776 5.30071C12.0871 4.91018 11.4539 4.91018 11.0634 5.30071L7.17529 9.18881L5.28718 7.30071C4.89666 6.91018 4.2635 6.91018 3.87297 7.30071C3.48245 7.69123 3.48245 8.3244 3.87297 8.71492L6.22966 11.0716C6.48604 11.328 6.84699 11.4161 7.17521 11.3358C7.50346 11.4161 7.86448 11.3281 8.12089 11.0716L12.4776 6.71492C12.8681 6.3244 12.8681 5.69123 12.4776 5.30071Z\" fill=\"white\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$p = ["className"];
var styles$14 = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentSuccess, ";" + ("" ), "" );
var IconSuccess = function IconSuccess(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$p);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$14, className),
    glyph: img$f
  }));
};

var img$e = {id: "sYSIkQJ1jfZx9z2XlOJFK", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\"/>\n<circle cx=\"8.02079\" cy=\"11.9685\" r=\"1.32987\" fill=\"white\"/>\n<rect x=\"6.69092\" y=\"2.66016\" width=\"2.65974\" height=\"6.64935\" rx=\"1.32987\" fill=\"white\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$o = ["className"];
var styles$13 = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentDanger, ";" + ("" ), "" );
var IconFailed = function IconFailed(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$o);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$13, className),
    glyph: img$e
  }));
};

var img$d = {id: "MVWLXZiRD5zJS7jyVIBoZ", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 4L12 8L5 12V4Z\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$n = ["className"];
var styles$12 = /*#__PURE__*/css({
  name: "157xhr7",
  styles: "width:16px;height:16px"
} );
var IconPlay = function IconPlay(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$n);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$12, className),
    glyph: img$d
  }));
};

var img$c = {id: "nyjHtWHGpE87mj8-EIOQE", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$m = ["className"];
var styles$11 = /*#__PURE__*/css({
  name: "157xhr7",
  styles: "width:16px;height:16px"
} );
var IconStop = function IconStop(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$m);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$11, className),
    glyph: img$c
  }));
};

var img$b = {id: "dmfqnTM6ST4gV1mhBjBmg", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.71743 6.94604C7.80755 6.92194 7.90228 6.90909 8 6.90909C8.60249 6.90909 9.09091 7.39751 9.09091 8C9.09091 8.60249 8.60249 9.09091 8 9.09091C7.39751 9.09091 6.90909 8.60249 6.90909 8C6.90909 7.90228 6.92194 7.80755 6.94604 7.71743L4.88703 5.65842L5.65842 4.88703L7.71743 6.94604ZM8.54545 3.12087V5.27273H7.45455V2H8C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 6.38359 2.64289 4.86766 3.76532 3.74941L4.53527 4.52224C3.61627 5.43782 3.09091 6.6766 3.09091 8C3.09091 10.7112 5.28878 12.9091 8 12.9091C10.7112 12.9091 12.9091 10.7112 12.9091 8C12.9091 5.47315 11 3.3922 8.54545 3.12087Z\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$l = ["className"];
var styles$10 = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentPrimary, ";" + ("" ), "" );
var IconTask = function IconTask(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$l);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$10, className),
    glyph: img$b
  }));
};

var img$a = {id: "Rock3db634b28Axdsyhdu", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1a6.96 6.96 0 0 1 4.95 2.05 6.963 6.963 0 0 1 1.5 2.225c.366.864.55 1.78.55 2.725a6.958 6.958 0 0 1-2.05 4.95 6.962 6.962 0 0 1-2.225 1.5c-.864.366-1.78.55-2.725.55a6.958 6.958 0 0 1-4.95-2.05 6.963 6.963 0 0 1-1.5-2.225A6.946 6.946 0 0 1 1 8a6.96 6.96 0 0 1 2.05-4.95 6.964 6.964 0 0 1 2.225-1.5A6.946 6.946 0 0 1 8 1z\"/><path d=\"M4 9a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H4z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var _excluded$k = ["className"];
var styles$$ = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentWarning, ";" + ("" ), "" );
var IconStopped = function IconStopped(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$k);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$$, className),
    glyph: img$a
  }));
};

var img$9 = {id: "SNKdX7GYCgkLfkqN7qaux", content: "<svg width=\"12\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.64 2c.068-.126.165-.258.3-.383C4.276 1.305 4.894 1 6 1s1.724.305 2.06.617c.135.125.232.257.3.383H3.64zM2.57 2c.1-.368.315-.77.69-1.117C3.824.361 4.706 0 6 0c1.294 0 2.176.361 2.74.883.375.347.59.749.69 1.117h1.37c.663 0 1.2.542 1.2 1.21v1.211c0 .669-.537 1.21-1.2 1.21h-.048L10.2 12.29c0 .668-.537 1.21-1.2 1.21H3c-.663 0-1.2-.542-1.198-1.16l-.554-6.708H1.2c-.663 0-1.2-.542-1.2-1.21V3.21C0 2.542.537 2 1.2 2h1.37zM1.2 3.21h9.6v1.211H1.2v-1.21zM3 12.29l-.548-6.658h1.123l.832 6.658H3zm1.583-6.658l.832 6.658h1.17l.832-6.658H4.583zM9 12.29H7.593l.832-6.658h1.123l-.546 6.607-.002.05z\"/></svg>", viewbox: "0 0 12 14", viewBox: "0 0 12 14" };

var _excluded$j = ["className"];
var styles$_ = /*#__PURE__*/css("width:16px;height:16px;fill:", colors.intentPrimary, ";" + ("" ), "" );
var IconTrash = function IconTrash(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$j);

  return /*#__PURE__*/React.createElement(Icon$1, Object.assign({}, props, {
    className: cx(styles$_, className),
    glyph: img$9
  }));
};

var styles$Z = {
  button: /*#__PURE__*/css("white-space:nowrap;border:none;border-radius:4px;box-sizing:border-box;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;transition-timing-function:ease-in-out;transition-duration:0.07s;transition-property:background-color,color;outline:none;cursor:pointer;-webkit-font-smoothing:antialiased;&:hover,&:focus,&:active{transition-property:background-color,color,box-shadow;}&:disabled,&:disabled:active,&:disabled:hover{cursor:default;}" + ("" ), "" ),
  icon: /*#__PURE__*/css({
    name: "m4ehm8",
    styles: "width:16px;height:16px;margin-bottom:2px"
  } ),
  iconMargin: /*#__PURE__*/css({
    name: "1oaeivz",
    styles: "margin-right:8px"
  } ),
  iconRightMargin: /*#__PURE__*/css({
    name: "1q4vxyr",
    styles: "margin-left:8px"
  } ),
  loading: /*#__PURE__*/css({
    name: "txi969",
    styles: "position:relative;color:rgba(0, 0, 0, 0);transition:none;&:hover,&:focus,&:active{cursor:default;color:rgba(0, 0, 0, 0);}&>*,&:hover>*,&:active>*,&:focus>*{visibility:hidden;}&>*:last-child{visibility:visible;}"
  } ),
  loadingWrap: /*#__PURE__*/css({
    name: "1ayzrn4",
    styles: "position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center"
  } ),
  l: /*#__PURE__*/css({
    name: "tmd43s",
    styles: "padding:9px 20px"
  } ),
  m: /*#__PURE__*/css({
    name: "bqm4td",
    styles: "padding:5px 16px"
  } ),
  s: /*#__PURE__*/css({
    name: "66eqqi",
    styles: "padding:1px 16px"
  } ),
  xs: /*#__PURE__*/css({
    name: "j102p8",
    styles: "padding:1px 9px;line-height:18px;font-size:12px"
  } ),
  iconicL: /*#__PURE__*/css({
    name: "1cmru8j",
    styles: "padding:9px 12px"
  } ),
  iconicM: /*#__PURE__*/css({
    name: "119d31z",
    styles: "padding:5px 8px"
  } ),
  iconicS: /*#__PURE__*/css({
    name: "1sfwfy0",
    styles: "padding:1px 4px"
  } )
};
var intentStyles$1 = {
  base: /*#__PURE__*/css("background-color:white;color:", colors.dark65, ";box-shadow:inset 0 0 0 1px ", colors.baseBg, ";&:disabled,&:disabled:active,&:disabled:hover{color:", colors.intentBase, ";background-color:", colors.intentBaseActive, ";box-shadow:inset 0 0 0 1px ", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}" + ("" ), "" ),
  dark: /*#__PURE__*/css("background-color:", colors.dark40, ";color:#ffffff;&:disabled,&:disabled:active,&:disabled:hover{color:", colors.intentBase, ";background-color:", colors.intentBaseActive, ";}& svg{fill:#ffffff;}&:disabled svg{fill:", colors.intentBase, ";}" + ("" ), "" ),
  primary: /*#__PURE__*/css("background-color:", colors.intentPrimary, ";color:#ffffff;&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentPrimary50, ";color:#ffffff;}& svg{fill:#ffffff;}&:disabled svg{fill:#ffffff;}" + ("" ), "" ),
  secondary: /*#__PURE__*/css("background-color:", colors.dark10, ";color:", colors.dark65, ";&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentBaseActive, ";color:", colors.intentBase, ";box-shadow:inset 0 0 0 1px ", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}" + ("" ), "" ),
  plain: /*#__PURE__*/css("background-color:transparent;color:", colors.dark65, ";&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentBaseActive, ";color:", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}" + ("" ), "" )
};
var intentActiveStyles = {
  base: /*#__PURE__*/css("&:focus,&:hover{background-color:", colors.dark10, ";box-shadow:none;}&:active{background-color:", colors.dark10, ";box-shadow:inset 0 4px 0 rgba(4, 11, 29, 0.1);}" + ("" ), "" ),
  dark: /*#__PURE__*/css("&:focus,&:hover{background-color:", colors.dark60, ";}&:active{background-color:", colors.dark60, ";box-shadow:inset 0 4px 0 rgba(4, 11, 29, 0.1);}" + ("" ), "" ),
  primary: /*#__PURE__*/css("&:focus,&:hover{background-color:", colors.activeAction, ";}&:active{background-color:", colors.activeAction, ";box-shadow:inset 0 4px 0 rgba(4, 11, 29, 0.1);}" + ("" ), "" ),
  secondary: /*#__PURE__*/css("&:focus,&:hover{background-color:", colors.dark25, ";}&:active{background-color:", colors.dark25, ";box-shadow:inset 0 4px 0 rgba(4, 11, 29, 0.1);}" + ("" ), "" ),
  plain: /*#__PURE__*/css("&:focus,&:hover{background-color:", colors.dark10, ";}" + ("" ), "" )
};

var _excluded$i = ["autoFocus", "className", "children", "disabled", "icon", "iconRight", "intent", "onClick", "loading", "size", "text", "title", "type", "pass"];
var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _cx2;

  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      Icon = _ref.icon,
      IconRight = _ref.iconRight,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'base' : _ref$intent,
      onClick = _ref.onClick,
      loading = _ref.loading,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      text = _ref.text,
      title = _ref.title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      pass = _ref.pass,
      props = _objectWithoutProperties(_ref, _excluded$i);

  var isOnlyIcon = Icon && !children && !text;
  var handleClick = useCallback(function (event) {
    if (onClick) {
      onClick(event, pass);
    }
  }, [onClick, pass]);
  var content = [];

  if (Icon) {
    content.push( /*#__PURE__*/React.createElement(Icon, {
      key: "Icon",
      className: cx(styles$Z.icon, _defineProperty({}, styles$Z.iconMargin, !isOnlyIcon))
    }));
  }

  content.push( /*#__PURE__*/React.createElement(React.Fragment, {
    key: "content"
  }, children || text));

  if (IconRight && !isOnlyIcon) {
    content.push( /*#__PURE__*/React.createElement(IconRight, {
      key: "IconRight",
      className: cx(styles$Z.icon, styles$Z.iconRightMargin)
    }));
  }

  if (loading && !disabled) {
    content.push( /*#__PURE__*/React.createElement("div", {
      key: "loading",
      className: styles$Z.loadingWrap
    }, /*#__PURE__*/React.createElement(IconSpinner, null)));
  }

  return /*#__PURE__*/React.createElement("button", _objectSpread2(_objectSpread2({}, props), {}, {
    autoFocus: autoFocus,
    className: cx(styles$Z.button, (_cx2 = {}, _defineProperty(_cx2, styles$Z.iconicL, isOnlyIcon && size === 'l'), _defineProperty(_cx2, styles$Z.iconicM, isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$Z.iconicS, isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$Z.l, !isOnlyIcon && size === 'l'), _defineProperty(_cx2, styles$Z.m, !isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$Z.s, !isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$Z.xs, size === 'xs'), _defineProperty(_cx2, intentActiveStyles[intent], !loading && !disabled), _cx2), intentStyles$1[intent], _defineProperty({}, styles$Z.loading, loading && !disabled), className),
    disabled: disabled,
    onClick: onClick ? handleClick : undefined,
    title: title,
    type: type,
    ref: ref
  }), content);
});

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

var systemIndependentScrollbars = /*#__PURE__*/css("&{scrollbar-width:thin;scrollbar-color:", rgba(colors.dark65, 0.5), " transparent;}&::-webkit-scrollbar{width:6px;height:6px;margin-right:3px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:", rgba(colors.dark65, 0.5), ";border-radius:4px;}" + ("" ), "" );
var isScrollbarStyleRequired = ['Mac OS', 'iOS', 'Android'].indexOf(getOS()) === -1;
var scrollbars = isScrollbarStyleRequired ? systemIndependentScrollbars : '';

var scrollbars$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  systemIndependentScrollbars: systemIndependentScrollbars,
  scrollbars: scrollbars
});

var genericStyles = _objectSpread2({}, scrollbars$1);

var isFocusInside = function isFocusInside(element) {
  var focused = document.activeElement;
  return element === focused || element.contains(focused);
};
var isFocusInsideRef = function isFocusInsideRef(ref) {
  return ref && ref.current && isFocusInside(ref.current) || false;
};

var styles$Y = {
  popover: /*#__PURE__*/css("position:absolute;left:0;max-width:70%;max-height:100%;padding:8px 0;overflow:hidden;border-radius:4px;box-shadow:0 5px 20px 0 rgba(0, 0, 0, 0.09);border:solid 1px ", colors.intentBaseBg, ";background-color:#ffffff;z-index:", zIndex.dropdownMenu, ";box-sizing:border-box;user-select:none;outline:none;&::-moz-focus-inner{border:0;}" + ("" ), "" ),
  popoverScrollable: /*#__PURE__*/css({
    name: "1vsyufa",
    styles: "height:100%;overflow:auto"
  } )
};
var DropdownPopover$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownPopover, _React$Component);

  var _super = _createSuper(DropdownPopover);

  function DropdownPopover() {
    var _this;

    _classCallCheck(this, DropdownPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          innerRef = _this$props.innerRef,
          onKeyDownCapture = _this$props.onKeyDownCapture;

      if (e.keyCode === 38 || e.keyCode === 40) {
        e.stopPropagation();
        e.preventDefault(); // get all focusable elements
        // get i of current focused element
        // focus next or prev element

        var focused = document.activeElement;

        if (innerRef && innerRef.current) {
          var items = Array.from(innerRef.current.querySelectorAll(INTERACTIVE_ELEMENT_SELECTOR));
          var currentIndex = items.indexOf(focused);
          var newActiveIndex = currentIndex === -1 ? e.keyCode === 38 ? items.length - 1 : 0 : e.keyCode === 38 ? (currentIndex + items.length - 1) % items.length : (currentIndex + items.length + 1) % items.length;
          items[newActiveIndex].focus();
        }
      }

      onKeyDownCapture && onKeyDownCapture(e);
    };

    return _this;
  }

  _createClass(DropdownPopover, [{
    key: "focus",
    value: function focus() {
      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          autoFocus = _this$props2.autoFocus;
      autoFocus && innerRef.current && innerRef.current.focus();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var style = this.props.style;

      if (!style || !(style.left === 0 && style.top === 0)) {
        this.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!isFocusInsideRef(this.props.innerRef)) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          innerRef = _this$props3.innerRef,
          items = _this$props3.items,
          useScroll = _this$props3.useScroll,
          style = _this$props3.style,
          onClick = _this$props3.onClick,
          onMouseDown = _this$props3.onMouseDown;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$Y.popover, genericStyles.scrollbars, _defineProperty({}, styles$Y.popoverScrollable, useScroll), className),
        onClick: onClick,
        onMouseDown: onMouseDown,
        onKeyDownCapture: this.handleKeyDown,
        style: style,
        ref: innerRef,
        tabIndex: 0
      }, items);
    }
  }]);

  return DropdownPopover;
}(React.Component);
var DropdownPopoverWithRef$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(DropdownPopover$1, Object.assign({}, props, {
    innerRef: ref
  }));
});

var _excluded$h = ["className", "items", "popoverClassName", "onDropdownVisibleChange", "autoFocus", "disabled"];
var SCROLLBAR_WIDTH = 28;
var popoverCloseKeyCodes = [9, 13, 27];

var focusFirstInteractiveElement$2 = function focusFirstInteractiveElement(containerEl) {
  var firstInteractiveElement = containerEl && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
};

var withDropdown = function withDropdown(Component) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Dropdown, _React$PureComponent);

    var _super = _createSuper(Dropdown);

    function Dropdown() {
      var _this;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.popoverRef = /*#__PURE__*/React.createRef();
      _this.wrapperRef = /*#__PURE__*/React.createRef();
      _this.scrollablePopoverWidth = 0;
      _this.state = {
        isOpen: false,
        left: 0,
        top: 0,
        useScroll: false
      };

      _this.recalcPosition = function () {
        var _assertThisInitialize = _assertThisInitialized(_this),
            wrapperRef = _assertThisInitialize.wrapperRef,
            popoverRef = _assertThisInitialize.popoverRef;

        var popoverElement = popoverRef.current;
        var wrapperElement = wrapperRef.current;

        if (popoverElement && wrapperElement) {
          var bodyWidth = document.body ? document.body.clientWidth : 0;
          var wrapperRect = wrapperElement.getBoundingClientRect();
          var popoverRect = popoverElement.getBoundingClientRect();
          var wrapperBottomSpace = window.innerHeight - wrapperRect.top - wrapperRect.height;
          var useScroll = popoverRect.height >= window.innerHeight; // will show popover upside toggler;

          var upside = popoverElement.offsetHeight > wrapperBottomSpace && popoverElement.offsetHeight <= wrapperRect.top; // will show popover downside & shift vertical

          var shiftVertical = popoverElement.offsetHeight > wrapperBottomSpace && popoverElement.offsetHeight > wrapperRect.top; // will show popover to left from toggler;

          var leftside = wrapperRect.left > bodyWidth / 2;
          var left = leftside ? Math.max(window.scrollX + wrapperRect.left + wrapperRect.width - popoverRect.width, 0) : Math.max(window.scrollX + wrapperRect.left, 0);
          var top = shiftVertical ? window.scrollY + window.innerHeight - popoverRect.height : upside ? window.scrollY + wrapperRect.top - popoverElement.offsetHeight : window.scrollY + wrapperRect.top + wrapperRect.height;
          var horizontalShift = left - window.scrollX + popoverRect.width > window.innerWidth ? -(left - window.scrollX + popoverRect.width - window.innerWidth) : left < window.scrollX ? window.scrollX - left : 0;
          _this.scrollablePopoverWidth = _this.state.useScroll ? popoverRect.width : popoverRect.width + SCROLLBAR_WIDTH;
          left += horizontalShift;
          left -= !_this.state.useScroll && useScroll ? SCROLLBAR_WIDTH : 0;

          _this.setState({
            top: top,
            left: left,
            useScroll: useScroll
          });
        }
      };

      _this.throttledRecalcPosition = throttle(_this.recalcPosition, 16);

      _this.handleClick = function (event) {
        var _this$props = _this.props,
            onClick = _this$props.onClick,
            autoFocus = _this$props.autoFocus;
        var isOpen = _this.state.isOpen;

        if (!autoFocus && isOpen) {
          return;
        }

        _this.toggleDropdown();

        onClick && onClick(event);
      };

      _this.handleMouseDownOutside = function (event) {
        var isOpen = _this.state.isOpen;
        var popoverElement = _this.popoverRef && _this.popoverRef.current;
        var wrapperElement = _this.wrapperRef && _this.wrapperRef.current; // for Flow

        var eventTarget = event.target;

        if (isOpen && popoverElement && wrapperElement && !(popoverElement.contains(eventTarget) || wrapperElement.contains(eventTarget)) && (popoverElement !== event.target || wrapperElement !== event.target)) {
          _this.toggleDropdown();
        }
      };

      _this.handlePopoverClick = function (event) {
        event.stopPropagation();
        var ref = _this.popoverRef && _this.popoverRef.current;

        if (ref && ref !== event.target) {
          _this.toggleDropdown();
        }
      };

      _this.handlePopoverMouseDown = function (event) {
        return event.stopPropagation();
      };

      _this.handlePopoverKeyDown = function (event) {
        if (popoverCloseKeyCodes.includes(event.keyCode)) {
          _this.toggleDropdown();

          _this.wrapperRef.current && _this.props.autoFocus && focusFirstInteractiveElement$2(_this.wrapperRef.current);
        }
      };

      _this.toggleDropdown = function () {
        return _this.setState(function (_ref) {
          var isOpen = _ref.isOpen;
          return {
            isOpen: !isOpen,
            useScroll: false
          };
        });
      };

      _this.renderPopover = function () {
        var _this$props2 = _this.props,
            popoverClassName = _this$props2.popoverClassName,
            autoFocus = _this$props2.autoFocus;
        var _this$state = _this.state,
            left = _this$state.left,
            top = _this$state.top,
            useScroll = _this$state.useScroll;

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            wrapperRef = _assertThisInitialize2.wrapperRef;

        var minWidth = wrapperRef && wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;
        return /*#__PURE__*/React.createElement(DropdownPopoverWithRef$1, {
          className: popoverClassName,
          items: _this.props.items,
          autoFocus: autoFocus,
          onClick: _this.handlePopoverClick,
          onKeyDownCapture: _this.handlePopoverKeyDown,
          onMouseDown: _this.handlePopoverMouseDown,
          style: {
            left: left,
            top: top,
            minWidth: minWidth,
            width: useScroll ? _this.scrollablePopoverWidth : null
          },
          useScroll: useScroll,
          ref: _this.popoverRef
        });
      };

      return _this;
    }

    _createClass(Dropdown, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.isOpen) {
          document.addEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.addEventListener('mousedown', this.handleMouseDownOutside);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var isOpen = this.state.isOpen;

        if (prevState.isOpen !== isOpen) {
          this.props.onDropdownVisibleChange && this.props.onDropdownVisibleChange(isOpen);
        }

        if (!prevState.isOpen && isOpen) {
          document.addEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.addEventListener('mousedown', this.handleMouseDownOutside);
        } else if (prevState.isOpen && !isOpen) {
          document.removeEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.removeEventListener('mousedown', this.handleMouseDownOutside);
        }

        if (isOpen && !prevState.isOpen || prevProps !== this.props) {
          this.recalcPosition();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('scroll', this.throttledRecalcPosition, {
          capture: true
        });
        document.removeEventListener('mousedown', this.handleMouseDownOutside);
      }
    }, {
      key: "renderPortal",
      value: function renderPortal() {
        var _document = document,
            body = _document.body;

        if (body) {
          return /*#__PURE__*/ReactDOM.createPortal(this.renderPopover(), body);
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            className = _this$props3.className,
            items = _this$props3.items;
            _this$props3.popoverClassName;
            _this$props3.onDropdownVisibleChange;
            _this$props3.autoFocus;
            var disabled = _this$props3.disabled,
            props = _objectWithoutProperties(_this$props3, _excluded$h);

        var isOpen = this.state.isOpen;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Component, Object.assign({}, props, {
          className: className,
          onClick: !disabled ? this.handleClick : undefined,
          ref: this.wrapperRef
        })), isOpen && items && !disabled && this.renderPortal());
      }
    }]);

    return Dropdown;
  }(React.PureComponent), _class.defaultProps = {
    autoFocus: true
  }, _temp;
};

var _excluded$g = ["className", "children"];
var styles$X = {
  wrap: /*#__PURE__*/css({
    name: "1nrevy2",
    styles: "position:relative;display:inline-block"
  } )
};
var Dropdown = withDropdown( /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/React.createElement(Button, {
    icon: IconMore,
    intent: "base"
  }) : _ref$children,
      props = _objectWithoutProperties(_ref, _excluded$g);

  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: cx(styles$X.wrap, className)
  }, props, {
    ref: ref
  }), children);
}));

var styles$W = {
  divider: /*#__PURE__*/css("border-bottom:1px solid ", colors.intentBaseBg, ";margin:3px 8px 4px;" + ("" ), "" )
};
var DropdownDivider = function DropdownDivider(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$W.divider, className),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  });
};

var textStyles = {
  h1: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:24px;line-height:40px;font-weight:600;color:", colors.dark, ";-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  h2: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:20px;line-height:28px;font-weight:600;color:", colors.dark, ";-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  h3: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:16px;line-height:24px;font-weight:600;color:", colors.dark, ";-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  h4: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;font-weight:600;color:", colors.dark, ";-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  h5: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:12px;line-height:22px;text-transform:uppercase;letter-spacing:0.01em;color:", colors.dark, ";font-weight:600;-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  p: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:12px;line-height:20px;color:#000000;-webkit-font-smoothing:antialiased;" + ("" ), "" ),
  code: /*#__PURE__*/css("margin:0;font-family:", monoFontFamily, ";font-size:14px;line-height:20px;color:#000000;-webkit-font-smoothing:antialiased;b{font-weight:600;}" + ("" ), "" ),
  basic: /*#__PURE__*/css("margin:0;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;color:#000000;-webkit-font-smoothing:antialiased;b{font-weight:600;}" + ("" ), "" ),
  upperCase: /*#__PURE__*/css({
    name: "50zrmy",
    styles: "text-transform:uppercase"
  } ),
  noCase: /*#__PURE__*/css({
    name: "kxbue8",
    styles: "text-transform:none"
  } )
};

var _excluded$f = ["className", "children", "tag", "upperCase", "noCase", "variant"];
var Text = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      tag = _ref.tag,
      upperCase = _ref.upperCase,
      noCase = _ref.noCase,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'basic' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var Element = tag || (variant === 'basic' ? 'span' : variant);
  return /*#__PURE__*/createElement(Element, _objectSpread2(_objectSpread2({}, props), {}, {
    className: cx(textStyles[variant], (_cx = {}, _defineProperty(_cx, textStyles.upperCase, upperCase), _defineProperty(_cx, textStyles.noCase, noCase), _cx), className),
    ref: ref
  }), children);
});

var _excluded$e = ["className", "color", "onClick", "pass"];
var defaultListItemColor = 'rgba(0, 0, 0, 0.65)';
var styles$V = {
  item: function item() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultListItemColor;
    return /*#__PURE__*/css("padding:0 16px;line-height:32px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:", color, ";cursor:pointer;&:focus,&:active{background-color:", colors.intentBaseBg, ";color:", color, ";outline:none;}&::-moz-focus-inner{border:0;}" + ("" ), "" );
  }
};
var DropdownItem = /*#__PURE__*/React.memo(function (_ref) {
  var className = _ref.className,
      color = _ref.color,
      onClick = _ref.onClick,
      pass = _ref.pass,
      props = _objectWithoutProperties(_ref, _excluded$e);

  var handleKeyDownCapture = React.useCallback(function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      onClick && onClick(e, pass);
    }
  }, [onClick, pass]);
  var handleMouseEnter = React.useCallback(function (e) {
    e.target && e.target.focus();
  }, []);
  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
    tabIndex: 0,
    className: cx(textStyles.basic, styles$V.item(color), className),
    onClick: onClick,
    onKeyDownCapture: handleKeyDownCapture,
    onMouseEnter: handleMouseEnter
  }));
});

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var ResizeSensor = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ResizeSensor, _React$PureComponent);

  var _super = _createSuper(ResizeSensor);

  function ResizeSensor() {
    var _this;

    _classCallCheck(this, ResizeSensor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.element = null;
    _this.observer = new ResizeObserver(function (entries) {
      return _this.props.onResize(entries);
    });
    return _this;
  }

  _createClass(ResizeSensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.observeElement();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.observeElement(this.props.observeParents !== prevProps.observeParents);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }, {
    key: "observeElement",
    value: function observeElement() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.getElement();

      if (!(element instanceof Element)) {
        this.observer.disconnect();
        return;
      }

      if (element === this.element && !force) {
        return;
      } else {
        this.observer.disconnect();
        this.element = element;
      }

      this.observer.observe(element);

      if (this.props.observeParents) {
        var parent = element.parentElement;

        while (parent != null) {
          this.observer.observe(parent);
          parent = parent.parentElement;
        }
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      try {
        // eslint-disable-next-line react/no-find-dom-node
        return findDOMNode(this);
      } catch (_unused) {
        // swallow error if findDOMNode is run on unmounted component.
        return null;
      }
    }
  }]);

  return ResizeSensor;
}(React.PureComponent);

function shallowCompareKeys(objA, objB, keys) {
  // treat `null` and `undefined` as the same
  if (objA == null && objB == null) {
    return true;
  } else if (objA == null || objB == null) {
    return false;
  } else if (Array.isArray(objA) || Array.isArray(objB)) {
    return false;
  } else if (keys != null) {
    return shallowCompareKeysImpl(objA, objB, keys);
  } else {
    // shallowly compare all keys from both objects
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    return shallowCompareKeysImpl(objA, objB, {
      include: keysA
    }) && shallowCompareKeysImpl(objA, objB, {
      include: keysB
    });
  }
}

function shallowCompareKeysImpl(objA, objB, keys) {
  return filterKeys(objA, objB, keys).every(function (key) {
    return Object.prototype.hasOwnProperty.call(objA, key) === Object.prototype.hasOwnProperty.call(objB, key) && objA[key] === objB[key];
  });
}

function filterKeys(objA, objB, keys) {
  if (isAllowlist(keys)) {
    return keys.include;
  } else if (isDenylist(keys)) {
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB); // merge keys from both objects into a big set for quick access

    var keySet = arrayToObject(keysA.concat(keysB)); // delete denied keys from the key set

    keys.exclude.forEach(function (key) {
      return delete keySet[key];
    }); // return the remaining keys as an array

    return Object.keys(keySet);
  }

  return [];
}

function arrayToObject(arr) {
  return arr.reduce(function (obj, element) {
    obj[element] = true;
    return obj;
  }, {});
}

function isAllowlist(keys) {
  return keys != null && keys.include != null;
}

function isDenylist(keys) {
  return keys != null && keys.exclude != null;
}

var OverflowDirection = {
  NONE: 'none',
  GROW: 'grow',
  SHRINK: 'shrink'
};
var styles$U = {
  overFlowList: /*#__PURE__*/css({
    name: "2lmyum",
    styles: "display:flex;flex-wrap:nowrap;min-width:0"
  } ),
  overflowListSpacer: /*#__PURE__*/css({
    name: "18izngs",
    styles: "flex-shrink:1;width:1px"
  } )
};
var OverflowList = /*#__PURE__*/function (_React$Component) {
  _inherits(OverflowList, _React$Component);

  var _super = _createSuper(OverflowList);

  function OverflowList() {
    var _this;

    _classCallCheck(this, OverflowList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      direction: OverflowDirection.NONE,
      lastOverflowCount: 0,
      overflow: [],
      visible: _this.props.items
    };
    _this.previousWidths = new Map();
    _this.spacer = null;

    _this.resize = function (entries) {
      var growing = entries.some(function (entry) {
        var previousWidth = _this.previousWidths.get(entry.target) || 0;
        return entry.contentRect.width > previousWidth;
      });

      _this.repartition(growing);

      entries.forEach(function (entry) {
        return _this.previousWidths.set(entry.target, entry.contentRect.width);
      });
    };

    return _this;
  }

  _createClass(OverflowList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.repartition(false);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_nextProps, nextState) {
      return !(this.state !== nextState && shallowCompareKeys(this.state, nextState));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.items !== this.props.items || prevProps.minVisibleItems !== this.props.minVisibleItems || prevProps.overflowRenderer !== this.props.overflowRenderer || prevProps.visibleItemRenderer !== this.props.visibleItemRenderer) {
        this.setState({
          direction: OverflowDirection.GROW,
          lastOverflowCount: 0,
          overflow: [],
          visible: this.props.items
        });
      }

      if (!shallowCompareKeys(prevState, this.state)) {
        this.repartition(false);
      }

      var _this$state = this.state,
          direction = _this$state.direction,
          overflow = _this$state.overflow,
          lastOverflowCount = _this$state.lastOverflowCount;

      if (direction === OverflowDirection.NONE && direction !== prevState.direction && overflow.length !== lastOverflowCount) {
        this.props.onOverflow && this.props.onOverflow(overflow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          observeParents = _this$props.observeParents,
          style = _this$props.style,
          _this$props$tagName = _this$props.tagName,
          tagName = _this$props$tagName === void 0 ? 'div' : _this$props$tagName,
          visibleItemRenderer = _this$props.visibleItemRenderer;
      var overflow = this.maybeRenderOverflow();
      var list = /*#__PURE__*/React.createElement(tagName, {
        className: cx(styles$U.overFlowList, className),
        style: style
      }, overflow, this.state.visible.map(visibleItemRenderer), null, /*#__PURE__*/React.createElement("div", {
        className: styles$U.overflowListSpacer,
        ref: function ref(_ref) {
          return _this2.spacer = _ref;
        }
      }));
      return /*#__PURE__*/React.createElement(ResizeSensor, {
        onResize: this.resize,
        observeParents: observeParents
      }, list);
    }
  }, {
    key: "maybeRenderOverflow",
    value: function maybeRenderOverflow() {
      var overflow = this.state.overflow;

      if (overflow.length === 0) {
        return null;
      }

      return this.props.overflowRenderer(overflow);
    }
  }, {
    key: "repartition",
    value: function repartition(growing) {
      var _this3 = this;

      if (this.spacer == null) {
        return;
      }

      if (growing) {
        this.setState(function (state) {
          return {
            direction: OverflowDirection.GROW,
            // store last overflow if this is the beginning of a resize (for check in componentDidUpdate).
            lastOverflowCount: state.direction === OverflowDirection.NONE ? state.overflow.length : state.lastOverflowCount,
            overflow: [],
            visible: _this3.props.items
          };
        });
      } else if (this.spacer.getBoundingClientRect().width < 0.9) {
        this.setState(function (state) {
          if (state.visible.length <= Number(_this3.props.minVisibleItems)) {
            return null;
          }

          var visible = state.visible.slice();
          var next = visible.shift();

          if (next === undefined) {
            return null;
          }

          var overflow = [].concat(_toConsumableArray(state.overflow), [next]);
          return {
            direction: state.direction === OverflowDirection.NONE ? OverflowDirection.SHRINK : state.direction,
            overflow: overflow,
            visible: visible
          };
        });
      } else {
        this.setState({
          direction: OverflowDirection.NONE
        });
      }
    }
  }]);

  return OverflowList;
}(React.Component);
OverflowList.defaultProps = {
  minVisibleItems: 0
};

var _excluded$d = ["className", "variant"];

var styles$T = {
  link: /*#__PURE__*/css({
    name: "k47rv5",
    styles: "color:inherit;text-decoration:underline;&:hover,&:active{text-decoration:none;}"
  } )
};
var Link = function Link(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded$d);

  var textStyle = variant && textStyles[variant] || null;
  /* eslint-disable jsx-a11y/anchor-has-content */

  return /*#__PURE__*/React.createElement("a", Object.assign({}, props, {
    className: cx(textStyle, styles$T.link, className)
  }));
};

var styles$S = {
  breadcrumbElement: /*#__PURE__*/css("color:", colors.dark40, ";font-size:16px;line-height:24px;white-space:nowrap;" + ("" ), "" ),
  breadcrumbLinkElement: /*#__PURE__*/css("cursor:pointer:color:", colors.dark40, ";&:hover,&:focus,a:link,a:visited,&:active{color:", colors.dark40, ";}&:hover{text-decoration:underline;}" + ("" ), "" )
};

var BreadcrumbsItemComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(BreadcrumbsItemComponent, _React$Component);

  var _super = _createSuper(BreadcrumbsItemComponent);

  function BreadcrumbsItemComponent() {
    _classCallCheck(this, BreadcrumbsItemComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BreadcrumbsItemComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          path = _this$props.path,
          onLinkClick = _this$props.onLinkClick;

      if (path && onLinkClick) {
        return /*#__PURE__*/React.createElement(Link, {
          href: path,
          onClick: function onClick(e) {
            e.preventDefault();
            onLinkClick(path);
          },
          className: cx(styles$S.breadcrumbLinkElement, styles$S.breadcrumbElement),
          variant: "basic"
        }, title);
      }

      return /*#__PURE__*/React.createElement(Text, {
        tag: "span",
        className: styles$S.breadcrumbElement
      }, title);
    }
  }]);

  return BreadcrumbsItemComponent;
}(React.Component);

var styles$R = {
  breadcrumbs: /*#__PURE__*/css({
    name: "1hoshla",
    styles: "display:flex;align-items:baseline;width:100%;overflow:hidden"
  } ),
  breadcrumbElement: /*#__PURE__*/css({
    name: "1bmnxg7",
    styles: "white-space:nowrap"
  } ),
  breadcrumbsList: /*#__PURE__*/css({
    name: "1d3w5wq",
    styles: "width:100%"
  } ),
  breadcrumbDelimiter: /*#__PURE__*/css("margin:0 6px;color:", colors.dark40, ";font-size:16px;line-height:24px;white-space:nowrap;" + ("" ), "" ),
  appName: /*#__PURE__*/css({
    name: "f6dufb",
    styles: "position:absolute;white-space:nowrap;left:0;top:0;background:#ffffff;box-shadow:0px 0px 10px #e6e7e8;border-radius:2px;margin-left:-10px;padding:0 10px"
  } ),
  breadcrumbHoveredElement: /*#__PURE__*/css({
    name: "1te1vur",
    styles: "position:relative;cursor:pointer"
  } ),
  overflowButton: /*#__PURE__*/css({
    name: "192pvth",
    styles: "cursor:pointer;font-size:16px;line-height:24px;color:#8e9199;&:hover{text-decoration-line:underline;}"
  } )
};
var MAX_APP_NAME_LENGTH = 40;
var Breadcrumbs = /*#__PURE__*/function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  var _super = _createSuper(Breadcrumbs);

  function Breadcrumbs() {
    var _this;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderOverflow = function (items) {
      var onLinkClick = _this.props.onLinkClick;
      var itemsCollection = /*#__PURE__*/React.createElement(React.Fragment, null, items.map(function (item) {
        return /*#__PURE__*/React.createElement(DropdownItem, {
          key: "".concat(item.title, "|").concat(item.path || ''),
          onClick: item.path && onLinkClick ? function () {
            return item.path ? onLinkClick(item.path) : undefined;
          } : undefined
        }, item.title);
      }));
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
        tag: "span",
        className: cx(styles$R.breadcrumbDelimiter, styles$R.breadcrumbElement)
      }, "/"), /*#__PURE__*/React.createElement(Dropdown, {
        items: itemsCollection
      }, /*#__PURE__*/React.createElement(Text, {
        className: styles$R.overflowButton
      }, "...")));
    };

    _this.renderBreadcrumbWrapper = function (props, index) {
      var onLinkClick = _this.props.onLinkClick;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: index
      }, /*#__PURE__*/React.createElement(Text, {
        tag: "span",
        className: cx(styles$R.breadcrumbDelimiter, styles$R.breadcrumbElement)
      }, "/"), /*#__PURE__*/React.createElement(BreadcrumbsItemComponent, {
        title: props.title,
        path: props.path,
        onLinkClick: onLinkClick
      }));
    };

    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          appName = _this$props.appName,
          className = _this$props.className;

      var isLongAppName = function isLongAppName(appName) {
        return appName.length > MAX_APP_NAME_LENGTH;
      };

      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$R.breadcrumbs, className)
      }, appName && (isLongAppName(appName) ? /*#__PURE__*/React.createElement(AppName, {
        appName: appName
      }) : /*#__PURE__*/React.createElement(Text, {
        tag: "span",
        className: styles$R.breadcrumbElement,
        variant: "h3"
      }, appName)), /*#__PURE__*/React.createElement(OverflowList, {
        minVisibleItems: 1,
        items: items,
        className: styles$R.breadcrumbsList,
        overflowRenderer: this.renderOverflow,
        visibleItemRenderer: this.renderBreadcrumbWrapper
      }));
    }
  }]);

  return Breadcrumbs;
}(React.Component);

var shorterAppName = function shorterAppName(appName) {
  return appName.length > MAX_APP_NAME_LENGTH ? "".concat(appName.slice(0, MAX_APP_NAME_LENGTH), "...") : appName;
};

function AppName(_ref) {
  var appName = _ref.appName;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHover = _React$useState2[0],
      setHover = _React$useState2[1];

  return /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    className: cx(styles$R.breadcrumbElement, styles$R.breadcrumbHoveredElement),
    variant: "h3",
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, shorterAppName(appName), isHover && /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    className: cx(styles$R.breadcrumbElement, styles$R.appName),
    variant: "h3"
  }, appName));
}

var styles$Q = {
  outer: /*#__PURE__*/css({
    name: "s5xdrg",
    styles: "display:flex;align-items:center"
  } ),
  control: /*#__PURE__*/css({
    name: "13w52vd",
    styles: "display:block;margin-right:24px;&:last-child{margin-right:0px;}"
  } ),
  thin: /*#__PURE__*/css({
    name: "o7nnmj",
    styles: "margin-right:16px"
  } )
};
var ControlsPanel = function ControlsPanel(_ref) {
  var className = _ref.className,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      thin = _ref.thin;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$Q.outer, className)
  }, controls && controls.filter(Boolean).map(function (control, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: cx(styles$Q.control, _defineProperty({}, styles$Q.thin, thin))
    }, control);
  }));
};

var styles$P = {
  header: /*#__PURE__*/css("height:", appLayoutTopPanelHeight, "px;min-width:", pageLayoutMinWidth, "px;background:#ffffff;width:100%;display:flex;padding:0 30px;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;" + ("" ), "" ),
  crumbs: /*#__PURE__*/css({
    name: "843dc",
    styles: "display:flex;flex-grow:1;flex-shrink:1;flex-direction:row;flex-wrap:nowrap;align-items:center"
  } ),
  controls: /*#__PURE__*/css({
    name: "3q0rwn",
    styles: "display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;flex-direction:row;flex-wrap:nowrap;align-items:center;margin-left:20px"
  } )
};
var AppHeader = function AppHeader(_ref) {
  var appName = _ref.appName,
      breadcrumbs = _ref.breadcrumbs,
      className = _ref.className,
      controls = _ref.controls,
      onLinkClick = _ref.onLinkClick;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$P.header, className)
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    className: styles$P.crumbs,
    items: breadcrumbs,
    appName: appName,
    onLinkClick: onLinkClick
  }), /*#__PURE__*/React.createElement(ControlsPanel, {
    className: styles$P.controls,
    controls: controls,
    thin: true
  }));
};

var styles$O = {
  main: /*#__PURE__*/css({
    name: "ww59jg",
    styles: "display:flex;flex-grow:1;flex-shrink:0;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;position:relative;max-width:100vw;height:100vh;margin:0 auto"
  } ),
  content: /*#__PURE__*/css("display:block;background:", colors.baseBg, ";flex-grow:1;max-height:100vh;overflow:auto;" + ("" ), "" ),
  sidebar: /*#__PURE__*/css({
    name: "1ooyyrj",
    styles: "flex-grow:0;flex-shrink:0;box-sizing:border-box;z-index:1"
  } )
};
var AppLayout = function AppLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Sidebar = _ref.sidebarComponent;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$O.main, className)
  }, /*#__PURE__*/React.createElement(Sidebar, {
    className: styles$O.sidebar
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(styles$O.content, genericStyles.scrollbars)
  }, children));
};

var styles$N = {
  lockedBody: /*#__PURE__*/css({
    name: "d3v9zr",
    styles: "overflow:hidden"
  } ),
  shim: /*#__PURE__*/css("position:fixed;z-index:", zIndex.modal, ";left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;padding:40px 16px;overflow:auto;background-color:", rgba(colors.dark, 0.65), ";justify-content:flex-start;align-items:center;" + ("" ), "" ),
  baseModal: /*#__PURE__*/css({
    name: "1vj4vbw",
    styles: "position:relative;width:100%;max-width:600px;border-radius:4px;margin:auto;box-sizing:border-box;background-color:#ffffff;box-shadow:0px 5px 20px rgba(0, 0, 0, 0.09);outline:none"
  } ),
  focusClosureControl: /*#__PURE__*/css({
    name: "alng9s",
    styles: "position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px"
  } ),
  wide: /*#__PURE__*/css({
    name: "1rxb0gn",
    styles: "max-width:1000px"
  } )
};

var isNodeOutsideElement = function isNodeOutsideElement(node, element) {
  return !(element.contains(node) || element === node);
};

var BaseModal = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseModal, _React$Component);

  var _super = _createSuper(BaseModal);

  function BaseModal() {
    var _this;

    _classCallCheck(this, BaseModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.modalRef = /*#__PURE__*/createRef();

    _this.lockBodyScroll = function () {
      var _document = document,
          body = _document.body;
      body && body.classList.add(styles$N.lockedBody);
    };

    _this.releaseBodyScroll = function () {
      var _document2 = document,
          body = _document2.body;
      body && body.classList.remove(styles$N.lockedBody);
    };

    _this.focusFirstInteractiveElement = function () {
      var modal = _this.modalRef.current;
      var firstInteractiveElement = modal && modal.querySelector('a, button, input, select, textarea, [tabindex="0"]');

      if (firstInteractiveElement) {
        firstInteractiveElement.focus();
      } else if (modal) {
        modal.focus();
      }
    };

    _this.focusModal = function () {
      var modal = _this.modalRef.current;
      modal && modal.focus();
    };

    _this.isModalVisible = function () {
      var visible = _this.props.visible;
      return visible !== false;
    };

    _this.handleOutsideClick = function (event) {
      var modal = _this.modalRef.current;

      if (modal && event.target instanceof HTMLElement && isNodeOutsideElement(event.target, modal)) {
        _this.props.onClose && _this.props.onClose(event);
      }
    };

    _this.handleEscapePress = function (e) {
      if (_this.props.onClose && e.keyCode === 27) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  _createClass(BaseModal, [{
    key: "afterModalOpen",
    value: function afterModalOpen() {
      this.lockBodyScroll();

      if (this.modalRef && !isFocusInsideRef(this.modalRef)) {
        this.focusModal();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isModalVisible()) {
        this.afterModalOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visible === false && this.isModalVisible()) {
        this.afterModalOpen();
      } else if (prevProps.visible === true && !this.isModalVisible()) {
        this.releaseBodyScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.releaseBodyScroll();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.isModalVisible()) return null;
      var root = document.body;

      if (root) {
        return /*#__PURE__*/ReactDOM.createPortal(this.renderModal(), root);
      }

      return null;
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          wide = _this$props.wide,
          shimClassName = _this$props.shimClassName;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$N.shim, shimClassName),
        onMouseDown: this.handleOutsideClick
      }, /*#__PURE__*/React.createElement("div", {
        className: cx(styles$N.baseModal, _defineProperty({}, styles$N.wide, wide), className),
        ref: this.modalRef,
        tabIndex: 0,
        onKeyDown: this.handleEscapePress
      }, children, /*#__PURE__*/React.createElement("div", {
        className: styles$N.focusClosureControl,
        onFocus: this.focusFirstInteractiveElement,
        tabIndex: "0"
      })));
    }
  }]);

  return BaseModal;
}(React.Component);

var styles$M = {
  icon: /*#__PURE__*/css({
    name: "4zleql",
    styles: "display:block"
  } ),
  iconWrap: /*#__PURE__*/css({
    name: "bjn8wh",
    styles: "position:relative"
  } ),
  children: /*#__PURE__*/css({
    name: "1h52dri",
    styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  } ),
  childrenMargin: /*#__PURE__*/css({
    name: "1oaeivz",
    styles: "margin-right:8px"
  } ),
  input: /*#__PURE__*/css("clip:rect(0 0 0 0);width:0;height:0;margin:-1px;appearance:none;&+div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(255, 255, 255, 0);border-radius:3px;}&:focus+div::before{border-color:", rgba(colors.intentPrimary, 0.55), ";}" + ("" ), "" ),
  label: /*#__PURE__*/css({
    name: "1uoamx5",
    styles: "display:flex;align-items:center;cursor:pointer"
  } )
};
var Checkbox = function Checkbox(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      onChange = _ref.onChange,
      name = _ref.name,
      title = _ref.title,
      value = _ref.value;
  var inputRef = useRef(null);
  useEffect(function () {
    inputRef.current && (inputRef.current.indeterminate = indeterminate);
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: cx(styles$M.label, className),
    title: title
  }, /*#__PURE__*/React.createElement("input", {
    checked: checked,
    className: styles$M.input,
    disabled: disabled,
    type: "checkbox",
    onChange: onChange,
    name: name,
    value: value,
    ref: inputRef
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(styles$M.iconWrap, _defineProperty({}, styles$M.childrenMargin, children))
  }, /*#__PURE__*/React.createElement(IconCheckbox, {
    className: styles$M.icon,
    checked: checked,
    indeterminate: indeterminate,
    disabled: disabled
  })), typeof children === 'string' ? /*#__PURE__*/React.createElement(Text, null, children) : children);
};

/**
 * based on original okaidia theme from prismjs
 */

var theme = /*#__PURE__*/css({
  name: "3dds2k",
  styles: "color:#f8f8f2;background:none;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;& .token.comment,& .token.prolog,& .token.doctype,& .token.cdata{color:slategray;}& .token.punctuation{color:#f8f8f2;}& .token.namespace{opacity:0.7;}& .token.property,& .token.tag,& .token.constant,& .token.symbol,& .token.deleted{color:#f92672;}& .token.boolean,& .token.number{color:#ae81ff;}& .token.selector,& .token.attr-name,& .token.string,& .token.char,& .token.builtin,& .token.inserted{color:#a6e22e;}& .token.operator,& .token.entity,& .token.url,& .language-css .token.string,& .style .token.string,& .token.variable{color:#f8f8f2;}& .token.atrule,& .token.attr-value,& .token.function,& .token.class-name{color:#e6db74;}& .token.keyword{color:#66d9ef;}& .token.regex,& .token.important{color:#fd971f;}& .token.important,& .token.bold{font-weight:bold;}& .token.italic{font-style:italic;}& .token.entity{cursor:help;}"
} );

require('prismjs/components/prism-go');

require('prismjs/components/prism-lua');

require('prismjs/components/prism-markup-templating');

require('prismjs/components/prism-python');

require('prismjs/components/prism-php');

require('prismjs/components/prism-javascript');

require('prismjs/components/prism-jsx.min');

require('prismjs/components/prism-ruby');

var SyntaxHighlight = /*#__PURE__*/function (_React$Component) {
  _inherits(SyntaxHighlight, _React$Component);

  var _super = _createSuper(SyntaxHighlight);

  function SyntaxHighlight() {
    var _this;

    _classCallCheck(this, SyntaxHighlight);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.ref = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(SyntaxHighlight, [{
    key: "highlight",
    value: function highlight() {
      if (this.ref.current && this.props.language) {
        Prism.highlightElement(this.ref.current);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          text = _this$props.text,
          language = _this$props.language;
      return /*#__PURE__*/React.createElement("code", {
        ref: this.ref,
        className: cx(textStyles.code, theme, _defineProperty({}, "language-".concat(language || ''), language), className)
      }, text);
    }
  }]);

  return SyntaxHighlight;
}(React.Component);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$3 = freeGlobal || freeSelf || Function('return this')();

var _root = root$3;

var root$2 = _root;

/** Built-in value references. */
var Symbol$3 = root$2.Symbol;

var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$1 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$2;

var getNative$1 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$1(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var Map$2 = getNative(root, 'Map');

var _Map = Map$2;

var Hash = _Hash,
    ListCache = _ListCache,
    Map$1 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var _excluded$c = ["children", "className", "largePadding", "popoverClassName", "tooltipContent"];
var CORNER_HEIGHT = 8;
var styles$L = {
  tooltip: function tooltip(_ref) {
    var cornerPositionX = _ref.cornerPositionX;
    return /*#__PURE__*/css("position:absolute;z-index:", zIndex.tooltip, ";max-width:400px;padding:5px 8px;color:#ffffff;background:", rgba(colors.dark, 0.8), ";border-radius:4px;&::after{content:'';position:absolute;left:calc(", cornerPositionX, "px - 8px);bottom:-", CORNER_HEIGHT, "px;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-top:solid ", CORNER_HEIGHT, "px ", rgba(colors.dark, 0.8), ";}&::before{position:absolute;left:calc(", cornerPositionX, "px - 8px);top:-", CORNER_HEIGHT, "px;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-bottom:solid ", CORNER_HEIGHT, "px ", rgba(colors.dark, 0.8), ";}" + ("" ), "" );
  },
  largePadding: /*#__PURE__*/css({
    name: "10rtstj",
    styles: "padding:16px"
  } ),
  cornerUp: /*#__PURE__*/css({
    name: "1csadcf",
    styles: "&::after{content:none;}&::before{content:'';}"
  } ),
  wrapper: /*#__PURE__*/css({
    name: "e0dnmk",
    styles: "cursor:pointer"
  } )
};
var withTooltip = function withTooltip(Component) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        cornerPositionX: 0,
        visible: false,
        top: 0,
        left: 0,
        topPlacement: true
      };
      _this.wrapperRef = /*#__PURE__*/React.createRef();
      _this.tooltipRef = /*#__PURE__*/React.createRef();

      _this.handleMouseEnter = function (evt) {
        var onMouseEnter = _this.props.onMouseEnter;

        _this.showTooltip();

        if (onMouseEnter) onMouseEnter(evt);
      };

      _this.handleMouseLeave = function (evt) {
        var onMouseLeave = _this.props.onMouseLeave;

        _this.hideTooltip();

        if (onMouseLeave) onMouseLeave(evt);
      };

      _this.handleScroll = function (evt) {
        var onScroll = _this.props.onScroll;

        _this.hideTooltip();

        if (onScroll) onScroll(evt);
      };

      _this.renderTooltipPortal = function () {
        if (_this.state.visible && _this.props.tooltipContent) {
          var root = document.body;

          if (root) {
            return /*#__PURE__*/ReactDOM.createPortal(_this.renderTooltip(), root);
          }
        }

        return null;
      };

      _this.showTooltip = function () {
        var visible = _this.state.visible;

        if (!visible) {
          _this.setState({
            visible: true
          });

          window.addEventListener('scroll', _this.hideTooltip, true);
        }
      };

      _this.hideTooltip = function () {
        _this.setState({
          visible: false,
          top: 0,
          left: 0
        });

        window.removeEventListener('scroll', _this.hideTooltip, true);
      };

      return _this;
    }

    _createClass(_class, [{
      key: "getWrapperElement",
      value: function getWrapperElement() {
        var wrapperRef = this.wrapperRef;
        var componentRef = wrapperRef.current && wrapperRef.current.elementRef;
        var domNodeRef = wrapperRef;
        return componentRef ? componentRef.current : domNodeRef.current;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var visible = this.state.visible;
        var tooltipRef = this.tooltipRef;
        var tooltipElement = tooltipRef.current;
        var wrapperElement = this.getWrapperElement();

        if ((visible && !prevState.visible || prevProps !== this.props) && tooltipElement && wrapperElement) {
          var bodyWidth = document.body ? document.body.clientWidth : 0;
          var wrapperRect = wrapperElement.getBoundingClientRect();
          var wrapperCenterX = window.scrollX + wrapperRect.left + wrapperElement.offsetWidth / 2;
          var topPlacement = wrapperRect.top - (tooltipElement.offsetHeight + CORNER_HEIGHT) >= 0;
          var tooltipShiftLeft = Math.min(wrapperCenterX - tooltipElement.offsetWidth / 2, 0);
          var left = Math.max(wrapperCenterX - tooltipElement.offsetWidth / 2, 0);
          var tooltipOffsetRight = bodyWidth - left - tooltipElement.offsetWidth;

          if (tooltipOffsetRight < 0) {
            left = left + tooltipOffsetRight;
            tooltipShiftLeft = -tooltipOffsetRight;
          }

          var cornerPositionX = tooltipElement.offsetWidth / 2 + tooltipShiftLeft;
          this.setState({
            cornerPositionX: cornerPositionX,
            top: topPlacement ? window.scrollY + wrapperRect.top - tooltipElement.offsetHeight - CORNER_HEIGHT : window.scrollY + wrapperRect.top + wrapperElement.offsetHeight + CORNER_HEIGHT,
            left: left,
            topPlacement: topPlacement
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('scroll', this.hideTooltip, true);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className;
            _this$props.largePadding;
            _this$props.popoverClassName;
            _this$props.tooltipContent;
            var props = _objectWithoutProperties(_this$props, _excluded$c);

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Component, Object.assign({}, props, {
          className: cx(styles$L.wrapper, className),
          onBlur: this.handleMouseLeave,
          onFocus: this.handleMouseEnter,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onScroll: this.handleScroll,
          ref: this.wrapperRef
        }), children), this.renderTooltipPortal());
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip() {
        var _cx;

        var _this$props2 = this.props,
            largePadding = _this$props2.largePadding,
            tooltipContent = _this$props2.tooltipContent,
            popoverClassName = _this$props2.popoverClassName;
        var _this$state = this.state,
            cornerPositionX = _this$state.cornerPositionX,
            left = _this$state.left,
            top = _this$state.top,
            topPlacement = _this$state.topPlacement;
        return /*#__PURE__*/React.createElement("div", {
          className: cx(textStyles.p, styles$L.tooltip({
            cornerPositionX: cornerPositionX
          }), (_cx = {}, _defineProperty(_cx, styles$L.cornerUp, !topPlacement), _defineProperty(_cx, styles$L.largePadding, largePadding), _cx), popoverClassName),
          style: {
            left: left,
            top: top
          },
          ref: this.tooltipRef
        }, tooltipContent);
      }
    }]);

    return _class;
  }(React.Component), _class.defaultProps = {
    placement: 'top'
  }, _temp;
};
var withTooltipMemoized = memoize_1(function (tag) {
  return withTooltip(tag);
});
var Tooltip = function Tooltip(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      content = _ref2.content,
      largePadding = _ref2.largePadding,
      tag = _ref2.tag,
      popoverClassName = _ref2.popoverClassName;
  var Component = withTooltipMemoized(tag || 'div');
  return /*#__PURE__*/React.createElement(Component, {
    className: cx(styles$L.wrapper, className),
    largePadding: largePadding,
    tooltipContent: content,
    popoverClassName: popoverClassName
  }, children);
};

var _excluded$b = ["content", "tooltipContent", "tooltipContentCopied"],
    _excluded2$2 = ["icon"];
var copyToClipboard = function copyToClipboard(str) {
  if (!document.body) {
    return;
  } // for Flow: prevent the refinement from invalidating


  var body = document.body;
  var range = new Range();
  var currentSelection = window.getSelection();
  var el = document.createElement('pre');
  el.innerText = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  body.appendChild(el);
  range.selectNodeContents(el);
  currentSelection.removeAllRanges();
  currentSelection.addRange(range);
  document.execCommand('copy');
  currentSelection.removeAllRanges();
  body.removeChild(el);
};
var withCopyToClipboard = function withCopyToClipboard(Component) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(_class, _React$PureComponent);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.ComponentWithTooltip = withTooltip(Component);
      _this.state = {
        clicked: false
      };
      _this.tooltipIntervalId = null;

      _this.handleClick = function () {
        copyToClipboard(_this.props.content);

        _this.setState({
          clicked: true
        });

        if (_this.tooltipIntervalId) clearInterval(_this.tooltipIntervalId);
        _this.tooltipIntervalId = setInterval(_this.resetClickedState, 3000);
      };

      _this.resetClickedState = function () {
        if (_this.tooltipIntervalId) clearInterval(_this.tooltipIntervalId);

        _this.setState({
          clicked: false
        });
      };

      return _this;
    }

    _createClass(_class, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.tooltipIntervalId) clearInterval(this.tooltipIntervalId);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props;
            _this$props.content;
            var tooltipContent = _this$props.tooltipContent,
            tooltipContentCopied = _this$props.tooltipContentCopied,
            restProps = _objectWithoutProperties(_this$props, _excluded$b);

        var clicked = this.state.clicked;
        var ComponentWithTooltip = this.ComponentWithTooltip;
        return /*#__PURE__*/React.createElement(ComponentWithTooltip, Object.assign({}, restProps, {
          tooltipContent: clicked ? tooltipContentCopied : tooltipContent,
          onClick: this.handleClick,
          onMouseLeave: this.resetClickedState
        }));
      }
    }]);

    return _class;
  }(React.PureComponent), _class.defaultProps = {
    tooltipContent: 'Copy to clipboard',
    tooltipContentCopied: 'Copied'
  }, _temp;
};
var CopyButton = withCopyToClipboard(Button);
var CopyToClipboard = function CopyToClipboard(_ref) {
  var icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, _excluded2$2);

  return /*#__PURE__*/React.createElement(CopyButton, Object.assign({}, rest, {
    icon: icon || IconCopy
  }));
};

var _excluded$a = ["className"];
var styles$K = {
  block: /*#__PURE__*/css("max-width:100%;padding:20px;border-radius:10px;background-color:", colors.dark, ";color:white;" + ("" ), "" ),
  inner: /*#__PURE__*/css({
    name: "ol9sdx",
    styles: "overflow:hidden;overflow-x:auto"
  } ),
  withBtn: /*#__PURE__*/css({
    name: "175ebj",
    styles: "position:relative;padding-right:20px"
  } ),
  copyBtn: /*#__PURE__*/css("position:absolute;top:16px;right:16px;background-color:", colors.dark, ";" + ("" ), "" ),
  copyIcon: /*#__PURE__*/css({
    name: "1b3qpiw",
    styles: "fill:white"
  } )
};

var Icon = function Icon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$a);

  return /*#__PURE__*/React.createElement(IconCopy, Object.assign({
    className: cx(className, styles$K.copyIcon)
  }, props));
};

var CodeBlockWrap = function CodeBlockWrap(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      textToCopy = _ref2.textToCopy;
  return /*#__PURE__*/React.createElement("pre", {
    className: cx(styles$K.block, _defineProperty({}, styles$K.withBtn, !!textToCopy), className)
  }, !!textToCopy && /*#__PURE__*/React.createElement(CopyToClipboard, {
    className: styles$K.copyBtn,
    icon: Icon,
    intent: "plain",
    content: textToCopy,
    size: "s"
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$K.inner
  }, children));
};

var CodeBlock = function CodeBlock(_ref) {
  var className = _ref.className,
      _ref$copyBtn = _ref.copyBtn,
      copyBtn = _ref$copyBtn === void 0 ? true : _ref$copyBtn,
      text = _ref.text,
      language = _ref.language;
  return /*#__PURE__*/React.createElement(CodeBlockWrap, {
    className: className,
    textToCopy: copyBtn ? text : null
  }, /*#__PURE__*/React.createElement(SyntaxHighlight, {
    text: text,
    language: language
  }));
};

var styles$J = {
  closeIcon: /*#__PURE__*/css("fill:", colors.dark40, ";transition-timing-function:ease-in-out;transition-duration:0.12s;transition-property:fill;cursor:pointer;&:hover{fill:", colors.dark25, ";}" + ("" ), "" )
};
var IconHelperClose = function IconHelperClose(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(IconClose, {
    className: cx(styles$J.closeIcon, className),
    onClick: onClick
  });
};

var _excluded$9 = ["sort", "className"];
var indeterminateStyle = /*#__PURE__*/css("fill:", colors.dark10, "!important;" + ("" ), "" );
var IconHelperSortable = function IconHelperSortable(_ref) {
  var sort = _ref.sort,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$9);

  switch (sort) {
    case 'asc':
      return /*#__PURE__*/React.createElement(IconSortableAsc, Object.assign({
        className: className
      }, props));

    case 'desc':
      return /*#__PURE__*/React.createElement(IconSortableDesc, Object.assign({
        className: className
      }, props));

    default:
      return /*#__PURE__*/React.createElement(IconSortableAsc, Object.assign({
        className: cx(indeterminateStyle, className)
      }, props));
  }
};

var styles$I = {
  wrap: /*#__PURE__*/css({
    name: "ug0wwi",
    styles: "width:100%;height:100%;padding-left:30px;padding-right:30px;overflow:hidden"
  } ),
  scrollableWrap: /*#__PURE__*/css({
    name: "zxsb69",
    styles: "position:relative;width:100%;height:100%"
  } ),
  scrollableBody: /*#__PURE__*/css({
    name: "ajfnxm",
    styles: "padding-right:30px;position:absolute;inset:0px;overflow:auto"
  } )
};
var ModalBody = function ModalBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      innerClassName = _ref.innerClassName,
      scrollable = _ref.scrollable;
  return scrollable ? /*#__PURE__*/React.createElement("div", {
    className: cx(styles$I.scrollableWrap, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles$I.scrollableBody, genericStyles.scrollbars, innerClassName)
  }, children)) : /*#__PURE__*/React.createElement("div", {
    className: cx(styles$I.wrap, className)
  }, children);
};

var styles$H = {
  wrap: /*#__PURE__*/css({
    name: "1414iyd",
    styles: "flex-shrink:0;display:flex;padding:0;margin:20px 0 0"
  } ),
  controls: /*#__PURE__*/css({
    name: "180drth",
    styles: "padding-left:16px;margin-left:auto"
  } )
};
var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$H.wrap, className)
  }, children, controls && /*#__PURE__*/React.createElement(ControlsPanel, {
    className: cx(styles$H.controls),
    controls: controls,
    thin: true
  }));
};

var styles$G = {
  modal: /*#__PURE__*/css({
    name: "mibzac",
    styles: "flex-shrink:0;display:flex;flex-direction:column;padding:30px;margin:0 auto auto;overflow:hidden"
  } ),
  fit: /*#__PURE__*/css({
    name: "14hqdj1",
    styles: "flex-shrink:1;height:calc(100vh - 80px)"
  } ),
  title: /*#__PURE__*/css({
    name: "y91b7g",
    styles: "flex-shrink:0;padding-right:24px;padding-bottom:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  } ),
  closeIcon: /*#__PURE__*/css({
    name: "ny4vt9",
    styles: "position:absolute;top:30px;right:30px"
  } ),
  children: /*#__PURE__*/css({
    name: "1ff36h2",
    styles: "flex-grow:1"
  } ),
  childrenThin: /*#__PURE__*/css({
    name: "127vvv2",
    styles: "padding-left:0;padding-right:0"
  } )
};
var Modal = /*#__PURE__*/function (_BaseModal) {
  _inherits(Modal, _BaseModal);

  var _super = _createSuper(Modal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _super.apply(this, arguments);
  }

  _createClass(Modal, [{
    key: "renderModal",
    value: function renderModal() {
      var _cx;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          footerContent = _this$props.footerContent,
          footerControls = _this$props.footerControls,
          title = _this$props.title,
          onClose = _this$props.onClose,
          onSubmit = _this$props.onSubmit,
          loading = _this$props.loading,
          fit = _this$props.fit,
          thinBorders = _this$props.thinBorders,
          wide = _this$props.wide;
      var Component = onSubmit ? 'form' : 'div';
      return /*#__PURE__*/React.createElement("div", {
        className: styles$N.shim,
        onMouseDown: this.handleOutsideClick
      }, /*#__PURE__*/React.createElement(Component, {
        className: cx(styles$N.baseModal, styles$G.modal, (_cx = {}, _defineProperty(_cx, styles$G.fit, fit), _defineProperty(_cx, styles$N.wide, wide), _cx), className),
        ref: this.modalRef,
        tabIndex: 0,
        onKeyDown: this.handleEscapePress,
        onSubmit: onSubmit
      }, /*#__PURE__*/React.createElement(Text, {
        className: styles$G.title,
        variant: "h2"
      }, title), onClose && /*#__PURE__*/React.createElement(IconHelperClose, {
        className: styles$G.closeIcon,
        onClick: onClose
      }), /*#__PURE__*/React.createElement("div", {
        className: cx(styles$G.children, _defineProperty({}, styles$G.childrenThin, thinBorders))
      }, loading ? 'Loading' : children), (footerContent || footerControls) && /*#__PURE__*/React.createElement(Modal.Footer, {
        controls: footerControls
      }, footerContent), /*#__PURE__*/React.createElement("div", {
        className: styles$N.focusClosureControl,
        onFocus: this.focusFirstInteractiveElement,
        tabIndex: 0
      })));
    }
  }]);

  return Modal;
}(BaseModal);
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

// TODO: default text styles
var ConfirmModal = function ConfirmModal(props) {
  var onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? 'Ok' : _props$confirmText,
      confirmPreloader = props.confirmPreloader;
  return /*#__PURE__*/React.createElement(Modal, Object.assign({}, props, {
    onClose: onCancel,
    footerControls: [/*#__PURE__*/React.createElement(Button, {
      key: 0,
      intent: "base",
      size: "l",
      onClick: onCancel
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      key: 1,
      autoFocus: true,
      intent: "primary",
      size: "l",
      loading: confirmPreloader || false,
      onClick: onConfirm
    }, confirmText)]
  }));
};

var styles$F = {
  indicator: /*#__PURE__*/css("display:inline-block;flex-shrink:0;margin:8px;background-color:", colors.intentBaseBg, ";border-radius:50%;" + ("" ), "" ),
  state: {
    bad: /*#__PURE__*/css("background-color:", colors.intentDanger, ";" + ("" ), "" ),
    good: /*#__PURE__*/css("background-color:", colors.intentSuccess, ";" + ("" ), "" ),
    inactive: /*#__PURE__*/css("background-color:", colors.intentBaseBg, ";" + ("" ), "" ),
    middle: /*#__PURE__*/css("background-color:", colors.intentWarning, ";" + ("" ), "" )
  },
  size: {
    s: /*#__PURE__*/css({
      name: "1v71wc8",
      styles: "width:6px;height:6px"
    } ) // m: css`
    //   width: 13px;
    //   height: 13px;
    // `,
    // l: css`
    //   width: 16px;
    //   height: 16px;
    // `

  }
};
var DotIndicator = function DotIndicator(_ref) {
  var className = _ref.className,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'inactive' : _ref$state;
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles$F.indicator, styles$F.state[state], styles$F.size.s, className)
  });
};

var styles$E = {
  helper: /*#__PURE__*/css("z-index:", zIndex.dragNDrop, ";" + ("" ), "" )
};
var DraggableList = function DraggableList(_ref) {
  var wrapperClassName = _ref.wrapperClassName,
      items = _ref.items,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(DraggableListContainer, {
    helperClass: styles$E.helper,
    className: wrapperClassName,
    onSortEnd: onChange
  }, items);
};
var DraggableListItem = sortableElement(function (_ref2) {
  var children = _ref2.children,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$tag = _ref2.tag,
      Element = _ref2$tag === void 0 ? 'div' : _ref2$tag;
  return /*#__PURE__*/React.createElement(Element, {
    className: className
  }, children);
});
var DraggableListContainer = sortableContainer(function (_ref3) {
  var children = _ref3.children,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      _ref3$tag = _ref3.tag,
      Element = _ref3$tag === void 0 ? 'div' : _ref3$tag;
  return /*#__PURE__*/React.createElement(Element, {
    className: className
  }, children);
});

var styles$D = {
  helper: /*#__PURE__*/css("z-index:", zIndex.dragNDrop, ";width:100%;visible:hidden;" + ("" ), "" ),
  table: /*#__PURE__*/css({
    name: "f6vch3",
    styles: "width:100%;border-spacing:initial;border-collapse:collapse"
  } ),
  head: /*#__PURE__*/css("padding:5px 18px;text-align:left;color ", colors.dark65, ";font-weight:600;" + ("" ), "" ),
  column: /*#__PURE__*/css("padding:13px 18px;color:", colors.dark, ";" + ("" ), "" ),
  row: /*#__PURE__*/css("border-bottom:1px solid ", colors.baseBg, ";" + ("" ), "" ),
  rowDraggable: /*#__PURE__*/css({
    name: "15cju5k",
    styles: "cursor:move"
  } ),
  controlsColumn: /*#__PURE__*/css({
    name: "xhhvmu",
    styles: "padding:0 10px;width:16px"
  } ),
  positionColumn: /*#__PURE__*/css({
    name: "g6f7vm",
    styles: "width:1%;white-space:nowrap"
  } )
};
var metaCheckboxClass = 'meta__checkbox_class';
var DraggableTable = function DraggableTable(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      data = _ref.data,
      onChange = _ref.onChange,
      _ref$defaultColumn = _ref.defaultColumn,
      defaultColumn = _ref$defaultColumn === void 0 ? '' : _ref$defaultColumn,
      withPositionCol = _ref.withPositionCol,
      rowClassName = _ref.rowClassName,
      onSelectRow = _ref.onSelectRow,
      draggableOnlySelected = _ref.draggableOnlySelected;
  var items = draggableOnlySelected ? data.sort(function (a, b) {
    return +b.selected - +a.selected;
  }) : data;
  var onlyOneElSelected = data.filter(function (item) {
    return item.selected;
  }).length === 1;
  return /*#__PURE__*/React.createElement("table", {
    className: cx(styles$D.table, className)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: styles$D.row
  }, /*#__PURE__*/React.createElement("th", {
    className: styles$D.controlsColumn
  }), onSelectRow && /*#__PURE__*/React.createElement("th", {
    className: styles$D.controlsColumn
  }), columns.map(function (column) {
    return /*#__PURE__*/React.createElement(Text, {
      className: styles$D.head,
      tag: "th",
      key: column.accessor
    }, column.header);
  }), withPositionCol && /*#__PURE__*/React.createElement(Text, {
    tag: "th",
    className: cx(styles$D.head, styles$D.positionColumn)
  }, "\u2116"))), /*#__PURE__*/React.createElement(DraggableListContainer, {
    helperClass: styles$D.helper,
    tag: "tbody",
    onSortEnd: onChange,
    shouldCancelStart: function shouldCancelStart(e) {
      return !!e.target.closest(".".concat(metaCheckboxClass));
    }
  }, items.map(function (row, index) {
    var isDraggableRow = (!draggableOnlySelected || row.selected) && !onlyOneElSelected;
    return /*#__PURE__*/React.createElement(DraggableListItem, {
      key: row.id,
      tag: "tr",
      num: index,
      index: index,
      className: cx(styles$D.row, _defineProperty({}, styles$D.rowDraggable, isDraggableRow), rowClassName),
      disabled: draggableOnlySelected && !row.selected
    }, /*#__PURE__*/React.createElement("td", {
      className: styles$D.controlsColumn
    }, isDraggableRow ? /*#__PURE__*/React.createElement(IconBurger, null) : null), onSelectRow && /*#__PURE__*/React.createElement("td", {
      className: styles$D.controlsColumn
    }, /*#__PURE__*/React.createElement(Checkbox, {
      onChange: function onChange() {
        return onSelectRow(!row.selected, row);
      },
      checked: row.selected,
      className: metaCheckboxClass
    })), columns.map(function (column) {
      return /*#__PURE__*/React.createElement(Text, {
        tag: "td",
        key: column.accessor,
        className: styles$D.column
      }, row[column.accessor] ? row[column.accessor] : defaultColumn);
    }), withPositionCol && /*#__PURE__*/React.createElement(Text, {
      tag: "td",
      className: cx(styles$D.column, styles$D.positionColumn)
    }, isDraggableRow || row.selected ? index + 1 : null));
  })));
};

var styles$C = {
  textStyle: /*#__PURE__*/css({
    name: "1089mxj",
    styles: "white-space:pre-wrap"
  } ),
  btnStyle: /*#__PURE__*/css({
    name: "4zleql",
    styles: "display:block"
  } ),
  textOverflowStyle: /*#__PURE__*/css({
    name: "dx81dq",
    styles: "position:relative;cursor:pointer;&::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:30px;background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);pointer-events:none;}"
  } ),
  withBtn: /*#__PURE__*/css({
    name: "bjn8wh",
    styles: "position:relative"
  } ),
  copyBtn: /*#__PURE__*/css({
    name: "170feau",
    styles: "position:absolute;top:0;right:0px"
  } ),
  contentWrapper: /*#__PURE__*/css({
    name: "1qx4gu9",
    styles: "margin-right:30px"
  } )
};

var ExpandableBlockContent = function ExpandableBlockContent(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fullIsShowing = _React$useState2[0],
      setShowFull = _React$useState2[1];

  var splitedContent = props.content.split('\n');
  var countTextLines = splitedContent.length;

  if (countTextLines <= props.visibleLines) {
    return /*#__PURE__*/React.createElement(Text, {
      className: cx(styles$C.textStyle, props.className)
    }, props.content);
  }

  var content = fullIsShowing ? props.content : splitedContent.slice(0, props.visibleLines).join('\n');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    tag: "div",
    onClick: !fullIsShowing ? setShowFull.bind(undefined, true) : noop$1,
    className: cx(_defineProperty({}, styles$C.textOverflowStyle, !fullIsShowing), styles$C.textStyle, props.className)
  }, content), fullIsShowing && /*#__PURE__*/React.createElement(Button, {
    onClick: setShowFull.bind(undefined, false),
    iconRight: IconChevron,
    className: styles$C.btnStyle,
    text: "less",
    intent: "plain"
  }));
};

var ExpandableBlock = function ExpandableBlock(props) {
  if (props.showCopyBtn) {
    return /*#__PURE__*/React.createElement("div", {
      className: cx(styles$C.withBtn)
    }, props.showCopyBtn && /*#__PURE__*/React.createElement(CopyToClipboard, {
      className: styles$C.copyBtn,
      intent: "plain",
      content: props.content,
      size: "s"
    }), /*#__PURE__*/React.createElement(ExpandableBlockContent, Object.assign({}, props, {
      className: cx(styles$C.contentWrapper, props.className)
    })));
  }

  return /*#__PURE__*/React.createElement(ExpandableBlockContent, props);
};

var styles$B = {
  outer: /*#__PURE__*/css({
    name: "v4rtqn",
    styles: "padding:8px 0 0;margin:0;list-style:none"
  } ),
  item: /*#__PURE__*/css("padding:12px 16px;border:solid 1px #e8e8e8;margin-bottom:8px;border-radius:4px;background-color:#ffffff;transition:0.1s ease-in-out;transition-property:border-color,box-shadow;&:last-child{margin-bottom:0;}&:hover{border-color:", colors.intentBaseBg, ";box-shadow:0px 5px 20px rgba(0, 0, 0, 0.09);}" + ("" ), "" )
};
var FlatList = function FlatList(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("ul", {
    className: cx(styles$B.outer, className)
  }, children);
};
var FlatListItem = function FlatListItem(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement("li", {
    className: cx(styles$B.item, className)
  }, children);
};

var styles$A = {
  wrap: /*#__PURE__*/css({
    name: "17bfre1",
    styles: "display:flex;flex-wrap:wrap;align-items:center;margin-left:-16px;margin-right:-16px"
  } ),
  input: /*#__PURE__*/css({
    name: "tafp4c",
    styles: "margin:6px 16px 6px"
  } ),
  column: /*#__PURE__*/css({
    name: "cgia8d",
    styles: "align-self:stretch;margin:0 16px"
  } ),
  columnInput: /*#__PURE__*/css({
    name: "1xas8lw",
    styles: "margin-top:6px;margin-bottom:6px"
  } ),
  columns: [/*#__PURE__*/css({
    name: "48d2gn",
    styles: "flex-basis:100%"
  } ), /*#__PURE__*/css({
    name: "17k51ks",
    styles: "flex-basis:calc(50% - 32px)"
  } ), /*#__PURE__*/css({
    name: "utzpns",
    styles: "flex-basis:calc(33.3% - 32px)"
  } )]
};
var renderers = {
  Horizontal: function Horizontal(_ref) {
    var children = _ref.children,
        columns = _ref.columns,
        itemClassName = _ref.itemClassName;
    return Array.isArray(children) ? children.map(function (child, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: cx(styles$A.input, styles$A.columns[columns - 1], itemClassName)
      }, child);
    }) : /*#__PURE__*/React.createElement("div", {
      className: cx(styles$A.input, styles$A.columns[columns - 1], itemClassName)
    }, children);
  },
  Vertical: function Vertical(_ref2) {
    var children = _ref2.children,
        columns = _ref2.columns,
        itemClassName = _ref2.itemClassName;
    var items = Array.isArray(children) ? children : [children];
    var columnSize = Math.ceil(items.length / columns);
    var groupedItems = R.times(function () {
      return [];
    }, columns);
    items.forEach(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var column = Math.floor(i / columnSize);
      groupedItems[column].push(item);
    });
    return groupedItems.map(function (group, index1) {
      return /*#__PURE__*/React.createElement("div", {
        key: index1,
        className: cx(styles$A.column, styles$A.columns[columns - 1])
      }, group.map(function (child, index2) {
        return /*#__PURE__*/React.createElement("div", {
          key: index2,
          className: cx(styles$A.columnInput, itemClassName)
        }, child);
      }));
    });
  }
};
var InputGroup = function InputGroup(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      _ref3$columns = _ref3.columns,
      columns = _ref3$columns === void 0 ? 1 : _ref3$columns,
      itemClassName = _ref3.itemClassName,
      verticalSort = _ref3.verticalSort;
  var Renderer = verticalSort ? renderers.Vertical : renderers.Horizontal;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$A.wrap, className)
  }, /*#__PURE__*/React.createElement(Renderer, {
    columns: columns,
    itemClassName: itemClassName
  }, children));
};

var commonFormFieldStyles = {
  wrap: /*#__PURE__*/css({
    name: "pr10xp",
    styles: "margin-bottom:10px"
  } ),
  wrapMargin: /*#__PURE__*/css({
    name: "1azpx8r",
    styles: "margin-bottom:20px"
  } ),
  tooltip: /*#__PURE__*/css({
    name: "12o8wmt",
    styles: "display:inline-block;margin-left:8px"
  } ),
  headingPane: /*#__PURE__*/css({
    name: "1fg5of0",
    styles: "display:flex;flex-direction:row;align-items:center;height:22px;margin-bottom:0"
  } ),
  headingPaneMargin: /*#__PURE__*/css({
    name: "pr10xp",
    styles: "margin-bottom:10px"
  } ),
  headingPaneLeft: /*#__PURE__*/css({
    name: "1blnrmq",
    styles: "display:flex;flex-direction:row;align-items:baseline"
  } ),
  subTitle: /*#__PURE__*/css({
    name: "hhyoc3",
    styles: "margin-left:32px"
  } ),
  label: /*#__PURE__*/css({
    name: "4zleql",
    styles: "display:block"
  } ),
  topRightControls: /*#__PURE__*/css({
    name: "1o3nkn",
    styles: "margin-left:auto"
  } )
};

var FormField = function FormField(_ref) {
  var children = _ref.children,
      topRightControls = _ref.topRightControls,
      itemClassName = _ref.itemClassName,
      className = _ref.className,
      subTitle = _ref.subTitle,
      columns = _ref.columns,
      info = _ref.info,
      label = _ref.label,
      largeMargins = _ref.largeMargins,
      verticalSort = _ref.verticalSort;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(commonFormFieldStyles.wrap, _defineProperty({}, commonFormFieldStyles.wrapMargin, largeMargins), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(commonFormFieldStyles.headingPane, _defineProperty({}, commonFormFieldStyles.headingPaneMargin, largeMargins))
  }, /*#__PURE__*/React.createElement("div", {
    className: commonFormFieldStyles.headingPaneLeft
  }, label && /*#__PURE__*/React.createElement(Text, {
    className: commonFormFieldStyles.label,
    variant: "h4",
    tag: "span"
  }, label), !!info && /*#__PURE__*/React.createElement(Tooltip, {
    className: commonFormFieldStyles.tooltip,
    content: info
  }, /*#__PURE__*/React.createElement(IconInfo, null)), !!subTitle && /*#__PURE__*/React.createElement(Text, {
    className: commonFormFieldStyles.subTitle,
    variant: "p",
    tag: "span"
  }, subTitle)), topRightControls && /*#__PURE__*/React.createElement(ControlsPanel, {
    className: commonFormFieldStyles.topRightControls,
    controls: topRightControls
  })), /*#__PURE__*/React.createElement(InputGroup, {
    columns: columns,
    itemClassName: itemClassName,
    verticalSort: verticalSort
  }, children));
};

var styles$z = {
  status: /*#__PURE__*/css({
    name: "1afd6oa",
    styles: "display:flex;align-items:baseline;flex-basis:153px;color:rgba(0, 0, 0, 0.65)"
  } )
};
var HealthStatus = function HealthStatus(_ref) {
  var className = _ref.className,
      defaultMessage = _ref.defaultMessage,
      status = _ref.status,
      message = _ref.message,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Text, {
    className: cx(styles$z.status, className),
    variant: "p",
    tag: "div",
    title: title
  }, /*#__PURE__*/React.createElement(DotIndicator, {
    state: status === 'healthy' ? 'good' : 'bad'
  }), message || defaultMessage || status);
};

var commonInputStyles = {
  outer: /*#__PURE__*/css("display:flex;border:solid 1px ", colors.intentBase, ";box-sizing:border-box;border-radius:4px;background-color:#ffffff;" + ("" ), "" ),
  disabled: /*#__PURE__*/css("color:", colors.intentBase, ";" + ("" ), "" ),
  disabledOuter: /*#__PURE__*/css("background-color:", colors.dark2, ";" + ("" ), "" ),
  focused: /*#__PURE__*/css("border-color:", colors.dark40, ";" + ("" ), "" ),
  error: /*#__PURE__*/css("border-color:", colors.intentDanger, ";" + ("" ), "" ),
  input: /*#__PURE__*/css("display:block;align-self:stretch;width:100%;min-width:0;height:100%;border:0;padding-left:15px;padding-right:15px;box-sizing:border-box;border-radius:3px;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;color:", colors.dark, ";background-color:rgba(255, 255, 255, 0);outline:none;resize:none;&::placeholder{color:", colors.intentBase, ";}" + ("" ), "" )
};
var commonInputSizes = {
  m: /*#__PURE__*/css({
    name: "1bgub6r",
    styles: "padding-top:5px;padding-bottom:5px"
  } ),
  l: /*#__PURE__*/css({
    name: "xqj0xz",
    styles: "padding-top:9px;padding-bottom:9px"
  } )
};

var _excluded$8 = ["autoComplete", "autoFocus", "className", "onClearClick", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "disabled", "error", "name", "onChange", "readOnly", "rightIcon", "title", "type", "value", "placeholder", "size", "leftElement", "rightElement"];
var styles$y = {
  outerWithAddition: /*#__PURE__*/css({
    name: "zjik7",
    styles: "display:flex"
  } ),
  inputWithAddition: /*#__PURE__*/css({
    name: "13ltxep",
    styles: "width:auto;flex-grow:1"
  } ),
  inputWithIcon: /*#__PURE__*/css({
    name: "1uv8eq",
    styles: "padding-left:15px;padding-right:8px"
  } ),
  iconWrap: /*#__PURE__*/css({
    name: "s5xdrg",
    styles: "display:flex;align-items:center"
  } ),
  clearIcon: /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" ),
  withLeftElement: /*#__PURE__*/css({
    name: "1s058tb",
    styles: "&>:first-child{align-self:stretch;flex-shrink:0;margin:-1px;border-top-right-radius:0;border-bottom-right-radius:0;}"
  } ),
  withRightElement: /*#__PURE__*/css({
    name: "147qgzp",
    styles: "&>:last-child{align-self:stretch;flex-shrink:0;margin:-1px;border-top-left-radius:0;border-bottom-left-radius:0;}"
  } )
};
var wrapSizes = {
  m: /*#__PURE__*/css({
    name: "s0vnfv",
    styles: "height:32px"
  } ),
  l: /*#__PURE__*/css({
    name: "1k18kha",
    styles: "height:40px"
  } )
};
var iconWrapSizes = {
  m: /*#__PURE__*/css({
    name: "f4q8rq",
    styles: "margin-right:7px"
  } ),
  l: /*#__PURE__*/css({
    name: "1jwryq8",
    styles: "margin-right:15px"
  } )
};

var noop = function noop() {
  return void 0;
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.elementRef = /*#__PURE__*/createRef();
    _this.state = {
      focused: false
    };

    _this.focus = function () {
      if (_this.elementRef && _this.elementRef.current) {
        _this.elementRef.current.focus();
      }
    };

    _this.handleInputFocus = function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    };

    _this.handleInputBlur = function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.handleClearClick = function () {
      _this.focus();

      _this.props.onClearClick && _this.props.onClearClick();
    };

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _cx, _cx2;

      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          autoFocus = _this$props.autoFocus,
          className = _this$props.className,
          onClearClick = _this$props.onClearClick,
          onKeyDown = _this$props.onKeyDown,
          onKeyDownCapture = _this$props.onKeyDownCapture,
          onKeyPress = _this$props.onKeyPress,
          onKeyPressCapture = _this$props.onKeyPressCapture,
          onKeyUp = _this$props.onKeyUp,
          onKeyUpCapture = _this$props.onKeyUpCapture,
          disabled = _this$props.disabled,
          error = _this$props.error,
          name = _this$props.name,
          onChange = _this$props.onChange,
          readOnly = _this$props.readOnly,
          rightIcon = _this$props.rightIcon,
          title = _this$props.title,
          type = _this$props.type,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          size = _this$props.size,
          leftElement = _this$props.leftElement,
          rightElement = _this$props.rightElement,
          props = _objectWithoutProperties(_this$props, _excluded$8);

      var focused = this.state.focused;
      var hasAddition = !!leftElement || !!rightElement;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(commonInputStyles.outer, wrapSizes[size || 'l'], (_cx = {}, _defineProperty(_cx, commonInputStyles.disabledOuter, disabled), _defineProperty(_cx, commonInputStyles.focused, focused), _defineProperty(_cx, commonInputStyles.error, error), _defineProperty(_cx, styles$y.outerWithAddition, hasAddition), _defineProperty(_cx, styles$y.withLeftElement, !!leftElement), _defineProperty(_cx, styles$y.withRightElement, !!rightElement), _cx), className),
        title: title
      }, leftElement, /*#__PURE__*/React.createElement("input", Object.assign({}, props, {
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        className: cx(commonInputStyles.input, commonInputSizes[size || 'l'], (_cx2 = {}, _defineProperty(_cx2, styles$y.inputWithAddition, hasAddition), _defineProperty(_cx2, styles$y.inputWithIcon, rightIcon || onClearClick), _defineProperty(_cx2, commonInputStyles.disabled, disabled), _cx2)),
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyDownCapture: onKeyDownCapture,
        onKeyPress: onKeyPress,
        onKeyPressCapture: onKeyPressCapture,
        onKeyUp: onKeyUp,
        onKeyUpCapture: onKeyUpCapture,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        type: type,
        value: value,
        placeholder: placeholder,
        readOnly: readOnly,
        ref: this.elementRef
      })), (onClearClick || rightIcon) && /*#__PURE__*/React.createElement("div", {
        className: cx(styles$y.iconWrap, iconWrapSizes[size || 'l'])
      }, onClearClick && (!rightIcon || value) ? /*#__PURE__*/React.createElement(IconCancel, {
        className: styles$y.clearIcon,
        onClick: !(disabled || readOnly) && this.handleClearClick || noop
      }) : rightIcon), rightElement);
    }
  }]);

  return Input;
}(React.Component);

var styles$x = {
  innerButton: /*#__PURE__*/css({
    name: "1hcx8jb",
    styles: "padding:0"
  } ),
  icon: /*#__PURE__*/css({
    name: "4zleql",
    styles: "display:block"
  } )
};
var InputPassword = /*#__PURE__*/function (_React$Component) {
  _inherits(InputPassword, _React$Component);

  var _super = _createSuper(InputPassword);

  function InputPassword() {
    var _this;

    _classCallCheck(this, InputPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hidden: true
    };

    _this.toggleState = function () {
      return _this.setState(function (_ref) {
        var hidden = _ref.hidden;
        return {
          hidden: !hidden
        };
      });
    };

    return _this;
  }

  _createClass(InputPassword, [{
    key: "render",
    value: function render() {
      var hidden = this.state.hidden;
      var Icon = hidden ? IconEyeOpened : IconEyeClosed;
      return /*#__PURE__*/React.createElement(Input, Object.assign({}, this.props, {
        type: hidden ? 'password' : 'text',
        rightIcon: /*#__PURE__*/React.createElement(Button, {
          className: styles$x.innerButton,
          size: "xs",
          intent: "plain",
          onClick: this.toggleState
        }, /*#__PURE__*/React.createElement(Icon, {
          className: styles$x.icon
        }))
      }));
    }
  }]);

  return InputPassword;
}(React.Component);

var alphabet = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nanoid = function nanoid() {
  var res = '';

  for (var i = 0; i < 16; i++) {
    res += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return res;
};

var _excluded$7 = ["inputComponent", "topRightControls", "className", "id", "inputClassName", "subTitle", "info", "label", "largeMargins", "error", "message", "preserveMessageSpace"];
var styles$w = {
  input: /*#__PURE__*/css({
    name: "j9a02z",
    styles: "margin-top:6px"
  } ),
  message: /*#__PURE__*/css({
    name: "1tte5bi",
    styles: "display:block;min-height:20px"
  } ),
  errorMessage: /*#__PURE__*/css("color:", colors.intentDanger, ";" + ("" ), "" )
};
var LabeledInput = /*#__PURE__*/function (_React$Component) {
  _inherits(LabeledInput, _React$Component);

  var _super = _createSuper(LabeledInput);

  function LabeledInput() {
    var _this;

    _classCallCheck(this, LabeledInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.internalId = nanoid();
    return _this;
  }

  _createClass(LabeledInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$inputComp = _this$props.inputComponent,
          InputComponent = _this$props$inputComp === void 0 ? Input : _this$props$inputComp,
          topRightControls = _this$props.topRightControls,
          className = _this$props.className,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.internalId : _this$props$id,
          inputClassName = _this$props.inputClassName,
          subTitle = _this$props.subTitle,
          info = _this$props.info,
          label = _this$props.label,
          largeMargins = _this$props.largeMargins,
          error = _this$props.error,
          message = _this$props.message,
          preserveMessageSpace = _this$props.preserveMessageSpace,
          restProps = _objectWithoutProperties(_this$props, _excluded$7);

      return /*#__PURE__*/React.createElement("div", {
        className: cx(commonFormFieldStyles.wrap, _defineProperty({}, commonFormFieldStyles.wrapMargin, largeMargins), className)
      }, /*#__PURE__*/React.createElement("div", {
        className: cx(commonFormFieldStyles.headingPane, _defineProperty({}, commonFormFieldStyles.headingPaneMargin, largeMargins))
      }, /*#__PURE__*/React.createElement(Text, {
        className: commonFormFieldStyles.label,
        variant: "h4",
        tag: "label",
        htmlFor: id
      }, label), !!info && /*#__PURE__*/React.createElement(Tooltip, {
        className: commonFormFieldStyles.tooltip,
        content: info
      }, /*#__PURE__*/React.createElement(IconInfo, null)), !!subTitle && /*#__PURE__*/React.createElement(Text, {
        className: commonFormFieldStyles.subTitle,
        variant: "p",
        tag: "span"
      }, subTitle), topRightControls && /*#__PURE__*/React.createElement(ControlsPanel, {
        className: commonFormFieldStyles.topRightControls,
        controls: topRightControls
      })), /*#__PURE__*/React.createElement(InputComponent, Object.assign({}, restProps, {
        error: error,
        id: id,
        className: cx(styles$w.input, inputClassName)
      })), (preserveMessageSpace || message) && /*#__PURE__*/React.createElement(Text, {
        variant: "p",
        className: cx(styles$w.message, _defineProperty({}, styles$w.errorMessage, error))
      }, message));
    }
  }]);

  return LabeledInput;
}(React.Component);
LabeledInput.defaultProps = {
  preserveMessageSpace: true
};

var img$8 = {id: "zTDS-DFrm4u5qwb1X_Dv5", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var img$7 = {id: "eUw6baAiNUhUw0_skSE_H", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#010101\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var styles$v = {
  wrap: /*#__PURE__*/css({
    name: "3u7751",
    styles: "position:relative;width:14px;height:17px;overflow:hidden;transition:height 0.3s ease-in-out;&:hover{height:59px;}"
  } ),
  flag: /*#__PURE__*/css({
    name: "m4y3yb",
    styles: "position:absolute;left:0;bottom:0"
  } )
};
var intentions = {
  good: /*#__PURE__*/css("fill:", colors.intentSuccessBorder, ";" + ("" ), "" ),
  bad: /*#__PURE__*/css("fill:", colors.intentDanger, ";" + ("" ), "" ),
  warning: /*#__PURE__*/css("fill:", colors.intentWarning, ";" + ("" ), "" )
};
var LeaderFlag = function LeaderFlag(_ref) {
  var className = _ref.className,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'bad' : _ref$state,
      title = _ref.title;
  var glyph = state === 'bad' ? img$8 : img$7;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$v.wrap, className),
    title: title
  }, /*#__PURE__*/React.createElement(SVGImage, {
    glyph: glyph,
    className: cx(styles$v.flag, intentions[state])
  }));
};

var img$6 = {id: "PepIxzV7KKfKMQT6xGMcZ", content: "<svg width=\"42\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 42 8", viewBox: "0 0 42 8" };

var LeaderFlagSmall = function LeaderFlagSmall(props) {
  return /*#__PURE__*/React.createElement(SVGImage, Object.assign({}, props, {
    glyph: img$6
  }));
};

var _excluded$6 = ["children"],
    _excluded2$1 = ["children"],
    _excluded3$1 = ["children"],
    _excluded4$1 = ["children"],
    _excluded5 = ["children"],
    _excluded6 = ["children"],
    _excluded7 = ["children"],
    _excluded8 = ["children"],
    _excluded9 = ["children"],
    _excluded10 = ["children", "className"],
    _excluded11 = ["children"],
    _excluded12 = ["children"];
var styles$u = {
  wrap: /*#__PURE__*/css("display:block;& code{padding:3px;border-radius:3px;background-color:", colors.dark, ";color:white;font-family:", monoFontFamily, ";}" + ("" ), "" ),
  pre: /*#__PURE__*/css({
    name: "z9gs9q",
    styles: "margin-bottom:16px;&>code{padding:0;border-radius:0;background-color:transparent;}"
  } ),
  blockquote: /*#__PURE__*/css("padding:10px 40px 1px;border-radius:4px;margin:10px 0 20px;background-color:", colors.baseBg, ";" + ("" ), "" ),
  h: /*#__PURE__*/css({
    name: "11v4pv5",
    styles: "margin:20px 0 10px;color:#000"
  } ),
  p: /*#__PURE__*/css({
    name: "pcntf5",
    styles: "margin:10px 0 20px"
  } ),
  ul: /*#__PURE__*/css({
    name: "1qj6hbb",
    styles: "padding-left:24px;margin:10px 0 20px"
  } ),
  li: /*#__PURE__*/css({
    name: "45bbqm",
    styles: "margin:10px 0"
  } ),
  img: /*#__PURE__*/css({
    name: "qhxz92",
    styles: "max-width:100%"
  } )
};
var components = {
  h1: function h1(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, _excluded$6);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h1"
    }), children);
  },
  h2: function h2(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, _excluded2$1);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h2"
    }), children);
  },
  h3: function h3(_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, _excluded3$1);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h3"
    }), children);
  },
  h4: function h4(_ref4) {
    var children = _ref4.children,
        props = _objectWithoutProperties(_ref4, _excluded4$1);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h4"
    }), children);
  },
  h5: function h5(_ref5) {
    var children = _ref5.children,
        props = _objectWithoutProperties(_ref5, _excluded5);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h5"
    }), children);
  },
  h6: function h6(_ref6) {
    var children = _ref6.children,
        props = _objectWithoutProperties(_ref6, _excluded6);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.h,
      variant: "h6"
    }), children);
  },
  p: function p(_ref7) {
    var children = _ref7.children,
        props = _objectWithoutProperties(_ref7, _excluded7);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.p,
      variant: "basic",
      tag: "p"
    }), children);
  },
  a: function a(_ref8) {
    var children = _ref8.children,
        props = _objectWithoutProperties(_ref8, _excluded8);

    return /*#__PURE__*/React.createElement(Link, Object.assign({}, props, {
      target: "_blank"
    }), children);
  },
  blockquote: function blockquote(_ref9) {
    var children = _ref9.children,
        props = _objectWithoutProperties(_ref9, _excluded9);

    return /*#__PURE__*/React.createElement("blockquote", Object.assign({}, props, {
      className: styles$u.blockquote
    }), children);
  },
  code: function code(_ref10) {
    var children = _ref10.children,
        className = _ref10.className,
        props = _objectWithoutProperties(_ref10, _excluded10);

    return className && className.indexOf('lang-') === 0 ? /*#__PURE__*/React.createElement(SyntaxHighlight, {
      language: className.substr(5),
      text: children
    }) : /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      variant: "code"
    }), children);
  },
  pre: function pre(_ref11) {
    var children = _ref11.children;
    var _children$props = children.props;
    _children$props = _children$props === void 0 ? {} : _children$props;
    var childrenText = _children$props.children;
    return /*#__PURE__*/React.createElement(CodeBlockWrap, {
      className: styles$u.pre,
      textToCopy: childrenText
    }, children);
  },
  ul: function ul(_ref12) {
    var children = _ref12.children,
        props = _objectWithoutProperties(_ref12, _excluded11);

    return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
      className: styles$u.ul,
      tag: "ul"
    }), children);
  },
  li: function li(_ref13) {
    var children = _ref13.children,
        props = _objectWithoutProperties(_ref13, _excluded12);

    return /*#__PURE__*/React.createElement("li", Object.assign({}, props, {
      className: styles$u.li
    }), children);
  },
  // eslint-disable-next-line jsx-a11y/alt-text
  img: function img(props) {
    return /*#__PURE__*/React.createElement("img", Object.assign({}, props, {
      className: styles$u.img
    }));
  }
};
var Markdown = function Markdown(_ref14) {
  var className = _ref14.className,
      overrides = _ref14.overrides,
      text = _ref14.text;
  var options = {
    overrides: Object.assign({}, components, overrides),
    forceBlock: true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$u.wrap, className)
  }, /*#__PURE__*/React.createElement(MD, {
    options: options
  }, text));
};

var styles$t = {
  wrap: /*#__PURE__*/css({
    name: "4lv9a",
    styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px"
  } ),
  icon: /*#__PURE__*/css({
    name: "oykj6y",
    styles: "width:200px;height:74px;fill:rgba(0, 0, 0, 0.25)"
  } ),
  image: /*#__PURE__*/css({
    name: "1pszbew",
    styles: "width:200px;height:74px"
  } ),
  iconMargin: /*#__PURE__*/css({
    name: "pr10xp",
    styles: "margin-bottom:10px"
  } ),
  description: /*#__PURE__*/css("margin-bottom:16px;color:", colors.dark65, ";text-align:center;" + ("" ), "" ),
  title: /*#__PURE__*/css({
    name: "1m0lcta",
    styles: "margin-bottom:10px;font-weight:600"
  } )
};
var NonIdealState = function NonIdealState(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Icon = _ref.icon,
      image = _ref.image,
      imageClassName = _ref.imageClassName,
      title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$t.wrap, className)
  }, image ? /*#__PURE__*/React.createElement(SVGImage, {
    glyph: image,
    className: cx(styles$t.icon, _defineProperty({}, styles$t.iconMargin, title || description), imageClassName)
  }) : null, Icon && !image ? /*#__PURE__*/React.createElement(Icon, {
    className: cx(styles$t.icon, _defineProperty({}, styles$t.iconMargin, title || description), imageClassName)
  }) : null, title && /*#__PURE__*/React.createElement(Text, {
    variant: "h2",
    className: styles$t.title
  }, title), description && /*#__PURE__*/React.createElement(Text, {
    className: styles$t.description
  }, description), children);
};
var NonIdealStateAction = function NonIdealStateAction(_ref2) {
  var actionText = _ref2.actionText,
      className = _ref2.className,
      description = _ref2.description,
      icon = _ref2.icon,
      image = _ref2.image,
      onActionClick = _ref2.onActionClick,
      title = _ref2.title;
  return /*#__PURE__*/React.createElement(NonIdealState, {
    className: className,
    description: description,
    icon: icon,
    image: image,
    title: title
  }, /*#__PURE__*/React.createElement(Button, {
    autoFocus: true,
    text: actionText,
    onClick: onActionClick
  }));
};

var styles$s = {
  splash: /*#__PURE__*/css("position:relative;display:flex;align-items:center;justify-content:center;padding:16px;background:", colors.intentDangerBg, ";box-shadow:0px 1px 4px rgba(0, 0, 0, 0.11);color:", colors.intentWarningAccent, ";" + ("" ), "" ),
  children: /*#__PURE__*/css("color:", colors.intentWarningAccent, ";" + ("" ), "" ),
  close: /*#__PURE__*/css({
    name: "1wnfr4d",
    styles: "position:absolute;top:calc(50% - 8px);right:16px"
  } ),
  closePadding: /*#__PURE__*/css({
    name: "1epax5e",
    styles: "padding-right:48px"
  } ),
  controls: /*#__PURE__*/css({
    name: "ozd7xs",
    styles: "flex-shrink:0"
  } ),
  controlsMargin: /*#__PURE__*/css({
    name: "tunf42",
    styles: "margin-left:24px"
  } )
};
var NotificationSplash = function NotificationSplash(_ref) {
  var className = _ref.className,
      children = _ref.children,
      controls = _ref.controls,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$s.splash, _defineProperty({}, styles$s.closePadding, onClose), className)
  }, /*#__PURE__*/React.createElement(Text, {
    className: styles$s.children,
    tag: "span"
  }, children), /*#__PURE__*/React.createElement(ControlsPanel, {
    className: cx(styles$s.controls, _defineProperty({}, styles$s.controlsMargin, children && controls)),
    controls: controls
  }), onClose && /*#__PURE__*/React.createElement(IconHelperClose, {
    className: styles$s.close,
    onClick: onClose
  }));
};

var styles$r = {
  splash: /*#__PURE__*/css("position:fixed;top:0;left:0;right:0;z-index:", zIndex.fixedSplash, ";" + ("" ), "" )
};
var NotificationSplashFixed = /*#__PURE__*/function (_React$Component) {
  _inherits(NotificationSplashFixed, _React$Component);

  var _super = _createSuper(NotificationSplashFixed);

  function NotificationSplashFixed() {
    var _this;

    _classCallCheck(this, NotificationSplashFixed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.isVisible = function () {
      return _this.props.visible !== false;
    };

    return _this;
  }

  _createClass(NotificationSplashFixed, [{
    key: "renderSplash",
    value: function renderSplash() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          controls = _this$props.controls,
          onClose = _this$props.onClose;
      return /*#__PURE__*/React.createElement(NotificationSplash, {
        className: cx(styles$r.splash, className),
        controls: controls,
        onClose: onClose
      }, children);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.isVisible()) return null;
      var root = document.body;

      if (root) {
        return /*#__PURE__*/ReactDOM.createPortal(this.renderSplash(), root);
      }

      return null;
    }
  }]);

  return NotificationSplashFixed;
}(React.Component);

var styles$q = {
  container: /*#__PURE__*/css({
    name: "iqq7hm",
    styles: "position:relative;padding:16px;border:1px solid #e8e8e8;border-radius:4px;margin:0 -16px 48px;background:#ffffff;box-shadow:0px 1px 10px rgba(0, 0, 0, 0.06)"
  } ),
  cardHead: /*#__PURE__*/css("padding-bottom:16px;border-bottom:1px solid ", colors.intentBaseBg, ";margin-bottom:16px;" + ("" ), "" ),
  closeIcon: /*#__PURE__*/css({
    name: "1q865sg",
    styles: "position:absolute;top:16px;right:16px"
  } )
};
var PageCard = function PageCard(_ref) {
  var className = _ref.className,
      children = _ref.children;
      _ref.showCorner;
      var onClose = _ref.onClose,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$q.container, // { [styles.corner]: showCorner },
    className)
  }, /*#__PURE__*/React.createElement(Text, {
    className: styles$q.cardHead,
    variant: "h2"
  }, title), onClose && /*#__PURE__*/React.createElement(IconHelperClose, {
    className: styles$q.closeIcon,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", null, children));
};

var styles$p = {
  page: /*#__PURE__*/css("display:flex;flex-direction:column;max-width:", pageLayoutMaxWidth, "px;min-width:", pageLayoutMinWidth, "px;height:calc(100% - ", appLayoutTopPanelHeight, "px - 60px);padding:0 30px;margin:30px auto 30px;box-sizing:border-box;" + ("" ), "" ),
  pageWithAbovePanel: /*#__PURE__*/css({
    name: "iqoq9n",
    styles: "margin-top:20px"
  } ),
  wide: /*#__PURE__*/css({
    name: "wjlmq0",
    styles: "max-width:none"
  } ),
  aboveHeadingPanel: /*#__PURE__*/css({
    name: "1l1yhlp",
    styles: "flex-shrink:0;margin:0 0 20px"
  } ),
  headingPanel: /*#__PURE__*/css({
    name: "1stuufb",
    styles: "display:flex;justify-content:flex-end;align-items:baseline;flex-shrink:0;margin-bottom:15px"
  } ),
  leftControls: /*#__PURE__*/css({
    name: "1hb9wup",
    styles: "align-self:center;margin-left:40px"
  } ),
  rightControls: /*#__PURE__*/css({
    name: "qbt5ty",
    styles: "align-self:center"
  } ),
  divider: /*#__PURE__*/css({
    name: "1tx1l5v",
    styles: "margin-right:auto"
  } )
};
var PageLayout = function PageLayout(_ref, ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      heading = _ref.heading,
      headingContent = _ref.headingContent,
      AboveComponent = _ref.aboveComponent,
      topLeftControls = _ref.topLeftControls,
      topRightControls = _ref.topRightControls,
      wide = _ref.wide;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$p.page, (_cx = {}, _defineProperty(_cx, styles$p.wide, wide), _defineProperty(_cx, styles$p.pageWithAbovePanel, !!AboveComponent), _cx), className),
    ref: ref && 'current' in ref ? ref : null
  }, !!AboveComponent && /*#__PURE__*/React.createElement(AboveComponent, {
    className: styles$p.aboveHeadingPanel
  }), (heading || topRightControls || headingContent) && /*#__PURE__*/React.createElement("div", {
    className: styles$p.headingPanel
  }, heading && /*#__PURE__*/React.createElement(Text, {
    className: cx(_defineProperty({}, styles$p.divider, !topLeftControls)),
    variant: "h1"
  }, heading), topLeftControls && /*#__PURE__*/React.createElement(ControlsPanel, {
    className: cx(styles$p.leftControls, styles$p.divider),
    controls: topLeftControls,
    thin: true
  }), headingContent, topRightControls && /*#__PURE__*/React.createElement(ControlsPanel, {
    className: styles$p.rightControls,
    controls: topRightControls,
    thin: true
  })), children);
};
var PageLayoutWithRef = /*#__PURE__*/React.forwardRef(PageLayout);

var styles$o = {
  section: /*#__PURE__*/css({
    name: "19cqey3",
    styles: "margin:0 0 40px"
  } ),
  headingPane: /*#__PURE__*/css({
    name: "1blnrmq",
    styles: "display:flex;flex-direction:row;align-items:baseline"
  } ),
  headingPaneMargin: /*#__PURE__*/css({
    name: "avpsk8",
    styles: "margin-bottom:15px"
  } ),
  heading: /*#__PURE__*/css("" , "" ),
  subTitle: /*#__PURE__*/css({
    name: "hhyoc3",
    styles: "margin-left:32px"
  } ),
  topRightControls: /*#__PURE__*/css({
    name: "1o3nkn",
    styles: "margin-left:auto"
  } )
};
var PageSection = function PageSection(_ref) {
  var children = _ref.children,
      className = _ref.className,
      subTitle = _ref.subTitle,
      title = _ref.title,
      topRightControls = _ref.topRightControls;
  var isHeadingPaneVisible = title || subTitle || topRightControls;
  return /*#__PURE__*/React.createElement("section", {
    className: cx(styles$o.section, className)
  }, isHeadingPaneVisible && /*#__PURE__*/React.createElement("div", {
    className: cx(styles$o.headingPane, _defineProperty({}, styles$o.headingPaneMargin, children))
  }, title && /*#__PURE__*/React.createElement(Text, {
    className: styles$o.heading,
    variant: "h2"
  }, title), subTitle && /*#__PURE__*/React.createElement(Text, {
    className: styles$o.subTitle,
    variant: "p",
    tag: "span"
  }, subTitle), topRightControls && /*#__PURE__*/React.createElement(ControlsPanel, {
    className: styles$o.topRightControls,
    controls: topRightControls
  })), children);
};

var styles$n = {
  pagination: /*#__PURE__*/css({
    name: "zjik7",
    styles: "display:flex"
  } ),
  countItemsText: /*#__PURE__*/css("display:flex;align-items:center;margin-right:12px;color:", colors.dark65, ";" + ("" ), "" ),
  icon: /*#__PURE__*/css("width:16px;height:16px;margin:8px 8px;fill:", colors.dark65, ";" + ("" ), "" ),
  chevronIcon: /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" ),
  button: /*#__PURE__*/css("min-width:32px;height:32px;background:#ffffff;border:1px solid ", colors.intentBase, ";box-sizing:border-box;border-radius:4px;color:", colors.dark65, ";font-size:14px;text-align:center;padding:4px;margin:0 4px;&:focus,&:hover{background:", colors.intentBase, ";}" + ("" ), "" ),
  buttonActive: /*#__PURE__*/css("color:#fff;border:1px solid ", colors.dark40, ";background:", colors.dark40, ";&:focus,&:hover{border:1px solid ", colors.dark40, ";background:", colors.dark40, ";}" + ("" ), "" ),
  dropDown: /*#__PURE__*/css({
    name: "jb63mm",
    styles: "margin-left:12px;min-width:120px"
  } )
};
var Pagination = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pagination, _React$PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);

    _this.filterPages = function (visiblePages, items) {
      var totalPages = _this.getPages(items);

      return visiblePages.filter(function (page) {
        return page <= totalPages;
      });
    };

    _this.getVisiblePages = function (page, items) {
      var total = _this.getPages(items);

      if (total < 7) {
        return _this.filterPages([1, 2, 3, 4, 5, 6], items);
      } else {
        if (page % 5 >= 0 && page > 4 && page + 2 < total) {
          return [1, page - 2, page - 1, page, page + 1, page + 2, total];
        } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
          return [1, total - 3, total - 2, total - 1, total];
        } else {
          return [1, 2, 3, 4, 5, total];
        }
      }
    };

    _this.handleChangePage = function (_, newPage) {
      var page = _this.props.page;
      var activePage = page + 1;

      if (newPage === activePage) {
        return;
      }

      _this.props.onPageChange(newPage - 1);
    };

    _this.getPages = function (items) {
      var pageSize = _this.props.pageSize;
      return Math.ceil(items / pageSize);
    };

    _this.handleCheckPageSize = function (_, pageSize) {
      var setPageSize = _this.props.setPageSize;
      setPageSize && setPageSize(pageSize);
    };

    _this.getDropDownItems = function () {
      return _this.props.pageSizeOptions.map(function (pageSize) {
        return /*#__PURE__*/React.createElement(DropdownItem, {
          key: pageSize,
          onClick: _this.handleCheckPageSize,
          pass: pageSize
        }, pageSize, " / page");
      });
    };

    var _page = props.page,
        _items = props.items;

    var _totalPages = _this.getPages(_items);

    if (_page >= _totalPages) {
      _this.handleChangePage(null, _totalPages);
    }

    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          page = _this$props.page,
          items = _this$props.items;
      var totalPages = this.getPages(items);

      if (page >= totalPages) {
        this.handleChangePage(null, totalPages);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          page = _this$props2.page,
          items = _this$props2.items,
          setPageSize = _this$props2.setPageSize,
          pageSize = _this$props2.pageSize,
          showTotal = _this$props2.showTotal;
      var activePage = page + 1;
      var pages = this.getVisiblePages(activePage, items);
      var visiblePages = this.filterPages(pages, items);
      return /*#__PURE__*/React.createElement("div", {
        className: styles$n.pagination
      }, showTotal && /*#__PURE__*/React.createElement(Text, {
        className: styles$n.countItemsText,
        tag: "div"
      }, page * pageSize + 1, "-", activePage * pageSize > items ? items : activePage * pageSize, " of ", items, " items"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        className: styles$n.button,
        onClick: this.handleChangePage,
        disabled: activePage === 1,
        icon: IconChevronLeft,
        intent: "plain",
        pass: activePage - 1
      })), /*#__PURE__*/React.createElement("div", null, visiblePages.map(function (visiblePage, index, array) {
        var needEllipsis = array[index - 1] + 1 < visiblePage;
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: visiblePage
        }, needEllipsis && /*#__PURE__*/React.createElement(Button, {
          className: cx(styles$n.button),
          intent: "plain",
          onClick: _this2.handleChangePage,
          pass: array[index - 1] < activePage ? activePage - 5 : activePage + 5
        }, "..."), /*#__PURE__*/React.createElement(Button, {
          className: cx(styles$n.button, _defineProperty({}, styles$n.buttonActive, activePage === visiblePage)),
          intent: "plain",
          onClick: _this2.handleChangePage,
          pass: visiblePage
        }, visiblePage));
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        className: styles$n.button,
        onClick: this.handleChangePage,
        disabled: activePage === this.getPages(items),
        icon: IconChevronRight,
        intent: "plain",
        pass: activePage + 1
      })), setPageSize && /*#__PURE__*/React.createElement(Dropdown, {
        className: styles$n.dropDown,
        items: this.getDropDownItems()
      }, /*#__PURE__*/React.createElement(Button, {
        text: "".concat(pageSize, " / page "),
        iconRight: IconChevronDown
      })));
    }
  }]);

  return Pagination;
}(React.PureComponent);
Pagination.defaultProps = {
  pageSizeOptions: [10, 20, 50, 100]
};

var styles$m = {
  pagination: /*#__PURE__*/css({
    name: "zjik7",
    styles: "display:flex"
  } ),
  icon: /*#__PURE__*/css("width:32px;height:32px;margin:0 4px;fill:", colors.dark65, ";" + ("" ), "" ),
  chevronIcon: /*#__PURE__*/css("fill:", colors.dark65, ";" + ("" ), "" ),
  btn: /*#__PURE__*/css("min-width:32px;height:32px;border-radius:4px;box-sizing:border-box;padding:4px;margin:0 4px;border:1px solid ", colors.intentBase, ";" + ("" ), "" ),
  buttonArrow: /*#__PURE__*/css("display:block;background:#ffffff;color:", colors.dark65, ";font-size:14px;text-align:center;&:hover{background:", colors.intentBase, ";}" + ("" ), "" ),
  activePage: /*#__PURE__*/css("display:flex;color:", colors.intentBase, ";background:", colors.intentBaseActive, ";align-items:center;justify-content:center;" + ("" ), "" ),
  dropDown: /*#__PURE__*/css({
    name: "jb63mm",
    styles: "margin-left:12px;min-width:120px"
  } ),
  dropDownBtn: /*#__PURE__*/css("&:hover{background:", colors.intentBase, ";}" + ("" ), "" )
};
var PaginationControlled = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PaginationControlled, _React$PureComponent);

  var _super = _createSuper(PaginationControlled);

  function PaginationControlled() {
    var _this;

    _classCallCheck(this, PaginationControlled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleChangePage = function (_, newPage) {
      var _this$props = _this.props,
          onPageChange = _this$props.onPageChange,
          page = _this$props.page;
      var activePage = page + 1;

      if (newPage === activePage) {
        return;
      }

      onPageChange(newPage - 1);
    };

    _this.handleCheckPageSize = function (_, newPageSize) {
      var _this$props2 = _this.props,
          setPageSize = _this$props2.setPageSize,
          pageSize = _this$props2.pageSize;

      if (newPageSize === pageSize) {
        return;
      }

      setPageSize && setPageSize(newPageSize);
    };

    _this.getDropDownItems = function () {
      return _this.props.pageSizeOptions.map(function (pageSize) {
        return /*#__PURE__*/React.createElement(DropdownItem, {
          key: pageSize,
          onClick: _this.handleCheckPageSize,
          pass: pageSize
        }, pageSize, " / page");
      });
    };

    return _this;
  }

  _createClass(PaginationControlled, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          setPageSize = _this$props3.setPageSize,
          disableNextPageButton = _this$props3.disableNextPageButton,
          page = _this$props3.page,
          pageSize = _this$props3.pageSize;
      var activePage = page + 1;
      return /*#__PURE__*/React.createElement("div", {
        className: styles$m.pagination
      }, /*#__PURE__*/React.createElement(Button, {
        className: cx(styles$m.btn, styles$m.buttonArrow),
        onClick: this.handleChangePage,
        disabled: activePage === 1,
        icon: IconChevronLeft,
        intent: "plain",
        pass: activePage - 1
      }), /*#__PURE__*/React.createElement(Text, {
        className: cx(styles$m.btn, styles$m.activePage)
      }, activePage), /*#__PURE__*/React.createElement(Button, {
        className: cx(styles$m.btn, styles$m.buttonArrow),
        onClick: this.handleChangePage,
        disabled: disableNextPageButton,
        icon: IconChevronRight,
        intent: "plain",
        pass: activePage + 1
      }), setPageSize && /*#__PURE__*/React.createElement(Dropdown, {
        className: styles$m.dropDown,
        items: this.getDropDownItems()
      }, /*#__PURE__*/React.createElement(Button, {
        className: styles$m.dropDownBtn,
        text: "".concat(pageSize, " / page "),
        iconRight: IconChevronDown
      })));
    }
  }]);

  return PaginationControlled;
}(React.PureComponent);
PaginationControlled.defaultProps = {
  pageSizeOptions: [10, 20, 50, 100]
};

var styles$l = {
  popover: /*#__PURE__*/css("position:absolute;left:0;max-width:70%;max-height:100%;padding:20px;overflow:hidden;border-radius:4px;box-shadow:0 5px 20px 0 rgba(0, 0, 0, 0.09);border:solid 1px ", colors.intentBaseBg, ";background-color:#ffffff;z-index:", zIndex.dropdownMenu, ";box-sizing:border-box;outline:none;&::-moz-focus-inner{border:0;}" + ("" ), "" ),
  focusClosureControl: /*#__PURE__*/css({
    name: "alng9s",
    styles: "position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px"
  } )
};

var focusFirstInteractiveElement$1 = function focusFirstInteractiveElement(containerEl) {
  var firstInteractiveElement = containerEl && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
};

var DropdownPopover = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownPopover, _React$Component);

  var _super = _createSuper(DropdownPopover);

  function DropdownPopover() {
    var _this;

    _classCallCheck(this, DropdownPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.focusFirstInteractiveElement = function () {
      var innerRef = _this.props.innerRef;
      innerRef.current && focusFirstInteractiveElement$1(innerRef.current);
    };

    _this.focusPopover = function () {
      var innerRef = _this.props.innerRef;
      innerRef.current && innerRef.current.focus();
    };

    _this.handleFocusOutside = function () {
      if (!isFocusInsideRef(_this.props.innerRef)) {
        _this.focusFirstInteractiveElement();
      }
    };

    return _this;
  }

  _createClass(DropdownPopover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusPopover();
      document.addEventListener('focus', this.handleFocusOutside, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('focus', this.handleFocusOutside, true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!isFocusInsideRef(this.props.innerRef)) {
        this.focusPopover();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          style = _this$props.style,
          onClick = _this$props.onClick,
          onKeyDownCapture = _this$props.onKeyDownCapture,
          onMouseDown = _this$props.onMouseDown;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$l.popover, className),
        onClick: onClick,
        onKeyDownCapture: onKeyDownCapture,
        onMouseDown: onMouseDown,
        style: style,
        ref: innerRef,
        tabIndex: 0
      }, children, /*#__PURE__*/React.createElement("div", {
        className: styles$l.focusClosureControl,
        onFocus: this.focusFirstInteractiveElement,
        tabIndex: 0
      }));
    }
  }]);

  return DropdownPopover;
}(React.Component);
var DropdownPopoverWithRef = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(DropdownPopover, Object.assign({}, props, {
    innerRef: ref
  }));
});

var _excluded$5 = ["className", "popoverContent", "popoverClassName"];

var focusFirstInteractiveElement = function focusFirstInteractiveElement(containerEl) {
  var firstInteractiveElement = containerEl && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
};

var withPopover = function withPopover(Component) {
  return /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Dropdown, _React$PureComponent);

    var _super = _createSuper(Dropdown);

    function Dropdown() {
      var _this;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.popoverRef = /*#__PURE__*/React.createRef();
      _this.wrapperRef = /*#__PURE__*/React.createRef();
      _this.state = {
        isOpen: false,
        left: 0,
        top: 0
      };

      _this.recalcPosition = function () {
        var _assertThisInitialize = _assertThisInitialized(_this),
            wrapperRef = _assertThisInitialize.wrapperRef,
            popoverRef = _assertThisInitialize.popoverRef;

        var popoverElement = popoverRef.current;
        var wrapperElement = wrapperRef.current;

        if (popoverElement && wrapperElement) {
          var bodyWidth = document.body ? document.body.clientWidth : 0;
          var wrapperRect = wrapperElement.getBoundingClientRect();
          var popoverRect = popoverElement.getBoundingClientRect();
          var wrapperBottomSpace = window.innerHeight - wrapperRect.top - wrapperRect.height; // will show popover upside toggler;

          var upside = popoverElement.offsetHeight > wrapperBottomSpace && popoverElement.offsetHeight <= wrapperRect.top; // will show popover downside & shift vertical

          var shiftVertical = popoverElement.offsetHeight > wrapperBottomSpace && popoverElement.offsetHeight > wrapperRect.top; // will show popover to left from toggler;

          var leftside = wrapperRect.left > bodyWidth / 2;
          var left = leftside ? Math.max(window.scrollX + wrapperRect.left + wrapperRect.width - popoverRect.width, 0) : Math.max(window.scrollX + wrapperRect.left, 0);
          var top = shiftVertical ? window.scrollY + window.innerHeight - popoverRect.height : upside ? window.scrollY + wrapperRect.top - popoverElement.offsetHeight : window.scrollY + wrapperRect.top + wrapperRect.height;
          var horizontalShift = left - window.scrollX + popoverRect.width > window.innerWidth ? -(left - window.scrollX + popoverRect.width - window.innerWidth) : left < window.scrollX ? window.scrollX - left : 0;
          left += horizontalShift;
          left -= 0;

          _this.setState({
            top: top,
            left: left
          });
        }
      };

      _this.throttledRecalcPosition = throttle(_this.recalcPosition, 16);

      _this.handleClick = function (event) {
        var onClick = _this.props.onClick;

        _this.toggleDropdown();

        onClick && onClick(event);
      };

      _this.handleMouseDownOutside = function (event) {
        var isOpen = _this.state.isOpen;
        var popoverElement = _this.popoverRef && _this.popoverRef.current;
        var wrapperElement = _this.wrapperRef && _this.wrapperRef.current; // for Flow

        var eventTarget = event.target;

        if (isOpen && popoverElement && wrapperElement && !(popoverElement.contains(eventTarget) || wrapperElement.contains(eventTarget)) && (popoverElement !== event.target || wrapperElement !== event.target)) {
          _this.toggleDropdown();
        }
      };

      _this.handlePopoverClick = function (event) {
        event.stopPropagation();
        var ref = _this.popoverRef && _this.popoverRef.current;

        if (ref && ref !== event.target) {
          _this.toggleDropdown();
        }
      };

      _this.handlePopoverMouseDown = function (event) {
        return event.stopPropagation();
      };

      _this.handlePopoverKeyDown = function (event) {
        if (event.keyCode === 27) {
          _this.toggleDropdown();

          _this.wrapperRef.current && focusFirstInteractiveElement(_this.wrapperRef.current);
        }
      };

      _this.toggleDropdown = function () {
        return _this.setState(function (_ref) {
          var isOpen = _ref.isOpen;
          return {
            isOpen: !isOpen
          };
        });
      };

      _this.popoverMethods = {
        closePopover: _this.toggleDropdown
      };

      _this.renderPopover = function () {
        var _this$props = _this.props,
            popoverClassName = _this$props.popoverClassName,
            popoverContent = _this$props.popoverContent;
        var _this$state = _this.state,
            left = _this$state.left,
            top = _this$state.top;

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            wrapperRef = _assertThisInitialize2.wrapperRef;

        var minWidth = wrapperRef && wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;
        return /*#__PURE__*/React.createElement(DropdownPopoverWithRef, {
          className: popoverClassName,
          onClick: typeof popoverContent === 'function' ? null : _this.handlePopoverClick,
          onKeyDownCapture: _this.handlePopoverKeyDown,
          onMouseDown: _this.handlePopoverMouseDown,
          style: {
            left: left,
            top: top,
            minWidth: minWidth
          },
          ref: _this.popoverRef
        }, typeof popoverContent === 'function' ? popoverContent(_this.popoverMethods) : popoverContent);
      };

      return _this;
    }

    _createClass(Dropdown, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.isOpen) {
          document.addEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.addEventListener('mousedown', this.handleMouseDownOutside);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var isOpen = this.state.isOpen;

        if (!prevState.isOpen && isOpen) {
          document.addEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.addEventListener('mousedown', this.handleMouseDownOutside);
        } else if (prevState.isOpen && !isOpen) {
          document.removeEventListener('scroll', this.throttledRecalcPosition, {
            capture: true
          });
          document.removeEventListener('mousedown', this.handleMouseDownOutside);
        }

        if (isOpen && !prevState.isOpen || prevProps !== this.props) {
          this.recalcPosition();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('scroll', this.throttledRecalcPosition, {
          capture: true
        });
        document.removeEventListener('mousedown', this.handleMouseDownOutside);
      }
    }, {
      key: "renderPortal",
      value: function renderPortal() {
        var _document = document,
            body = _document.body;

        if (body) {
          return /*#__PURE__*/ReactDOM.createPortal(this.renderPopover(), body);
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            popoverContent = _this$props2.popoverContent;
            _this$props2.popoverClassName;
            var props = _objectWithoutProperties(_this$props2, _excluded$5);

        var isOpen = this.state.isOpen;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Component, Object.assign({}, props, {
          className: className,
          onClick: this.handleClick,
          ref: this.wrapperRef
        })), isOpen && popoverContent && this.renderPortal());
      }
    }]);

    return Dropdown;
  }(React.PureComponent);
};

var styles$k = {
  wrap: /*#__PURE__*/css("position:relative;width:530px;padding:20px;border:solid 1px;box-sizing:border-box;border-radius:10px;animation:0.2s linear ", keyFrames.fadeIn, ";cursor:pointer;" + ("" ), "" ),
  closeBtn: /*#__PURE__*/css({
    name: "1eucs3e",
    styles: "position:absolute;top:20px;right:20px"
  } ),
  heading: /*#__PURE__*/css({
    name: "h5j5hp",
    styles: "display:block;margin:0 25px 5px 0;overflow:hidden"
  } ),
  text: /*#__PURE__*/css("display:block;margin:0 25px 0 0;overflow:hidden;color:", colors.dark, ";" + ("" ), "" ),
  btmMargin: /*#__PURE__*/css({
    name: "vqx3x2",
    styles: "margin-bottom:5px"
  } )
};
var intentStyles = {
  error: {
    wrap: /*#__PURE__*/css("border-color:", colors.intentDangerBorder, ";background-color:", colors.intentDangerBg, ";" + ("" ), "" ),
    heading: /*#__PURE__*/css("color:", colors.intentWarningAccent, ";" + ("" ), "" )
  },
  success: {
    wrap: /*#__PURE__*/css("border-color:", colors.intentSuccessBorder, ";background-color:", colors.intentSuccessBg, ";" + ("" ), "" ),
    heading: /*#__PURE__*/css("color:", colors.intentSuccess, ";" + ("" ), "" )
  }
};
var PopupNotificationItem = function PopupNotificationItem(_ref) {
  var heading = _ref.heading,
      text = _ref.text,
      children = _ref.children,
      className = _ref.className,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'success' : _ref$intent,
      onClose = _ref.onClose,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$k.wrap, intentStyles[intent].wrap, className),
    onClick: onClose,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(Text, {
    className: cx(styles$k.heading, intentStyles[intent].heading),
    variant: "h4",
    tag: "span"
  }, heading), /*#__PURE__*/React.createElement(Text, {
    className: cx(styles$k.text, _defineProperty({}, styles$k.btmMargin, !!children))
  }, text), children, /*#__PURE__*/React.createElement(IconHelperClose, {
    className: styles$k.closeBtn,
    onClick: onClose
  }));
};

var styles$j = {
  container: /*#__PURE__*/css("position:fixed;right:35px;bottom:0;z-index:", zIndex.notification, ";max-height:calc(100vh - 35px);overflow:hidden;mask-image:linear-gradient(0deg, transparent 0, rgba(0, 0, 0, 1) 40px);" + ("" ), "" ),
  item: /*#__PURE__*/css({
    name: "wntzq4",
    styles: "margin-bottom:35px"
  } )
};
var PopupNotificationList = function PopupNotificationList(_ref) {
  var className = _ref.className,
      notifications = _ref.notifications;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$j.container, className)
  }, notifications && _toConsumableArray(notifications).reverse().map(function (_ref2) {
    var details = _ref2.details,
        text = _ref2.text,
        onClose = _ref2.onClose,
        heading = _ref2.heading,
        intent = _ref2.intent,
        key = _ref2.key,
        onMouseEnter = _ref2.onMouseEnter,
        onMouseLeave = _ref2.onMouseLeave;
    return /*#__PURE__*/React.createElement(PopupNotificationItem, {
      className: styles$j.item,
      heading: heading,
      intent: intent,
      onClose: onClose,
      text: text,
      key: key,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, details);
  }));
};

var COLORS = {
  success: colors.intentSuccess,
  warning: colors.intentWarning,
  danger: colors.intentDanger
};
var style$2 = /*#__PURE__*/css({
  name: "1akkou1",
  styles: "position:relative;height:4px;width:100%;border-radius:3px;background-color:#e1e1e1;&::before{content:'';position:absolute;top:0;left:0;height:4px;min-width:4px;border-radius:3px;}"
} );
var defineStatus = R.cond([[R.lt(66), R.always('danger')], [R.lt(33), R.always('warning')], [R.T, R.always('success')]]);
var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      percents = _ref.percents,
      _ref$intention = _ref.intention,
      intention = _ref$intention === void 0 ? defineStatus(percents) : _ref$intention;
  var bar = /*#__PURE__*/css("&::before{width:", percents, "%;background-color:", COLORS[intention], ";}" + ("" ), "" );
  return /*#__PURE__*/React.createElement("div", {
    className: cx(style$2, bar, className)
  });
};

var styles$i = {
  icon: /*#__PURE__*/css({
    name: "4zleql",
    styles: "display:block"
  } ),
  iconWrap: /*#__PURE__*/css({
    name: "bjn8wh",
    styles: "position:relative"
  } ),
  children: /*#__PURE__*/css({
    name: "1h52dri",
    styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  } ),
  childrenMargin: /*#__PURE__*/css({
    name: "1oaeivz",
    styles: "margin-right:8px"
  } ),
  input: /*#__PURE__*/css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;appearance:none;&+div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(255, 255, 255, 0);border-radius:50%;}&:focus+div::before{border-color:", rgba(colors.intentPrimary, 0.55), ";}" + ("" ), "" ),
  label: /*#__PURE__*/css({
    name: "1uoamx5",
    styles: "display:flex;align-items:center;cursor:pointer"
  } )
};
var RadioButton = function RadioButton(_ref) {
  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      name = _ref.name,
      title = _ref.title,
      value = _ref.value;
  return /*#__PURE__*/React.createElement("label", {
    className: cx(styles$i.label, className),
    title: title
  }, /*#__PURE__*/React.createElement("input", {
    checked: checked,
    className: styles$i.input,
    disabled: disabled,
    type: "radio",
    onChange: onChange,
    name: name,
    value: value
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(styles$i.iconWrap, _defineProperty({}, styles$i.childrenMargin, children))
  }, /*#__PURE__*/React.createElement(IconRadio, {
    className: styles$i.icon,
    checked: checked,
    disabled: disabled
  })), typeof children === 'string' ? /*#__PURE__*/React.createElement(Text, {
    className: styles$i.children
  }, children) : children);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};
var isBrowser = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/createElement(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var _excluded$4 = ["elementRef", "style"],
    _excluded2 = ["elementRef", "style"],
    _excluded3 = ["elementRef", "style"],
    _excluded4 = ["elementRef", "style"];

var Track = createStyled("div", {
  target: "e1gokkyi1"
} )("width:4px!important;background:", function (_ref) {
  var track = _ref.track;
  return track || colors.scrollbar;
}, "!important;border-radius:7px!important;" + ("" ));

var Thumb = createStyled("div", {
  target: "e1gokkyi0"
} )("background:", function (_ref2) {
  var thumb = _ref2.thumb;
  return thumb || colors.activeAction;
}, "!important;" + ("" ));

var trackYProps = function trackYProps(track) {
  return {
    track: track,
    renderer: function renderer(props) {
      var elementRef = props.elementRef,
          style = props.style,
          rest = _objectWithoutProperties(props, _excluded$4);

      return /*#__PURE__*/React.createElement(Track, Object.assign({}, rest, {
        style: style,
        ref: elementRef
      }));
    }
  };
};

var thumbYProps = function thumbYProps(thumb) {
  return {
    thumb: thumb,
    renderer: function renderer(props) {
      var elementRef = props.elementRef,
          style = props.style,
          rest = _objectWithoutProperties(props, _excluded2);

      return /*#__PURE__*/React.createElement(Thumb, Object.assign({}, rest, {
        style: style,
        ref: elementRef
      }));
    }
  };
};

var wrapperProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, _excluded3);

    return /*#__PURE__*/React.createElement("div", Object.assign({}, rest, {
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        right: 0
      }),
      ref: elementRef
    }));
  }
};
var scrollerProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, _excluded4);

    return /*#__PURE__*/React.createElement("div", Object.assign({}, rest, {
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        marginRight: -20,
        paddingRight: 20
      }),
      ref: elementRef
    }));
  }
};
var style$1 = {
  width: '100%'
};
/**
 * @deprecated Use genericStyles.scrollbars instead
 */

var Scrollbar = function Scrollbar(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      track = _ref3.track,
      thumb = _ref3.thumb;
  var trackYPropsMemo = React.useMemo(function () {
    return trackYProps(track);
  }, [track]);
  var thumbYPropsMemo = React.useMemo(function () {
    return thumbYProps(thumb);
  }, [thumb]);
  return /*#__PURE__*/React.createElement(ReactScroll, {
    track: track,
    thumb: thumb,
    wrapperProps: wrapperProps,
    scrollerProps: scrollerProps,
    trackYProps: trackYPropsMemo,
    thumbYProps: thumbYPropsMemo,
    style: style$1,
    className: className
  }, children);
};

var style = /*#__PURE__*/css({
  name: "m271f",
  styles: "& #eczxjgpdt4q42_to{animation:eczxjgpdt4q42_to__to 1500ms linear infinite normal forwards;}@keyframes eczxjgpdt4q42_to__to{0%{transform:translate(104.357658px, 104.49984px);animation-timing-function:cubic-bezier(0.47, 0, 0.745, 0.715);}46.666667%{transform:translate(179.667419px, 104.500167px);animation-timing-function:cubic-bezier(0.39, 0.575, 0.565, 1);}100%{transform:translate(104.357658px, 104.500167px);}}& #eczxjgpdt4q43_to{animation:eczxjgpdt4q43_to__to 1500ms linear infinite normal forwards;}@keyframes eczxjgpdt4q43_to__to{0%{transform:translate(201.513877px, 104.499839px);animation-timing-function:cubic-bezier(0.47, 0, 0.745, 0.715);}46.666667%{transform:translate(83.486128px, 104.500167px);animation-timing-function:cubic-bezier(0.39, 0.575, 0.565, 1);}100%{transform:translate(200.538956px, 104.500167px);}}"
} );
var TarantoolLogoSpinner = function TarantoolLogoSpinner(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("svg", {
    className: cx(style, className),
    viewBox: "0 0 285 209",
    width: "285",
    height: "209"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "eczxjgpdt4q42-fill",
    cx: "210.283005",
    cy: "109.552002",
    r: "211.647003",
    spreadMethod: "pad",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "eczxjgpdt4q42-fill-0",
    offset: "37.313400%",
    stopColor: "rgba(142,145,153,0.5099999904632568)"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "eczxjgpdt4q42-fill-1",
    offset: "100%",
    stopColor: "rgb(142,145,153)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "eczxjgpdt4q43-fill",
    cx: "128.451996",
    cy: "104.079002",
    r: "155.093002",
    spreadMethod: "pad",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    id: "eczxjgpdt4q43-fill-0",
    offset: "32.971300%",
    stopColor: "rgba(142,145,153,0.4000000059604645)"
  }), /*#__PURE__*/React.createElement("stop", {
    id: "eczxjgpdt4q43-fill-1",
    offset: "100%",
    stopColor: "rgb(142,145,153)"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "eczxjgpdt4q42_to",
    transform: "translate(104.357658,104.499840)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "eczxjgpdt4q42",
    d: "M138.015000,10.230400C144.935000,14.749800,157.154000,25.341000,170.270000,38.474400C183.132000,51.354000,193.552000,63.370800,198.207000,70.366000C212.115000,90.708500,212.218000,117.704000,198.512000,138.150000C194.015000,145.071000,183.417000,157.336000,170.270000,170.502000C157.122000,183.668000,144.874000,194.280000,137.961000,198.783000C117.529000,212.516000,90.546000,212.405000,70.225600,198.446000C63.234100,193.772000,51.257300,183.354000,38.422400,170.502000C25.333200,157.395000,14.772700,145.182000,10.244200,138.245000C-3.106620,118.386000,-3.407470,92.319900,9.339790,72.175300C13.233300,65.584300,24.371500,52.544800,38.422400,38.474700C52.473000,24.405000,65.495100,13.251500,72.078000,9.352420C92.180300,-3.403340,118.189000,-3.111130,138.015000,10.230400Z",
    transform: "translate(-104.357655,-104.499847)",
    clipRule: "evenodd",
    fill: "url(#eczxjgpdt4q42-fill)",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("g", {
    id: "eczxjgpdt4q43_to",
    transform: "translate(201.513877,104.499839)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "eczxjgpdt4q43",
    d: "M227.465000,29.081900C233,32.697400,242.776000,41.170400,253.268000,51.677200C263.558000,61.980900,271.895000,71.594700,275.618000,77.190500C286.745000,93.464600,286.827000,115.060000,275.863000,131.417000C272.265000,136.955000,263.787000,146.766000,253.268000,157.299000C242.750000,167.832000,232.952000,176.321000,227.422000,179.925000C211.076000,190.911000,189.490000,190.822000,173.233000,179.655000C167.640000,175.915000,158.059000,167.581000,147.791000,157.298000C137.319000,146.814000,128.871000,137.043000,125.249000,131.494000C114.567000,115.607000,114.327000,94.753800,124.525000,78.638500C127.640000,73.365700,136.550000,62.933500,147.791000,51.677400C159.031000,40.421600,169.449000,31.498800,174.715000,28.379600C190.797000,18.175000,211.604000,18.408700,227.465000,29.081900Z",
    transform: "translate(-200.538956,-104.497784)",
    clipRule: "evenodd",
    fill: "url(#eczxjgpdt4q43-fill)",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  })));
};

var styles$h = {
  wrap: /*#__PURE__*/css({
    name: "1uxf7yn",
    styles: "display:flex;justify-content:center;align-items:center;height:calc(100% - 69px)"
  } ),
  image: /*#__PURE__*/css({
    name: "1cpfdbf",
    styles: "height:74px;width:100px"
  } )
};
var SectionPreloader = function SectionPreloader(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$h.wrap, className)
  }, /*#__PURE__*/React.createElement(TarantoolLogoSpinner, {
    className: styles$h.image
  }));
};

var styles$g = {
  icon: /*#__PURE__*/css({
    name: "tifoaz",
    styles: "fill:#595959"
  } ),
  input: /*#__PURE__*/css({
    name: "gyrr52",
    styles: "&>:first-child{cursor:pointer;caret-color:transparent;user-select:none;}"
  } ),
  selected: /*#__PURE__*/css("background-color:", colors.dark2, ";" + ("" ), "" ),
  noData: /*#__PURE__*/css({
    name: "1azakc",
    styles: "text-align:center"
  } )
};
var Select = function Select(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownVisible = _useState2[0],
      setDropdownVisible = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  useEffect(function () {
    setValue('');
  }, [dropdownVisible]);

  var onChangeInput = function onChangeInput(e) {
    return props.allowSearch ? setValue(e.target.value) : undefined;
  };

  var getLabel = useCallback(function () {
    if (!props.value) {
      return undefined;
    }

    var option = props.options.find(function (o) {
      return o.value === props.value;
    });
    return option ? option.label : props.value;
  }, [props.value, props.options]);
  var getSelectOptions = useCallback(function () {
    if (!props.options || props.options.length === 0) {
      return [];
    }

    if (!value) {
      return props.options;
    }

    return props.options.filter(function (o) {
      return o.label.toLowerCase().includes(value.toLowerCase());
    });
  }, [value, props.options]);
  var Icon = dropdownVisible ? IconChevron : IconChevronDown;
  return /*#__PURE__*/React.createElement(Dropdown, {
    popoverClassName: props.dropdownClassName,
    disabled: props.disabled,
    className: props.className,
    onDropdownVisibleChange: setDropdownVisible,
    autoFocus: !props.allowSearch,
    items: getSelectOptions().length > 0 ? getSelectOptions().map(function (option) {
      return /*#__PURE__*/React.createElement(DropdownItem, {
        key: option.value,
        onClick: function onClick() {
          return props.onChange(option.value, option);
        },
        className: cx(_defineProperty({}, styles$g.selected, option.value === props.value))
      }, option.label);
    }) : /*#__PURE__*/React.createElement(DropdownItem, {
      className: styles$g.noData
    }, "No data")
  }, /*#__PURE__*/React.createElement(Input, Object.assign({
    value: props.allowSearch && dropdownVisible ? value : getLabel(),
    placeholder: props.allowSearch && dropdownVisible ? getLabel() : '',
    onChange: onChangeInput,
    disabled: props.disabled,
    className: cx(_defineProperty({}, styles$g.input, !props.allowSearch && !props.disabled), props.inputClassName),
    autoComplete: "new-password",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      className: styles$g.icon
    })
  }, props.inputProps)));
};

var SideMenuIcon = function SideMenuIcon(_ref) {
  var IconComponent = _ref.icon,
      className = _ref.className;

  if (typeof IconComponent === 'string') {
    return null;
  }

  if (typeof IconComponent === 'function') {
    return /*#__PURE__*/React.createElement(IconComponent, {
      className: className
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, IconComponent);
};

var handleClick = function handleClick(event, handler) {
  if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    event.preventDefault();

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    handler.apply(void 0, args);
  }
};

var styles$f = {
  item: /*#__PURE__*/css({
    name: "1cfq0eg",
    styles: "display:block;width:100%;height:40px;position:relative;cursor:pointer;border:none;text-align:left;text-decoration:none;background:transparent;outline:none;&:hover,&:focus{background:rgba(255, 255, 255, 0.05);}"
  } ),
  shortItem: /*#__PURE__*/css({
    name: "1s33hkq",
    styles: "display:block;width:100%;height:40px;position:relative;border:none;outline:none;background:transparent;cursor:pointer;&:hover,&:focus{background:rgba(255, 255, 255, 0.05);}"
  } ),
  itemSelected: /*#__PURE__*/css({
    name: "x1ivsm",
    styles: "background:rgba(255, 255, 255, 0.05);&:after{display:block;height:100%;left:0;top:0;width:4px;background:#ff272c;content:'';position:absolute;}"
  } ),
  subItemSelected: /*#__PURE__*/css({
    name: "2fcw72",
    styles: "background:rgba(255, 255, 255, 0.05)"
  } ),
  title: /*#__PURE__*/css({
    name: "lbwipx",
    styles: "position:absolute;left:50px;top:50%;transform:translateY(-50%);color:#fff;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:170px;&:hover,&:visited{color:#fff;}"
  } ),
  iconWrap: /*#__PURE__*/css({
    name: "ja26we",
    styles: "position:absolute;left:24px;top:calc(50% - 8px);display:flex;justify-content:center;align-items:center;height:16px;width:16px"
  } ),
  icon: /*#__PURE__*/css({
    name: "5blccd",
    styles: "fill:#ffffff"
  } ),
  expandButton: /*#__PURE__*/css({
    name: "26zmac",
    styles: "position:absolute;top:50%;transform:translateY(-50%);right:16px"
  } ),
  expandButtonUnexpand: /*#__PURE__*/css({
    name: "fbcwc6",
    styles: "transform:translateY(-50%) rotate(180deg)"
  } ),
  submenuList: /*#__PURE__*/css({
    name: "2fcw72",
    styles: "background:rgba(255, 255, 255, 0.05)"
  } ),
  subItemTitle: /*#__PURE__*/css({
    name: "27nfz2",
    styles: "left:60px"
  } ),
  titleSelected: /*#__PURE__*/css({
    name: "16ceglb",
    styles: "font-weight:600"
  } ),
  collapse: /*#__PURE__*/css({
    name: "19u0v2k",
    styles: "background:rgba(255, 255, 255, 0.05);opacity:0.65;&:hover{opacity:1;}"
  } )
};
var SideMenuItem = function SideMenuItem(_ref) {
  var _cx3, _cx4;

  var path = _ref.path,
      selected = _ref.selected,
      label = _ref.label,
      expanded = _ref.expanded,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onClick = _ref.onClick,
      _ref$isSubitem = _ref.isSubitem,
      isSubitem = _ref$isSubitem === void 0 ? false : _ref$isSubitem,
      icon = _ref.icon,
      _short = _ref["short"],
      expand = _ref.expand,
      isCollapse = _ref.isCollapse,
      pathPrefix = _ref.pathPrefix,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'internal' : _ref$type;
  var tag = path ? 'a' : 'button';

  if (_short) {
    return /*#__PURE__*/React.createElement(Text, {
      tag: tag,
      className: cx(styles$f.shortItem, _defineProperty({}, styles$f.itemSelected, selected || items && items.find(function (x) {
        return x.selected;
      }))),
      onClick: items && items.length ? function (evt) {
        return expand && expand(evt, path, !expanded);
      } : function (evt) {
        return handleClick(evt, onClick, evt, path, type);
      },
      href: pathPrefix ? pathPrefix + path : path,
      title: label
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$f.iconWrap
    }, /*#__PURE__*/React.createElement(SideMenuIcon, {
      icon: icon,
      className: styles$f.icon
    })));
  }

  var subItems = null;

  if (expanded && !_short && items && items.length > 0) {
    subItems = /*#__PURE__*/React.createElement("div", {
      className: styles$f.submenuList
    }, items.map(function (x) {
      return /*#__PURE__*/React.createElement(SideMenuItem, Object.assign({}, x, {
        key: x.path,
        onClick: onClick,
        isSubitem: true
      }));
    }));
  }

  var expandButton = items && items.length > 0 ? /*#__PURE__*/React.createElement(IconChevronDown, {
    className: cx(styles$f.expandButton, _defineProperty({}, styles$f.expandButtonUnexpand, !expanded))
  }) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    tag: tag,
    className: cx(styles$f.item, (_cx3 = {}, _defineProperty(_cx3, styles$f.itemSelected, selected), _defineProperty(_cx3, styles$f.subItemSelected, selected && isSubitem), _defineProperty(_cx3, styles$f.collapse, isCollapse), _cx3)),
    href: pathPrefix ? pathPrefix + path : path,
    onClick: items && items.length ? function (evt) {
      return expand && expand(evt, path, !expanded);
    } : function (evt) {
      return handleClick(evt, onClick, evt, path, type);
    },
    title: label
  }, isSubitem ? null : /*#__PURE__*/React.createElement("div", {
    className: styles$f.iconWrap
  }, /*#__PURE__*/React.createElement(SideMenuIcon, {
    icon: icon,
    className: styles$f.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: cx(styles$f.title, (_cx4 = {}, _defineProperty(_cx4, styles$f.subItemTitle, isSubitem), _defineProperty(_cx4, styles$f.titleSelected, selected), _cx4))
  }, label), expandButton), subItems);
};

var translateFromRight = /*#__PURE__*/keyframes({
  name: "175ziuu",
  styles: "from{transform:translate3d(200px, 0, 0);}to{transform:translate3d(0, 0, 0);}"
} );
var styles$e = {
  container: /*#__PURE__*/css("border-top:none;overflow:hidden;width:256px;background:", colors.dark, ";height:100%;padding:0;display:flex;flex-direction:column;user-select:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;" + ("" ), "" ),
  shortContainer: /*#__PURE__*/css({
    name: "1ydfe13",
    styles: "width:62px"
  } ),
  menuTitle: /*#__PURE__*/css({
    name: "19knd65",
    styles: "display:block;font-size:14px;margin-left:20px;margin-top:10px;color:rgba(0, 0, 0, 0.65)"
  } ),
  menuList: /*#__PURE__*/css({
    name: "1dg7flq",
    styles: "flex-grow:1;overflow:auto"
  } ),
  item: /*#__PURE__*/css({
    name: "7tmq2i",
    styles: "height:40px;margin-bottom:4px;position:relative"
  } ),
  expandButton: /*#__PURE__*/css({
    name: "635ufy",
    styles: "position:absolute;right:28px;top:11px;&:after{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff;}"
  } ),
  expandButtonUnexpand: /*#__PURE__*/css({
    name: "1v5from",
    styles: "&:after{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;}"
  } ),
  menuItem: /*#__PURE__*/css({
    name: "27uhrt",
    styles: "display:block;font-size:19px;font-family:Roboto;font-weight:400;text-align:left;cursor:pointer;color:white;width:154px;padding:0 0 5px;border:none;background-color:transparent;transition:color 300ms;text-decoration:none;:focus,:hover{color:#e32636;text-decoration:none;outline:none;}"
  } ),
  selectedMenuItem: /*#__PURE__*/css({
    name: "1f1pf06",
    styles: "padding-bottom:4px;border-bottom:1px solid rgba(255, 39, 44, 1);cursor:default;:hover{color:rgba(255, 39, 44, 1);}"
  } ),
  submenuItem: /*#__PURE__*/css("display:block;margin-bottom:15px;font-size:18px;color:white;margin-left:30px;cursor:pointer;:before{content:'> ';display:inline-block;width:20px;position:relative;}:hover{color:#ca0009;:before{content:'@';display:inline-block;width:20px;position:relative;}}animation:", translateFromRight, " 1s;" + ("" ), "" ),
  submenuList: /*#__PURE__*/css({
    name: "1pgnepj",
    styles: "display:block;margin-top:10px;margin-left:10px"
  } ),
  itemLoading: /*#__PURE__*/css("" , "" ),
  logoContainer: /*#__PURE__*/css({
    name: "7s3tqb",
    styles: "padding:24px 0 32px 0"
  } ),
  logoCenter: /*#__PURE__*/css({
    name: "1azakc",
    styles: "text-align:center"
  } ),
  bottomButtons: /*#__PURE__*/css({
    name: "7yk45v",
    styles: "flex-grow:0;flex-shrink:0;margin-top:16px"
  } ),
  iconStyle: /*#__PURE__*/css({
    name: "e102ul",
    styles: "width:14px;height:14px;fill:#fff"
  } )
};
function SideMenu(props) {
  var menu = props.menu,
      className = props.className,
      onMenuItemClick = props.onMenuItemClick,
      toggleExpand = props.toggleExpand,
      pathPrefix = props.pathPrefix,
      renderMenuLogo = props.renderMenuLogo;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShort = _useState2[0],
      setIsShort = _useState2[1];

  var topMenu = menu.filter(function (item) {
    return !item.pinBottom;
  });

  var getPinnedElement = function getPinnedElement() {
    var pinnedMenu = menu.filter(function (item) {
      return item.pinBottom;
    });
    return R.last(pinnedMenu);
  };

  var onClick = function onClick(evt, path, type) {
    evt.preventDefault();
    onMenuItemClick(path, type);
  };

  var onExpand = function onExpand(evt, path, expanded) {
    evt.preventDefault();

    if (isShort) {
      setIsShort(false);
    }

    toggleExpand(path, expanded);
  };

  var pinnedMenuItem = getPinnedElement();
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$e.container, _defineProperty({}, styles$e.shortContainer, isShort), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles$e.logoContainer, _defineProperty({}, styles$e.logoCenter, isShort))
  }, renderMenuLogo ? renderMenuLogo(isShort) : null), /*#__PURE__*/React.createElement("div", {
    className: cx(styles$e.menuList, genericStyles.scrollbars)
  }, topMenu.map(function (x, i) {
    return /*#__PURE__*/React.createElement(SideMenuItem, Object.assign({}, x, {
      key: i,
      onClick: onClick,
      expand: onExpand,
      pathPrefix: pathPrefix,
      "short": isShort
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$e.bottomButtons
  }, pinnedMenuItem && /*#__PURE__*/React.createElement(SideMenuItem, Object.assign({
    key: "pinned-element"
  }, pinnedMenuItem, {
    onClick: onClick,
    expand: onExpand,
    pathPrefix: pathPrefix,
    "short": isShort
  })), /*#__PURE__*/React.createElement(SideMenuItem, {
    key: "collapse",
    items: [],
    path: "",
    isCollapse: true,
    selected: false,
    expanded: false,
    icon: isShort ? IconArrowRight : IconArrowLeft,
    label: "Collapse menu",
    onClick: function onClick(e) {
      e.preventDefault();
      setIsShort(!isShort);
    },
    "short": isShort
  })));
}

var img$5 = {id: "t0IYzgjirRL8jk8lxpJJT", content: "<svg width=\"80\" height=\"80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 80", viewBox: "0 0 80 80" };

var img$4 = {id: "5ovKUSHkiD0wX_uEjgBwx", content: "<svg width=\"80\" height=\"112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 112", viewBox: "0 0 80 112" };

var img$3 = {id: "aloBJcOGf7iDB8b-Wr8vZ", content: "<svg width=\"39\" height=\"28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 01.04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 01-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 01-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 018.833.118z\" fill=\"url(#paint0_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 01.033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 01-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 01-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 017.067.094z\" fill=\"url(#paint1_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 01.04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 01-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 01-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 012.484-2.29z\" fill=\"#FF0D2A\"/><defs><radialGradient id=\"paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\"/><stop offset=\"1\" stop-color=\"#FF0D2A\"/></radialGradient><radialGradient id=\"paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\"/><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\"/></radialGradient></defs></svg>", viewbox: "0 0 39 28", viewBox: "0 0 39 28" };

var img$2 = {id: "0UaInuRaCzqzOY-KmLPJ5", content: "<svg width=\"154\" height=\"28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.983 21.023h1.998v-2.501h-1.723c-1.574 0-2.274-.576-2.274-1.826v-5.979h3.997V8.266h-3.997V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.65 4.327 4.622 4.327zm10.099.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.723-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.097 4.153zm11.812 2.226h-2.623V8.266h2.623v1.726c.949-1.201 2.173-1.726 3.996-1.726h1.05v2.451h-1.05c-2.373 0-3.996 1.476-3.996 3.677v6.629zm12.189.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.724-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.096 4.153zm11.812 2.226h-2.623V8.266h2.623v1.276c.874-.926 2.173-1.601 3.897-1.601 3.172 0 5.321 2.35 5.321 5.853v7.23h-2.623v-7.155c0-2.076-1.249-3.377-3.123-3.377-1.973 0-3.472 1.476-3.472 3.277v7.254zm17.409 0h1.998v-2.501h-1.723c-1.574 0-2.273-.576-2.273-1.826v-5.979h3.996V8.266h-3.996V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.648 4.327 4.621 4.327zm16.59-6.378c0 3.752-3.022 6.703-6.819 6.703s-6.82-2.951-6.82-6.703c0-3.753 3.023-6.704 6.82-6.704s6.819 2.951 6.819 6.704zm-10.891 0c0 2.4 1.723 4.152 4.072 4.152 2.348 0 4.071-1.751 4.071-4.152 0-2.402-1.723-4.153-4.071-4.153-2.349 0-4.072 1.751-4.072 4.152zm19.22 6.703c3.797 0 6.821-2.951 6.821-6.703 0-3.753-3.024-6.704-6.821-6.704-3.797 0-6.82 2.951-6.82 6.704 0 3.752 3.023 6.703 6.82 6.703zm0-2.551c-2.348 0-4.072-1.751-4.072-4.152 0-2.402 1.724-4.153 4.072-4.153s4.073 1.751 4.073 4.152c0 2.402-1.725 4.153-4.073 4.153zM154 21.023h-2.623V3.013H154v18.01z\" fill=\"#fff\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 0 1-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 0 1-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 0 1 8.833.118z\" fill=\"url(#paint0_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 0 1 .033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 0 1-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 0 1 7.067.094z\" fill=\"url(#paint1_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 0 1-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 0 1 2.484-2.29z\" fill=\"#FF0D2A\"/><defs><radialGradient id=\"paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\"/><stop offset=\"1\" stop-color=\"#FF0D2A\"/></radialGradient><radialGradient id=\"paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\"/><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\"/></radialGradient></defs></svg>", viewbox: "0 0 154 28", viewBox: "0 0 154 28" };

var img$1 = {id: "lrcT-Txfq0JiXTRVxpDwb", content: "<svg width=\"120\" height=\"96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.937 10.8h.125c6.677 0 11.768 0 15.813.367 4.075.369 7.206 1.118 9.925 2.688a22.8 22.8 0 018.345 8.345c1.57 2.72 2.319 5.85 2.688 9.924.367 4.046.367 9.137.367 15.814v.124c0 6.677 0 11.768-.367 15.814-.37 4.074-1.118 7.205-2.688 9.924a22.8 22.8 0 01-8.345 8.345c-2.72 1.57-5.85 2.32-9.925 2.688-4.045.367-9.136.367-15.813.367h-.125c-6.676 0-11.767 0-15.813-.367-4.074-.369-7.205-1.118-9.924-2.688a22.8 22.8 0 01-8.346-8.345c-1.57-2.72-2.318-5.85-2.688-9.924-.366-4.046-.366-9.137-.366-15.813v-.126c0-6.676 0-11.767.366-15.813.37-4.074 1.119-7.205 2.688-9.924a22.8 22.8 0 018.346-8.345c2.719-1.57 5.85-2.319 9.924-2.688 4.045-.367 9.137-.367 15.813-.367zm-15.596 2.757c-3.908.354-6.648 1.052-8.941 2.376a20.4 20.4 0 00-7.467 7.467c-1.324 2.293-2.022 5.033-2.376 8.941C25.2 36.266 25.2 41.249 25.2 48c0 6.751.001 11.735.357 15.659.354 3.908 1.052 6.648 2.376 8.941a20.4 20.4 0 007.467 7.467c2.293 1.324 5.033 2.022 8.94 2.376 3.925.356 8.908.357 15.66.357 6.751 0 11.734-.001 15.659-.357 3.908-.354 6.648-1.052 8.94-2.376a20.4 20.4 0 007.468-7.467c1.324-2.293 2.022-5.033 2.376-8.941.356-3.924.357-8.908.357-15.659 0-6.751-.001-11.734-.357-15.659-.354-3.908-1.052-6.648-2.376-8.941a20.4 20.4 0 00-7.467-7.467c-2.293-1.324-5.033-2.022-8.941-2.376-3.925-.356-8.908-.357-15.66-.357-6.75 0-11.734.001-15.658.357z\" fill=\"#FF272C\"/><g filter=\"url(#filter0_b)\"><path d=\"M32.4 63c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\"/></g><g filter=\"url(#filter1_b)\"><path d=\"M62.4 63c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\"/></g><g filter=\"url(#filter2_b)\"><path d=\"M32.4 33c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\"/></g><g filter=\"url(#filter3_b)\"><path d=\"M62.4 33c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\"/></g><defs><filter id=\"filter0_b\" x=\"8.4\" y=\"26.4\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter><filter id=\"filter1_b\" x=\"38.4\" y=\"26.4\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter><filter id=\"filter2_b\" x=\"8.4\" y=\"-3.6\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter><filter id=\"filter3_b\" x=\"38.4\" y=\"-3.6\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter></defs></svg>\n", viewbox: "0 0 120 96", viewBox: "0 0 120 96" };

var SplashError = function SplashError(_ref) {
  var description = _ref.description,
      title = _ref.title,
      details = _ref.details,
      image = _ref.image,
      children = _ref.children;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showDetails = _React$useState2[0],
      setShowDetails = _React$useState2[1];

  var onCloseClick = function onCloseClick() {
    return setShowDetails(false);
  };

  var commonProps = {
    image: image || img$1,
    title: title,
    description: description,
    children: children
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showDetails && /*#__PURE__*/React.createElement(Modal, {
    title: title,
    onClose: onCloseClick,
    footerControls: [/*#__PURE__*/React.createElement(Button, {
      key: 0,
      intent: 'primary',
      onClick: onCloseClick
    }, "Close")]
  }, !!details && /*#__PURE__*/React.createElement(Text, {
    tag: "div"
  }, details)), details ? /*#__PURE__*/React.createElement(NonIdealStateAction, Object.assign({}, commonProps, {
    actionText: "Details",
    onActionClick: function onActionClick() {
      return setShowDetails(true);
    }
  })) : /*#__PURE__*/React.createElement(NonIdealState, commonProps));
};

var _excluded$3 = ["children", "className", "shimClassName", "subTitle", "title", "logo"];
var styles$d = {
  modal: /*#__PURE__*/css({
    name: "jnll8w",
    styles: "display:flex;flex-direction:row;flex-shrink:0;min-height:250px;border-radius:6px;overflow:hidden;box-shadow:0px 15px 15px rgba(4, 11, 29, 0.05)"
  } ),
  shim: /*#__PURE__*/css("background-color:", colors.baseBg, ";" + ("" ), "" ),
  subTitleWrap: /*#__PURE__*/css({
    name: "lta85y",
    styles: "margin:15px 0 30px 0"
  } ),
  subTitle: /*#__PURE__*/css({
    name: "172wzs2",
    styles: "color:rgba(0, 0, 0, 0.65)"
  } ),
  logoContainer: /*#__PURE__*/css("width:68px;flex-grow:0;flex-shrink:0;background:", colors.dark, ";display:flex;flex-direction:column;justify-content:center;position:relative;" + ("" ), "" ),
  logo: /*#__PURE__*/css({
    name: "89qtel",
    styles: "width:210px;position:absolute;transform:translate3d(-50%, -50%, 0) rotate(-90deg);left:50%;top:50%"
  } ),
  formContainer: /*#__PURE__*/css({
    name: "ev5sdo",
    styles: "flex-grow:1;padding:30px"
  } )
};
var SplashModal = function SplashModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      shimClassName = _ref.shimClassName,
      subTitle = _ref.subTitle,
      title = _ref.title,
      logo = _ref.logo,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement(BaseModal, Object.assign({}, props, {
    className: cx(styles$d.modal, className),
    shimClassName: cx(styles$d.shim, shimClassName)
  }), logo && /*#__PURE__*/React.createElement("div", {
    className: styles$d.logoContainer
  }, /*#__PURE__*/React.createElement(SVGImage, {
    glyph: logo,
    className: styles$d.logo
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$d.formContainer
  }, title && /*#__PURE__*/React.createElement(Text, {
    variant: "h1"
  }, title), subTitle && /*#__PURE__*/React.createElement("div", {
    className: styles$d.subTitleWrap
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "basic",
    className: styles$d.subTitle
  }, subTitle)), children));
};

var styles$c = {
  wrap: /*#__PURE__*/css({
    name: "bjn8wh",
    styles: "position:relative"
  } ),
  spin: /*#__PURE__*/css({
    name: "1imlx4v",
    styles: "position:absolute;left:50%;top:50%;transform:translate3d(-50%, -50%, 0)"
  } ),
  icon: /*#__PURE__*/css({
    name: "cnxkkh",
    styles: "width:100px;height:74px;fill:rgba(0, 0, 0, 0.25)"
  } ),
  container: /*#__PURE__*/css({
    name: "gz99lt",
    styles: "&.blur{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;opacity:0.5;}"
  } )
};
var Spin = /*#__PURE__*/function (_React$Component) {
  _inherits(Spin, _React$Component);

  var _super = _createSuper(Spin);

  function Spin() {
    _classCallCheck(this, Spin);

    return _super.apply(this, arguments);
  }

  _createClass(Spin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          enable = _this$props.enable,
          className = _this$props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$c.wrap, className)
      }, enable && this.renderSpin(), /*#__PURE__*/React.createElement("div", {
        className: cx(styles$c.container, {
          blur: enable
        })
      }, children));
    }
  }, {
    key: "renderSpin",
    value: function renderSpin() {
      return /*#__PURE__*/React.createElement("div", {
        className: styles$c.spin
      }, /*#__PURE__*/React.createElement(TarantoolLogoSpinner, {
        className: styles$c.icon
      }));
    }
  }]);

  return Spin;
}(React.Component);
Spin.defaultProps = {
  enable: false
};

var styles$b = {
  input: /*#__PURE__*/css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;appearance:none;&:focus+div::before{content:'';position:absolute;top:-3px;left:-3px;right:-3px;bottom:-3px;border:solid 1px rgba(255, 255, 255, 0);border-radius:15px;}&:focus+div::before{border-color:", rgba(colors.intentPrimary, 0.55), ";}" + ("" ), "" ),
  switcher: /*#__PURE__*/css({
    name: "i676p8",
    styles: "position:relative;flex-shrink:0;width:42px;height:22px;border:solid 1px transparent;border-radius:12px;margin-right:8px;box-sizing:border-box;background-color:#a6a6a6;cursor:pointer;&::after{content:'';position:absolute;top:1px;left:1px;width:18px;height:18px;border-radius:50%;background-color:#ffffff;}"
  } ),
  children: /*#__PURE__*/css({
    name: "1h52dri",
    styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  } ),
  childrenMargin: /*#__PURE__*/css({
    name: "1oaeivz",
    styles: "margin-right:8px"
  } ),
  basicDisabled: /*#__PURE__*/css({
    name: "1ll9bqd",
    styles: "cursor:default"
  } ),
  notDisabled: /*#__PURE__*/css({
    name: "ad32f",
    styles: "background-color:rgba(0, 0, 0, 0.25);&:hover,&:focus{background-color:rgba(0, 0, 0, 0.35);}"
  } ),
  checked: /*#__PURE__*/css("background-color:", colors.intentPrimary, ";&:hover,&:focus{background-color:", colors.activeAction, ";}&::after{left:auto;right:1px;}" + ("" ), "" ),
  disabled: /*#__PURE__*/css("border-color:", colors.intentBase, ";background-color:", colors.intentBaseBg, ";cursor:default;&::after{box-shadow:0px 0px 4px rgba(0, 0, 0, 0.15);}" + ("" ), "" ),
  checkedDisabled: /*#__PURE__*/css({
    name: "ojesl9",
    styles: "background-color:#fcc8cb;&::after{left:auto;right:1px;}"
  } ),
  label: /*#__PURE__*/css({
    name: "s5xdrg",
    styles: "display:flex;align-items:center"
  } )
};
var Switcher = function Switcher(_ref) {
  var _cx;

  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      name = _ref.name,
      onChange = _ref.onChange,
      title = _ref.title;
  return /*#__PURE__*/React.createElement("label", {
    className: cx(styles$b.label, className),
    title: title
  }, /*#__PURE__*/React.createElement("input", {
    checked: checked,
    className: styles$b.input,
    disabled: disabled,
    name: name,
    type: "checkbox",
    onChange: onChange
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(styles$b.switcher, (_cx = {}, _defineProperty(_cx, styles$b.notDisabled, !checked && !disabled), _defineProperty(_cx, styles$b.checked, checked && !disabled), _defineProperty(_cx, styles$b.disabled, !checked && disabled), _defineProperty(_cx, styles$b.basicDisabled, disabled), _defineProperty(_cx, styles$b.checkedDisabled, checked && disabled), _defineProperty(_cx, styles$b.childrenMargin, children), _cx))
  }), typeof children === 'string' ? /*#__PURE__*/React.createElement(Text, {
    className: styles$b.children
  }, children) : children);
};

var styles$a = {
  "default": {
    wrap: /*#__PURE__*/css({
      name: "13ku56z",
      styles: "display:flex;flex-direction:column;height:100%"
    } ),
    tab: /*#__PURE__*/css("position:relative;padding:14px 0;border:none;margin-right:30px;margin-bottom:-1px;border-bottom:solid 2px transparent;color:", colors.dark40, ";background-color:transparent;outline:none;cursor:pointer;&:hover,&:focus{z-index:", zIndex.inline, ";color:", colors.dark65, ";}&:last-child{margin-right:0;}" + ("" ), "" ),
    activeTab: /*#__PURE__*/css("color:", colors.dark, ";border-bottom-color:", colors.dark, ";" + ("" ), "" ),
    tabs: /*#__PURE__*/css("border-bottom:solid 1px ", colors.intentBase, ";" + ("" ), "" )
  },
  small: {
    wrap: /*#__PURE__*/css({
      name: "1fttcpj",
      styles: "display:flex;flex-direction:column"
    } ),
    tab: /*#__PURE__*/css("position:relative;cursor:pointer;border:none;font-size:14px;color:", colors.dark, ";width:100%;margin-left:8px;margin-right:8px;padding:9px 20px;border-radius:4px;background-color:", colors.baseBg, ";&:focus{background-color:", colors.baseBg, ";}&:hover{z-index:", zIndex.inline, ";background-color:#fff;}" + ("" ), "" ),
    activeTab: /*#__PURE__*/css({
      name: "3biupo",
      styles: "background-color:#fff!important;box-shadow:0px 2px 2px rgba(4, 11, 29, 0.05)"
    } ),
    tabs: /*#__PURE__*/css("display:flex;justify-content:space-around;background-color:", colors.baseBg, ";border-radius:4px;" + ("" ), "" )
  }
};
var Tabbed = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabbed, _React$Component);

  var _super = _createSuper(Tabbed);

  function Tabbed() {
    var _this;

    _classCallCheck(this, Tabbed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      activeTab: 0
    };
    return _this;
  }

  _createClass(Tabbed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          _this$props$tabs = _this$props.tabs,
          tabs = _this$props$tabs === void 0 ? [] : _this$props$tabs,
          activeTabProps = _this$props.activeTab,
          size = _this$props.size;
      var activeTab = this.state.activeTab;
      var tabIndex = activeTabProps !== null && activeTabProps !== void 0 ? activeTabProps : activeTab;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles$a[size].wrap, className)
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$a[size].tabs
      }, tabs && tabs.map(function (_ref, i) {
        var label = _ref.label;
        return /*#__PURE__*/React.createElement("button", {
          key: i,
          className: cx(_defineProperty({}, textStyles.h3, size === 'default'), styles$a[size].tab, _defineProperty({}, styles$a[size].activeTab, tabIndex === i)),
          onClick: function onClick(e) {
            return _this2.handleTabChange(i, e);
          }
        }, label);
      })), tabs[tabIndex].content);
    }
  }, {
    key: "handleTabChange",
    value: function handleTabChange(i, e) {
      var _this$props2, _this$props2$handleTa;

      e.preventDefault();
      this.setState({
        activeTab: i
      });
      (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$handleTa = _this$props2.handleTabChange) === null || _this$props2$handleTa === void 0 ? void 0 : _this$props2$handleTa.call(_this$props2, i, e);
    }
  }]);

  return Tabbed;
}(React.Component);
Tabbed.defaultProps = {
  size: 'default'
};

var styles$9 = {
  head: /*#__PURE__*/css("color:", colors.dark65, ";font-weight:600;font-size:14px;padding:12px 16px;text-align:left;" + ("" ), "" ),
  buttonSort: /*#__PURE__*/css("margin-left:-16px;font-weight:600;transition-timing-function:ease-in-out;transition-duration:0.07s;transition-property:fill;&:hover{background-color:", colors.intentBase, ";svg{fill:", colors.dark65, "!important;}}" + ("" ), "" )
};

function getSortDirection(isSortedDesc) {
  if (isSortedDesc === true) {
    return 'desc';
  }

  if (isSortedDesc === false) {
    return 'asc';
  }

  return undefined;
}

var TableHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var headerGroups = _ref.headerGroups,
      dataRows = _ref.dataRows;
  return /*#__PURE__*/React.createElement("thead", {
    ref: ref
  }, headerGroups.map(function (headerGroup, index1) {
    return /*#__PURE__*/React.createElement("tr", Object.assign({
      key: index1
    }, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column, index2) {
      var sortColumn = function sortColumn() {
        column.toggleSortBy && column.toggleSortBy(!column.isSortedDesc, false);
      };

      return /*#__PURE__*/React.createElement(Text, Object.assign({
        key: index2,
        tag: "th",
        className: styles$9.head
      }, column.getHeaderProps()), column.canSort && dataRows.length > 0 ? /*#__PURE__*/React.createElement(Button, {
        intent: "plain",
        className: styles$9.buttonSort,
        onClick: dataRows.length > 0 ? sortColumn : undefined,
        iconRight: function iconRight(props) {
          return /*#__PURE__*/React.createElement(IconHelperSortable, Object.assign({}, props, {
            sort: getSortDirection(column.isSortedDesc)
          }));
        }
      }, column.render('Header')) : column.render('Header'));
    }));
  }));
});

var styles$8 = {
  col: /*#__PURE__*/css({
    name: "10rtstj",
    styles: "padding:16px"
  } ),
  colText: /*#__PURE__*/css({
    name: "1nlvi0i",
    styles: "color:#000000a6"
  } ),
  row: /*#__PURE__*/css("border-bottom:1px solid #e5e5e5;&:hover{background-color:", rgba(colors.baseBg, 0.3), ";}" + ("" ), "" ),
  pointer: /*#__PURE__*/css({
    name: "e0dnmk",
    styles: "cursor:pointer"
  } ),
  topRow: /*#__PURE__*/css("color:", colors.dark40, ";background-color:", colors.baseBg, ";text-align:center;font-family:Inter;font-size:12px;line-height:18px;text-align:center;" + ("" ), "" ),
  sticky: /*#__PURE__*/css({
    name: "18e0a6p",
    styles: "position:-webkit-sticky;position:sticky;z-index:1;top:0"
  } )
};
function TableRow(_ref) {
  var row = _ref.row,
      rowClassName = _ref.rowClassName,
      onRowClick = _ref.onRowClick;
  return /*#__PURE__*/React.createElement("tr", Object.assign({
    onClick: onRowClick ? function () {
      return onRowClick(row);
    } : null,
    className: cx(styles$8.row, _defineProperty({}, styles$8.pointer, onRowClick))
  }, row.getRowProps()), row.cells.map(function (cell, index) {
    return /*#__PURE__*/React.createElement(Text, Object.assign({
      key: index,
      tag: "td",
      className: cx(styles$8.col, styles$8.colText, rowClassName),
      onClick: cell.column.id === 'selection' ? function (e) {
        e.stopPropagation();
        e.preventDefault();
        cell.row.toggleRowSelected(!cell.row.isSelected);
      } : null
    }, cell.getCellProps()), cell.render('Cell'));
  }));
}

// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

/* eslint-disable max-len,no-undef */
var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === '[object SafariRemoteNotification]';
}(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification);

var TableStickyRow = /*#__PURE__*/React.memo(function (_ref) {
  var cellsLength = _ref.cellsLength,
      topRowClassName = _ref.topRowClassName,
      topRowStickySide = _ref.topRowStickySide,
      headerRef = _ref.headerRef,
      children = _ref.children;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      theadHeight = _React$useState2[0],
      setTHeadHeight = _React$useState2[1];

  React.useEffect(function () {
    if (isSafari && headerRef.current) {
      setTHeadHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Text, {
    tag: "td",
    colSpan: cellsLength,
    className: cx(styles$8.topRow, _defineProperty({}, styles$8.sticky, !Number.isNaN(Number(topRowStickySide))), topRowClassName),
    style: {
      top: isSafari ? Number(topRowStickySide) - theadHeight : topRowStickySide
    }
  }, children));
});

var styles$7 = {
  table: /*#__PURE__*/css({
    name: "1f5rm2b",
    styles: "background-color:transparent;width:100%;border-spacing:initial;border-collapse:collapse"
  } ),
  tbody: /*#__PURE__*/css({
    name: "pz9wym",
    styles: "background-color:#ffffff"
  } ),
  loading: /*#__PURE__*/css({
    name: "1coh6b9",
    styles: "min-height:200px"
  } ),
  iconNoData: /*#__PURE__*/css({
    name: "8yee8r",
    styles: "height:96px;width:120px"
  } ),
  noData: /*#__PURE__*/css({
    name: "r026rb",
    styles: "background-color:#ffffff;padding:25px"
  } ),
  noDataText: /*#__PURE__*/css("margin-top:16px;color:", colors.dark65, ";" + ("" ), "" ),
  pagination: /*#__PURE__*/css({
    name: "mfy4g0",
    styles: "margin-top:40px;display:flex;justify-content:flex-end;margin-right:16px"
  } )
};
var emptyArr = [];
function Table(props) {
  var rowClassName = props.rowClassName,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? emptyArr : _props$columns,
      className = props.className,
      _props$data = props.data,
      data = _props$data === void 0 ? emptyArr : _props$data,
      pagination = props.pagination,
      onSelectedRowsChange = props.onSelectedRowsChange,
      tableKey = props.tableKey,
      _props$initialSelecte = props.initialSelectedRowIds,
      initialSelectedRowIds = _props$initialSelecte === void 0 ? emptyArr : _props$initialSelecte,
      _props$initialSortBy = props.initialSortBy,
      initialSortBy = _props$initialSortBy === void 0 ? emptyArr : _props$initialSortBy,
      manualPagination = props.manualPagination,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  var getRowId = React.useCallback(function (row, index) {
    return tableKey && row[tableKey] ? row[tableKey] : index;
  }, [tableKey]);
  var headerRef = React.useRef(null);

  var _useTable = useTable({
    columns: columns,
    data: data,
    getRowId: getRowId,
    initialState: {
      selectedRowIds: initialSelectedRowIds,
      sortBy: initialSortBy
    },
    manualPagination: !!manualPagination,
    autoResetSelectedRows: !manualPagination,
    autoResetSortBy: !manualPagination
  }, useSortBy, usePagination, useRowSelect, function (hooks) {
    onSelectedRowsChange && hooks.visibleColumns.push(function (columns) {
      return [// Let's make a column for selection
      {
        id: 'selection',
        Header: function Header(_ref) {
          var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/React.createElement(Checkbox, getToggleAllRowsSelectedProps());
        },
        Cell: function Cell(_ref2) {
          var getToggleRowSelectedProps = _ref2.row.getToggleRowSelectedProps;
          return /*#__PURE__*/React.createElement(Checkbox, getToggleRowSelectedProps());
        }
      }].concat(_toConsumableArray(columns));
    });
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      prepareRow = _useTable.prepareRow,
      rows = _useTable.rows,
      page = _useTable.page,
      visibleColumns = _useTable.visibleColumns,
      gotoPage = _useTable.gotoPage,
      setPageSize = _useTable.setPageSize,
      selectedFlatRows = _useTable.selectedFlatRows,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      selectedRowIds = _useTable$state.selectedRowIds;

  useMountedLayoutEffect(function () {
    if (onSelectedRowsChange) {
      var selectedRows = selectedFlatRows.map(function (row) {
        return row.original;
      });
      onSelectedRowsChange(selectedRows, Object.keys(selectedRowIds));
    }
  }, [selectedFlatRows]);
  var dataRows = React.useMemo(function () {
    return (pagination ? page : rows).map(function (item) {
      prepareRow(item);
      return item;
    });
  }, [prepareRow, pagination, page, rows]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spin, {
    enable: loading,
    className: cx(_defineProperty({}, styles$7.loading, loading))
  }, /*#__PURE__*/React.createElement("table", Object.assign({}, getTableProps(), {
    className: cx(styles$7.table, className)
  }), /*#__PURE__*/React.createElement(TableHeader, {
    ref: headerRef,
    headerGroups: headerGroups,
    dataRows: dataRows
  }), /*#__PURE__*/React.createElement("tbody", Object.assign({
    className: styles$7.tbody
  }, getTableBodyProps()), dataRows.map(function (row) {
    var topRow = props.topRowKey && row.original[props.topRowKey];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: row.getRowProps().key
    }, topRow && /*#__PURE__*/React.createElement(TableStickyRow, {
      cellsLength: row.cells.length,
      topRowClassName: props.topRowClassName,
      topRowKey: props.topRowKey,
      topRowStickySide: props.topRowStickySide,
      headerRef: headerRef
    }, topRow), /*#__PURE__*/React.createElement(TableRow, {
      row: row,
      rowClassName: rowClassName,
      onRowClick: props.onRowClick
    }));
  }), !rows.length && !loading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: visibleColumns.length
  }, /*#__PURE__*/React.createElement(NonIdealState, {
    className: cx(styles$7.noData),
    image: img$D,
    imageClassName: styles$7.iconNoData
  }, /*#__PURE__*/React.createElement(Text, {
    className: styles$7.noDataText
  }, "The list is empty")))))), pagination && rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles$7.pagination
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: pageIndex,
    pageSize: pageSize,
    items: rows.length,
    onPageChange: gotoPage,
    setPageSize: setPageSize,
    showTotal: true
  })), manualPagination && /*#__PURE__*/React.createElement("div", {
    className: styles$7.pagination
  }, /*#__PURE__*/React.createElement(PaginationControlled, {
    page: manualPagination.page,
    pageSize: manualPagination.pageSize,
    disableNextPageButton: manualPagination.disableNextPageButton,
    onPageChange: manualPagination.onChangePage,
    setPageSize: manualPagination.onChangePageSize
  }))));
}

var styles$6 = {
  tag: /*#__PURE__*/css("position:relative;border:none;border-radius:4px;padding:1px 8px 3px;margin:0 2px;font-size:12px;line-height:18px;outline:none;transition:0.1s ease-in-out;transition-property:background-color,color;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px ", rgba(colors.intentPrimary, 0.55), ";border-radius:3px;}" + ("" ), "" ),
  interactive: function interactive(className) {
    return className ? /*#__PURE__*/css("color:rgba(0, 0, 0, 0.2);background-color:transparent;.", className, ":hover &{color:#ffffff;background-color:rgba(0, 0, 0, 0.65);}.", className, " &:hover,.", className, " &:focus{background-color:#000000;color:#ffffff;}" + ("" ), "" ) : '';
  },
  "static": /*#__PURE__*/css({
    name: "dz08aa",
    styles: "color:#ffffff;background-color:rgba(0, 0, 0, 0.65);&:hover,&:focus{background-color:#000000;color:#ffffff;}"
  } ),
  pointer: /*#__PURE__*/css({
    name: "e0dnmk",
    styles: "cursor:pointer"
  } )
};
var Tag = function Tag(_ref) {
  var _cx;

  var highlightingOnHover = _ref.highlightingOnHover,
      className = _ref.className,
      onClick = _ref.onClick,
      text = _ref.text,
      title = _ref.title;
  var Element = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Element, {
    className: cx((_cx = {}, _defineProperty(_cx, styles$6.interactive(highlightingOnHover), !!highlightingOnHover), _defineProperty(_cx, styles$6["static"], !highlightingOnHover), _defineProperty(_cx, styles$6.pointer, onClick), _cx), styles$6.tag, className),
    onClick: onClick,
    title: title
  }, text);
};

var styles$5 = {
  wrapper: /*#__PURE__*/css({
    name: "1t1kfui",
    styles: "display:flex;align-items:baseline;margin-bottom:-4px;user-select:none"
  } ),
  heading: /*#__PURE__*/css({
    name: "wwuwac",
    styles: "margin-right:8px;opacity:0.6"
  } ),
  tag: /*#__PURE__*/css({
    name: "11rcwxl",
    styles: "margin-bottom:4px"
  } )
};

var toString = function toString(v) {
  return v + '';
};
/**
 * @deprecated
 */


var TagsList = function TagsList(_ref) {
  var className = _ref.className,
      heading = _ref.heading,
      highlightingOnHover = _ref.highlightingOnHover,
      onTagClick = _ref.onTagClick,
      renderItem = _ref.renderItem,
      tagClassName = _ref.tagClassName,
      values = _ref.values;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$5.wrapper, className)
  }, heading && /*#__PURE__*/React.createElement(Text, {
    className: styles$5.heading,
    variant: "h5",
    tag: "span"
  }, /*#__PURE__*/React.createElement("b", null, "".concat(heading, ":"))), /*#__PURE__*/React.createElement("div", null, (values || []).map(function (value, index) {
    return /*#__PURE__*/React.createElement(Tag, {
      key: index,
      className: cx(styles$5.tag, tagClassName),
      onClick: function onClick() {
        return onTagClick && onTagClick(value);
      },
      text: renderItem ? renderItem(value) : toString(value),
      highlightingOnHover: highlightingOnHover
    });
  })));
};

var _excluded$2 = ["autoComplete", "autoFocus", "className", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "disabled", "error", "name", "onChange", "readOnly", "rows", "title", "value", "placeholder", "size"];
var TextArea = /*#__PURE__*/function (_React$Component) {
  _inherits(TextArea, _React$Component);

  var _super = _createSuper(TextArea);

  function TextArea() {
    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.elementRef = /*#__PURE__*/createRef();
    _this.state = {
      focused: false
    };

    _this.focus = function () {
      if (_this.elementRef && _this.elementRef.current) {
        _this.elementRef.current.focus();
      }
    };

    _this.handleInputFocus = function () {
      return _this.setState({
        focused: true
      });
    };

    _this.handleInputBlur = function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    };

    return _this;
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          autoFocus = _this$props.autoFocus,
          className = _this$props.className,
          onKeyDown = _this$props.onKeyDown,
          onKeyDownCapture = _this$props.onKeyDownCapture,
          onKeyPress = _this$props.onKeyPress,
          onKeyPressCapture = _this$props.onKeyPressCapture,
          onKeyUp = _this$props.onKeyUp,
          onKeyUpCapture = _this$props.onKeyUpCapture,
          disabled = _this$props.disabled,
          error = _this$props.error,
          name = _this$props.name,
          onChange = _this$props.onChange,
          readOnly = _this$props.readOnly,
          rows = _this$props.rows,
          title = _this$props.title,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, _excluded$2);

      var focused = this.state.focused;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(commonInputStyles.outer, (_cx = {}, _defineProperty(_cx, commonInputStyles.disabledOuter, disabled), _defineProperty(_cx, commonInputStyles.focused, focused), _defineProperty(_cx, commonInputStyles.error, error), _cx), className),
        title: title
      }, /*#__PURE__*/React.createElement("textarea", Object.assign({}, props, {
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        className: cx(commonInputStyles.input, commonInputSizes[size || 'l'], genericStyles.scrollbars, _defineProperty({}, commonInputStyles.disabled, disabled)),
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyDownCapture: onKeyDownCapture,
        onKeyPress: onKeyPress,
        onKeyPressCapture: onKeyPressCapture,
        onKeyUp: onKeyUp,
        onKeyUpCapture: onKeyUpCapture,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        value: value,
        placeholder: placeholder,
        rows: rows,
        readOnly: readOnly,
        ref: this.elementRef
      })));
    }
  }]);

  return TextArea;
}(React.Component);

var styles$4 = {
  wrap: /*#__PURE__*/css({
    name: "n1lsvi",
    styles: "padding:0;list-style:none"
  } ),
  outer: /*#__PURE__*/css({
    name: "1sk2eml",
    styles: "margin:0 -16px"
  } ),
  item: /*#__PURE__*/css({
    name: "1t3em2s",
    styles: "padding:12px 16px;margin-bottom:8px;border-radius:2px;background-color:#ffffff;box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.11);&:last-child{margin-bottom:0;}"
  } ),
  softCorners: /*#__PURE__*/css({
    name: "hw9ka2",
    styles: "border-radius:4px;margin-bottom:16px"
  } )
};
var TiledListItem = function TiledListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$corners = _ref.corners,
      corners = _ref$corners === void 0 ? 'hard' : _ref$corners;
  return /*#__PURE__*/React.createElement("li", {
    className: cx(styles$4.item, _defineProperty({}, styles$4.softCorners, corners === 'soft'), className)
  }, children);
};
var TiledList = function TiledList(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$outer = _ref2.outer,
      outer = _ref2$outer === void 0 ? true : _ref2$outer;
  return /*#__PURE__*/React.createElement("ul", {
    className: cx(styles$4.wrap, _defineProperty({}, styles$4.outer, outer), className)
  }, children);
};

var img = {id: "5OK8-EGFzgNqESYCqdRMK", content: "<svg width=\"100\" height=\"80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.382 24.166h.11c3.987 0 7.052 0 9.485.237 2.459.24 4.378.73 6.034 1.778a13 13 0 014.032 4.032c1.049 1.656 1.538 3.575 1.778 6.035.238 2.432.238 5.497.238 9.483v.684c0 3.986 0 7.051-.238 9.484-.24 2.46-.73 4.378-1.778 6.034a13 13 0 01-4.032 4.033c-1.656 1.048-3.575 1.538-6.034 1.778-2.433.237-5.498.237-9.484.237h-.111c-3.986 0-7.051 0-9.484-.237-2.46-.24-4.378-.73-6.034-1.778a13 13 0 01-4.033-4.033c-1.048-1.656-1.538-3.575-1.778-6.034-.237-2.433-.237-5.498-.237-9.484v-.684c0-3.986 0-7.05.237-9.483.24-2.46.73-4.379 1.778-6.035a13 13 0 014.033-4.032c1.656-1.049 3.575-1.538 6.034-1.778 2.432-.237 5.497-.237 9.484-.237zm-9.29 2.227c-2.309.226-3.876.666-5.159 1.478a11 11 0 00-3.412 3.412c-.812 1.283-1.252 2.85-1.477 5.159-.227 2.324-.228 5.292-.228 9.345v.573c0 4.053.001 7.02.228 9.345.225 2.309.665 3.876 1.477 5.159a10.998 10.998 0 003.412 3.412c1.283.812 2.85 1.252 5.16 1.477 2.323.227 5.291.228 9.344.228 4.053 0 7.021-.001 9.345-.228 2.31-.225 3.877-.665 5.16-1.477a11 11 0 003.411-3.412c.812-1.283 1.253-2.85 1.478-5.16.227-2.323.228-5.291.228-9.344v-.573c0-4.053-.001-7.021-.228-9.345-.225-2.309-.666-3.876-1.478-5.16a11 11 0 00-3.412-3.411c-1.282-.812-2.85-1.252-5.159-1.478-2.324-.226-5.292-.227-9.345-.227-4.053 0-7.02 0-9.345.227z\" fill=\"#8E9199\"/><g filter=\"url(#filter0_b)\"><rect x=\"20.059\" y=\"13.136\" width=\"46.398\" height=\"46.398\" rx=\"12\" fill=\"#e3e3e3\"/></g><defs><filter id=\"filter0_b\" x=\"-3.941\" y=\"-10.864\" width=\"94.398\" height=\"94.398\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"/></filter></defs></svg>", viewbox: "0 0 100 80", viewBox: "0 0 100 80" };

var styles$3 = /*#__PURE__*/css({
  name: "157xhr7",
  styles: "width:16px;height:16px"
} );
var IconDragFile = function IconDragFile(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Icon$1, {
    className: cx(styles$3, className),
    glyph: img
  });
};

var _excluded$1 = ["ref"];
var styles$2 = {
  wrap: /*#__PURE__*/css({
    name: "zjik7",
    styles: "display:flex"
  } ),
  icon: /*#__PURE__*/css({
    name: "1yu3ibr",
    styles: "width:100px;height:80px;margin-bottom:16px"
  } ),
  preloader: /*#__PURE__*/css({
    name: "7kn5bz",
    styles: "width:68px;height:48px;margin-bottom:16px"
  } ),
  notice: /*#__PURE__*/css("margin-top:10px;color:", colors.dark65, ";" + ("" ), "" )
};

var getColor = function getColor(_ref) {
  var isDragAccept = _ref.isDragAccept;
  return isDragAccept ? colors.intentPrimary : colors.intentBase;
};

var Container = createStyled("div", {
  target: "e1iml2wq0"
} )("flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;border-width:1px;border-radius:4px;border-color:", function (props) {
  return getColor(props);
}, ";border-style:dashed;background-color:", colors.intentBaseActive, ";transition:border 0.24s ease-in-out;outline:none;cursor:pointer;" + ("" ));

var UploadZone = function UploadZone(_ref2) {
  var _ref2$accept = _ref2.accept,
      accept = _ref2$accept === void 0 ? '' : _ref2$accept,
      handler = _ref2.handler,
      name = _ref2.name,
      multiple = _ref2.multiple,
      className = _ref2.className,
      title = _ref2.title,
      subTitle = _ref2.subTitle,
      loading = _ref2.loading;
      _ref2.files;

  var _useDropzone = useDropzone({
    accept: accept,
    multiple: multiple,
    onDrop: handler
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragAccept = _useDropzone.isDragAccept;

  var _getRootProps = getRootProps({
    isDragAccept: isDragAccept
  }),
      ref = _getRootProps.ref,
      rootProps = _objectWithoutProperties(_getRootProps, _excluded$1);

  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$2.wrap, className),
    ref: ref
  }, /*#__PURE__*/React.createElement(Container, rootProps, /*#__PURE__*/React.createElement("input", Object.assign({}, getInputProps(), {
    name: name
  })), loading ? /*#__PURE__*/React.createElement(TarantoolLogoSpinner, {
    className: styles$2.preloader
  }) : /*#__PURE__*/React.createElement(IconDragFile, {
    className: styles$2.icon
  }), /*#__PURE__*/React.createElement(Text, {
    variant: "h3",
    tag: "span"
  }, loading ? 'Uploading...' : title || 'Click or drag file to this area to upload'), !!subTitle && !loading && /*#__PURE__*/React.createElement(Text, {
    className: styles$2.notice
  }, subTitle)));
};

var _excluded = ["className"];
var styles$1 = {
  uriWrap: /*#__PURE__*/css({
    name: "s5xdrg",
    styles: "display:flex;align-items:center"
  } ),
  uriIcon: /*#__PURE__*/css({
    name: "puaqug",
    styles: "width:14px;height:14px;margin-right:4px"
  } ),
  uri: /*#__PURE__*/css({
    name: "5ptroy",
    styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0, 0, 0, 0.65)"
  } ),
  hereIcon: /*#__PURE__*/css("fill:", colors.intentWarningAccent, ";" + ("" ), "" )
};

var IconHere = function IconHere(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(IconBoldArrowRight, Object.assign({
    className: cx(styles$1.hereIcon, className)
  }, props));
};

var UriLabel = function UriLabel(_ref2) {
  var className = _ref2.className,
      icon = _ref2.icon,
      title = _ref2.title,
      uri = _ref2.uri,
      weAreHere = _ref2.weAreHere;
  var Icon = icon || (weAreHere ? IconHere : IconLink);
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles$1.uriWrap, className),
    title: title
  }, /*#__PURE__*/React.createElement(Icon, {
    className: styles$1.uriIcon
  }), /*#__PURE__*/React.createElement(Text, {
    className: styles$1.uri,
    variant: "p",
    tag: "span"
  }, uri));
};

var styles = {
  alert: /*#__PURE__*/css({
    name: "1glxuqs",
    styles: "padding:15px;border:1px solid;border-radius:4px;margin-top:16px;margin-bottom:16px"
  } ),
  success: /*#__PURE__*/css("border-color:", colors.intentSuccessBorder, ";background-color:", colors.intentSuccessBg, ";color:", colors.intentSuccess, ";" + ("" ), "" ),
  error: /*#__PURE__*/css("border-color:", colors.intentDangerBorder, ";background-color:", colors.intentDangerBg, ";color:", colors.intentDanger, ";" + ("" ), "" )
};

var Alert = function Alert(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(Text, {
    className: cx(styles.alert, styles[type], className),
    tag: "div"
  }, children);
};

export { Alert, AppHeader, AppLayout, BaseModal, Breadcrumbs, Button, Checkbox, CodeBlock, CodeBlockWrap, ConfirmModal, ControlsPanel, CopyToClipboard, DotIndicator, DraggableList, DraggableListContainer, DraggableListItem, DraggableTable, Dropdown, DropdownDivider, DropdownItem, ExpandableBlock, FlatList, FlatListItem, FormField, HealthStatus, INTERACTIVE_ELEMENT_SELECTOR, Icon$1 as Icon, IconArrow, IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp, IconAttach, IconAttention, IconBell, IconBoldArrowRight, IconBox, IconBoxNoData, IconBucket, IconBurger, IconCalendar, IconCancel, IconCheckbox, IconCheckboxChecked, IconCheckboxCheckedDisabled, IconCheckboxDisabled, IconCheckboxIndeterminate, IconCheckboxIndeterminateDisabled, IconChevron, IconChevronDown, IconChevronLeft, IconChevronRight, IconChip, IconChipDanger, IconChipWarning, IconClock, IconClose, IconCluster, IconCode, IconCopy, IconCreateFile, IconCreateFolder, IconDelete, IconDocumentCode, IconDownload, IconEdit, IconEmptyData, IconEyeClosed, IconEyeOpened, IconFailed, IconFile, IconFolder, IconFolderOpened, IconGear, IconGeoPin, IconHelperClose, IconHelperSortable, IconInfo, IconLink, IconMore, IconMoreBurger, IconOk, IconPlay, IconRadio, IconRadioChecked, IconRadioCheckedDisabled, IconRadioDisabled, IconRefresh, IconSchema, IconSearch, IconSortableAsc, IconSortableDesc, IconSpinner, IconStop, IconStopped, IconSuccess, IconTask, IconTrash, IconUser, IconUsers, Input, InputGroup, InputPassword, LabeledInput, LeaderFlag, LeaderFlagSmall, Link, Markdown, Modal, NonIdealState, NonIdealStateAction, NotificationSplash, NotificationSplashFixed, OverflowList, PageCard, PageLayout, PageLayoutWithRef, PageSection, Pagination, PaginationControlled, ModalBody as PopupBody, ModalFooter as PopupFooter, PopupNotificationList, ProgressBar, RadioButton, ResizeSensor, SVGImage, Scrollbar, SectionPreloader, Select, SideMenu, Spin, SplashError, SplashModal, Switcher, SyntaxHighlight, Tabbed, Table, Tag, TagsList, img$3 as TarantoolLogoCompact, img$2 as TarantoolLogoFull, TarantoolLogoSpinner, Text, TextArea, TiledList, TiledListItem, Tooltip, UploadZone, UriLabel, appLayoutTopPanelHeight, baseFontFamily, colors, copyToClipboard, genericStyles, iconSize, keyFrames, monoFontFamily, navItemHeight, navWidthCollapsed, navWidthExpanded, pageLayoutMaxWidth, pageLayoutMinWidth, img$5 as splashGenericErrorSvg, img$4 as splashSelectFileSvg, styles$N as styles, textStyles, img$1 as windowErrorSvg, withCopyToClipboard, withDropdown, withPopover, withTooltip, zIndex };if (window) { window.document.addEventListener('DOMContentLoaded', function(){ const div = document.createElement('div'); div.setAttribute('style', 'position: absolute; height:0; width: 0; overflow: hidden;');  div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style>\n    .sprite-symbol-usage {display: none;}\n    .sprite-symbol-usage:target {display: inline;}\n  </style><symbol viewBox=\"0 0 12 12\" id=\"-0FVSup8MAH57V-3vC8_3\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"-fkK13-iy5PALaDNph-aQ\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"-yl_wtod2deMxvH_ApuAK\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 24 24\" id=\"07ic80gZeFKl8eymdhNVM\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\" /><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 154 28\" id=\"0UaInuRaCzqzOY-KmLPJ5\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.983 21.023h1.998v-2.501h-1.723c-1.574 0-2.274-.576-2.274-1.826v-5.979h3.997V8.266h-3.997V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.65 4.327 4.622 4.327zm10.099.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.723-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.097 4.153zm11.812 2.226h-2.623V8.266h2.623v1.726c.949-1.201 2.173-1.726 3.996-1.726h1.05v2.451h-1.05c-2.373 0-3.996 1.476-3.996 3.677v6.629zm12.189.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.724-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.096 4.153zm11.812 2.226h-2.623V8.266h2.623v1.276c.874-.926 2.173-1.601 3.897-1.601 3.172 0 5.321 2.35 5.321 5.853v7.23h-2.623v-7.155c0-2.076-1.249-3.377-3.123-3.377-1.973 0-3.472 1.476-3.472 3.277v7.254zm17.409 0h1.998v-2.501h-1.723c-1.574 0-2.273-.576-2.273-1.826v-5.979h3.996V8.266h-3.996V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.648 4.327 4.621 4.327zm16.59-6.378c0 3.752-3.022 6.703-6.819 6.703s-6.82-2.951-6.82-6.703c0-3.753 3.023-6.704 6.82-6.704s6.819 2.951 6.819 6.704zm-10.891 0c0 2.4 1.723 4.152 4.072 4.152 2.348 0 4.071-1.751 4.071-4.152 0-2.402-1.723-4.153-4.071-4.153-2.349 0-4.072 1.751-4.072 4.152zm19.22 6.703c3.797 0 6.821-2.951 6.821-6.703 0-3.753-3.024-6.704-6.821-6.704-3.797 0-6.82 2.951-6.82 6.704 0 3.752 3.023 6.703 6.82 6.703zm0-2.551c-2.348 0-4.072-1.751-4.072-4.152 0-2.402 1.724-4.153 4.072-4.153s4.073 1.751 4.073 4.152c0 2.402-1.725 4.153-4.073 4.153zM154 21.023h-2.623V3.013H154v18.01z\" fill=\"#fff\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 0 1-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 0 1-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 0 1 8.833.118z\" fill=\"url(#0UaInuRaCzqzOY-KmLPJ5_paint0_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 0 1 .033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 0 1-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 0 1 7.067.094z\" fill=\"url(#0UaInuRaCzqzOY-KmLPJ5_paint1_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 0 1-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 0 1 2.484-2.29z\" fill=\"#FF0D2A\" /><defs></defs></symbol><radialGradient id=\"0UaInuRaCzqzOY-KmLPJ5_paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\" /><stop offset=\"1\" stop-color=\"#FF0D2A\" /></radialGradient><radialGradient id=\"0UaInuRaCzqzOY-KmLPJ5_paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\" /><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\" /></radialGradient><symbol viewBox=\"0 0 16 16\" id=\"0x7dR3WNoVsdbEP2Mh4X0\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /><path d=\"M5 5h6v6H5z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"43EdGJib8Hk9kSllZDxLd\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 100 80\" id=\"5OK8-EGFzgNqESYCqdRMK\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.382 24.166h.11c3.987 0 7.052 0 9.485.237 2.459.24 4.378.73 6.034 1.778a13 13 0 014.032 4.032c1.049 1.656 1.538 3.575 1.778 6.035.238 2.432.238 5.497.238 9.483v.684c0 3.986 0 7.051-.238 9.484-.24 2.46-.73 4.378-1.778 6.034a13 13 0 01-4.032 4.033c-1.656 1.048-3.575 1.538-6.034 1.778-2.433.237-5.498.237-9.484.237h-.111c-3.986 0-7.051 0-9.484-.237-2.46-.24-4.378-.73-6.034-1.778a13 13 0 01-4.033-4.033c-1.048-1.656-1.538-3.575-1.778-6.034-.237-2.433-.237-5.498-.237-9.484v-.684c0-3.986 0-7.05.237-9.483.24-2.46.73-4.379 1.778-6.035a13 13 0 014.033-4.032c1.656-1.049 3.575-1.538 6.034-1.778 2.432-.237 5.497-.237 9.484-.237zm-9.29 2.227c-2.309.226-3.876.666-5.159 1.478a11 11 0 00-3.412 3.412c-.812 1.283-1.252 2.85-1.477 5.159-.227 2.324-.228 5.292-.228 9.345v.573c0 4.053.001 7.02.228 9.345.225 2.309.665 3.876 1.477 5.159a10.998 10.998 0 003.412 3.412c1.283.812 2.85 1.252 5.16 1.477 2.323.227 5.291.228 9.344.228 4.053 0 7.021-.001 9.345-.228 2.31-.225 3.877-.665 5.16-1.477a11 11 0 003.411-3.412c.812-1.283 1.253-2.85 1.478-5.16.227-2.323.228-5.291.228-9.344v-.573c0-4.053-.001-7.021-.228-9.345-.225-2.309-.666-3.876-1.478-5.16a11 11 0 00-3.412-3.411c-1.282-.812-2.85-1.252-5.159-1.478-2.324-.226-5.292-.227-9.345-.227-4.053 0-7.02 0-9.345.227z\" fill=\"#8E9199\" /><g filter=\"url(#5OK8-EGFzgNqESYCqdRMK_filter0_b)\"><rect x=\"20.059\" y=\"13.136\" width=\"46.398\" height=\"46.398\" rx=\"12\" fill=\"#e3e3e3\" /></g><defs><filter id=\"5OK8-EGFzgNqESYCqdRMK_filter0_b\" x=\"-3.941\" y=\"-10.864\" width=\"94.398\" height=\"94.398\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter></defs></symbol><symbol fill=\"none\" viewBox=\"0 0 80 112\" id=\"5ovKUSHkiD0wX_uEjgBwx\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 128 128\" id=\"69BbyiMu8_wWzUePxvJ06\"><g><circle cx=\"16\" cy=\"64\" r=\"16\" /><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\" /><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\" /></g></symbol><symbol viewBox=\"0 0 14 14\" id=\"7tVopr6U1M75ESFwIrkfA\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"BYBGvq5AT9ID2cUKdR0xP\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"BqX6cmzUlZKaLFuPOSJWL\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"CBncCjT3ukL8WQT7mPYCd\"><rect width=\"16\" height=\"16\" rx=\"2\" /><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"CdDS7Wx_UvLcUUxLfS5pO\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"F_P5xpQmI9w9oMDKciuVD\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"Fr7ZGP38l-8yzCU952YTo\"><circle cx=\"2\" cy=\"8\" r=\"2\" /><circle cx=\"8\" cy=\"8\" r=\"2\" /><circle cx=\"14\" cy=\"8\" r=\"2\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"G3wQvDM3gm2Uno_38m_WS\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /><path d=\"M5 5h6v6H5z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"GFfIG-AjlmP8r1WtEj3cJ\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"GX1xpD2tJ0ddhQzunZ__A\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"HlCeltQNsltrzSzS-QTfh\"><path d=\"M15.7 7.14l-4.98-3.97c-.51-.4-1.29-.04-1.29.62v1.33c0 .42-.28.8-.7.8H.76a.75.75 0 00-.77.75v2.09c0 .4.35.77.77.77H8.7c.43 0 .71.34.71.76v1.33c0 .65.78 1 1.28.6l4.98-3.86c.41-.3.43-.9.03-1.22z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"INRW_J-4xZH91VeoQeVR4\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.4776 5.30071C12.0871 4.91018 11.4539 4.91018 11.0634 5.30071L7.17529 9.18881L5.28718 7.30071C4.89666 6.91018 4.2635 6.91018 3.87297 7.30071C3.48245 7.69123 3.48245 8.3244 3.87297 8.71492L6.22966 11.0716C6.48604 11.328 6.84699 11.4161 7.17521 11.3358C7.50346 11.4161 7.86448 11.3281 8.12089 11.0716L12.4776 6.71492C12.8681 6.3244 12.8681 5.69123 12.4776 5.30071Z\" fill=\"white\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"IkCrEccVfFc87rINBvynO\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"JvboS3--N5iV6pk89hvrN\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"MVWLXZiRD5zJS7jyVIBoZ\">\n<path d=\"M5 4L12 8L5 12V4Z\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"Md8yHRnE8Gbfmm2JuCEdB\"><rect y=\"3\" width=\"16\" height=\"2\" rx=\"1\" /><rect y=\"7\" width=\"11\" height=\"2\" rx=\"1\" /><rect y=\"11\" width=\"7\" height=\"2\" rx=\"1\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"MuFebTlZKhTOdSfvH9QV2\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"NKe1isAgQtAHroGGLjn-L\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"NbgqbVhQQbMvTnYZfDyVe\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"NsNcDqResefz1Qy5D7zaZ\"><path d=\"M9.384 8l6.33-6.328a.976.976 0 0 0 0-1.382.974.974 0 0 0-1.382 0L8 6.616 1.668.287a.974.974 0 0 0-1.381 0 .976.976 0 0 0 0 1.382L6.617 8l-6.33 6.33a.976.976 0 0 0 .69 1.668c.251 0 .5-.094.691-.285L8 9.382l6.332 6.332a.97.97 0 0 0 .69.286.976.976 0 0 0 .69-1.668L9.385 8.001z\" /></symbol><symbol viewBox=\"0 0 42 8\" id=\"PepIxzV7KKfKMQT6xGMcZ\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"QZX7WAhcPPtY2oYjW4pFO\"><path d=\"M8 0C3.58125 0 0 3.58125 0 8c0 4.4188 3.58125 8 8 8 4.4188 0 8-3.5812 8-8 0-4.41875-3.5812-8-8-8zm4.8609 12.8609c-.6312.6313-1.3671 1.1282-2.1859 1.4735-.84687.3594-1.74687.5406-2.675.5406-.92812 0-1.82812-.1812-2.675-.5391-.81875-.3468-1.55312-.8421-2.18594-1.4734-.63125-.6312-1.12812-1.3672-1.47344-2.1859C1.30625 9.82812 1.125 8.92813 1.125 8c0-.92812.18125-1.82812.53906-2.675.34688-.81875.84219-1.55312 1.47344-2.18594.63125-.63125 1.36719-1.12812 2.18594-1.47344C6.17188 1.30625 7.07188 1.125 8 1.125c.92813 0 1.82813.18125 2.675.53906.8188.34688 1.5531.84219 2.1859 1.47344.6313.63125 1.1282 1.36719 1.4735 2.18594.3594.84844.5406 1.74844.5406 2.67656 0 .92813-.1812 1.82813-.5391 2.675-.3468.8188-.8421 1.5547-1.475 2.1859zM9.84688 11.025H8.51562V5.55469c0-.31094-.25156-.5625-.5625-.5625h-1.5c-.31093 0-.5625.25156-.5625.5625s.25157.5625.5625.5625h.9375V11.025H6.05938c-.31094 0-.5625.2516-.5625.5625s.25156.5625.5625.5625H9.84688c.31092 0 .56252-.2516.56252-.5625s-.2516-.5625-.56252-.5625zM7.39062 3.44531c0 .31066.25185.5625.5625.5625.31067 0 .5625-.25184.5625-.5625s-.25183-.5625-.5625-.5625c-.31065 0-.5625.25184-.5625.5625z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"QvfZzM4VCGj6SV5O0TyNT\"><rect width=\"16\" height=\"16\" rx=\"2\" /><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"QyY1IdF0ELCCnrxqeU7br\"><path d=\"M13.44 13H13V6a5 5 0 00-4.44-4.97V.56a.56.56 0 10-1.12 0v.47A5 5 0 003 6v7h-.44a.56.56 0 100 1.13h4.31v.74a1.12 1.12 0 102.25 0v-.74h4.32a.56.56 0 100-1.13zm-1.56 0H4.12V6a3.87 3.87 0 117.75 0v7z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"Rock3db634b28Axdsyhdu\"><path d=\"M8 1a6.96 6.96 0 0 1 4.95 2.05 6.963 6.963 0 0 1 1.5 2.225c.366.864.55 1.78.55 2.725a6.958 6.958 0 0 1-2.05 4.95 6.962 6.962 0 0 1-2.225 1.5c-.864.366-1.78.55-2.725.55a6.958 6.958 0 0 1-4.95-2.05 6.963 6.963 0 0 1-1.5-2.225A6.946 6.946 0 0 1 1 8a6.96 6.96 0 0 1 2.05-4.95 6.964 6.964 0 0 1 2.225-1.5A6.946 6.946 0 0 1 8 1z\" /><path d=\"M4 9a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H4z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"SHRBYvqnDGtfBdtJ-YE0t\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\" /></symbol><symbol viewBox=\"0 0 12 14\" id=\"SNKdX7GYCgkLfkqN7qaux\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.64 2c.068-.126.165-.258.3-.383C4.276 1.305 4.894 1 6 1s1.724.305 2.06.617c.135.125.232.257.3.383H3.64zM2.57 2c.1-.368.315-.77.69-1.117C3.824.361 4.706 0 6 0c1.294 0 2.176.361 2.74.883.375.347.59.749.69 1.117h1.37c.663 0 1.2.542 1.2 1.21v1.211c0 .669-.537 1.21-1.2 1.21h-.048L10.2 12.29c0 .668-.537 1.21-1.2 1.21H3c-.663 0-1.2-.542-1.198-1.16l-.554-6.708H1.2c-.663 0-1.2-.542-1.2-1.21V3.21C0 2.542.537 2 1.2 2h1.37zM1.2 3.21h9.6v1.211H1.2v-1.21zM3 12.29l-.548-6.658h1.123l.832 6.658H3zm1.583-6.658l.832 6.658h1.17l.832-6.658H4.583zM9 12.29H7.593l.832-6.658h1.123l-.546 6.607-.002.05z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"X3IpxqkdyIg4Oa-j2Lu9l\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"XWZPjL9-Dhni5Rlk20JL-\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"Xx6KbOLAKYz7gujpa21z7\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"ZS2UaP-WaCnhhPTVeJ_Da\"><g clip-path=\"url(#ZS2UaP-WaCnhhPTVeJ_Da_clip0)\"><path d=\"M13.104 2.375h-.625V1.333h-1.041v1.042H4.563V1.333H3.52v1.042h-.625c-.862 0-1.563.7-1.563 1.562v9.167c0 .862.701 1.563 1.563 1.563h10.208c.862 0 1.563-.701 1.563-1.563V3.937c0-.861-.701-1.562-1.563-1.562zM2.896 3.417h.625v1.041h1.042V3.417h6.875v1.041h1.041V3.417h.625c.287 0 .521.233.521.52v1.25H2.375v-1.25c0-.287.234-.52.52-.52zm10.208 10.208H2.896a.521.521 0 0 1-.521-.52V6.228h11.25v6.875c0 .287-.234.52-.52.52zM9.563 12.53h3.124V9.406H9.563v3.125zm1.041-2.083h1.042v1.041h-1.042v-1.041z\" /></g><defs></defs></symbol><clipPath id=\"ZS2UaP-WaCnhhPTVeJ_Da_clip0\"><path transform=\"translate(1.333 1.333)\" d=\"M0 0h13.333v13.333H0z\" /></clipPath><symbol viewBox=\"0 0 16 16\" id=\"_4B7SLE5xYj9g9H2H0LD3\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.8521 7.0442a.6363.6363 0 10-.977-.8156C12.7541 7.5716 10.5797 8.5455 8 8.5455s-4.754-.974-5.8751-2.317a.6364.6364 0 10-.977.8157c.3197.383.698.7343 1.125 1.0486v1.089a.6364.6364 0 001.2727 0v-.3295a9.29 9.29 0 001.2727.4968v1.1054a.6363.6363 0 001.2727 0v-.7999a10.994 10.994 0 001.273.1458l-.0003.0178v1.2728a.6363.6363 0 001.2728 0V9.8182l-.0003-.0178c.4337-.0244.859-.0736 1.273-.1458v.7999a.6364.6364 0 001.2728 0V9.3491a9.2909 9.2909 0 001.2727-.497v.3297a.6363.6363 0 101.2727 0V8.0926c.4268-.3143.8051-.6655 1.1247-1.0484z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 39 28\" id=\"aloBJcOGf7iDB8b-Wr8vZ\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 01.04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 01-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 01-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 018.833.118z\" fill=\"url(#aloBJcOGf7iDB8b-Wr8vZ_paint0_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 01.033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 01-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 01-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 017.067.094z\" fill=\"url(#aloBJcOGf7iDB8b-Wr8vZ_paint1_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 01.04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 01-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 01-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 012.484-2.29z\" fill=\"#FF0D2A\" /><defs></defs></symbol><radialGradient id=\"aloBJcOGf7iDB8b-Wr8vZ_paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\" /><stop offset=\"1\" stop-color=\"#FF0D2A\" /></radialGradient><radialGradient id=\"aloBJcOGf7iDB8b-Wr8vZ_paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\" /><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\" /></radialGradient><symbol viewBox=\"0 0 14 14\" id=\"dX1TvCpp62i3vFJc5p2MC\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"dmfqnTM6ST4gV1mhBjBmg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.71743 6.94604C7.80755 6.92194 7.90228 6.90909 8 6.90909C8.60249 6.90909 9.09091 7.39751 9.09091 8C9.09091 8.60249 8.60249 9.09091 8 9.09091C7.39751 9.09091 6.90909 8.60249 6.90909 8C6.90909 7.90228 6.92194 7.80755 6.94604 7.71743L4.88703 5.65842L5.65842 4.88703L7.71743 6.94604ZM8.54545 3.12087V5.27273H7.45455V2H8C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 6.38359 2.64289 4.86766 3.76532 3.74941L4.53527 4.52224C3.61627 5.43782 3.09091 6.6766 3.09091 8C3.09091 10.7112 5.28878 12.9091 8 12.9091C10.7112 12.9091 12.9091 10.7112 12.9091 8C12.9091 5.47315 11 3.3922 8.54545 3.12087Z\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"e3YWLzfK-3u_IzOR_BScz\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\" />\n</symbol><symbol viewBox=\"0 0 14 59\" id=\"eUw6baAiNUhUw0_skSE_H\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#010101\" fill-opacity=\".45\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"epPKOMKegjCGjOdk1e-qs\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"f5t0mrNI9ztFybdQrVSuZ\"><path d=\"M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 13.125A6.132 6.132 0 0 1 1.875 8 6.132 6.132 0 0 1 8 1.875 6.132 6.132 0 0 1 14.125 8 6.132 6.132 0 0 1 8 14.125z\" /><path d=\"M8.499 4h-1v4.206l2.646 2.646.707-.707-2.353-2.353V3.999z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"gZatIPgLyjsg9p6BLoDn6\"><g opacity=\".65\"><path d=\"M2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" /></g><rect x=\"5\" y=\"2\" width=\"9\" height=\"2\" rx=\"1\" /><rect x=\"5\" y=\"7\" width=\"9\" height=\"2\" rx=\"1\" /><rect x=\"5\" y=\"12\" width=\"9\" height=\"2\" rx=\"1\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"j9mCuTwTRU_jjZHdN2LIy\"><path d=\"M12.436 6.298h-9.15c-.003 0-.004-.003-.003-.003l3.452-3.318a.701.701 0 1 0-.973-1.011L1.063 6.482a.705.705 0 0 0 0 1.01l4.725 4.542a.699.699 0 0 0 .992-.02.702.702 0 0 0-.02-.991L3.31 7.705c-.002-.002 0-.003.002-.003h9.14a.702.702 0 0 0 .701-.659.712.712 0 0 0-.716-.745z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"k0kDptZqEgjdDkwGf9osZ\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8317 7.6849a1.3328 1.3328 0 010 1.2968c-1.5475 2.7806-4.4621 4.6848-7.8316 4.6848-3.3697 0-6.2844-1.9042-7.8318-4.6848a1.3333 1.3333 0 010-1.2968C1.7157 4.9042 4.6303 3 8 3c3.3695 0 6.2841 1.9042 7.8316 4.6849zM8.0001 4.3333c2.8486 0 5.3357 1.6088 6.6665 4-1.3308 2.3911-3.8179 3.9999-6.6666 3.9999s-5.3359-1.6088-6.6665-4C2.664 5.9422 5.1513 4.3334 8 4.3334zm1.3333 4c0 .7364-.597 1.3333-1.3333 1.3333-.7364 0-1.3334-.597-1.3334-1.3333C6.6667 7.5969 7.2637 7 8.0001 7c.7363 0 1.3333.5969 1.3333 1.3333zm1.3333 0c0 1.4728-1.1939 2.6666-2.6667 2.6666-1.4727 0-2.6666-1.1938-2.6666-2.6666 0-1.4728 1.1939-2.6667 2.6666-2.6667 1.4728 0 2.6667 1.1939 2.6667 2.6667z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"k1ewDs_0kOwwgiILzTOBD\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\" /></symbol><symbol viewBox=\"0 0 35 35\" id=\"kIxvlSMIlmiodrqe-vf6j\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\" /><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\" /></g></symbol><symbol viewBox=\"0 0 14 14\" id=\"lb-6qDmLsWFwDdiOzugNR\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\" /></symbol><symbol viewBox=\"0 0 48 48\" id=\"lhpaKnKpwzPvCXVKgbdmR\"><path d=\"M47.907 19.837l-.013-.05-7.19-18.064A2.471 2.471 0 0038.348 0H9.204C8.114 0 7.147.716 6.84 1.749L.118 19.629l-.02.044-.012.05c-.083.31-.109.628-.064.938a4.828 4.828 0 00-.013.304v23.183C.009 46.27 1.759 48 3.905 48h40.19c2.146 0 3.895-1.73 3.902-3.852V20.965c0-.082 0-.165-.007-.234.026-.31 0-.609-.083-.894zm-18.954-2.724l-.02.995c-.05 2.845-2.037 4.758-4.94 4.758-1.416 0-2.633-.45-3.511-1.305-.878-.856-1.359-2.047-1.384-3.453l-.02-.995H5.892l5.095-12.247h25.58L41.8 17.113H28.953zm-24.03 4.866h10.08c1.557 3.618 4.87 5.753 8.997 5.753 2.16 0 4.165-.596 5.786-1.724 1.422-.988 2.531-2.37 3.249-4.03h10.028v21.156H4.923V21.98z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 120 96\" id=\"lrcT-Txfq0JiXTRVxpDwb\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.937 10.8h.125c6.677 0 11.768 0 15.813.367 4.075.369 7.206 1.118 9.925 2.688a22.8 22.8 0 018.345 8.345c1.57 2.72 2.319 5.85 2.688 9.924.367 4.046.367 9.137.367 15.814v.124c0 6.677 0 11.768-.367 15.814-.37 4.074-1.118 7.205-2.688 9.924a22.8 22.8 0 01-8.345 8.345c-2.72 1.57-5.85 2.32-9.925 2.688-4.045.367-9.136.367-15.813.367h-.125c-6.676 0-11.767 0-15.813-.367-4.074-.369-7.205-1.118-9.924-2.688a22.8 22.8 0 01-8.346-8.345c-1.57-2.72-2.318-5.85-2.688-9.924-.366-4.046-.366-9.137-.366-15.813v-.126c0-6.676 0-11.767.366-15.813.37-4.074 1.119-7.205 2.688-9.924a22.8 22.8 0 018.346-8.345c2.719-1.57 5.85-2.319 9.924-2.688 4.045-.367 9.137-.367 15.813-.367zm-15.596 2.757c-3.908.354-6.648 1.052-8.941 2.376a20.4 20.4 0 00-7.467 7.467c-1.324 2.293-2.022 5.033-2.376 8.941C25.2 36.266 25.2 41.249 25.2 48c0 6.751.001 11.735.357 15.659.354 3.908 1.052 6.648 2.376 8.941a20.4 20.4 0 007.467 7.467c2.293 1.324 5.033 2.022 8.94 2.376 3.925.356 8.908.357 15.66.357 6.751 0 11.734-.001 15.659-.357 3.908-.354 6.648-1.052 8.94-2.376a20.4 20.4 0 007.468-7.467c1.324-2.293 2.022-5.033 2.376-8.941.356-3.924.357-8.908.357-15.659 0-6.751-.001-11.734-.357-15.659-.354-3.908-1.052-6.648-2.376-8.941a20.4 20.4 0 00-7.467-7.467c-2.293-1.324-5.033-2.022-8.941-2.376-3.925-.356-8.908-.357-15.66-.357-6.75 0-11.734.001-15.658.357z\" fill=\"#FF272C\" /><g filter=\"url(#lrcT-Txfq0JiXTRVxpDwb_filter0_b)\"><path d=\"M32.4 63c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\" /></g><g filter=\"url(#lrcT-Txfq0JiXTRVxpDwb_filter1_b)\"><path d=\"M62.4 63c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\" /></g><g filter=\"url(#lrcT-Txfq0JiXTRVxpDwb_filter2_b)\"><path d=\"M32.4 33c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\" /></g><g filter=\"url(#lrcT-Txfq0JiXTRVxpDwb_filter3_b)\"><path d=\"M62.4 33c0 4.292 0 6.438.802 8.091a8 8 0 003.707 3.707c1.653.802 3.8.802 8.09.802 4.293 0 6.439 0 8.092-.802a8 8 0 003.707-3.707c.802-1.653.802-3.8.802-8.09 0-4.293 0-6.439-.802-8.092a8 8 0 00-3.707-3.707c-1.653-.802-3.8-.802-8.091-.802-4.292 0-6.438 0-8.091.802a8 8 0 00-3.707 3.707c-.802 1.653-.802 3.8-.802 8.091z\" fill=\"#040B1D\" fill-opacity=\".1\" /></g><defs><filter id=\"lrcT-Txfq0JiXTRVxpDwb_filter0_b\" x=\"8.4\" y=\"26.4\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter><filter id=\"lrcT-Txfq0JiXTRVxpDwb_filter1_b\" x=\"38.4\" y=\"26.4\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter><filter id=\"lrcT-Txfq0JiXTRVxpDwb_filter2_b\" x=\"8.4\" y=\"-3.6\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter><filter id=\"lrcT-Txfq0JiXTRVxpDwb_filter3_b\" x=\"38.4\" y=\"-3.6\" width=\"73.2\" height=\"73.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter></defs></symbol><symbol viewBox=\"0 0 16 16\" id=\"nyjHtWHGpE87mj8-EIOQE\">\n<rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"oNC9V-o-SzSy-CZKigEkm\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\" /><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"ot2jjTc3L5ZftecYi2i2o\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.646 4H9.6v1.6h5.6V0h-1.6v2.616C12.22.946 10.243 0 8 0a8 8 0 108 8h-1.6A6.4 6.4 0 118 1.6c1.915 0 3.557.863 4.646 2.4z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"qCX50aLfXF0HSHC_e7zrV\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\" /></symbol><symbol viewBox=\"0 0 64 41\" id=\"qE6jy_qIeD2qn7L47bnWL\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\" /><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\" /><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\" /></g></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"rNi9oUufCNJE-Nu-4rJXj\"><path d=\"M7.5804 12.8625a.6211.6211 0 00.875 0l2.7839-2.7839a.6175.6175 0 000-.8732.6133.6133 0 00-.4357-.1804.6132.6132 0 00-.4357.1804l-1.7304 1.7303V.6179A.618.618 0 008.0196 0a.618.618 0 00-.6178.6179v10.3178L5.6714 9.2054c-.241-.2411-.6321-.2411-.8714 0a.6192.6192 0 00-.0018.8732l2.7822 2.7839zm7.8017-2.5696a.618.618 0 00-.6178.6178V14.4a.3685.3685 0 01-.3679.3679H1.6018a.3685.3685 0 01-.3679-.3679v-3.4911a.618.618 0 00-.6178-.6178c-.3411 0-.6161.2785-.6161.6178v3.9804c0 .6125.4982 1.1089 1.109 1.1089H14.891c.6125 0 1.1089-.4982 1.1089-1.1089v-3.9804c0-.3393-.2768-.616-.6179-.616z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"rxr-wZMI23JpzQsVyzqd8\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"sYSIkQJ1jfZx9z2XlOJFK\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<circle cx=\"8.02079\" cy=\"11.9685\" r=\"1.32987\" fill=\"white\" />\n<rect x=\"6.69092\" y=\"2.66016\" width=\"2.65974\" height=\"6.64935\" rx=\"1.32987\" fill=\"white\" />\n</symbol><symbol fill=\"none\" viewBox=\"0 0 80 80\" id=\"t0IYzgjirRL8jk8lxpJJT\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"tpy2oIUtuJaOHfVk-Ka5X\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"u-Txnh62ZVT51PQqwbWDU\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 120 96\" id=\"xOnSq2thX9bGUAWRW8IK8\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M79.382 57.127l.28.162c.093.054.186.108.279.16 4.903 2.831 7.657 4.42 9.082 6.188 2.381 2.952 2.381 6.36 0 9.312-1.425 1.767-4.179 3.356-9.082 6.187l-.559.323c-4.903 2.83-7.657 4.42-10.717 5.243-5.114 1.374-11.017 1.374-16.13 0-3.061-.823-5.815-2.413-10.718-5.243l-.558-.323c-4.904-2.83-7.658-4.42-9.083-6.187-2.381-2.952-2.381-6.36 0-9.312 1.425-1.767 4.179-3.357 9.083-6.187l.279-.161.279-.162c4.903-2.83 7.657-4.42 10.718-5.243 5.113-1.375 11.017-1.375 16.13 0 3.06.823 5.814 2.413 10.717 5.243zm-1.8 1.361c-5.259-3.036-7.629-4.386-10.158-5.066-4.327-1.163-9.322-1.163-13.649 0-2.529.68-4.899 2.03-10.159 5.067-5.26 3.036-7.598 4.404-8.775 5.864-2.015 2.498-2.015 5.382 0 7.88 1.177 1.46 3.515 2.828 8.775 5.864 5.26 3.037 7.63 4.387 10.16 5.067 4.326 1.163 9.321 1.163 13.648 0 2.53-.68 4.899-2.03 10.159-5.067 5.26-3.036 7.598-4.404 8.776-5.864 2.014-2.498 2.014-5.382 0-7.88-1.178-1.46-3.516-2.828-8.776-5.864z\" fill=\"#8E9199\" /><g filter=\"url(#xOnSq2thX9bGUAWRW8IK8_filter0_b)\"><rect width=\"58.888\" height=\"58.888\" rx=\"12\" transform=\"scale(1.22477 .70706) rotate(45 -9.64 73.966)\" fill=\"#e3e3e3\" /></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.427 17.268l.107.062c3.867 2.232 6.84 3.948 8.99 5.44 2.175 1.506 3.605 2.846 4.29 4.344.845 1.846.845 3.787 0 5.634-.685 1.497-2.115 2.837-4.29 4.344-2.15 1.491-5.123 3.207-8.99 5.44l-.107.062c-3.867 2.232-6.84 3.948-9.423 5.19-2.61 1.255-4.931 2.08-7.525 2.476-3.198.488-6.56.488-9.759 0-2.594-.396-4.915-1.221-7.525-2.476-2.583-1.242-5.556-2.958-9.422-5.19l-.108-.063c-3.867-2.232-6.84-3.948-8.99-5.439-2.174-1.507-3.604-2.847-4.29-4.344-.844-1.847-.844-3.788 0-5.634.686-1.498 2.116-2.838 4.29-4.345 2.15-1.49 5.123-3.207 8.99-5.44l.108-.061c3.866-2.232 6.839-3.949 9.422-5.19 2.61-1.255 4.931-2.08 7.525-2.476a32.73 32.73 0 019.759 0c2.594.395 4.915 1.22 7.525 2.476 2.583 1.241 5.556 2.958 9.423 5.19zm-11.303-3.886c-2.453-1.18-4.388-1.834-6.396-2.14a27.696 27.696 0 00-8.257 0c-2.007.306-3.943.96-6.395 2.14-2.468 1.186-5.348 2.847-9.279 5.117s-6.809 3.932-8.864 5.356c-2.042 1.416-3.175 2.533-3.706 3.692-.714 1.562-.714 3.205 0 4.767.53 1.16 1.664 2.277 3.706 3.692 2.055 1.425 4.933 3.087 8.864 5.357 3.931 2.27 6.811 3.93 9.279 5.117 2.452 1.179 4.388 1.833 6.395 2.14 2.706.412 5.551.412 8.257 0 2.008-.307 3.944-.961 6.396-2.14 2.467-1.187 5.347-2.848 9.278-5.117 3.931-2.27 6.809-3.932 8.864-5.357 2.042-1.415 3.176-2.533 3.706-3.692.715-1.562.715-3.205 0-4.767-.53-1.159-1.664-2.276-3.706-3.692-2.055-1.424-4.933-3.087-8.864-5.356-3.931-2.27-6.81-3.93-9.278-5.117z\" fill=\"#8E9199\" /><defs><filter id=\"xOnSq2thX9bGUAWRW8IK8_filter0_b\" x=\"-8.313\" y=\"-.348\" width=\"137.824\" height=\"99.856\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feGaussianBlur stdDeviation=\"12\"></feGaussianBlur><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur\"></feComposite><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur\" result=\"shape\"></feBlend></filter></defs></symbol><symbol viewBox=\"0 0 14 14\" id=\"xZdPxOXo6_6lfg2aWTuhv\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"xg5OvP_XAArmEQjFi9NnO\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.2 11.2v3.2c0 .922-.678 1.6-1.6 1.6h-8C.678 16 0 15.322 0 14.4v-8c0-.922.678-1.6 1.6-1.6h3.2V1.6C4.8.678 5.478 0 6.4 0h8c.922 0 1.6.678 1.6 1.6v8c0 .922-.678 1.6-1.6 1.6h-3.2zm-1.6 0H6.4c-.922 0-1.6-.678-1.6-1.6V6.4H1.6v8h8v-3.2zM6.4 1.6v8h8v-8h-8z\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"zTDS-DFrm4u5qwb1X_Dv5\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\" /></symbol></defs><use id=\"-0FVSup8MAH57V-3vC8_3-usage\" xlink:href=\"#-0FVSup8MAH57V-3vC8_3\" class=\"sprite-symbol-usage\" /><use id=\"-fkK13-iy5PALaDNph-aQ-usage\" xlink:href=\"#-fkK13-iy5PALaDNph-aQ\" class=\"sprite-symbol-usage\" /><use id=\"-yl_wtod2deMxvH_ApuAK-usage\" xlink:href=\"#-yl_wtod2deMxvH_ApuAK\" class=\"sprite-symbol-usage\" /><use id=\"07ic80gZeFKl8eymdhNVM-usage\" xlink:href=\"#07ic80gZeFKl8eymdhNVM\" class=\"sprite-symbol-usage\" /><use id=\"0UaInuRaCzqzOY-KmLPJ5-usage\" xlink:href=\"#0UaInuRaCzqzOY-KmLPJ5\" class=\"sprite-symbol-usage\" /><use id=\"0x7dR3WNoVsdbEP2Mh4X0-usage\" xlink:href=\"#0x7dR3WNoVsdbEP2Mh4X0\" class=\"sprite-symbol-usage\" /><use id=\"43EdGJib8Hk9kSllZDxLd-usage\" xlink:href=\"#43EdGJib8Hk9kSllZDxLd\" class=\"sprite-symbol-usage\" /><use id=\"5OK8-EGFzgNqESYCqdRMK-usage\" xlink:href=\"#5OK8-EGFzgNqESYCqdRMK\" class=\"sprite-symbol-usage\" /><use id=\"5ovKUSHkiD0wX_uEjgBwx-usage\" xlink:href=\"#5ovKUSHkiD0wX_uEjgBwx\" class=\"sprite-symbol-usage\" /><use id=\"69BbyiMu8_wWzUePxvJ06-usage\" xlink:href=\"#69BbyiMu8_wWzUePxvJ06\" class=\"sprite-symbol-usage\" /><use id=\"7tVopr6U1M75ESFwIrkfA-usage\" xlink:href=\"#7tVopr6U1M75ESFwIrkfA\" class=\"sprite-symbol-usage\" /><use id=\"BYBGvq5AT9ID2cUKdR0xP-usage\" xlink:href=\"#BYBGvq5AT9ID2cUKdR0xP\" class=\"sprite-symbol-usage\" /><use id=\"BqX6cmzUlZKaLFuPOSJWL-usage\" xlink:href=\"#BqX6cmzUlZKaLFuPOSJWL\" class=\"sprite-symbol-usage\" /><use id=\"CBncCjT3ukL8WQT7mPYCd-usage\" xlink:href=\"#CBncCjT3ukL8WQT7mPYCd\" class=\"sprite-symbol-usage\" /><use id=\"CdDS7Wx_UvLcUUxLfS5pO-usage\" xlink:href=\"#CdDS7Wx_UvLcUUxLfS5pO\" class=\"sprite-symbol-usage\" /><use id=\"F_P5xpQmI9w9oMDKciuVD-usage\" xlink:href=\"#F_P5xpQmI9w9oMDKciuVD\" class=\"sprite-symbol-usage\" /><use id=\"Fr7ZGP38l-8yzCU952YTo-usage\" xlink:href=\"#Fr7ZGP38l-8yzCU952YTo\" class=\"sprite-symbol-usage\" /><use id=\"G3wQvDM3gm2Uno_38m_WS-usage\" xlink:href=\"#G3wQvDM3gm2Uno_38m_WS\" class=\"sprite-symbol-usage\" /><use id=\"GFfIG-AjlmP8r1WtEj3cJ-usage\" xlink:href=\"#GFfIG-AjlmP8r1WtEj3cJ\" class=\"sprite-symbol-usage\" /><use id=\"GX1xpD2tJ0ddhQzunZ__A-usage\" xlink:href=\"#GX1xpD2tJ0ddhQzunZ__A\" class=\"sprite-symbol-usage\" /><use id=\"HlCeltQNsltrzSzS-QTfh-usage\" xlink:href=\"#HlCeltQNsltrzSzS-QTfh\" class=\"sprite-symbol-usage\" /><use id=\"INRW_J-4xZH91VeoQeVR4-usage\" xlink:href=\"#INRW_J-4xZH91VeoQeVR4\" class=\"sprite-symbol-usage\" /><use id=\"IkCrEccVfFc87rINBvynO-usage\" xlink:href=\"#IkCrEccVfFc87rINBvynO\" class=\"sprite-symbol-usage\" /><use id=\"JvboS3--N5iV6pk89hvrN-usage\" xlink:href=\"#JvboS3--N5iV6pk89hvrN\" class=\"sprite-symbol-usage\" /><use id=\"MVWLXZiRD5zJS7jyVIBoZ-usage\" xlink:href=\"#MVWLXZiRD5zJS7jyVIBoZ\" class=\"sprite-symbol-usage\" /><use id=\"Md8yHRnE8Gbfmm2JuCEdB-usage\" xlink:href=\"#Md8yHRnE8Gbfmm2JuCEdB\" class=\"sprite-symbol-usage\" /><use id=\"MuFebTlZKhTOdSfvH9QV2-usage\" xlink:href=\"#MuFebTlZKhTOdSfvH9QV2\" class=\"sprite-symbol-usage\" /><use id=\"NKe1isAgQtAHroGGLjn-L-usage\" xlink:href=\"#NKe1isAgQtAHroGGLjn-L\" class=\"sprite-symbol-usage\" /><use id=\"NbgqbVhQQbMvTnYZfDyVe-usage\" xlink:href=\"#NbgqbVhQQbMvTnYZfDyVe\" class=\"sprite-symbol-usage\" /><use id=\"NsNcDqResefz1Qy5D7zaZ-usage\" xlink:href=\"#NsNcDqResefz1Qy5D7zaZ\" class=\"sprite-symbol-usage\" /><use id=\"PepIxzV7KKfKMQT6xGMcZ-usage\" xlink:href=\"#PepIxzV7KKfKMQT6xGMcZ\" class=\"sprite-symbol-usage\" /><use id=\"QZX7WAhcPPtY2oYjW4pFO-usage\" xlink:href=\"#QZX7WAhcPPtY2oYjW4pFO\" class=\"sprite-symbol-usage\" /><use id=\"QvfZzM4VCGj6SV5O0TyNT-usage\" xlink:href=\"#QvfZzM4VCGj6SV5O0TyNT\" class=\"sprite-symbol-usage\" /><use id=\"QyY1IdF0ELCCnrxqeU7br-usage\" xlink:href=\"#QyY1IdF0ELCCnrxqeU7br\" class=\"sprite-symbol-usage\" /><use id=\"Rock3db634b28Axdsyhdu-usage\" xlink:href=\"#Rock3db634b28Axdsyhdu\" class=\"sprite-symbol-usage\" /><use id=\"SHRBYvqnDGtfBdtJ-YE0t-usage\" xlink:href=\"#SHRBYvqnDGtfBdtJ-YE0t\" class=\"sprite-symbol-usage\" /><use id=\"SNKdX7GYCgkLfkqN7qaux-usage\" xlink:href=\"#SNKdX7GYCgkLfkqN7qaux\" class=\"sprite-symbol-usage\" /><use id=\"X3IpxqkdyIg4Oa-j2Lu9l-usage\" xlink:href=\"#X3IpxqkdyIg4Oa-j2Lu9l\" class=\"sprite-symbol-usage\" /><use id=\"XWZPjL9-Dhni5Rlk20JL--usage\" xlink:href=\"#XWZPjL9-Dhni5Rlk20JL-\" class=\"sprite-symbol-usage\" /><use id=\"Xx6KbOLAKYz7gujpa21z7-usage\" xlink:href=\"#Xx6KbOLAKYz7gujpa21z7\" class=\"sprite-symbol-usage\" /><use id=\"ZS2UaP-WaCnhhPTVeJ_Da-usage\" xlink:href=\"#ZS2UaP-WaCnhhPTVeJ_Da\" class=\"sprite-symbol-usage\" /><use id=\"_4B7SLE5xYj9g9H2H0LD3-usage\" xlink:href=\"#_4B7SLE5xYj9g9H2H0LD3\" class=\"sprite-symbol-usage\" /><use id=\"aloBJcOGf7iDB8b-Wr8vZ-usage\" xlink:href=\"#aloBJcOGf7iDB8b-Wr8vZ\" class=\"sprite-symbol-usage\" /><use id=\"dX1TvCpp62i3vFJc5p2MC-usage\" xlink:href=\"#dX1TvCpp62i3vFJc5p2MC\" class=\"sprite-symbol-usage\" /><use id=\"dmfqnTM6ST4gV1mhBjBmg-usage\" xlink:href=\"#dmfqnTM6ST4gV1mhBjBmg\" class=\"sprite-symbol-usage\" /><use id=\"e3YWLzfK-3u_IzOR_BScz-usage\" xlink:href=\"#e3YWLzfK-3u_IzOR_BScz\" class=\"sprite-symbol-usage\" /><use id=\"eUw6baAiNUhUw0_skSE_H-usage\" xlink:href=\"#eUw6baAiNUhUw0_skSE_H\" class=\"sprite-symbol-usage\" /><use id=\"epPKOMKegjCGjOdk1e-qs-usage\" xlink:href=\"#epPKOMKegjCGjOdk1e-qs\" class=\"sprite-symbol-usage\" /><use id=\"f5t0mrNI9ztFybdQrVSuZ-usage\" xlink:href=\"#f5t0mrNI9ztFybdQrVSuZ\" class=\"sprite-symbol-usage\" /><use id=\"gZatIPgLyjsg9p6BLoDn6-usage\" xlink:href=\"#gZatIPgLyjsg9p6BLoDn6\" class=\"sprite-symbol-usage\" /><use id=\"j9mCuTwTRU_jjZHdN2LIy-usage\" xlink:href=\"#j9mCuTwTRU_jjZHdN2LIy\" class=\"sprite-symbol-usage\" /><use id=\"k0kDptZqEgjdDkwGf9osZ-usage\" xlink:href=\"#k0kDptZqEgjdDkwGf9osZ\" class=\"sprite-symbol-usage\" /><use id=\"k1ewDs_0kOwwgiILzTOBD-usage\" xlink:href=\"#k1ewDs_0kOwwgiILzTOBD\" class=\"sprite-symbol-usage\" /><use id=\"kIxvlSMIlmiodrqe-vf6j-usage\" xlink:href=\"#kIxvlSMIlmiodrqe-vf6j\" class=\"sprite-symbol-usage\" /><use id=\"lb-6qDmLsWFwDdiOzugNR-usage\" xlink:href=\"#lb-6qDmLsWFwDdiOzugNR\" class=\"sprite-symbol-usage\" /><use id=\"lhpaKnKpwzPvCXVKgbdmR-usage\" xlink:href=\"#lhpaKnKpwzPvCXVKgbdmR\" class=\"sprite-symbol-usage\" /><use id=\"lrcT-Txfq0JiXTRVxpDwb-usage\" xlink:href=\"#lrcT-Txfq0JiXTRVxpDwb\" class=\"sprite-symbol-usage\" /><use id=\"nyjHtWHGpE87mj8-EIOQE-usage\" xlink:href=\"#nyjHtWHGpE87mj8-EIOQE\" class=\"sprite-symbol-usage\" /><use id=\"oNC9V-o-SzSy-CZKigEkm-usage\" xlink:href=\"#oNC9V-o-SzSy-CZKigEkm\" class=\"sprite-symbol-usage\" /><use id=\"ot2jjTc3L5ZftecYi2i2o-usage\" xlink:href=\"#ot2jjTc3L5ZftecYi2i2o\" class=\"sprite-symbol-usage\" /><use id=\"qCX50aLfXF0HSHC_e7zrV-usage\" xlink:href=\"#qCX50aLfXF0HSHC_e7zrV\" class=\"sprite-symbol-usage\" /><use id=\"qE6jy_qIeD2qn7L47bnWL-usage\" xlink:href=\"#qE6jy_qIeD2qn7L47bnWL\" class=\"sprite-symbol-usage\" /><use id=\"rNi9oUufCNJE-Nu-4rJXj-usage\" xlink:href=\"#rNi9oUufCNJE-Nu-4rJXj\" class=\"sprite-symbol-usage\" /><use id=\"rxr-wZMI23JpzQsVyzqd8-usage\" xlink:href=\"#rxr-wZMI23JpzQsVyzqd8\" class=\"sprite-symbol-usage\" /><use id=\"sYSIkQJ1jfZx9z2XlOJFK-usage\" xlink:href=\"#sYSIkQJ1jfZx9z2XlOJFK\" class=\"sprite-symbol-usage\" /><use id=\"t0IYzgjirRL8jk8lxpJJT-usage\" xlink:href=\"#t0IYzgjirRL8jk8lxpJJT\" class=\"sprite-symbol-usage\" /><use id=\"tpy2oIUtuJaOHfVk-Ka5X-usage\" xlink:href=\"#tpy2oIUtuJaOHfVk-Ka5X\" class=\"sprite-symbol-usage\" /><use id=\"u-Txnh62ZVT51PQqwbWDU-usage\" xlink:href=\"#u-Txnh62ZVT51PQqwbWDU\" class=\"sprite-symbol-usage\" /><use id=\"xOnSq2thX9bGUAWRW8IK8-usage\" xlink:href=\"#xOnSq2thX9bGUAWRW8IK8\" class=\"sprite-symbol-usage\" /><use id=\"xZdPxOXo6_6lfg2aWTuhv-usage\" xlink:href=\"#xZdPxOXo6_6lfg2aWTuhv\" class=\"sprite-symbol-usage\" /><use id=\"xg5OvP_XAArmEQjFi9NnO-usage\" xlink:href=\"#xg5OvP_XAArmEQjFi9NnO\" class=\"sprite-symbol-usage\" /><use id=\"zTDS-DFrm4u5qwb1X_Dv5-usage\" xlink:href=\"#zTDS-DFrm4u5qwb1X_Dv5\" class=\"sprite-symbol-usage\" /></svg>";  window.document.body.appendChild(div) }); }
