import React__default, { createElement, createRef, Component, forwardRef, Fragment, useState } from 'react';
import { css, cx } from 'emotion';
import { createPortal } from 'react-dom';
import styled, { cx as cx$1, css as css$1 } from 'react-emotion';
import Prism$1 from 'prismjs';
import { times, cond, lt, always, T } from 'ramda';
import MD from 'markdown-to-jsx';
import ReactScroll from 'react-scrollbars-custom';

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

var textStyles = {
  h1:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:24px;line-height:38px;font-weight:600;letter-spacing:0.48px;text-transform:uppercase;color:#000000;"),
  h2:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:20px;line-height:28px;font-weight:600;letter-spacing:0.4px;text-transform:uppercase;color:#000000;"),
  h3:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:16px;line-height:24px;font-weight:600;letter-spacing:0.32px;text-transform:uppercase;color:#cf1322;"),
  h4:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:16px;line-height:24px;font-weight:600;letter-spacing:0.32px;color:#000000;"),
  h5:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:12px;line-height:22px;color:#000000;"),
  p:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:12px;line-height:20px;color:#000000;"),
  code:
  /*#__PURE__*/
  css("margin:0;font-family:'Monaco',monospace;font-size:14px;line-height:22px;color:#000000;b{font-weight:600;}"),
  basic:
  /*#__PURE__*/
  css("margin:0;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;color:#000000;b{font-weight:600;}"),
  upperCase:
  /*#__PURE__*/
  css("text-transform:uppercase;"),
  noCase:
  /*#__PURE__*/
  css("text-transform:none;")
};
var Text = function Text(_ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      tag = _ref.tag,
      upperCase = _ref.upperCase,
      noCase = _ref.noCase,
      title = _ref.title,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'basic' : _ref$variant;
  var Element = tag || (variant === 'basic' ? 'span' : variant);
  return (
    /*#__PURE__*/
    createElement(Element, {
      className: cx(textStyles[variant], (_cx = {}, _defineProperty(_cx, textStyles.upperCase, upperCase), _defineProperty(_cx, textStyles.noCase, noCase), _cx), className),
      title: title
    }, children)
  );
};

var styles = {
  alert:
  /*#__PURE__*/
  css("padding:15px;border:1px solid;border-radius:4px;margin-top:16px;margin-bottom:16px;box-shadow:0px 5px 20px rgba(0,0,0,0.1);"),
  success:
  /*#__PURE__*/
  css("border-color:#b5ec8e;background-color:#f6ffee;"),
  error:
  /*#__PURE__*/
  css("border-color:#fea39e;background-color:#fff1f0;")
};
var Alert = function Alert(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type;
  return (
    /*#__PURE__*/
    createElement(Text, {
      className: cx(styles.alert, styles[type], className),
      tag: "div"
    }, children)
  );
};

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

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

var zIndex = {
  inline: 1,
  fixedSplash: 50,
  // maybe 300 (see login modal)
  modal: 100,
  tooltip: 200
};

var styles$1 = {
  lockedBody:
  /*#__PURE__*/
  css("overflow:hidden;"),
  shim:
  /*#__PURE__*/
  css("position:fixed;z-index:", zIndex.modal, ";left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;padding:40px 16px;overflow:auto;background-color:rgba(0,0,0,0.65);justify-content:flex-start;align-items:center;"),
  baseModal:
  /*#__PURE__*/
  css("position:relative;width:100%;max-width:600px;border-radius:4px;margin:auto;box-sizing:border-box;background-color:#ffffff;box-shadow:0px 5px 20px rgba(0,0,0,0.09);outline:none;"),
  focusClosureControl:
  /*#__PURE__*/
  css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;"),
  wide:
  /*#__PURE__*/
  css("max-width:1000px;")
};

var isNodeOutsideElement = function isNodeOutsideElement(node, element) {
  return !(element.contains(node) || element === node);
};

var BaseModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseModal, _React$Component);

  function BaseModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.modalRef = createRef();

    _this.lockBodyScroll = function () {
      var _document = document,
          body = _document.body;
      body && body.classList.add(styles$1.lockedBody);
    };

    _this.releaseBodyScroll = function () {
      var _document2 = document,
          body = _document2.body;
      body && body.classList.remove(styles$1.lockedBody);
    };

    _this.focusFirstInteractiveElement = function () {
      var modal = _this.modalRef.current;
      var firstInteractiveElement = modal && modal.querySelector('a, button, input, select, textarea');

      if (firstInteractiveElement) {
        firstInteractiveElement.focus();
      } else if (modal) {
        modal.focus();
      }
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isModalVisible()) {
        this.focusFirstInteractiveElement();
        this.lockBodyScroll();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visible === false && this.isModalVisible()) {
        this.focusFirstInteractiveElement();
        this.lockBodyScroll();
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
        return createPortal(this.renderModal(), root);
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
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$1.shim, shimClassName),
          onMouseDown: this.handleOutsideClick
        },
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$1.baseModal, _defineProperty({}, styles$1.wide, wide), className),
          ref: this.modalRef,
          tabIndex: 0,
          onKeyDown: this.handleEscapePress
        }, children,
        /*#__PURE__*/
        createElement("div", {
          className: styles$1.focusClosureControl,
          onFocus: this.focusFirstInteractiveElement,
          tabIndex: "0"
        })))
      );
    }
  }]);

  return BaseModal;
}(Component);

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

var SVGImage = function SVGImage(_ref) {
  var className = _ref.className,
      glyph = _ref.glyph,
      props = _objectWithoutProperties(_ref, ["className", "glyph"]);

  var _split$slice = (glyph.viewBox || '').split(' ').slice(2),
      _split$slice2 = _slicedToArray(_split$slice, 2),
      width = _split$slice2[0],
      height = _split$slice2[1];

  var sizingClassName = width && height ?
  /*#__PURE__*/
  css("width:", width, "px;height:", height, "px;") : '';
  return (
    /*#__PURE__*/
    createElement("svg", Object.assign({}, props, {
      className: cx(sizingClassName, className),
      viewBox: glyph.viewBox
    }),
    /*#__PURE__*/
    createElement("use", {
      xlinkHref: "#".concat(glyph.id)
    }))
  );
};

var iconSize = '14px';
var styles$2 = {
  icon:
  /*#__PURE__*/
  css("flex-shrink:0;vertical-align:middle;width:", iconSize, ";height:", iconSize, ";"),
  state:
  /*#__PURE__*/
  css("fill:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"),
  stroke:
  /*#__PURE__*/
  css("stroke:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"),
  clickable:
  /*#__PURE__*/
  css("cursor:pointer;"),
  active:
  /*#__PURE__*/
  css(),
  button:
  /*#__PURE__*/
  css("display:block;padding:0;border:none;outline:none;background:transparent;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}")
};
var Icon = function Icon(_ref) {
  var _cx;

  var active = _ref.active,
      className = _ref.className,
      glyph = _ref.glyph,
      hasState = _ref.hasState,
      onMouseLeave = _ref.onMouseLeave,
      onMouseEnter = _ref.onMouseEnter,
      onClick = _ref.onClick,
      stroke = _ref.stroke;
  return (
    /*#__PURE__*/
    createElement(SVGImage, {
      glyph: glyph,
      onClick: onClick,
      onMouseLeave: onMouseLeave,
      onMouseEnter: onMouseEnter,
      className: cx(styles$2.icon, (_cx = {}, _defineProperty(_cx, styles$2.stroke, stroke), _defineProperty(_cx, styles$2.clickable, !!onClick), _defineProperty(_cx, styles$2.active, active), _cx), className)
    })
  );
};

var img = {id: "NNR3Z4VmKX519MjVhOnZF", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$3 =
/*#__PURE__*/
css("width:16px;height:16px;fill:#000;");
var IconAttach = function IconAttach(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$3, className),
      glyph: img
    })
  );
};

var img$1 = {id: "0V6vYnvPVprcQv5hXz0WI", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$4 =
/*#__PURE__*/
css("width:12px;height:12px;fill:#000;fill-opacity:0.65;");
var IconAttention = function IconAttention(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$4, className),
      glyph: img$1
    })
  );
};

var img$2 = {id: "MgAOfMgoBTb86LGkbcKmQ", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n    <path d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\"/>\n</svg>\n", viewbox: "0 0 48 48", viewBox: "0 0 48 48" };

var styles$5 =
/*#__PURE__*/
css("width:48px;height:48px;fill:#F5222D;");
var IconBox = function IconBox(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$5, className),
      glyph: img$2
    })
  );
};

var img$3 = {id: "jHE9K367aJwpy-aloQO9Y", content: "<svg width=\"64\" height=\"41\" viewBox=\"0 0 64 41\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\"></ellipse><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\"></path><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\"></path></g></g></svg>", viewbox: "0 0 64 41", viewBox: "0 0 64 41" };

var styles$6 =
/*#__PURE__*/
css("width:64px;height:41px;");
var IconBoxNoData = function IconBoxNoData(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$6, className),
      glyph: img$3
    })
  );
};

var img$4 = {id: "a60CsQJix_d4R1rBAfS1b", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$7 =
/*#__PURE__*/
css("fill:#000;fill-opacity:0.65;");
var IconBucket = function IconBucket(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$7, className),
      glyph: img$4
    })
  );
};

var img$5 = {id: "2CN5ukITEhecHzBUeGYs0", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$8 =
/*#__PURE__*/
css("width:16px;height:16px;fill:#000;fill-opacity:0.65;");
var IconBurger = function IconBurger(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$8, className),
      glyph: img$5,
      onClick: onClick
    })
  );
};

var img$6 = {id: "K99xp75ilny3BLc8loGU0", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$9 =
/*#__PURE__*/
css("width:16px;height:16px;fill:#F5222D;");
var IconCancel = function IconCancel(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$9, className),
      glyph: img$6,
      onClick: onClick
    })
  );
};

var img$7 = {id: "uKZ-ncz-3p4AI3e1k7Tqr", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\"/></g></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$8 = {id: "E5wpHo1W05HHUvZkqPWV2", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#F5222D\"/><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$9 = {id: "Zx2erqx-qMqd0mjNF42OE", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$a = {id: "OnxdEQOLtN1arDZolR5Ul", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#FCC8CB\"/><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var CHECKED = 2;
var DISABLED = 1;
var states = [img$7, img$9, img$8, img$a];
var styles$a =
/*#__PURE__*/
css("width:16px;height:16px;");
var IconCheckbox = function IconCheckbox(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED : 0) + (checked ? CHECKED : 0);
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$a, className),
      glyph: states[mask]
    })
  );
};

var img$b = {id: "N9dWELmZEpp0MLt-oepeg", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$b = {
  icon:
  /*#__PURE__*/
  css("fill:#ffffff;"),
  down:
  /*#__PURE__*/
  css("transform:rotate(180deg);"),
  left:
  /*#__PURE__*/
  css("transform:rotate(270deg);"),
  right:
  /*#__PURE__*/
  css("transform:rotate(90deg);")
};
var IconChevron = function IconChevron(props) {
  var direction = props.direction,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["direction", "className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, otherProps, {
      className: cx(styles$b.icon, _defineProperty({}, styles$b.down, direction === 'down'), _defineProperty({}, styles$b.left, direction === 'left'), _defineProperty({}, styles$b.right, direction === 'right'), className),
      glyph: img$b,
      hasState: true
    }))
  );
};

var img$c = {id: "hNpzqC_gbQsbnCZ_zEVw1", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style =
/*#__PURE__*/
css("fill:#000;fill-opacity:0.65;");
var IconChip = function IconChip(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(style, className),
      glyph: img$c
    })
  );
};

var img$d = {id: "HYuq2LLf2moz3PKyDEHXo", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$1 =
/*#__PURE__*/
css("fill:#FAAD14;");
var IconChipWarning = function IconChipWarning(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(style$1, className),
      glyph: img$d
    })
  );
};

var img$e = {id: "Q53WPbg_yCM82mwGrNTmu", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$2 =
/*#__PURE__*/
css("fill:#F5222D;");
var IconChipDanger = function IconChipDanger(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(style$2, className),
      glyph: img$e
    })
  );
};

var img$f = {id: "fwIzBrhNeZRsT24WoPfPH", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\".65\" d=\"M8.87 8l3.98-3.98a.61.61 0 1 0-.87-.87L8 7.13 4.02 3.15a.61.61 0 1 0-.87.87L7.13 8l-3.98 3.98a.61.61 0 1 0 .87.87L8 8.87l3.98 3.98a.61.61 0 0 0 .87 0 .61.61 0 0 0 0-.87L8.87 8z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$c =
/*#__PURE__*/
css("width:16px;height:16px;fill:#000;");
var IconClose = function IconClose(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$c, className),
      glyph: img$f,
      onClick: onClick
    })
  );
};

var img$g = {id: "NU1bHP7SRymSOuuboKRsp", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$d =
/*#__PURE__*/
css("width:14px;height:14px;fill:#fff;");
var IconCluster = function IconCluster(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$d, className),
      glyph: img$g
    }))
  );
};

var img$h = {id: "rowdeGRvJrWKIUjyj-jgs", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$e =
/*#__PURE__*/
css("fill:#fff;");
var IconCode = function IconCode(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$e, className),
      glyph: img$h
    })
  );
};

var img$i = {id: "W9dqBnYUYgfLzufLmHUsm", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$f =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.65;");
var IconCreateFile = function IconCreateFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$f, className),
      glyph: img$i,
      onClick: onClick
    })
  );
};

var img$j = {id: "Ntzjj0V6bTJyQQnTVwCHN", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$g =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.65;");
var IconCreateFolder = function IconCreateFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$g, className),
      glyph: img$j,
      onClick: onClick
    })
  );
};

var img$k = {id: "BSdgCFCC7LkBD0x1-a44N", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$h =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.65;");
var IconDelete = function IconDelete(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$h, className),
      glyph: img$k,
      onClick: onClick
    })
  );
};

var img$l = {id: "e_R_qDewrZ5DFGCvZQS2T", content: "<svg width=\"35\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\"/><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\"/></g></svg>", viewbox: "0 0 35 35", viewBox: "0 0 35 35" };

var styles$i =
/*#__PURE__*/
css("width:36px;height:36px;");
var IconDocumentCode = function IconDocumentCode(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$i, className),
      glyph: img$l
    }))
  );
};

var img$m = {id: "mY3e7Ryd0IYDIZSGkd9kY", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\n    <path d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$j =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;");
var IconDownload = function IconDownload(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$j, className),
      glyph: img$m,
      onClick: onClick
    })
  );
};

var img$n = {id: "ZZA8tI2Wb-QZSlFjnBQpR", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$k =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.65;");
var IconEdit = function IconEdit(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$k, className),
      glyph: img$n,
      onClick: onClick
    })
  );
};

var img$o = {id: "YNfQvhPjFsSjhaBKGB0kD", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3837 8.3204a.5.5 0 10-.7677-.6408C11.7352 8.7348 10.0268 9.5 7.9999 9.5c-2.027 0-3.7354-.7652-4.6162-1.8204a.5.5 0 10-.7677.6408c.2512.301.5485.577.884.824V10a.5.5 0 001 0v-.2589c.3151.1512.6497.282 1 .3904V11a.5.5 0 001 0v-.6285a8.6184 8.6184 0 001.0002.1145L7.5 10.5v1a.5.5 0 001 0v-1l-.0002-.014A8.6406 8.6406 0 009.5 10.3714V11a.5.5 0 001 0v-.8686a7.3096 7.3096 0 001-.3904V10a.5.5 0 101 0v-.8559c.3354-.2469.6325-.5228.8837-.8237z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$l =
/*#__PURE__*/
css("width:16px;height:16px;fill:#F5222D;");
var IconEyeClosed = function IconEyeClosed(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$l, className),
      glyph: img$o,
      onClick: onClick
    })
  );
};

var img$p = {id: "gYbfg6PiSs3krJDAbbaFN", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\".65\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8738 7.5137a.9998.9998 0 010 .9726C12.7132 10.5718 10.5272 12 8 12c-2.5273 0-4.7133-1.4282-5.8739-3.5137a1 1 0 010-.9726C3.2867 5.4282 5.4727 4 8 4c2.5272 0 4.7132 1.4282 5.8738 3.5137zM8 5c2.1365 0 4.0019 1.2066 5 3-.9981 1.7934-2.8635 3-5 3-2.1366 0-4.002-1.2066-5-3 .998-1.7934 2.8634-3 5-3zm1 3c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1zm1 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$m =
/*#__PURE__*/
css("width:16px;height:16px;fill:#F5222D;");
var IconEyeOpened = function IconEyeOpened(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$m, className),
      glyph: img$p,
      onClick: onClick
    })
  );
};

var img$q = {id: "UNEn5eNDrVysnZf4orrY5", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$n =
/*#__PURE__*/
css("fill:#000;fill-opacity:0.65;");
var IconFile = function IconFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$n, className),
      glyph: img$q,
      onClick: onClick
    })
  );
};

var img$r = {id: "LHEkbu0pf-2gkx7Zc56GT", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var img$s = {id: "d84TZ_Md93X7UETGX380K", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$o =
/*#__PURE__*/
css("fill:#000;fill-opacity:0.65;");
var IconFolder = function IconFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      opened = _ref.opened;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$o, className),
      glyph: opened ? img$s : img$r,
      onClick: onClick
    })
  );
};

var img$t = {id: "BXQWLvofDTNQ6w8yJyuFc", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\"/></svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$p =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;");
var IconGear = function IconGear(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$p, className),
      glyph: img$t
    })
  );
};

var img$u = {id: "a08hRR3khhUf4uj_4tPS6", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$q =
/*#__PURE__*/
css("width:14px;height:14px;fill:#F5222D;");
var IconGeoPin = function IconGeoPin(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$q, className),
      glyph: img$u
    }))
  );
};

var img$v = {id: "Gwsq8BJeM2XXkGjl_j13N", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\n    <path d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\"/>\n</svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$r =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;");
var IconInfo = function IconInfo(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$r, className),
      glyph: img$v
    })
  );
};

var img$w = {id: "i9zEJOnOFvKkawwoGbmDF", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$s =
/*#__PURE__*/
css("width:14px;height:14px;fill:#000;fill-opacity:0.65;");
var IconLink = function IconLink(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$s, className),
      glyph: img$w
    })
  );
};

var img$x = {id: "UYpMBkFFF1zEoxN5pTFfU", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM12 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$t =
/*#__PURE__*/
css("width:16px;height:16px;fill:#F5222D;fill-opacity:0.65;");
var IconMore = function IconMore(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$t, className),
      glyph: img$x
    })
  );
};

var img$y = {id: "3Xtsiv7nJE4_BrEf-yE67", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$u =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.65;");
var IconNewWindow = function IconNewWindow(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$u, className),
      glyph: img$y
    })
  );
};

var img$z = {id: "6Fyxjk5WtcSN0X1iY5l57", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/>\n</svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$v =
/*#__PURE__*/
css("width:16px;height:16px;fill:#52C41A;");
var IconOk = function IconOk(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$v, className),
      glyph: img$z
    }))
  );
};

var img$A = {id: "W2Y0dc6pwiCrGFGaT-LjE", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$B = {id: "uBwDAOOOu0eINybZ09a7y", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#F5222D\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$C = {id: "yYNC5ACU2iagw1ZJp9zLQ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$D = {id: "vQqLOE_ujysdfsNVuV6md", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#FCC8CB\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#FCC8CB\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var CHECKED$1 = 1;
var DISABLED$1 = 2;
var states$1 = [img$A, img$B, img$C, img$D];
var styles$w =
/*#__PURE__*/
css("width:16px;height:16px;");
var IconRadio = function IconRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED$1 : 0) + (checked ? CHECKED$1 : 0);
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$w, className),
      glyph: states$1[mask]
    })
  );
};

var img$E = {id: "dsc0n1KCLK3SmUuXqWybs", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$x =
/*#__PURE__*/
css("width:12px;height:12px;fill:#F5222D;fill-opacity:0.45;");
var IconRefresh = function IconRefresh(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$x, className),
      glyph: img$E
    })
  );
};

var img$F = {id: "Gw4Eg_n2c2mj_XGJQ2VMQ", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$y =
/*#__PURE__*/
css("fill:#fff;");
var IconSchema = function IconSchema(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$y, className),
      glyph: img$F
    })
  );
};

var img$G = {id: "hTITUPyfe2RGH-BoFGaWb", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$z =
/*#__PURE__*/
css("width:16px;height:16px;fill:#000;fill-opacity:0.25;");
var IconSearch = function IconSearch(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$z, className),
      glyph: img$G
    })
  );
};

var img$H = {id: "Fly0mC48cQ2sS8weVrG2A", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"64\" height=\"64\" viewBox=\"0 0 128 128\"><g><circle cx=\"16\" cy=\"64\" r=\"16\"/><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\"/><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\"/></g></svg>", viewbox: "0 0 128 128", viewBox: "0 0 128 128" };

var styles$A =
/*#__PURE__*/
css("width:16px;height:16px;");
var IconSpinner = function IconSpinner(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$A, className),
      glyph: img$H
    })
  );
};

var img$I = {id: "PaqpgEXNVvTNktfvkIFpR", content: "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\"/><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\"/></svg>", viewbox: "0 0 24 24", viewBox: "0 0 24 24" };

var styles$B =
/*#__PURE__*/
css("width:24px;height:24px;");
var IconUser = function IconUser(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$B, className),
      glyph: img$I
    }))
  );
};

var img$J = {id: "cR7tas8FPuEwp_wspvSES", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$C =
/*#__PURE__*/
css("width:14px;height:14px;fill:#fff;");
var IconUsers = function IconUsers(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    createElement(Icon, Object.assign({}, props, {
      className: cx(styles$C, className),
      glyph: img$J
    }))
  );
};

var styles$D = {
  button:
  /*#__PURE__*/
  css$1("border:solid 1px;border-radius:4px;box-sizing:border-box;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;transition-timing-function:ease-in-out;transition-duration:0.07s;transition-property:border,background-color,color,box-shadow;outline:none;cursor:pointer;-webkit-font-smoothing:antialiased;&:disabled,&:disabled:active,&:disabled:hover{border-color:#d9d9d9;color:#bfbfbf;background-color:#f3f3f3;box-shadow:none;cursor:default;}&:disabled svg{filter:grayscale(1) brightness(1.5);}"),
  icon:
  /*#__PURE__*/
  css$1("margin-bottom:2px;"),
  iconMargin:
  /*#__PURE__*/
  css$1("margin-right:8px;"),
  loading:
  /*#__PURE__*/
  css$1("position:relative;color:rgba(0,0,0,0);transition:none;&:hover,&:focus,&:active{cursor:default;color:rgba(0,0,0,0);box-shadow:none;}& > *,&:hover > *,&:active > *,&:focus > *{visibility:hidden;}& > *:last-child{visibility:visible;}"),
  loadingWrap:
  /*#__PURE__*/
  css$1("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;"),
  m:
  /*#__PURE__*/
  css$1("padding:4px 15px;"),
  s:
  /*#__PURE__*/
  css$1("padding:0px 15px;"),
  xs:
  /*#__PURE__*/
  css$1("padding:0 8px;line-height:18px;font-size:12px;"),
  iconicM:
  /*#__PURE__*/
  css$1("padding:4px 7px;"),
  iconicS:
  /*#__PURE__*/
  css$1("padding:0px 3px;")
};
var intentStyles = {
  base:
  /*#__PURE__*/
  css$1("border-color:#d9d9d9;background-color:white;color:rgba(0,0,0,0.65);&:focus,&:hover{box-shadow:0px 10px 15px rgba(0,0,0,0.05);}"),
  primary:
  /*#__PURE__*/
  css$1("border-color:#f5222d;background-color:#f5222d;color:#ffffff;&:focus,&:hover{box-shadow:0px 10px 15px rgba(245,34,45,0.15);}"),
  secondary:
  /*#__PURE__*/
  css$1("border-color:rgba(245,34,45,0.25);background-color:white;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:#f5222d;color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}"),
  iconic:
  /*#__PURE__*/
  css$1("border-color:transparent;background-color:transparent;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:rgba(217,217,217,0.45);color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}"),
  plain:
  /*#__PURE__*/
  css$1("border-color:transparent;background-color:transparent;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:#f5222d;color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}")
};
var intentActiveStyles = {
  base:
  /*#__PURE__*/
  css$1("&:active{border-color:rgba(217,217,217,0.45);background-color:#fafafa;color:rgba(0,0,0,0.65);box-shadow:none;}"),
  primary:
  /*#__PURE__*/
  css$1("&:active{border-color:#cf1322;background-color:#cf1322;box-shadow:none;}"),
  secondary:
  /*#__PURE__*/
  css$1("&:active{border-color:#cf1322;color:#cf1322;box-shadow:none;}"),
  iconic:
  /*#__PURE__*/
  css$1("&:active{border-color:#fafafa;background-color:#fafafa;color:#cf1322;box-shadow:none;}"),
  plain:
  /*#__PURE__*/
  css$1("&:active{border-color:#cf1322;color:#cf1322;box-shadow:none;}")
};
var intentLoadingStyles = {
  base:
  /*#__PURE__*/
  css$1("border-color:#d9d9d9;"),
  primary:
  /*#__PURE__*/
  css$1(),
  secondary:
  /*#__PURE__*/
  css$1("border-color:#f5222d;"),
  iconic:
  /*#__PURE__*/
  css$1("border-color:rgba(217,217,217,0.45);"),
  plain:
  /*#__PURE__*/
  css$1("border-color:#f5222d;")
};
var spinnerStyles = {
  base:
  /*#__PURE__*/
  css$1("fill:rgba(0,0,0,0.65);"),
  primary:
  /*#__PURE__*/
  css$1("fill:#ffffff;"),
  secondary:
  /*#__PURE__*/
  css$1("fill:#CF1322;"),
  iconic:
  /*#__PURE__*/
  css$1("fill:#CF1322;"),
  plain:
  /*#__PURE__*/
  css$1("fill:#CF1322;")
};
var Button = forwardRef(function (_ref, ref) {
  var _cx2;

  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      Icon = _ref.icon,
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
      props = _objectWithoutProperties(_ref, ["autoFocus", "className", "children", "disabled", "icon", "intent", "onClick", "loading", "size", "text", "title", "type"]);

  var isOnlyIcon = Icon && !children && !text;
  var content = [];

  if (Icon) {
    content.push(
    /*#__PURE__*/
    createElement(Icon, {
      className: cx$1(styles$D.icon, _defineProperty({}, styles$D.iconMargin, !isOnlyIcon))
    }));
  }

  content.push(children || text);

  if (loading && !disabled) {
    content.push(
    /*#__PURE__*/
    createElement("div", {
      className: styles$D.loadingWrap
    },
    /*#__PURE__*/
    createElement(IconSpinner, {
      className: spinnerStyles[intent]
    })));
  }

  return (
    /*#__PURE__*/
    createElement("button", Object.assign({}, props, {
      autoFocus: autoFocus,
      className: cx$1(styles$D.button, intentStyles[intent], (_cx2 = {}, _defineProperty(_cx2, styles$D.iconicM, isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$D.iconicS, isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$D.m, !isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$D.s, !isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$D.xs, !isOnlyIcon && size === 'xs'), _defineProperty(_cx2, intentLoadingStyles[intent], loading && !disabled), _defineProperty(_cx2, styles$D.loading, loading && !disabled), _defineProperty(_cx2, intentActiveStyles[intent], !loading && !disabled), _cx2), className),
      disabled: disabled,
      onClick: onClick,
      title: title,
      type: type,
      ref: ref
    }), content)
  );
});

var styles$E = {
  icon:
  /*#__PURE__*/
  css("display:block;"),
  iconWrap:
  /*#__PURE__*/
  css("position:relative;"),
  children:
  /*#__PURE__*/
  css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  css("margin-right:8px;"),
  input:
  /*#__PURE__*/
  css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  label:
  /*#__PURE__*/
  css("display:flex;align-items:center;cursor:pointer;")
};
var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      name = _ref.name,
      title = _ref.title,
      value = _ref.value;
  return (
    /*#__PURE__*/
    createElement("label", {
      className: cx(styles$E.label, className),
      title: title
    },
    /*#__PURE__*/
    createElement("input", {
      checked: checked,
      className: styles$E.input,
      disabled: disabled,
      type: "checkbox",
      onChange: onChange,
      name: name,
      value: value
    }),
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$E.iconWrap, _defineProperty({}, styles$E.childrenMargin, children))
    },
    /*#__PURE__*/
    createElement(IconCheckbox, {
      className: styles$E.icon,
      checked: checked,
      disabled: disabled
    })), typeof children === 'string' ?
    /*#__PURE__*/
    createElement(Text, null, children) : children)
  );
};

Prism.languages.go = Prism.languages.extend('clike', {
	'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
	'boolean': /\b(?:_|iota|nil|true|false)\b/,
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
	'string': {
		pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
		greedy: true
	}
});
delete Prism.languages.go['class-name'];

Prism.languages.lua = {
	'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
	// \z may be used to skip the following space
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'number': /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'keyword': /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
	'function': /(?!\d)\w+(?=\s*(?:[({]))/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
		{
			// Match ".." but don't break "..."
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'punctuation': /[\[\](){},;]|\.+|:+/
};

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
						++i;

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));

Prism.languages.python = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true
	},
	'string-interpolation': {
		pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: true,
		inside: {
			'interpolation': {
				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
				pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
				lookbehind: true,
				inside: {
					'format-spec': {
						pattern: /(:)[^:(){}]+(?=}$)/,
						lookbehind: true
					},
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation'
					},
					rest: null
				}
			},
			'string': /[\s\S]+/
		}
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: true
	},
	'decorator': {
		pattern: /(^\s*)@\w+(?:\.\w+)*/im,
		lookbehind: true,
		alias: ['annotation', 'punctuation'],
		inside: {
			'punctuation': /\./
		}
	},
	'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	'boolean': /\b(?:True|False|None)\b/,
	'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
	'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */
(function (Prism) {
	Prism.languages.php = Prism.languages.extend('clike', {
		'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
		'boolean': {
			pattern: /\b(?:false|true)\b/i,
			alias: 'constant'
		},
		'constant': [
			/\b[A-Z_][A-Z0-9_]*\b/,
			/\b(?:null)\b/i,
		],
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('php', 'string', {
		'shell-comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true,
			alias: 'comment'
		}
	});

	Prism.languages.insertBefore('php', 'comment', {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		}
	});

	Prism.languages.insertBefore('php', 'keyword', {
		'variable': /\$+(?:\w+\b|(?={))/i,
		'package': {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: true,
			inside: {
				punctuation: /\\/
			}
		}
	});

	// Must be defined after the function pattern
	Prism.languages.insertBefore('php', 'operator', {
		'property': {
			pattern: /(->)[\w]+/,
			lookbehind: true
		}
	});

	var string_interpolation = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	Prism.languages.insertBefore('php', 'string', {
		'nowdoc-string': {
			pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
			greedy: true,
			alias: 'string',
			inside: {
				'delimiter': {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<'?|[';]$/
					}
				}
			}
		},
		'heredoc-string': {
			pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
			greedy: true,
			alias: 'string',
			inside: {
				'delimiter': {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<"?|[";]$/
					}
				},
				'interpolation': string_interpolation // See below
			}
		},
		'single-quoted-string': {
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: true,
			alias: 'string'
		},
		'double-quoted-string': {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: true,
			alias: 'string',
			inside: {
				'interpolation': string_interpolation // See below
			}
		}
	});
	// The different types of PHP strings "replace" the C-like standard string
	delete Prism.languages.php['string'];

	Prism.hooks.add('before-tokenize', function(env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;

!function(i){var t=i.util.clone(i.languages.javascript);i.languages.jsx=i.languages.extend("markup",t),i.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},i.languages.jsx.tag),i.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:i.languages.jsx},alias:"language-javascript"}},i.languages.jsx.tag);var o=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(o).join(""):""},p=function(t){for(var n=[],e=0;e<t.length;e++){var a=t[e],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===o(a.content[0].content[1])&&n.pop():"/>"===a.content[a.content.length-1].content||n.push({tagName:o(a.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===a.type&&"{"===a.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===a.type&&"}"===a.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof a)&&0<n.length&&0===n[n.length-1].openedBraces){var g=o(a);e<t.length-1&&("string"==typeof t[e+1]||"plain-text"===t[e+1].type)&&(g+=o(t[e+1]),t.splice(e+1,1)),0<e&&("string"==typeof t[e-1]||"plain-text"===t[e-1].type)&&(g=o(t[e-1])+g,t.splice(e-1,1),e--),t[e]=new i.Token("plain-text",g,null,g);}a.content&&"string"!=typeof a.content&&p(a.content);}};i.hooks.add("after-tokenize",function(t){"jsx"!==t.language&&"tsx"!==t.language||p(t.tokens);});}(Prism);

/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 * 		constant, builtin, variable, symbol, regex
 */
(function(Prism) {
	Prism.languages.ruby = Prism.languages.extend('clike', {
		'comment': [
			/#.*/,
			{
				pattern: /^=begin\s[\s\S]*?^=end/m,
				greedy: true
			}
		],
    'class-name': {
      pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        'punctuation': /[.\\]/
      }
    },
		'keyword': /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
	});

	var interpolation = {
		pattern: /#\{[^}]+\}/,
		inside: {
			'delimiter': {
				pattern: /^#\{|\}$/,
				alias: 'tag'
			},
			rest: Prism.languages.ruby
		}
	};

	delete Prism.languages.ruby.function;

	Prism.languages.insertBefore('ruby', 'keyword', {
		'regex': [
			{
				pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				// Here we need to specifically allow interpolation
				pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /(^|[^/])\/(?!\/)(?:\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
				lookbehind: true,
				greedy: true
			}
		],
		'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
		'symbol': {
			pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
			lookbehind: true
		},
		'method-definition': {
			pattern: /(\bdef\s+)[\w.]+/,
			lookbehind: true,
			inside: {
				'function': /\w+$/,
				rest: Prism.languages.ruby
			}
		}
	});

	Prism.languages.insertBefore('ruby', 'number', {
		'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
		'constant': /\b[A-Z]\w*(?:[?!]|\b)/
	});

	Prism.languages.ruby.string = [
		{
			pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			// Here we need to specifically allow interpolation
			pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		}
	];

	Prism.languages.rb = Prism.languages.ruby;
}(Prism));

/**
 * based on original okaidia theme from prismjs
 */

var theme = /*#__PURE__*/
css("color:#f8f8f2;background:none;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;& .token.comment,& .token.prolog,& .token.doctype,& .token.cdata{color:slategray;}& .token.punctuation{color:#f8f8f2;}& .token.namespace{opacity:.7;}& .token.property,& .token.tag,& .token.constant,& .token.symbol,& .token.deleted{color:#f92672;}& .token.boolean,& .token.number{color:#ae81ff;}& .token.selector,& .token.attr-name,& .token.string,& .token.char,& .token.builtin,& .token.inserted{color:#a6e22e;}& .token.operator,& .token.entity,& .token.url,& .language-css .token.string,& .style .token.string,& .token.variable{color:#f8f8f2;}& .token.atrule,& .token.attr-value,& .token.function,& .token.class-name{color:#e6db74;}& .token.keyword{color:#66d9ef;}& .token.regex,& .token.important{color:#fd971f;}& .token.important,& .token.bold{font-weight:bold;}& .token.italic{font-style:italic;}& .token.entity{cursor:help;}");

var CodeBlock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CodeBlock, _React$Component);

  function CodeBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CodeBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CodeBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.ref = createRef();
    return _this;
  }

  _createClass(CodeBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Prism$1.highlightElement(this.ref.current);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      Prism$1.highlightElement(this.ref.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          text = _this$props.text,
          language = _this$props.language;
      return (
        /*#__PURE__*/
        createElement("code", {
          ref: this.ref,
          className: cx(textStyles.code, theme, _defineProperty({}, "language-".concat(language), language), className)
        }, text)
      );
    }
  }]);

  return CodeBlock;
}(Component);
CodeBlock.defaultProps = {
  language: 'javascript'
};

var styles$F = {
  outer:
  /*#__PURE__*/
  css("display:flex;align-items:center;"),
  control:
  /*#__PURE__*/
  css("display:block;margin-right:24px;&:last-child{margin-right:0px;}"),
  thin:
  /*#__PURE__*/
  css("margin-right:16px;")
};
var ControlsPanel = function ControlsPanel(_ref) {
  var className = _ref.className,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      thin = _ref.thin;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$F.outer, className)
    }, controls && controls.map(function (control) {
      return control ?
      /*#__PURE__*/
      createElement("div", {
        className: cx(styles$F.control, _defineProperty({}, styles$F.thin, thin))
      }, control) : null;
    }))
  );
};

var styles$G = {
  wrap:
  /*#__PURE__*/
  css("flex-shrink:0;display:flex;padding:8px 16px;"),
  controls:
  /*#__PURE__*/
  css("padding-left:16px;margin-left:auto;")
};
var PopupFooter = function PopupFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$G.wrap, className)
    }, children, controls &&
    /*#__PURE__*/
    createElement(ControlsPanel, {
      className: cx(styles$G.controls),
      controls: controls,
      thin: true
    }))
  );
};

var styles$H = {
  modal:
  /*#__PURE__*/
  css("flex-shrink:0;display:flex;flex-direction:column;padding:16px;margin:0 auto auto;overflow:hidden;"),
  fit:
  /*#__PURE__*/
  css("flex-shrink:1;height:calc(100vh - 80px);"),
  title:
  /*#__PURE__*/
  css("flex-shrink:0;padding-bottom:16px;padding-right:24px;border-bottom:1px solid rgba(55,52,66,0.08);margin-bottom:16px;padding-left:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  closeIcon:
  /*#__PURE__*/
  css("position:absolute;top:16px;right:16px;"),
  children:
  /*#__PURE__*/
  css()
};
var Modal =
/*#__PURE__*/
function (_BaseModal) {
  _inherits(Modal, _BaseModal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
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
          wide = _this$props.wide;
      var Component = onSubmit ? 'form' : 'div';
      return (
        /*#__PURE__*/
        createElement("div", {
          className: styles$1.shim,
          onMouseDown: this.handleOutsideClick
        },
        /*#__PURE__*/
        createElement(Component, {
          className: cx(styles$1.baseModal, styles$H.modal, (_cx = {}, _defineProperty(_cx, styles$H.fit, fit), _defineProperty(_cx, styles$1.wide, wide), _cx), className),
          ref: this.modalRef,
          tabIndex: 0,
          onKeyDown: this.handleEscapePress,
          onSubmit: onSubmit
        },
        /*#__PURE__*/
        createElement(Text, {
          className: styles$H.title,
          variant: "h2"
        }, title), onClose &&
        /*#__PURE__*/
        createElement(IconClose, {
          className: styles$H.closeIcon,
          onClick: onClose
        }),
        /*#__PURE__*/
        createElement("div", {
          className: styles$H.children
        }, loading ? 'Loading' : children), (footerContent || footerControls) &&
        /*#__PURE__*/
        createElement(PopupFooter, {
          controls: footerControls
        }, footerContent),
        /*#__PURE__*/
        createElement("div", {
          className: styles$1.focusClosureControl,
          onFocus: this.focusFirstInteractiveElement,
          tabIndex: "0"
        })))
      );
    }
  }]);

  return Modal;
}(BaseModal);

// TODO: default text styles
var ConfirmModal = function ConfirmModal(props) {
  var onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? 'Ok' : _props$confirmText;
  return (
    /*#__PURE__*/
    createElement(Modal, Object.assign({}, props, {
      onClose: onCancel,
      footerControls: [
      /*#__PURE__*/
      createElement(Button, {
        intent: 'base',
        onClick: onCancel
      }, "Cancel"),
      /*#__PURE__*/
      createElement(Button, {
        intent: 'primary',
        onClick: onConfirm
      }, confirmText)]
    }))
  );
};

var CORNER_HEIGHT = 8;
var styles$I = {
  tooltip: function tooltip(_ref) {
    var cornerPositionX = _ref.cornerPositionX;
    return (
      /*#__PURE__*/
      css("position:absolute;z-index:", zIndex.tooltip, ";max-width:400px;padding:5px 16px;color:#ffffff;background:rgba(0,0,0,0.65) !important;border-radius:4px;&::after{content:'';position:absolute;left:calc(", cornerPositionX, "px - 8px);bottom:-", CORNER_HEIGHT, "px;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-top:solid ", CORNER_HEIGHT, "px rgba(0,0,0,0.65);}")
    );
  },
  cornerUp:
  /*#__PURE__*/
  css("&::after{top:-", CORNER_HEIGHT, "px;bottom:auto;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-bottom:solid ", CORNER_HEIGHT, "px rgba(0,0,0,0.65);}"),
  wrapper:
  /*#__PURE__*/
  css("cursor:pointer;")
};
var withTooltip = function withTooltip(Component$1) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        cornerPositionX: 0,
        visible: false,
        top: 0,
        left: 0,
        topPlacement: true
      };
      _this.wrapperRef = createRef();
      _this.tooltipRef = createRef();

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
        if (_this.state.visible) {
          var root = document.body;

          if (root) {
            return createPortal(_this.renderTooltip(), root);
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
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var visible = this.state.visible;
        var wrapperRef = this.wrapperRef,
            tooltipRef = this.tooltipRef;
        var tooltipElement = tooltipRef.current;
        var componentRef = wrapperRef.current && wrapperRef.current.elementRef;
        var domNodeRef = wrapperRef;
        var wrapperElement = componentRef ? componentRef.current : domNodeRef.current;

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
            className = _this$props.className,
            tooltipContent = _this$props.tooltipContent,
            props = _objectWithoutProperties(_this$props, ["children", "className", "tooltipContent"]);

        return (
          /*#__PURE__*/
          createElement(Fragment, null,
          /*#__PURE__*/
          createElement(Component$1, Object.assign({}, props, {
            className: cx(styles$I.wrapper, className),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onScroll: this.handleScroll,
            ref: this.wrapperRef
          }), children), this.renderTooltipPortal())
        );
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip() {
        var _this$props2 = this.props,
            tooltipContent = _this$props2.tooltipContent,
            popoverClassName = _this$props2.popoverClassName;
        var _this$state = this.state,
            cornerPositionX = _this$state.cornerPositionX,
            left = _this$state.left,
            top = _this$state.top,
            topPlacement = _this$state.topPlacement;
        return (
          /*#__PURE__*/
          createElement("div", {
            className: cx(textStyles.p, styles$I.tooltip({
              cornerPositionX: cornerPositionX
            }), _defineProperty({}, styles$I.cornerUp, !topPlacement), popoverClassName),
            style: {
              left: left,
              top: top
            },
            ref: this.tooltipRef
          }, tooltipContent)
        );
      }
    }]);

    return _class;
  }(Component), _class.defaultProps = {
    placement: 'top'
  }, _temp;
};
var Tooltip = function Tooltip(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      content = _ref2.content,
      tag = _ref2.tag,
      popoverClassName = _ref2.popoverClassName;
  var Component = withTooltip(tag || 'div');
  return (
    /*#__PURE__*/
    createElement(Component, {
      className: cx(styles$I.wrapper, className),
      tooltipContent: content,
      popoverClassName: popoverClassName
    }, children)
  );
};

var copyToClipboard = function copyToClipboard(str) {
  if (!document.body) {
    return;
  } // for Flow: prevent the refinement from invalidating


  var body = document.body;
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  body.appendChild(el);
  var currentSelection = document.getSelection();
  var selected = currentSelection && currentSelection.rangeCount > 0 ? currentSelection.getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  body.removeChild(el);

  if (selected) {
    var _currentSelection = document.getSelection();

    if (_currentSelection) {
      _currentSelection.removeAllRanges();
    }

    _currentSelection = document.getSelection();

    if (_currentSelection) {
      _currentSelection.addRange(selected);
    }
  }
};
// TODO: improve HOC with tooltop from CopyToClipboard
var withCopyToClipboard = function withCopyToClipboard(Component) {
  return function (_ref) {
    var content = _ref.content,
        props = _objectWithoutProperties(_ref, ["content"]);

    return (
      /*#__PURE__*/
      createElement(Component, Object.assign({}, props, {
        onClick: function onClick() {
          return copyToClipboard(content);
        }
      }))
    );
  };
};
var ButtonWithTooltip = withTooltip(Button);
var CopyToClipboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CopyToClipboard, _React$Component);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  _createClass(CopyToClipboard, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltipIntervalId) clearInterval(this.tooltipIntervalId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tooltipContent = _this$props.tooltipContent,
          tooltipContentCopied = _this$props.tooltipContentCopied,
          content = _this$props.content,
          props = _objectWithoutProperties(_this$props, ["tooltipContent", "tooltipContentCopied", "content"]);

      var clicked = this.state.clicked;
      return (
        /*#__PURE__*/
        createElement(ButtonWithTooltip, Object.assign({}, props, {
          tooltipContent: clicked ? tooltipContentCopied : tooltipContent,
          icon: IconNewWindow,
          onClick: this.handleClick,
          onMouseLeave: this.resetClickedState
        }))
      );
    }
  }]);

  return CopyToClipboard;
}(Component);
CopyToClipboard.defaultProps = {
  tooltipContent: 'Copy to clipboard',
  tooltipContentCopied: 'Copied'
};

var defaultListItemColor = 'rgba(0, 0, 0, 0.65)';
var styles$J = {
  wrap:
  /*#__PURE__*/
  css("position:relative;display:inline-block;"),
  popover:
  /*#__PURE__*/
  css("position:absolute;left:0;top:100%;margin-top:6px;padding:8px 0;border-radius:4px;box-shadow:0 5px 20px 0 rgba(0,0,0,0.09);border:solid 1px rgba(82,82,82,0.07);background-color:#ffffff;z-index:3;"),
  popoverToLeft:
  /*#__PURE__*/
  css("left:auto;right:0;"),
  item: function item() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultListItemColor;
    return (
      /*#__PURE__*/
      css("padding:0 16px;list-style:none;line-height:32px;white-space:nowrap;color:", color, ";&:hover{cursor:pointer;background-color:#fafafa;}")
    );
  }
};
var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.popoverRef = createRef();
    _this.wrapRef = createRef();
    _this.state = {
      isOpen: false
    };

    _this.handleClick = function (event) {
      var onClick = _this.props.onClick;

      _this.toggleDropdown();

      onClick && onClick(event);
    };

    _this.handleMouseDownOutside = function (event) {
      var isOpen = _this.state.isOpen;
      var ref = _this.popoverRef && _this.popoverRef.current; // for Flow

      var eventTarget = event.target;

      if (isOpen && ref && !ref.contains(eventTarget) && ref !== event.target) {
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

    _this.toggleDropdown = function () {
      return _this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
    };

    _this.renderPopover = function () {
      var popoverClassName = _this.props.popoverClassName;
      var _document = document,
          body = _document.body;
      var wrapElement = _this.wrapRef && _this.wrapRef.current;
      var toLeft = false;

      if (wrapElement && body) {
        toLeft = wrapElement.getBoundingClientRect().left > body.clientWidth / 2;
      }

      return (
        /*#__PURE__*/
        createElement("ul", {
          className: cx(styles$J.popover, _defineProperty({}, styles$J.popoverToLeft, toLeft), popoverClassName),
          onClick: _this.handlePopoverClick,
          ref: _this.popoverRef
        }, _this.props.items)
      );
    };

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.isOpen) document.addEventListener('mousedown', this.handleMouseDownOutside);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var isOpen = this.state.isOpen;
      if (!prevState.isOpen && isOpen) document.addEventListener('mousedown', this.handleMouseDownOutside);else if (prevState.isOpen && !isOpen) document.removeEventListener('mousedown', this.handleMouseDownOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleMouseDownOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          items = _this$props.items;
      var isOpen = this.state.isOpen;
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$J.wrap, className),
          onClick: this.handleClick,
          ref: this.wrapRef
        }, children, isOpen && items && this.renderPopover())
      );
    }
  }]);

  return Dropdown;
}(Component);
Dropdown.defaultProps = {
  children:
  /*#__PURE__*/
  createElement(Button, {
    icon: IconMore,
    intent: "iconic"
  })
};
var DropdownItem = function DropdownItem(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      color = _ref2.color,
      props = _objectWithoutProperties(_ref2, ["children", "className", "color"]);

  return (
    /*#__PURE__*/
    createElement("li", Object.assign({}, props, {
      className: cx(textStyles.basic, styles$J.item(color), className)
    }), children)
  );
};

var styles$K = {
  indicator:
  /*#__PURE__*/
  css("display:inline-block;flex-shrink:0;margin:8px;background-color:rgba(110,97,160,0.04);border-radius:50%;"),
  state: {
    bad:
    /*#__PURE__*/
    css("background-color:#f5222d;"),
    good:
    /*#__PURE__*/
    css("background-color:#52c41a;"),
    inactive:
    /*#__PURE__*/
    css("background-color:rgba(110,97,160,0.04);"),
    middle:
    /*#__PURE__*/
    css("background-color:#faad14;")
  },
  size: {
    s:
    /*#__PURE__*/
    css("width:6px;height:6px;") // m: css`
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
  return (
    /*#__PURE__*/
    React__default.createElement("span", {
      className: cx(styles$K.indicator, styles$K.state[state], styles$K.size.s, className)
    })
  );
};

var styles$L = {
  wrap:
  /*#__PURE__*/
  css("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;"),
  icon:
  /*#__PURE__*/
  css("width:200px;height:182px;fill:rgba(0,0,0,0.25);"),
  iconMargin:
  /*#__PURE__*/
  css("margin-bottom:24px;"),
  description:
  /*#__PURE__*/
  css("margin-bottom:16px;color:rgba(0,0,0,0.65);text-align:center;"),
  title:
  /*#__PURE__*/
  css("margin-bottom:8px;font-weight:600;color:rgba(0,0,0,0.65);"),
  error:
  /*#__PURE__*/
  css("color:#F5222D;")
};
var NonIdealState = function NonIdealState(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Icon = _ref.icon,
      image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      isError = _ref.isError;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$L.wrap, className)
    }, image ?
    /*#__PURE__*/
    createElement(SVGImage, {
      glyph: image,
      className: cx(_defineProperty({}, styles$L.iconMargin, title || description))
    }) : null, Icon && !image ?
    /*#__PURE__*/
    createElement(Icon, {
      className: cx(styles$L.icon, _defineProperty({}, styles$L.iconMargin, title || description))
    }) : null, title &&
    /*#__PURE__*/
    createElement(Text, {
      variant: "h2",
      className: cx(styles$L.title, _defineProperty({}, styles$L.error, isError))
    }, title), description &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$L.description
    }, description), children)
  );
};
var NonIdealStateAction = function NonIdealStateAction(_ref2) {
  var actionText = _ref2.actionText,
      className = _ref2.className,
      description = _ref2.description,
      icon = _ref2.icon,
      image = _ref2.image,
      isError = _ref2.isError,
      onActionClick = _ref2.onActionClick,
      title = _ref2.title;
  return (
    /*#__PURE__*/
    createElement(NonIdealState, {
      className: className,
      description: description,
      icon: icon,
      image: image,
      isError: isError,
      title: title
    },
    /*#__PURE__*/
    createElement(Button, {
      autoFocus: true,
      text: actionText,
      onClick: onActionClick
    }))
  );
};

var img$K = {id: "oQUAFj0pUDcuRoSAaRR22", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.982 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.352-2.796-3.5271-6.787-3.5271-11.975v-9.942H49.9491v-9.913h82.5079v20.503c0 4.726-1.241 8.495-3.723 11.304-2.482 2.811-6.948 4.216-12.152 4.216-5.682 0-10.947-1.398-13.298-4.193z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6371H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><circle cx=\"130.804\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\"/><circle cx=\"69.6166\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

var SplashError = function SplashError(_ref) {
  var description = _ref.description,
      title = _ref.title,
      details = _ref.details,
      image = _ref.image,
      children = _ref.children;

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showDetails = _React$useState2[0],
      setShowDetails = _React$useState2[1];

  var onCloseClick = function onCloseClick() {
    return setShowDetails(false);
  };

  var commonProps = {
    isError: true,
    image: image || img$K,
    title: title,
    description: description,
    children: children
  };
  return (
    /*#__PURE__*/
    createElement(Fragment, null, showDetails &&
    /*#__PURE__*/
    createElement(Modal, {
      title: title,
      onClose: onCloseClick,
      footerControls: [
      /*#__PURE__*/
      createElement(Button, {
        intent: 'primary',
        onClick: onCloseClick
      }, "Close")]
    }, !!details &&
    /*#__PURE__*/
    createElement(Text, {
      tag: "div"
    }, details)), details ?
    /*#__PURE__*/
    createElement(NonIdealStateAction, Object.assign({}, commonProps, {
      actionText: "Details",
      onActionClick: function onActionClick() {
        return setShowDetails(true);
      }
    })) :
    /*#__PURE__*/
    createElement(NonIdealState, commonProps))
  );
};

var img$L = {id: "QFSZoeiiB6iR3jIdNNCFX", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M122.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.983 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.351-2.795-3.527-6.787-3.527-11.975v-9.942H50.9492v-9.913h82.5078v20.503c0 4.726-1.241 8.495-3.722 11.305-2.482 2.81-6.949 4.215-12.152 4.215-5.683 0-10.948-1.398-13.299-4.193z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.6472 27.3276H182.267v-9.0181H56.6472v9.0181zM19.457 163.966h162.81V45.6372H19.457V163.966zm4.5362-145.871c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266-2.5202 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.0429-4.5265 4.5631-4.5265zm18.7326 0c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.563-2.0266-4.563-4.5266 0-2.4999 2.0429-4.5265 4.563-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.7918 90.408l-9.5528-9.5575 9.551-9.5534-6.3707-6.3632-9.5517 9.5522-9.5503-9.5522-6.3681 6.3632 9.5524 9.5577-9.5524 9.5532 6.3681 6.3684 9.5503-9.5527 9.5552 9.5527 6.369-6.3684zM151.471 90.408l-9.552-9.5575 9.551-9.5534-6.371-6.3632-9.552 9.5522-9.55-9.5522-6.368 6.3632 9.552 9.5577-9.552 9.5532 6.368 6.3684 9.55-9.5527 9.555 9.5527 6.369-6.3684z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

var SplashErrorFatal = function SplashErrorFatal(props) {
  return (
    /*#__PURE__*/
    createElement(SplashError, Object.assign({}, props, {
      image: img$L
    }))
  );
};

var img$M = {id: "GEdNkaaT36ZpKV1L_pBbE", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6372H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><circle cx=\"99.5366\" cy=\"134.791\" r=\"9.63877\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M147.73 63.6119L71.3617 142.946l-6.41-6.17L141.32 57.4415l6.41 6.1704z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.31 76.3677c-9.932-5.7545-21.468-9.0486-33.7734-9.0486-18.6783 0-35.584 7.5899-47.8011 19.8538l6.2913 6.2914c10.607-10.6538 25.2884-17.2478 41.5098-17.2478 9.8944 0 19.2154 2.4531 27.3884 6.7844l6.385-6.6332zm7.497 5.0415l-6.212 6.4533c2.35 1.758 4.563 3.6884 6.62 5.7723l6.292-6.2915c-2.099-2.1215-4.337-4.1045-6.7-5.9341zm-21.44 9.4433c-6.048-2.7339-12.762-4.2558-19.8304-4.2558-13.355 0-25.4413 5.4322-34.1698 14.2073l6.2914 6.292c7.1184-7.1657 16.9803-11.602 27.8784-11.602 4.6244 0 9.0614.7986 13.1814 2.2654l6.649-6.9069zm1.702 11.0605l6.259-6.5011c2.346 1.6586 4.537 3.5216 6.547 5.5631l-6.291 6.291c-1.97-2.007-4.154-3.803-6.515-5.353zm-15.953 3.744c-1.807-.344-3.672-.524-5.5794-.524-8.2365 0-15.6887 3.357-21.0628 8.778l6.2915 6.292c3.1813-3.221 7.4084-5.407 12.1305-6.007l8.2202-8.539zm2.656 10.071l6.455-6.707c2.413 1.379 4.614 3.086 6.541 5.062l-6.292 6.292c-1.893-1.961-4.167-3.55-6.704-4.647z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

var SplashErrorNetwork = function SplashErrorNetwork(props) {
  return (
    /*#__PURE__*/
    createElement(SplashError, Object.assign({}, props, {
      title: props.title || 'Network problem',
      image: img$M
    }))
  );
};

var styles$M = {
  outer:
  /*#__PURE__*/
  css("padding:8px 0 0;margin:0;list-style:none;"),
  item:
  /*#__PURE__*/
  css("padding:12px 16px;border:solid 1px #E8E8E8;margin-bottom:8px;border-radius:4px;background-color:#ffffff;transition:0.1s ease-in-out;transition-property:border-color,box-shadow;&:last-child{margin-bottom:0;}&:hover{border-color:rgba(82,82,82,0.07);box-shadow:0px 5px 20px rgba(0,0,0,0.09);}")
};

var FlatListItem = function FlatListItem(_ref) {
  var className = _ref.className,
      item = _ref.item,
      render = _ref.render;
  return (
    /*#__PURE__*/
    createElement("li", {
      className: cx(styles$M.item, className)
    }, render(item))
  );
};

var FlatList = function FlatList(_ref2) {
  var className = _ref2.className,
      itemClassName = _ref2.itemClassName,
      itemKey = _ref2.itemKey,
      items = _ref2.items,
      itemRender = _ref2.itemRender;
  return (
    /*#__PURE__*/
    createElement("ul", {
      className: cx(styles$M.outer, className)
    }, items && items.map(function (item) {
      return (
        /*#__PURE__*/
        createElement(FlatListItem, {
          className: itemClassName,
          item: item,
          key: item[itemKey],
          render: itemRender
        })
      );
    }))
  );
};

var styles$N = {
  wrap:
  /*#__PURE__*/
  css("display:flex;flex-wrap:wrap;align-items:center;margin-left:-16px;margin-right:-16px;"),
  input:
  /*#__PURE__*/
  css("margin:0 16px 16px;"),
  column:
  /*#__PURE__*/
  css("align-self:stretch;margin:0 16px;"),
  columnInput:
  /*#__PURE__*/
  css("margin-bottom:16px;"),
  columns: [
  /*#__PURE__*/
  css("flex-basis:100%;"),
  /*#__PURE__*/
  css("flex-basis:calc(50% - 32px);"),
  /*#__PURE__*/
  css("flex-basis:calc(33.3% - 32px);")]
};
var renderers = {
  horizontal: function horizontal(children, columns, itemClassName) {
    return children instanceof Array ? children.map(function (child) {
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$N.input, styles$N.columns[columns - 1], itemClassName)
        }, child)
      );
    }) :
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$N.input, styles$N.columns[columns - 1], itemClassName)
    }, children);
  },
  vertical: function vertical(children, columns, itemClassName) {
    var items = children instanceof Array ? children : [children];
    var columnSize = Math.ceil(items.length / columns);
    var groupedItems = times(function () {
      return [];
    }, columns);
    items.forEach(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var column = Math.floor(i / columnSize);
      groupedItems[column].push(item);
    });
    return groupedItems.map(function (group) {
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$N.column, styles$N.columns[columns - 1])
        }, group.map(function (child) {
          return (
            /*#__PURE__*/
            createElement("div", {
              className: cx(styles$N.columnInput, itemClassName)
            }, child)
          );
        }))
      );
    });
  }
};
var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 1 : _ref$columns,
      itemClassName = _ref.itemClassName,
      verticalSort = _ref.verticalSort;
  var renderer = verticalSort ? renderers.vertical : renderers.horizontal;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$N.wrap, className)
    }, renderer(children, columns, itemClassName))
  );
};

var styles$O = {
  wrap:
  /*#__PURE__*/
  css("margin-bottom:24px;"),
  tooltip:
  /*#__PURE__*/
  css("display:inline-block;margin-left:8px;"),
  headingPane:
  /*#__PURE__*/
  css("display:flex;flex-direction:row;align-items:baseline;margin-bottom:16px;"),
  subTitle:
  /*#__PURE__*/
  css("margin-left:32px;"),
  label:
  /*#__PURE__*/
  css("display:block;"),
  topRightControls:
  /*#__PURE__*/
  css("margin-left:auto;")
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
      verticalSort = _ref.verticalSort;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$O.wrap, className)
    },
    /*#__PURE__*/
    createElement("div", {
      className: styles$O.headingPane
    }, label &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$O.label,
      variant: "h4",
      tag: "span"
    }, label, ":", info &&
    /*#__PURE__*/
    createElement(Tooltip, {
      className: styles$O.tooltip,
      content: info
    },
    /*#__PURE__*/
    createElement(IconInfo, null))), subTitle &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$O.subTitle,
      variant: "h5",
      tag: "span",
      upperCase: true
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    createElement(ControlsPanel, {
      className: styles$O.topRightControls,
      controls: topRightControls
    })),
    /*#__PURE__*/
    createElement(InputGroup, {
      columns: columns,
      itemClassName: itemClassName,
      verticalSort: verticalSort
    }, children))
  );
};

var styles$P = {
  status:
  /*#__PURE__*/
  css("display:flex;align-items:baseline;flex-basis:153px;color:rgba(0,0,0,0.65);")
};
var HealthStatus = function HealthStatus(_ref) {
  var className = _ref.className,
      defaultMessage = _ref.defaultMessage,
      status = _ref.status,
      message = _ref.message,
      title = _ref.title;
  return (
    /*#__PURE__*/
    createElement(Text, {
      className: cx(styles$P.status, className),
      variant: "p",
      tag: "div",
      title: title
    },
    /*#__PURE__*/
    createElement(DotIndicator, {
      state: status === 'healthy' ? 'good' : 'bad'
    }), message || defaultMessage || status)
  );
};

var styles$Q = {
  outer:
  /*#__PURE__*/
  css$1("position:relative;border:solid 1px #D9D9D9;box-sizing:border-box;border-radius:4px;background-color:#ffffff;"),
  disabled:
  /*#__PURE__*/
  css$1("background-color:#F3F3F3;"),
  focused:
  /*#__PURE__*/
  css$1("border-color:rgba(0,0,0,0.26);box-shadow:0px 0px 3px rgba(0,0,0,0.24);"),
  error:
  /*#__PURE__*/
  css$1("border-color:#F5222D;box-shadow:0px 0px 3px rgba(245,34,45,0.65);"),
  input:
  /*#__PURE__*/
  css$1("display:block;width:100%;height:100%;border:0;padding:5px 16px;box-sizing:border-box;border-radius:3px;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;"),
  inputWithIcon:
  /*#__PURE__*/
  css$1("padding:5px 32px 5px 16px;"),
  iconWrap:
  /*#__PURE__*/
  css$1("position:absolute;top:7px;right:7px;bottom:7px;display:flex;align-items:center;")
};

var noop = function noop() {};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.elementRef = createRef();
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

    _this.handleClearClick = function () {
      _this.focus();

      _this.props.onClearClick && _this.props.onClearClick();
    };

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _cx;

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
          props = _objectWithoutProperties(_this$props, ["autoComplete", "autoFocus", "className", "onClearClick", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "disabled", "error", "name", "onChange", "readOnly", "rightIcon", "title", "type", "value", "placeholder"]);

      var focused = this.state.focused;
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx$1(styles$Q.outer, (_cx = {}, _defineProperty(_cx, styles$Q.disabled, disabled), _defineProperty(_cx, styles$Q.focused, focused), _defineProperty(_cx, styles$Q.error, error), _cx), className),
          title: title
        },
        /*#__PURE__*/
        createElement("input", Object.assign({}, props, {
          autoFocus: autoFocus,
          autoComplete: autoComplete,
          className: cx$1(styles$Q.input, _defineProperty({}, styles$Q.inputWithIcon, rightIcon || onClearClick)),
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
        })), (onClearClick || rightIcon) &&
        /*#__PURE__*/
        createElement("div", {
          className: styles$Q.iconWrap
        }, onClearClick && (!rightIcon || value) ?
        /*#__PURE__*/
        createElement(IconCancel, {
          onClick: !(disabled || readOnly) && this.handleClearClick || noop
        }) : rightIcon))
      );
    }
  }]);

  return Input;
}(Component);

var styles$R = {
  innerButton:
  /*#__PURE__*/
  css("padding:0;"),
  icon:
  /*#__PURE__*/
  css("display:block;")
};
var InputPassword =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputPassword, _React$Component);

  function InputPassword() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputPassword)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
      return (
        /*#__PURE__*/
        createElement(Input, Object.assign({}, this.props, {
          type: hidden ? 'password' : 'text',
          rightIcon:
          /*#__PURE__*/
          createElement(Button, {
            className: styles$R.innerButton,
            size: "xs",
            intent: "iconic",
            onClick: this.toggleState
          },
          /*#__PURE__*/
          createElement(Icon, {
            className: styles$R.icon
          }))
        }))
      );
    }
  }]);

  return InputPassword;
}(Component);

var styles$S = {
  wrap:
  /*#__PURE__*/
  css("display:block;margin-bottom:4px;"),
  tooltip:
  /*#__PURE__*/
  css("display:inline-block;margin-left:8px;"),
  headingPane:
  /*#__PURE__*/
  css("display:flex;flex-direction:row;align-items:baseline;margin-bottom:8px;"),
  subTitle:
  /*#__PURE__*/
  css("margin-left:32px;"),
  label:
  /*#__PURE__*/
  css("display:block;"),
  topRightControls:
  /*#__PURE__*/
  css("margin-left:auto;"),
  input:
  /*#__PURE__*/
  css("margin-bottom:4px;"),
  message:
  /*#__PURE__*/
  css("display:block;min-height:20px;"),
  errorMessage:
  /*#__PURE__*/
  css("color:#F5222D;")
};
var LabeledInput = function LabeledInput(_ref) {
  var _ref$inputComponent = _ref.inputComponent,
      InputComponent = _ref$inputComponent === void 0 ? Input : _ref$inputComponent,
      topRightControls = _ref.topRightControls,
      className = _ref.className,
      inputClassName = _ref.inputClassName,
      subTitle = _ref.subTitle,
      info = _ref.info,
      label = _ref.label,
      error = _ref.error,
      message = _ref.message,
      restProps = _objectWithoutProperties(_ref, ["inputComponent", "topRightControls", "className", "inputClassName", "subTitle", "info", "label", "error", "message"]);

  return (
    /*#__PURE__*/
    createElement("label", {
      className: cx(styles$S.wrap, className)
    },
    /*#__PURE__*/
    createElement("div", {
      className: styles$S.headingPane
    },
    /*#__PURE__*/
    createElement(Text, {
      className: styles$S.label,
      variant: "h4",
      tag: "span"
    }, label, ":", !!info &&
    /*#__PURE__*/
    createElement(Tooltip, {
      className: styles$S.tooltip,
      content: info
    },
    /*#__PURE__*/
    createElement(IconInfo, null))), !!subTitle &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$S.subTitle,
      variant: "h5",
      tag: "span",
      upperCase: true
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    createElement(ControlsPanel, {
      className: styles$S.topRightControls,
      controls: topRightControls
    })),
    /*#__PURE__*/
    createElement(InputComponent, Object.assign({}, restProps, {
      error: error,
      className: cx(styles$S.input, inputClassName)
    })),
    /*#__PURE__*/
    createElement(Text, {
      variant: "p",
      className: cx(styles$S.message, _defineProperty({}, styles$S.errorMessage, error))
    }, message))
  );
};

var img$N = {id: "RnGyf_ZjhQ8XJ2ya9_Tpn", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#B5EC8E\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#000\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var img$O = {id: "bSCMyS2qIRzaHZEwT39c_", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#f5222d\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var styles$T = {
  wrap:
  /*#__PURE__*/
  css("position:relative;width:14px;height:17px;overflow:hidden;transition:height 0.3s ease-in-out;&:hover{height:59px;}"),
  flag:
  /*#__PURE__*/
  css("position:absolute;left:0;bottom:0;")
};
var LeaderFlag = function LeaderFlag(_ref) {
  var className = _ref.className,
      fail = _ref.fail,
      title = _ref.title;
  var glyph = fail ? img$O : img$N;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$T.wrap, className),
      title: title
    },
    /*#__PURE__*/
    createElement(SVGImage, {
      glyph: glyph,
      className: styles$T.flag
    }))
  );
};

var img$P = {id: "bnga8Mc8WHcgmfmtjDY6e", content: "<svg width=\"42\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 42 8", viewBox: "0 0 42 8" };

var LeaderFlagSmall = function LeaderFlagSmall(props) {
  return (
    /*#__PURE__*/
    createElement(SVGImage, Object.assign({}, props, {
      glyph: img$P
    }))
  );
};

var styles$U = {
  link:
  /*#__PURE__*/
  css("color:rgba(245,34,45,0.65);text-decoration:none;&:hover,&:focus{color:#f5222d;}&:active{color:#cf1322;}")
};
var Link = function Link(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick,
      target = _ref.target,
      title = _ref.title;
  return (
    /*#__PURE__*/
    createElement("a", {
      className: cx(styles$U.link, className),
      href: href,
      onClick: onClick,
      target: target,
      title: title
    }, children)
  );
};

var styles$V = {
  wrap:
  /*#__PURE__*/
  css("& code{padding:3px;border-radius:3px;background-color:#1E2537;color:white;font-family:Menlo,Monaco,Consolas,'Courier New',monospace;}& pre{display:block;padding:16px;margin-bottom:16px;border-radius:4px;background-color:#1E2537;color:white;& > code{padding:0;border-radius:0;background-color:transparent;}}"),
  h:
  /*#__PURE__*/
  css("margin-bottom:16px;color:#000;"),
  p:
  /*#__PURE__*/
  css("margin-bottom:20px;"),
  ul:
  /*#__PURE__*/
  css("padding-left:24px;margin-bottom:20px;")
};
var overrides = {
  h1: function h1(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h1"
      }), children)
    );
  },
  h2: function h2(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h2"
      }), children)
    );
  },
  h3: function h3(_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h3"
      }), children)
    );
  },
  h4: function h4(_ref4) {
    var children = _ref4.children,
        props = _objectWithoutProperties(_ref4, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h4"
      }), children)
    );
  },
  h5: function h5(_ref5) {
    var children = _ref5.children,
        props = _objectWithoutProperties(_ref5, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h5"
      }), children)
    );
  },
  h6: function h6(_ref6) {
    var children = _ref6.children,
        props = _objectWithoutProperties(_ref6, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.h,
        variant: "h6"
      }), children)
    );
  },
  p: function p(_ref7) {
    var children = _ref7.children,
        props = _objectWithoutProperties(_ref7, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.p,
        variant: "basic",
        tag: "p"
      }), children)
    );
  },
  a: function a(_ref8) {
    var children = _ref8.children,
        props = _objectWithoutProperties(_ref8, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Link, Object.assign({}, props, {
        target: "_blank"
      }), children)
    );
  },
  code: function code(_ref9) {
    var children = _ref9.children,
        className = _ref9.className,
        props = _objectWithoutProperties(_ref9, ["children", "className"]);

    return className && className.indexOf('lang-') === 0 ?
    /*#__PURE__*/
    createElement(CodeBlock, {
      language: className.substr(5),
      text: children
    }) :
    /*#__PURE__*/
    createElement(Text, Object.assign({}, props, {
      variant: "code"
    }), children);
  },
  ul: function ul(_ref10) {
    var children = _ref10.children,
        props = _objectWithoutProperties(_ref10, ["children"]);

    return (
      /*#__PURE__*/
      createElement(Text, Object.assign({}, props, {
        className: styles$V.ul,
        tag: "ul"
      }), children)
    );
  }
};
var Markdown = function Markdown(_ref11) {
  var text = _ref11.text;
  return (
    /*#__PURE__*/
    createElement(MD, {
      className: styles$V.wrap,
      options: {
        overrides: overrides
      }
    }, text)
  );
};

var styles$W = {
  splash:
  /*#__PURE__*/
  css("position:relative;display:flex;align-items:center;justify-content:center;padding:16px;background:#fff1f0;box-shadow:0px 1px 4px rgba(0,0,0,0.11);color:#f5222d;"),
  children:
  /*#__PURE__*/
  css("color:#f5222d;"),
  close:
  /*#__PURE__*/
  css("position:absolute;top:calc(50% - 8px);right:16px;"),
  closePadding:
  /*#__PURE__*/
  css("padding-right:48px;"),
  controls:
  /*#__PURE__*/
  css("flex-shrink:0;"),
  controlsMargin:
  /*#__PURE__*/
  css("margin-left:24px;")
};
var NotificationSplash = function NotificationSplash(_ref) {
  var className = _ref.className,
      children = _ref.children,
      controls = _ref.controls,
      onClose = _ref.onClose;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$W.splash, _defineProperty({}, styles$W.closePadding, onClose), className)
    },
    /*#__PURE__*/
    createElement(Text, {
      className: styles$W.children,
      tag: "span"
    }, children),
    /*#__PURE__*/
    createElement(ControlsPanel, {
      className: cx(styles$W.controls, _defineProperty({}, styles$W.controlsMargin, children && controls)),
      controls: controls
    }), onClose &&
    /*#__PURE__*/
    createElement(IconClose, {
      className: styles$W.close,
      onClick: onClose
    }))
  );
};

var styles$X = {
  splash:
  /*#__PURE__*/
  css("position:fixed;top:0;left:0;right:0;z-index:", zIndex.fixedSplash, ";")
};
var NotificationSplashFixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotificationSplashFixed, _React$Component);

  function NotificationSplashFixed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NotificationSplashFixed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotificationSplashFixed)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      return (
        /*#__PURE__*/
        createElement(NotificationSplash, {
          className: cx(styles$X.splash, className),
          controls: controls,
          onClose: onClose
        }, children)
      );
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.isVisible()) return null;
      var root = document.body;

      if (root) {
        return createPortal(this.renderSplash(), root);
      }

      return null;
    }
  }]);

  return NotificationSplashFixed;
}(Component);

var styles$Y = {
  wrap:
  /*#__PURE__*/
  css("position:relative;"),
  spin:
  /*#__PURE__*/
  css("position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);"),
  animated:
  /*#__PURE__*/
  css("margin:100px auto;width:60px;height:60px;text-align:center;font-size:10px;"),
  rect:
  /*#__PURE__*/
  css("background-color:#333;height:100%;width:7px;margin:0 3px 0 0;display:inline-block;-webkit-animation:cluster-spin-sk-stretchdelay 1.2s infinite ease-in-out;animation:cluster-spin-sk-stretchdelay 1.2s infinite ease-in-out;&.rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s;}&.rect3{-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}&.rect4{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}&.rect5{-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}@-webkit-keyframes cluster-spin-sk-stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1.0)}}@keyframes cluster-spin-sk-stretchdelay{0%,40%,100%{transform:scale3d(1,0.4,1);-webkit-transform:scale3d(1,0.4,1);}20%{transform:scale3d(1,1.0,1);-webkit-transform:scale3d(1,1.0,1);}}"),
  container:
  /*#__PURE__*/
  css("&.blur{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;opacity:.5;}")
};
var Spin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin() {
    _classCallCheck(this, Spin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spin).apply(this, arguments));
  }

  _createClass(Spin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          enable = _this$props.enable;
      return (
        /*#__PURE__*/
        createElement("div", {
          className: styles$Y.wrap
        }, enable && this.renderSpin(),
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$Y.container, {
            'blur': enable
          })
        }, children))
      );
    }
  }, {
    key: "renderSpin",
    value: function renderSpin() {
      return (
        /*#__PURE__*/
        createElement("div", {
          className: styles$Y.spin
        },
        /*#__PURE__*/
        createElement("div", {
          className: styles$Y.animated
        },
        /*#__PURE__*/
        createElement("div", {
          className: styles$Y.rect
        }),
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$Y.rect, 'rect2')
        }),
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$Y.rect, 'rect3')
        }),
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$Y.rect, 'rect4')
        }),
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$Y.rect, 'rect5')
        })))
      );
    }
  }]);

  return Spin;
}(Component);
Spin.defaultProps = {
  enable: false
};

var styles$Z = {
  container:
  /*#__PURE__*/
  css$1("padding:16px;border:1px solid #e8e8e8;border-radius:4px;margin:0 -16px 48px;background:#ffffff;box-shadow:0px 1px 10px rgba(0,0,0,0.06);"),
  cardHead:
  /*#__PURE__*/
  css$1("padding-bottom:16px;border-bottom:1px solid rgba(55,52,66,0.08);margin-bottom:16px;"),
  closeIcon:
  /*#__PURE__*/
  css$1("position:absolute;top:0;right:0;")
};
var PageCard = function PageCard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      showCorner = _ref.showCorner,
      onClose = _ref.onClose,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx$1(styles$Z.container, // { [styles.corner]: showCorner },
      className)
    },
    /*#__PURE__*/
    createElement(Spin, {
      enable: loading
    },
    /*#__PURE__*/
    createElement(Text, {
      className: styles$Z.cardHead,
      variant: "h2"
    }, title), onClose &&
    /*#__PURE__*/
    createElement(IconClose, {
      className: styles$Z.closeIcon,
      onClick: onClose
    }),
    /*#__PURE__*/
    createElement("div", null, children)))
  );
};

var styles$_ = {
  page:
  /*#__PURE__*/
  css("display:flex;flex-direction:column;background:#f0f2f5;padding:24px 32px;")
};
var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$_.page, className)
    }, children)
  );
};

var styles$$ = {
  section:
  /*#__PURE__*/
  css("margin:0 0 48px;"),
  headingPane:
  /*#__PURE__*/
  css("display:flex;flex-direction:row;align-items:baseline;"),
  headingPaneMargin:
  /*#__PURE__*/
  css("margin-bottom:24px;"),
  heading:
  /*#__PURE__*/
  css(),
  subTitle:
  /*#__PURE__*/
  css("margin-left:32px;"),
  topRightControls:
  /*#__PURE__*/
  css("margin-left:auto;")
};
var PageSection = function PageSection(_ref) {
  var children = _ref.children,
      className = _ref.className,
      subTitle = _ref.subTitle,
      title = _ref.title,
      topRightControls = _ref.topRightControls;
  var isHeadingPaneVisible = title || subTitle || topRightControls;
  return (
    /*#__PURE__*/
    createElement("section", {
      className: cx(styles$$.section, className)
    }, isHeadingPaneVisible &&
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$$.headingPane, _defineProperty({}, styles$$.headingPaneMargin, children))
    }, title &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$$.heading,
      variant: "h2"
    }, title), subTitle &&
    /*#__PURE__*/
    createElement(Text, {
      className: styles$$.subTitle,
      variant: "h5",
      tag: "span",
      upperCase: true
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    createElement(ControlsPanel, {
      className: styles$$.topRightControls,
      controls: topRightControls
    })), children)
  );
};

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var ScrollWrapper =
/*#__PURE__*/
styled("div", {
  target: "e1gokkyi0"
})("height:100%;");
var Track =
/*#__PURE__*/
styled("div", {
  target: "e1gokkyi1"
})("width:4px !important;background:", function (_ref) {
  var track = _ref.track;
  return track || '#e8e8e8';
}, " !important;border-radius:7px !important;");
var Thumb =
/*#__PURE__*/
styled("div", {
  target: "e1gokkyi2"
})("background:", function (_ref2) {
  var thumb = _ref2.thumb;
  return thumb || '#cf1322';
}, " !important;");
var trackYProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return (
      /*#__PURE__*/
      createElement(Track, Object.assign({}, rest, {
        style: style,
        innerRef: elementRef
      }))
    );
  }
};
var thumbYProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return (
      /*#__PURE__*/
      createElement(Thumb, Object.assign({}, rest, {
        style: style,
        innerRef: elementRef
      }))
    );
  }
};
var wrapperProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return (
      /*#__PURE__*/
      createElement("div", Object.assign({}, rest, {
        style: _objectSpread({}, style, {
          right: 0
        }),
        ref: elementRef
      }))
    );
  }
};
var scrollerProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return (
      /*#__PURE__*/
      createElement("div", Object.assign({}, rest, {
        style: _objectSpread({}, style, {
          marginRight: -20,
          paddingRight: 20
        }),
        ref: elementRef
      }))
    );
  }
};
var Scrollbar = function Scrollbar(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      track = _ref3.track,
      thumb = _ref3.thumb;
  return (
    /*#__PURE__*/
    createElement(ScrollWrapper, {
      className: className
    },
    /*#__PURE__*/
    createElement(ReactScroll, {
      track: track,
      thumb: thumb,
      wrapperProps: wrapperProps,
      scrollerProps: scrollerProps,
      trackYProps: _objectSpread({}, trackYProps, {
        track: track
      }),
      thumbYProps: _objectSpread({}, thumbYProps, {
        thumb: thumb
      }),
      style: {
        width: '100%'
      }
    }, children))
  );
};

// @flex
var styles$10 = {
  wrap:
  /*#__PURE__*/
  css("width:100%;height:100%;overflow:hidden;"),
  scrollableWrap:
  /*#__PURE__*/
  css("height:100%;margin-left:-16px;margin-right:-16px;"),
  scrollableBody:
  /*#__PURE__*/
  css("padding-left:16px;padding-right:16px;")
};
var PopupBody = function PopupBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      innerClassName = _ref.innerClassName,
      scrollable = _ref.scrollable;
  return scrollable ?
  /*#__PURE__*/
  createElement(Scrollbar, {
    className: cx(styles$10.scrollableWrap, className)
  },
  /*#__PURE__*/
  createElement("div", {
    className: cx(styles$10.scrollableBody, innerClassName)
  }, children)) :
  /*#__PURE__*/
  createElement("div", {
    className: cx(styles$10.wrap, className)
  }, children);
};

// TODO: move to uikit
var COLORS = {
  success: '#52C41A',
  warning: '#FAAD14',
  danger: '#F5222D'
};
var style$3 =
/*#__PURE__*/
css("position:relative;height:4px;width:100%;border-radius:3px;background-color:#e1e1e1;&::before{content:'';position:absolute;top:0;left:0;height:4px;min-width:4px;border-radius:3px;}");
var defineStatus = cond([[lt(66), always('danger')], [lt(33), always('warning')], [T, always('success')]]);
var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      percents = _ref.percents,
      _ref$intention = _ref.intention,
      intention = _ref$intention === void 0 ? defineStatus(percents) : _ref$intention;
  var bar =
  /*#__PURE__*/
  css("&::before{width:", percents, "%;background-color:", COLORS[intention], "}");
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      className: cx(style$3, bar, className)
    })
  );
};

var styles$11 = {
  icon:
  /*#__PURE__*/
  css("display:block;"),
  iconWrap:
  /*#__PURE__*/
  css("position:relative;"),
  children:
  /*#__PURE__*/
  css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  css("margin-right:8px;"),
  input:
  /*#__PURE__*/
  css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:50%;}"),
  label:
  /*#__PURE__*/
  css("display:flex;align-items:center;cursor:pointer;")
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
  return (
    /*#__PURE__*/
    createElement("label", {
      className: cx(styles$11.label, className),
      title: title
    },
    /*#__PURE__*/
    createElement("input", {
      checked: checked,
      className: styles$11.input,
      disabled: disabled,
      type: "radio",
      onChange: onChange,
      name: name,
      value: value
    }),
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$11.iconWrap, _defineProperty({}, styles$11.childrenMargin, children))
    },
    /*#__PURE__*/
    createElement(IconRadio, {
      className: styles$11.icon,
      checked: checked,
      disabled: disabled
    })), typeof children === 'string' ?
    /*#__PURE__*/
    createElement(Text, {
      className: styles$11.children
    }, children) : children)
  );
};

var img$Q = {id: "StMFaLPu6NqVysFutwwT9", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"210\" height=\"25\" fill=\"none\"><path fill=\"#fff\" d=\"M56.325 11.702h-4.992V5.336h4.907c2.414 0 3.911 1.06 3.911 3.144 0 2.081-1.415 3.225-3.826 3.225v-.003zm4.036 3.472c2.976-.966 4.785-3.732 4.785-6.859 0-1.288-.434-3.481-1.748-4.859a9.095 9.095 0 00-6.74-2.408H46.38v22.086h4.952V15.99h3.826l4.91 7.062h5.783l-5.49-7.878zm23.568-1.351L80.934 6.64l-2.994 7.183h5.99zm-50.085.246l-2.995-7.185-2.995 7.186 5.99-.001zm104.954-13.02v4.368h-6.864v17.632h-4.948V5.416h-6.657v-4.37l18.469.002zM83.346.803l9.652 22.244H87.8l-2.08-4.938h-9.525l-2.08 4.938H69.08L78.73.804h4.618-.003zm114.449.244V18.6l11.025.042v4.49h-16.182V1.048l5.157.001zm-86.245 13.55l-.124-13.55h4.742v21.999h-4.157l-10.817-14.04V23.13h-4.868V1.047h4.576l10.648 13.55v.001zM20.034 1.048v4.369h-6.865V23.17h-4.95V5.538H1.356V1.046l18.679.002zm13.23 0l9.65 22.246h-5.2l-2.08-4.939h-9.526l-2.081 4.939h-5.034l9.651-22.247 4.62.001z\"/><path fill=\"#FF272C\" d=\"M176.927 19.302a7.341 7.341 0 01-1.777-.22c-3.512-.873-6.393-3.453-7.447-6.856v-.163c1.239-2.97 3.677-5.305 6.74-6.45a7.32 7.32 0 012.484-.434c3.949 0 7.196 3.187 7.196 7.061s-3.247 7.062-7.196 7.062zm-14.933-7.076c-1.052 3.403-3.934 5.983-7.446 6.856-.58.145-1.178.22-1.777.22-3.948 0-7.198-3.189-7.198-7.062s3.25-7.06 7.198-7.06c.848 0 1.689.146 2.485.433 3.06 1.145 5.501 3.479 6.738 6.45v.163zM176.987 0a12.48 12.48 0 00-4.168.717 16.25 16.25 0 00-7.973 5.937 16.223 16.223 0 00-7.969-5.938A12.467 12.467 0 00152.711 0c-6.733 0-12.273 5.435-12.273 12.041 0 6.605 5.54 12.04 12.271 12.04.714 0 1.425-.06 2.13-.181l.873-.203c3.703-1.11 6.92-3.4 9.136-6.511a17.295 17.295 0 009.136 6.509l.873.203c.702.123 1.417.183 2.13.184 6.73 0 12.271-5.436 12.271-12.04C189.258 5.435 183.717 0 176.987 0z\"/></svg>", viewbox: "0 0 210 25", viewBox: "0 0 210 25" };

var styles$12 = {
  modal:
  /*#__PURE__*/
  css("display:flex;flex-direction:row;flex-shrink:0;min-height:250px;border-radius:2px;overflow:hidden;"),
  shim:
  /*#__PURE__*/
  css("background-color:#f0f2f5;"),
  subTitleWrap:
  /*#__PURE__*/
  css("margin:16px 0 48px 0;"),
  subTitle:
  /*#__PURE__*/
  css("color:rgba(0,0,0,0.65);"),
  logoContainer:
  /*#__PURE__*/
  css("width:68px;flex-grow:0;flex-shrink:0;background:#000;display:flex;flex-direction:column;justify-content:center;position:relative;"),
  logo:
  /*#__PURE__*/
  css("width:210px;position:absolute;transform:translate3d(-50%,-50%,0) rotate(-90deg);left:50%;top:50%;"),
  formContainer:
  /*#__PURE__*/
  css("flex-grow:1;padding:24px 32px;")
};
var SplashModal = function SplashModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      shimClassName = _ref.shimClassName,
      subTitle = _ref.subTitle,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["children", "className", "shimClassName", "subTitle", "title"]);

  return (
    /*#__PURE__*/
    createElement(BaseModal, Object.assign({}, props, {
      className: cx(styles$12.modal, className),
      shimClassName: cx(styles$12.shim, shimClassName)
    }),
    /*#__PURE__*/
    createElement("div", {
      className: styles$12.logoContainer
    },
    /*#__PURE__*/
    createElement(SVGImage, {
      glyph: img$Q,
      className: styles$12.logo
    })),
    /*#__PURE__*/
    createElement("div", {
      className: styles$12.formContainer
    }, title &&
    /*#__PURE__*/
    createElement(Text, {
      variant: 'h1'
    }, title), subTitle &&
    /*#__PURE__*/
    createElement("div", {
      className: styles$12.subTitleWrap
    },
    /*#__PURE__*/
    createElement(Text, {
      variant: 'basic',
      className: styles$12.subTitle
    }, subTitle)), children))
  );
};

var styles$13 = {
  input:
  /*#__PURE__*/
  css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-3px;left:-3px;right:-3px;bottom:-3px;border:solid 1px rgba(245,34,45,0.55);border-radius:15px;}"),
  switcher:
  /*#__PURE__*/
  css("position:relative;flex-shrink:0;width:42px;height:22px;border:solid 1px transparent;border-radius:12px;margin-right:8px;box-sizing:border-box;background-color:#a6a6a6;cursor:pointer;&::after{content:'';position:absolute;top:1px;left:1px;width:18px;height:18px;border-radius:50%;background-color:#ffffff;}"),
  children:
  /*#__PURE__*/
  css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  css("margin-right:8px;"),
  basicDisabled:
  /*#__PURE__*/
  css("cursor:default;"),
  notDisabled:
  /*#__PURE__*/
  css("background-color:rgba(0,0,0,0.25);&:hover,&:focus{background-color:rgba(0,0,0,0.35);}"),
  checked:
  /*#__PURE__*/
  css("background-color:#f5222d;&:hover,&:focus{background-color:#CF1322;}&::after{left:auto;right:1px;}"),
  disabled:
  /*#__PURE__*/
  css("border-color:#d9d9d9;background-color:#f3f3f3;cursor:default;&::after{box-shadow:0px 0px 4px rgba(0,0,0,0.15);}"),
  checkedDisabled:
  /*#__PURE__*/
  css("background-color:#fcc8cb;&::after{left:auto;right:1px;}"),
  label:
  /*#__PURE__*/
  css("display:flex;align-items:center;")
};
var Switcher = function Switcher(_ref) {
  var _cx;

  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      title = _ref.title;
  return (
    /*#__PURE__*/
    createElement("label", {
      className: cx(styles$13.label, className),
      title: title
    },
    /*#__PURE__*/
    createElement("input", {
      checked: checked,
      className: styles$13.input,
      disabled: disabled,
      type: "checkbox",
      onChange: onChange
    }),
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$13.switcher, (_cx = {}, _defineProperty(_cx, styles$13.notDisabled, !checked && !disabled), _defineProperty(_cx, styles$13.checked, checked && !disabled), _defineProperty(_cx, styles$13.disabled, !checked && disabled), _defineProperty(_cx, styles$13.basicDisabled, disabled), _defineProperty(_cx, styles$13.checkedDisabled, checked && disabled), _defineProperty(_cx, styles$13.childrenMargin, children), _cx))
    }), typeof children === 'string' ?
    /*#__PURE__*/
    createElement(Text, {
      className: styles$13.children
    }, children) : children)
  );
};

var styles$14 = {
  wrap:
  /*#__PURE__*/
  css("display:flex;flex-direction:column;height:100%;"),
  tab:
  /*#__PURE__*/
  css("position:relative;padding:16px;border:none;border-bottom:solid 2px transparent;font-family:'Open Sans',sans-serif;font-size:16px;line-height:16px;font-weight:600;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;cursor:pointer;&:focus{z-index:", zIndex.inline, ";}&:focus::before{content:'';position:absolute;top:-1px;left:-2px;right:-2px;bottom:-4px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  activeTab:
  /*#__PURE__*/
  css("color:#CF1322;border-bottom-color:#CF1322;"),
  tabs:
  /*#__PURE__*/
  css()
};
var Tabbed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabbed, _React$Component);

  function Tabbed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabbed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabbed)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
          tabs = _this$props$tabs === void 0 ? [] : _this$props$tabs;
      var activeTab = this.state.activeTab;
      return (
        /*#__PURE__*/
        createElement("div", {
          className: cx(styles$14.wrap, className)
        },
        /*#__PURE__*/
        createElement("div", {
          className: styles$14.tabs
        }, tabs && tabs.map(function (_ref, i) {
          var label = _ref.label;
          return (
            /*#__PURE__*/
            createElement("button", {
              className: cx(styles$14.tab, _defineProperty({}, styles$14.activeTab, activeTab === i)),
              onClick: function onClick() {
                return _this2.handleTabChange(i);
              }
            }, label)
          );
        })), tabs[activeTab].content)
      );
    }
  }, {
    key: "handleTabChange",
    value: function handleTabChange(i) {
      this.setState({
        activeTab: i
      });
    }
  }]);

  return Tabbed;
}(Component);

var styles$15 = {
  tag:
  /*#__PURE__*/
  css("position:relative;border:none;border-radius:4px;padding:1px 8px 3px;margin:0 2px;font-size:12px;line-height:18px;outline:none;transition:0.1s ease-in-out;transition-property:background-color,color;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  interactive: function interactive(className) {
    return className ?
    /*#__PURE__*/
    css("color:rgba(0,0,0,0.2);background-color:transparent;.", className, ":hover &{color:#ffffff;background-color:rgba(0,0,0,0.65);}.", className, " &:hover,.", className, " &:focus{background-color:#000000;color:#ffffff;}") : '';
  },
  "static":
  /*#__PURE__*/
  css("color:#ffffff;background-color:rgba(0,0,0,0.65);&:hover,&:focus{background-color:#000000;color:#ffffff;}"),
  pointer:
  /*#__PURE__*/
  css("cursor:pointer;")
};
var Tag = function Tag(_ref) {
  var _cx;

  var highlightingOnHover = _ref.highlightingOnHover,
      className = _ref.className,
      onClick = _ref.onClick,
      text = _ref.text,
      title = _ref.title;
  var Element = onClick ? 'button' : 'span';
  return (
    /*#__PURE__*/
    createElement(Element, {
      className: cx((_cx = {}, _defineProperty(_cx, styles$15.interactive(highlightingOnHover), !!highlightingOnHover), _defineProperty(_cx, styles$15["static"], !highlightingOnHover), _defineProperty(_cx, styles$15.pointer, onClick), _cx), styles$15.tag, className),
      onClick: onClick,
      title: title
    }, text)
  );
};

var styles$16 = {
  wrapper:
  /*#__PURE__*/
  css("display:flex;align-items:baseline;margin-bottom:-4px;user-select:none;"),
  heading:
  /*#__PURE__*/
  css("margin-right:8px;opacity:0.6;"),
  tag:
  /*#__PURE__*/
  css("margin-bottom:4px;")
};

var toString = function toString(v) {
  return v + '';
};

var TagsList = function TagsList(_ref) {
  var className = _ref.className,
      heading = _ref.heading,
      highlightingOnHover = _ref.highlightingOnHover,
      onTagClick = _ref.onTagClick,
      renderItem = _ref.renderItem,
      tagClassName = _ref.tagClassName,
      values = _ref.values;
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      className: cx(styles$16.wrapper, className)
    }, heading &&
    /*#__PURE__*/
    React__default.createElement(Text, {
      className: styles$16.heading,
      variant: "h5",
      tag: "span"
    },
    /*#__PURE__*/
    React__default.createElement("b", null, "".concat(heading, ":"))),
    /*#__PURE__*/
    React__default.createElement("div", null, (values || []).map(function (value) {
      return (
        /*#__PURE__*/
        React__default.createElement(Tag, {
          className: cx(styles$16.tag, tagClassName),
          onClick: function onClick() {
            return onTagClick && onTagClick(value);
          },
          text: renderItem ? renderItem(value) : toString(value),
          highlightingOnHover: highlightingOnHover
        })
      );
    })))
  );
};

var styles$17 = {
  outer: function outer(_ref) {
    var _outer = _ref.outer;
    return (
      /*#__PURE__*/
      css$1("padding:8px 0 0;", _outer ? 'margin: 0 -16px;' : '', " list-style:none;")
    );
  },
  item:
  /*#__PURE__*/
  css$1("padding:12px 16px;margin-bottom:8px;border-radius:2px;background-color:#ffffff;box-shadow:0 1px 4px 0 rgba(0,0,0,0.11);"),
  softCorners:
  /*#__PURE__*/
  css$1("border-radius:4px;margin-bottom:16px;")
};

var TiledListItem = function TiledListItem(_ref2) {
  var className = _ref2.className,
      _ref2$corners = _ref2.corners,
      corners = _ref2$corners === void 0 ? 'hard' : _ref2$corners,
      item = _ref2.item,
      render = _ref2.render;
  return (
    /*#__PURE__*/
    createElement("li", {
      className: cx$1(styles$17.item, _defineProperty({}, styles$17.softCorners, corners === 'soft'), className)
    }, render(item))
  );
};

var TiledList = function TiledList(_ref3) {
  var className = _ref3.className,
      corners = _ref3.corners,
      itemClassName = _ref3.itemClassName,
      itemKey = _ref3.itemKey,
      items = _ref3.items,
      itemRender = _ref3.itemRender,
      _ref3$outer = _ref3.outer,
      outer = _ref3$outer === void 0 ? true : _ref3$outer;
  return (
    /*#__PURE__*/
    createElement("ul", {
      className: cx$1(styles$17.outer({
        outer: outer
      }), className)
    }, items && items.map(function (item) {
      return (
        /*#__PURE__*/
        createElement(TiledListItem, {
          className: itemClassName,
          corners: corners,
          item: item,
          key: item[itemKey],
          render: itemRender
        })
      );
    }))
  );
};

var styles$18 = {
  uriWrap:
  /*#__PURE__*/
  css("display:flex;align-items:center;"),
  uriIcon:
  /*#__PURE__*/
  css("width:14px;height:14px;margin-right:4px;"),
  uri:
  /*#__PURE__*/
  css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0,0,0,0.65);")
};
var UriLabel = function UriLabel(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      uri = _ref.uri;
  var Icon = icon || IconLink;
  return (
    /*#__PURE__*/
    createElement("div", {
      className: cx(styles$18.uriWrap, className),
      title: title
    },
    /*#__PURE__*/
    createElement(Icon, {
      className: styles$18.uriIcon
    }),
    /*#__PURE__*/
    createElement(Text, {
      className: styles$18.uri,
      variant: "h5",
      tag: "span"
    }, uri))
  );
};

var img$R = {id: "DE79Ixlx4x3O8Pb0Jvygr", content: "<svg width=\"80\" height=\"80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 80", viewBox: "0 0 80 80" };

var img$S = {id: "McvgiZZwRL0sKe-HU0Bi6", content: "<svg width=\"80\" height=\"112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 112", viewBox: "0 0 80 112" };

export { Alert, BaseModal, Button, Checkbox, CodeBlock, ConfirmModal, ControlsPanel, CopyToClipboard, DotIndicator, Dropdown, DropdownItem, FlatList, FormField, HealthStatus, Icon, IconAttach, IconAttention, IconBox, IconBoxNoData, IconBucket, IconBurger, IconCancel, IconCheckbox, IconChevron, IconChip, IconChipDanger, IconChipWarning, IconClose, IconCluster, IconCode, IconCreateFile, IconCreateFolder, IconDelete, IconDocumentCode, IconDownload, IconEdit, IconEyeClosed, IconEyeOpened, IconFile, IconFolder, IconGear, IconGeoPin, IconInfo, IconLink, IconMore, IconNewWindow, IconOk, IconRadio, IconRefresh, IconSchema, IconSearch, IconSpinner, IconUser, IconUsers, Input, InputGroup, InputPassword, LabeledInput, LeaderFlag, LeaderFlagSmall, Link, Markdown, Modal, NonIdealState, NonIdealStateAction, NotificationSplash, NotificationSplashFixed, PageCard, PageLayout, PageSection, PopupBody, PopupFooter, ProgressBar, RadioButton, SVGImage, Scrollbar, Spin, SplashError, SplashErrorFatal, SplashErrorNetwork, SplashModal, Switcher, Tabbed, Tag, TagsList, Text, TiledList, Tooltip, UriLabel, copyToClipboard, img$R as splashGenericErrorSvg, img$S as splashSelectFileSvg, styles$1 as styles, textStyles, img$L as windowDeadSvg, img$M as windowNoNetworkSvg, img$K as windowShockedSvg, withCopyToClipboard, withTooltip };if (window) { window.document.addEventListener('DOMContentLoaded', function(){ const div = document.createElement('div'); div.setAttribute('style', 'display: none; height:0; width: 0; overflow: hidden;');  div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style>\n    .sprite-symbol-usage {display: none;}\n    .sprite-symbol-usage:target {display: inline;}\n  </style><symbol viewBox=\"0 0 12 12\" id=\"0V6vYnvPVprcQv5hXz0WI\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"2CN5ukITEhecHzBUeGYs0\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"3Xtsiv7nJE4_BrEf-yE67\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"6Fyxjk5WtcSN0X1iY5l57\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"BSdgCFCC7LkBD0x1-a44N\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"BXQWLvofDTNQ6w8yJyuFc\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 80 80\" id=\"DE79Ixlx4x3O8Pb0Jvygr\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"E5wpHo1W05HHUvZkqPWV2\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#F5222D\" /><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 128 128\" id=\"Fly0mC48cQ2sS8weVrG2A\"><g><circle cx=\"16\" cy=\"64\" r=\"16\" /><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\" /><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\" /></g></symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"GEdNkaaT36ZpKV1L_pBbE\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6372H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><circle cx=\"99.5366\" cy=\"134.791\" r=\"9.63877\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M147.73 63.6119L71.3617 142.946l-6.41-6.17L141.32 57.4415l6.41 6.1704z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.31 76.3677c-9.932-5.7545-21.468-9.0486-33.7734-9.0486-18.6783 0-35.584 7.5899-47.8011 19.8538l6.2913 6.2914c10.607-10.6538 25.2884-17.2478 41.5098-17.2478 9.8944 0 19.2154 2.4531 27.3884 6.7844l6.385-6.6332zm7.497 5.0415l-6.212 6.4533c2.35 1.758 4.563 3.6884 6.62 5.7723l6.292-6.2915c-2.099-2.1215-4.337-4.1045-6.7-5.9341zm-21.44 9.4433c-6.048-2.7339-12.762-4.2558-19.8304-4.2558-13.355 0-25.4413 5.4322-34.1698 14.2073l6.2914 6.292c7.1184-7.1657 16.9803-11.602 27.8784-11.602 4.6244 0 9.0614.7986 13.1814 2.2654l6.649-6.9069zm1.702 11.0605l6.259-6.5011c2.346 1.6586 4.537 3.5216 6.547 5.5631l-6.291 6.291c-1.97-2.007-4.154-3.803-6.515-5.353zm-15.953 3.744c-1.807-.344-3.672-.524-5.5794-.524-8.2365 0-15.6887 3.357-21.0628 8.778l6.2915 6.292c3.1813-3.221 7.4084-5.407 12.1305-6.007l8.2202-8.539zm2.656 10.071l6.455-6.707c2.413 1.379 4.614 3.086 6.541 5.062l-6.292 6.292c-1.893-1.961-4.167-3.55-6.704-4.647z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"Gw4Eg_n2c2mj_XGJQ2VMQ\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"Gwsq8BJeM2XXkGjl_j13N\">\n    <path d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"HYuq2LLf2moz3PKyDEHXo\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"K99xp75ilny3BLc8loGU0\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"LHEkbu0pf-2gkx7Zc56GT\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 80 112\" id=\"McvgiZZwRL0sKe-HU0Bi6\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 48 48\" id=\"MgAOfMgoBTb86LGkbcKmQ\">\n    <path d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"N9dWELmZEpp0MLt-oepeg\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"NNR3Z4VmKX519MjVhOnZF\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"NU1bHP7SRymSOuuboKRsp\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"Ntzjj0V6bTJyQQnTVwCHN\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"OnxdEQOLtN1arDZolR5Ul\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#FCC8CB\" /><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 24 24\" id=\"PaqpgEXNVvTNktfvkIFpR\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\" /><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"Q53WPbg_yCM82mwGrNTmu\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"QFSZoeiiB6iR3jIdNNCFX\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M122.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.983 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.351-2.795-3.527-6.787-3.527-11.975v-9.942H50.9492v-9.913h82.5078v20.503c0 4.726-1.241 8.495-3.722 11.305-2.482 2.81-6.949 4.215-12.152 4.215-5.683 0-10.948-1.398-13.299-4.193z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.6472 27.3276H182.267v-9.0181H56.6472v9.0181zM19.457 163.966h162.81V45.6372H19.457V163.966zm4.5362-145.871c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266-2.5202 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.0429-4.5265 4.5631-4.5265zm18.7326 0c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.563-2.0266-4.563-4.5266 0-2.4999 2.0429-4.5265 4.563-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.7918 90.408l-9.5528-9.5575 9.551-9.5534-6.3707-6.3632-9.5517 9.5522-9.5503-9.5522-6.3681 6.3632 9.5524 9.5577-9.5524 9.5532 6.3681 6.3684 9.5503-9.5527 9.5552 9.5527 6.369-6.3684zM151.471 90.408l-9.552-9.5575 9.551-9.5534-6.371-6.3632-9.552 9.5522-9.55-9.5522-6.368 6.3632 9.552 9.5577-9.552 9.5532 6.368 6.3684 9.55-9.5527 9.555 9.5527 6.369-6.3684z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"RnGyf_ZjhQ8XJ2ya9_Tpn\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#B5EC8E\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#000\" fill-opacity=\".45\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 210 25\" id=\"StMFaLPu6NqVysFutwwT9\"><path fill=\"#fff\" d=\"M56.325 11.702h-4.992V5.336h4.907c2.414 0 3.911 1.06 3.911 3.144 0 2.081-1.415 3.225-3.826 3.225v-.003zm4.036 3.472c2.976-.966 4.785-3.732 4.785-6.859 0-1.288-.434-3.481-1.748-4.859a9.095 9.095 0 00-6.74-2.408H46.38v22.086h4.952V15.99h3.826l4.91 7.062h5.783l-5.49-7.878zm23.568-1.351L80.934 6.64l-2.994 7.183h5.99zm-50.085.246l-2.995-7.185-2.995 7.186 5.99-.001zm104.954-13.02v4.368h-6.864v17.632h-4.948V5.416h-6.657v-4.37l18.469.002zM83.346.803l9.652 22.244H87.8l-2.08-4.938h-9.525l-2.08 4.938H69.08L78.73.804h4.618-.003zm114.449.244V18.6l11.025.042v4.49h-16.182V1.048l5.157.001zm-86.245 13.55l-.124-13.55h4.742v21.999h-4.157l-10.817-14.04V23.13h-4.868V1.047h4.576l10.648 13.55v.001zM20.034 1.048v4.369h-6.865V23.17h-4.95V5.538H1.356V1.046l18.679.002zm13.23 0l9.65 22.246h-5.2l-2.08-4.939h-9.526l-2.081 4.939h-5.034l9.651-22.247 4.62.001z\" /><path fill=\"#FF272C\" d=\"M176.927 19.302a7.341 7.341 0 01-1.777-.22c-3.512-.873-6.393-3.453-7.447-6.856v-.163c1.239-2.97 3.677-5.305 6.74-6.45a7.32 7.32 0 012.484-.434c3.949 0 7.196 3.187 7.196 7.061s-3.247 7.062-7.196 7.062zm-14.933-7.076c-1.052 3.403-3.934 5.983-7.446 6.856-.58.145-1.178.22-1.777.22-3.948 0-7.198-3.189-7.198-7.062s3.25-7.06 7.198-7.06c.848 0 1.689.146 2.485.433 3.06 1.145 5.501 3.479 6.738 6.45v.163zM176.987 0a12.48 12.48 0 00-4.168.717 16.25 16.25 0 00-7.973 5.937 16.223 16.223 0 00-7.969-5.938A12.467 12.467 0 00152.711 0c-6.733 0-12.273 5.435-12.273 12.041 0 6.605 5.54 12.04 12.271 12.04.714 0 1.425-.06 2.13-.181l.873-.203c3.703-1.11 6.92-3.4 9.136-6.511a17.295 17.295 0 009.136 6.509l.873.203c.702.123 1.417.183 2.13.184 6.73 0 12.271-5.436 12.271-12.04C189.258 5.435 183.717 0 176.987 0z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"UNEn5eNDrVysnZf4orrY5\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"UYpMBkFFF1zEoxN5pTFfU\"><path d=\"M2 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM12 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"W2Y0dc6pwiCrGFGaT-LjE\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"W9dqBnYUYgfLzufLmHUsm\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"YNfQvhPjFsSjhaBKGB0kD\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3837 8.3204a.5.5 0 10-.7677-.6408C11.7352 8.7348 10.0268 9.5 7.9999 9.5c-2.027 0-3.7354-.7652-4.6162-1.8204a.5.5 0 10-.7677.6408c.2512.301.5485.577.884.824V10a.5.5 0 001 0v-.2589c.3151.1512.6497.282 1 .3904V11a.5.5 0 001 0v-.6285a8.6184 8.6184 0 001.0002.1145L7.5 10.5v1a.5.5 0 001 0v-1l-.0002-.014A8.6406 8.6406 0 009.5 10.3714V11a.5.5 0 001 0v-.8686a7.3096 7.3096 0 001-.3904V10a.5.5 0 101 0v-.8559c.3354-.2469.6325-.5228.8837-.8237z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"ZZA8tI2Wb-QZSlFjnBQpR\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"Zx2erqx-qMqd0mjNF42OE\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"a08hRR3khhUf4uj_4tPS6\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"a60CsQJix_d4R1rBAfS1b\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"bSCMyS2qIRzaHZEwT39c_\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#f5222d\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\" /></symbol><symbol viewBox=\"0 0 42 8\" id=\"bnga8Mc8WHcgmfmtjDY6e\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"cR7tas8FPuEwp_wspvSES\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"d84TZ_Md93X7UETGX380K\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"dsc0n1KCLK3SmUuXqWybs\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\" /></symbol><symbol viewBox=\"0 0 35 35\" id=\"e_R_qDewrZ5DFGCvZQS2T\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\" /><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"fwIzBrhNeZRsT24WoPfPH\"><path opacity=\".65\" d=\"M8.87 8l3.98-3.98a.61.61 0 1 0-.87-.87L8 7.13 4.02 3.15a.61.61 0 1 0-.87.87L7.13 8l-3.98 3.98a.61.61 0 1 0 .87.87L8 8.87l3.98 3.98a.61.61 0 0 0 .87 0 .61.61 0 0 0 0-.87L8.87 8z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"gYbfg6PiSs3krJDAbbaFN\"><path opacity=\".65\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8738 7.5137a.9998.9998 0 010 .9726C12.7132 10.5718 10.5272 12 8 12c-2.5273 0-4.7133-1.4282-5.8739-3.5137a1 1 0 010-.9726C3.2867 5.4282 5.4727 4 8 4c2.5272 0 4.7132 1.4282 5.8738 3.5137zM8 5c2.1365 0 4.0019 1.2066 5 3-.9981 1.7934-2.8635 3-5 3-2.1366 0-4.002-1.2066-5-3 .998-1.7934 2.8634-3 5-3zm1 3c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1zm1 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"hNpzqC_gbQsbnCZ_zEVw1\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"hTITUPyfe2RGH-BoFGaWb\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"i9zEJOnOFvKkawwoGbmDF\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\" /></symbol><symbol viewBox=\"0 0 64 41\" id=\"jHE9K367aJwpy-aloQO9Y\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\" /><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\" /><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\" /></g></g></symbol><symbol viewBox=\"0 0 12 12\" id=\"mY3e7Ryd0IYDIZSGkd9kY\">\n    <path d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\" />\n</symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"oQUAFj0pUDcuRoSAaRR22\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.982 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.352-2.796-3.5271-6.787-3.5271-11.975v-9.942H49.9491v-9.913h82.5079v20.503c0 4.726-1.241 8.495-3.723 11.304-2.482 2.811-6.948 4.216-12.152 4.216-5.682 0-10.947-1.398-13.298-4.193z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6371H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><circle cx=\"130.804\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\" /><circle cx=\"69.6166\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"rowdeGRvJrWKIUjyj-jgs\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"uBwDAOOOu0eINybZ09a7y\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#F5222D\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"uKZ-ncz-3p4AI3e1k7Tqr\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\" /><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"vQqLOE_ujysdfsNVuV6md\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#FCC8CB\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#FCC8CB\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"yYNC5ACU2iagw1ZJp9zLQ\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol></defs><use id=\"0V6vYnvPVprcQv5hXz0WI-usage\" xlink:href=\"#0V6vYnvPVprcQv5hXz0WI\" class=\"sprite-symbol-usage\" /><use id=\"2CN5ukITEhecHzBUeGYs0-usage\" xlink:href=\"#2CN5ukITEhecHzBUeGYs0\" class=\"sprite-symbol-usage\" /><use id=\"3Xtsiv7nJE4_BrEf-yE67-usage\" xlink:href=\"#3Xtsiv7nJE4_BrEf-yE67\" class=\"sprite-symbol-usage\" /><use id=\"6Fyxjk5WtcSN0X1iY5l57-usage\" xlink:href=\"#6Fyxjk5WtcSN0X1iY5l57\" class=\"sprite-symbol-usage\" /><use id=\"BSdgCFCC7LkBD0x1-a44N-usage\" xlink:href=\"#BSdgCFCC7LkBD0x1-a44N\" class=\"sprite-symbol-usage\" /><use id=\"BXQWLvofDTNQ6w8yJyuFc-usage\" xlink:href=\"#BXQWLvofDTNQ6w8yJyuFc\" class=\"sprite-symbol-usage\" /><use id=\"DE79Ixlx4x3O8Pb0Jvygr-usage\" xlink:href=\"#DE79Ixlx4x3O8Pb0Jvygr\" class=\"sprite-symbol-usage\" /><use id=\"E5wpHo1W05HHUvZkqPWV2-usage\" xlink:href=\"#E5wpHo1W05HHUvZkqPWV2\" class=\"sprite-symbol-usage\" /><use id=\"Fly0mC48cQ2sS8weVrG2A-usage\" xlink:href=\"#Fly0mC48cQ2sS8weVrG2A\" class=\"sprite-symbol-usage\" /><use id=\"GEdNkaaT36ZpKV1L_pBbE-usage\" xlink:href=\"#GEdNkaaT36ZpKV1L_pBbE\" class=\"sprite-symbol-usage\" /><use id=\"Gw4Eg_n2c2mj_XGJQ2VMQ-usage\" xlink:href=\"#Gw4Eg_n2c2mj_XGJQ2VMQ\" class=\"sprite-symbol-usage\" /><use id=\"Gwsq8BJeM2XXkGjl_j13N-usage\" xlink:href=\"#Gwsq8BJeM2XXkGjl_j13N\" class=\"sprite-symbol-usage\" /><use id=\"HYuq2LLf2moz3PKyDEHXo-usage\" xlink:href=\"#HYuq2LLf2moz3PKyDEHXo\" class=\"sprite-symbol-usage\" /><use id=\"K99xp75ilny3BLc8loGU0-usage\" xlink:href=\"#K99xp75ilny3BLc8loGU0\" class=\"sprite-symbol-usage\" /><use id=\"LHEkbu0pf-2gkx7Zc56GT-usage\" xlink:href=\"#LHEkbu0pf-2gkx7Zc56GT\" class=\"sprite-symbol-usage\" /><use id=\"McvgiZZwRL0sKe-HU0Bi6-usage\" xlink:href=\"#McvgiZZwRL0sKe-HU0Bi6\" class=\"sprite-symbol-usage\" /><use id=\"MgAOfMgoBTb86LGkbcKmQ-usage\" xlink:href=\"#MgAOfMgoBTb86LGkbcKmQ\" class=\"sprite-symbol-usage\" /><use id=\"N9dWELmZEpp0MLt-oepeg-usage\" xlink:href=\"#N9dWELmZEpp0MLt-oepeg\" class=\"sprite-symbol-usage\" /><use id=\"NNR3Z4VmKX519MjVhOnZF-usage\" xlink:href=\"#NNR3Z4VmKX519MjVhOnZF\" class=\"sprite-symbol-usage\" /><use id=\"NU1bHP7SRymSOuuboKRsp-usage\" xlink:href=\"#NU1bHP7SRymSOuuboKRsp\" class=\"sprite-symbol-usage\" /><use id=\"Ntzjj0V6bTJyQQnTVwCHN-usage\" xlink:href=\"#Ntzjj0V6bTJyQQnTVwCHN\" class=\"sprite-symbol-usage\" /><use id=\"OnxdEQOLtN1arDZolR5Ul-usage\" xlink:href=\"#OnxdEQOLtN1arDZolR5Ul\" class=\"sprite-symbol-usage\" /><use id=\"PaqpgEXNVvTNktfvkIFpR-usage\" xlink:href=\"#PaqpgEXNVvTNktfvkIFpR\" class=\"sprite-symbol-usage\" /><use id=\"Q53WPbg_yCM82mwGrNTmu-usage\" xlink:href=\"#Q53WPbg_yCM82mwGrNTmu\" class=\"sprite-symbol-usage\" /><use id=\"QFSZoeiiB6iR3jIdNNCFX-usage\" xlink:href=\"#QFSZoeiiB6iR3jIdNNCFX\" class=\"sprite-symbol-usage\" /><use id=\"RnGyf_ZjhQ8XJ2ya9_Tpn-usage\" xlink:href=\"#RnGyf_ZjhQ8XJ2ya9_Tpn\" class=\"sprite-symbol-usage\" /><use id=\"StMFaLPu6NqVysFutwwT9-usage\" xlink:href=\"#StMFaLPu6NqVysFutwwT9\" class=\"sprite-symbol-usage\" /><use id=\"UNEn5eNDrVysnZf4orrY5-usage\" xlink:href=\"#UNEn5eNDrVysnZf4orrY5\" class=\"sprite-symbol-usage\" /><use id=\"UYpMBkFFF1zEoxN5pTFfU-usage\" xlink:href=\"#UYpMBkFFF1zEoxN5pTFfU\" class=\"sprite-symbol-usage\" /><use id=\"W2Y0dc6pwiCrGFGaT-LjE-usage\" xlink:href=\"#W2Y0dc6pwiCrGFGaT-LjE\" class=\"sprite-symbol-usage\" /><use id=\"W9dqBnYUYgfLzufLmHUsm-usage\" xlink:href=\"#W9dqBnYUYgfLzufLmHUsm\" class=\"sprite-symbol-usage\" /><use id=\"YNfQvhPjFsSjhaBKGB0kD-usage\" xlink:href=\"#YNfQvhPjFsSjhaBKGB0kD\" class=\"sprite-symbol-usage\" /><use id=\"ZZA8tI2Wb-QZSlFjnBQpR-usage\" xlink:href=\"#ZZA8tI2Wb-QZSlFjnBQpR\" class=\"sprite-symbol-usage\" /><use id=\"Zx2erqx-qMqd0mjNF42OE-usage\" xlink:href=\"#Zx2erqx-qMqd0mjNF42OE\" class=\"sprite-symbol-usage\" /><use id=\"a08hRR3khhUf4uj_4tPS6-usage\" xlink:href=\"#a08hRR3khhUf4uj_4tPS6\" class=\"sprite-symbol-usage\" /><use id=\"a60CsQJix_d4R1rBAfS1b-usage\" xlink:href=\"#a60CsQJix_d4R1rBAfS1b\" class=\"sprite-symbol-usage\" /><use id=\"bSCMyS2qIRzaHZEwT39c_-usage\" xlink:href=\"#bSCMyS2qIRzaHZEwT39c_\" class=\"sprite-symbol-usage\" /><use id=\"bnga8Mc8WHcgmfmtjDY6e-usage\" xlink:href=\"#bnga8Mc8WHcgmfmtjDY6e\" class=\"sprite-symbol-usage\" /><use id=\"cR7tas8FPuEwp_wspvSES-usage\" xlink:href=\"#cR7tas8FPuEwp_wspvSES\" class=\"sprite-symbol-usage\" /><use id=\"d84TZ_Md93X7UETGX380K-usage\" xlink:href=\"#d84TZ_Md93X7UETGX380K\" class=\"sprite-symbol-usage\" /><use id=\"dsc0n1KCLK3SmUuXqWybs-usage\" xlink:href=\"#dsc0n1KCLK3SmUuXqWybs\" class=\"sprite-symbol-usage\" /><use id=\"e_R_qDewrZ5DFGCvZQS2T-usage\" xlink:href=\"#e_R_qDewrZ5DFGCvZQS2T\" class=\"sprite-symbol-usage\" /><use id=\"fwIzBrhNeZRsT24WoPfPH-usage\" xlink:href=\"#fwIzBrhNeZRsT24WoPfPH\" class=\"sprite-symbol-usage\" /><use id=\"gYbfg6PiSs3krJDAbbaFN-usage\" xlink:href=\"#gYbfg6PiSs3krJDAbbaFN\" class=\"sprite-symbol-usage\" /><use id=\"hNpzqC_gbQsbnCZ_zEVw1-usage\" xlink:href=\"#hNpzqC_gbQsbnCZ_zEVw1\" class=\"sprite-symbol-usage\" /><use id=\"hTITUPyfe2RGH-BoFGaWb-usage\" xlink:href=\"#hTITUPyfe2RGH-BoFGaWb\" class=\"sprite-symbol-usage\" /><use id=\"i9zEJOnOFvKkawwoGbmDF-usage\" xlink:href=\"#i9zEJOnOFvKkawwoGbmDF\" class=\"sprite-symbol-usage\" /><use id=\"jHE9K367aJwpy-aloQO9Y-usage\" xlink:href=\"#jHE9K367aJwpy-aloQO9Y\" class=\"sprite-symbol-usage\" /><use id=\"mY3e7Ryd0IYDIZSGkd9kY-usage\" xlink:href=\"#mY3e7Ryd0IYDIZSGkd9kY\" class=\"sprite-symbol-usage\" /><use id=\"oQUAFj0pUDcuRoSAaRR22-usage\" xlink:href=\"#oQUAFj0pUDcuRoSAaRR22\" class=\"sprite-symbol-usage\" /><use id=\"rowdeGRvJrWKIUjyj-jgs-usage\" xlink:href=\"#rowdeGRvJrWKIUjyj-jgs\" class=\"sprite-symbol-usage\" /><use id=\"uBwDAOOOu0eINybZ09a7y-usage\" xlink:href=\"#uBwDAOOOu0eINybZ09a7y\" class=\"sprite-symbol-usage\" /><use id=\"uKZ-ncz-3p4AI3e1k7Tqr-usage\" xlink:href=\"#uKZ-ncz-3p4AI3e1k7Tqr\" class=\"sprite-symbol-usage\" /><use id=\"vQqLOE_ujysdfsNVuV6md-usage\" xlink:href=\"#vQqLOE_ujysdfsNVuV6md\" class=\"sprite-symbol-usage\" /><use id=\"yYNC5ACU2iagw1ZJp9zLQ-usage\" xlink:href=\"#yYNC5ACU2iagw1ZJp9zLQ\" class=\"sprite-symbol-usage\" /></svg>";  window.document.body.appendChild(div) }); }
