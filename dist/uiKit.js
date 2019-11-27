'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var emotion = require('emotion');
var ReactDOM = require('react-dom');
var styled = require('react-emotion');
var styled__default = _interopDefault(styled);
var R = require('ramda');
var ReactScroll = _interopDefault(require('react-scrollbars-custom'));

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

var styles = {
  h1:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:24px;line-height:38px;font-weight:600;letter-spacing:0.48px;text-transform:uppercase;color:#000000;"),
  h2:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:20px;line-height:28px;font-weight:600;letter-spacing:0.4px;text-transform:uppercase;color:#000000;"),
  h3:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:16px;line-height:24px;font-weight:600;letter-spacing:0.32px;text-transform:uppercase;color:#cf1322;"),
  h4:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:16px;line-height:24px;font-weight:600;letter-spacing:0.32px;color:#000000;"),
  h5:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:12px;line-height:22px;letter-spacing:0.24px;color:#000000;"),
  p:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:12px;line-height:20px;letter-spacing:0.28px;color:#000000;"),
  basic:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;color:#000000;b{font-weight:600;}"),
  upperCase:
  /*#__PURE__*/
  emotion.css("text-transform:uppercase;"),
  noCase:
  /*#__PURE__*/
  emotion.css("text-transform:none;")
};
var Text = function Text(_ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      tag = _ref.tag,
      upperCase = _ref.upperCase,
      noCase = _ref.noCase,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'basic' : _ref$variant;
  var Element = tag || (variant === 'basic' ? 'span' : variant);
  return React.createElement(Element, {
    className: emotion.cx(styles[variant], (_cx = {}, _defineProperty(_cx, styles.upperCase, upperCase), _defineProperty(_cx, styles.noCase, noCase), _cx), className)
  }, children);
};

var styles$1 = {
  alert:
  /*#__PURE__*/
  emotion.css("padding:15px;border:1px solid;border-radius:4px;margin-top:16px;margin-bottom:16px;box-shadow:0px 5px 20px rgba(0,0,0,0.1);"),
  success:
  /*#__PURE__*/
  emotion.css("border-color:#b5ec8e;background-color:#f6ffee;"),
  error:
  /*#__PURE__*/
  emotion.css("border-color:#fea39e;background-color:#fff1f0;")
};
var Alert = function Alert(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type;
  return React.createElement(Text, {
    className: emotion.cx(styles$1.alert, styles$1[type], className),
    tag: "div"
  }, children);
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

var styles$2 = {
  shim: function shim(_ref) {
    var bg = _ref.bg;
    return (
      /*#__PURE__*/
      emotion.css("position:fixed;z-index:100;left:0;right:0;top:0;bottom:0;display:flex;padding:40px 16px;overflow:auto;background-color:", bg ? bg : 'rgba(0, 0, 0, 0.65)', ";justify-content:center;align-items:center;")
    );
  },
  baseModal:
  /*#__PURE__*/
  emotion.css("position:relative;width:100%;max-width:600px;border-radius:4px;margin:auto;box-sizing:border-box;background-color:#ffffff;box-shadow:0px 5px 20px rgba(0,0,0,0.09);outline:none;"),
  focusClosureControl:
  /*#__PURE__*/
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;"),
  wide:
  /*#__PURE__*/
  emotion.css("max-width:1000px;")
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
    _this.modalRef = React.createRef();

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
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visible === false && this.isModalVisible()) {
        this.focusFirstInteractiveElement();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.isModalVisible()) return null;
      var root = document.body;

      if (root) {
        return ReactDOM.createPortal(this.renderModal(), root);
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
          bgColor = _this$props.bgColor;
      return React.createElement("div", {
        className: styles$2.shim({
          bg: bgColor
        }),
        onMouseDown: this.handleOutsideClick
      }, React.createElement("div", {
        className: emotion.cx(styles$2.baseModal, _defineProperty({}, styles$2.wide, wide), className),
        ref: this.modalRef,
        tabIndex: 0,
        onKeyDown: this.handleEscapePress
      }, children, React.createElement("div", {
        className: styles$2.focusClosureControl,
        onFocus: this.focusFirstInteractiveElement,
        tabIndex: "0"
      })));
    }
  }]);

  return BaseModal;
}(React.Component);

var styles$3 = {
  button:
  /*#__PURE__*/
  styled.css("border:solid 1px;border-radius:4px;box-sizing:border-box;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;transition:0.07s ease-in-out;outline:none;cursor:pointer;-webkit-font-smoothing:antialiased;&:disabled,&:disabled:active,&:disabled:hover{border-color:#d9d9d9;color:#bfbfbf;background-color:#f3f3f3;box-shadow:none;cursor:default;}&:disabled svg{filter:grayscale(1) brightness(1.5);}"),
  base:
  /*#__PURE__*/
  styled.css("border-color:#d9d9d9;background-color:white;color:rgba(0,0,0,0.65);&:focus,&:hover{box-shadow:0px 10px 15px rgba(0,0,0,0.05);}&:active{border-color:rgba(217,217,217,0.45);background-color:#fafafa;color:rgba(0,0,0,0.65);box-shadow:none;}"),
  icon:
  /*#__PURE__*/
  styled.css("margin-bottom:2px;"),
  iconMargin:
  /*#__PURE__*/
  styled.css("margin-right:8px;"),
  primary:
  /*#__PURE__*/
  styled.css("border-color:#f5222d;background-color:#f5222d;color:#ffffff;&:focus,&:hover{box-shadow:0px 10px 15px rgba(245,34,45,0.15);}&:active{border-color:#cf1322;background-color:#cf1322;box-shadow:none;}"),
  secondary:
  /*#__PURE__*/
  styled.css("border-color:rgba(245,34,45,0.25);background-color:white;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:#f5222d;color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}&:active{border-color:#cf1322;color:#cf1322;box-shadow:none;}"),
  iconic:
  /*#__PURE__*/
  styled.css("border-color:transparent;background-color:transparent;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:rgba(217,217,217,0.45);color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}&:active{border-color:#fafafa;background-color:#fafafa;color:#cf1322;box-shadow:none;}"),
  plain:
  /*#__PURE__*/
  styled.css("border-color:transparent;background-color:transparent;color:rgba(245,34,45,0.65);&:focus,&:hover{border-color:#f5222d;color:#f5222d;box-shadow:0px 10px 15px rgba(245,34,45,0.15);}&:active{border-color:#cf1322;color:#cf1322;box-shadow:none;}"),
  m:
  /*#__PURE__*/
  styled.css("padding:4px 15px;"),
  s:
  /*#__PURE__*/
  styled.css("padding:0px 15px;"),
  xs:
  /*#__PURE__*/
  styled.css("padding:0 8px;line-height:18px;font-size:12px;"),
  iconicM:
  /*#__PURE__*/
  styled.css("padding:4px 7px;"),
  iconicS:
  /*#__PURE__*/
  styled.css("padding:0px 3px;")
};
var Button = function Button(_ref) {
  var _cx2;

  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      Icon = _ref.icon,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'base' : _ref$intent,
      onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type;
  var isOnlyIcon = Icon && !children && !text;
  var content = [];

  if (Icon) {
    content.push(React.createElement(Icon, {
      className: styled.cx(styles$3.icon, _defineProperty({}, styles$3.iconMargin, !isOnlyIcon))
    }));
  }

  content.push(children || text);
  return React.createElement("button", {
    className: styled.cx(styles$3.button, styles$3[intent], (_cx2 = {}, _defineProperty(_cx2, styles$3.iconicM, isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$3.iconicS, isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$3.m, !isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$3.s, !isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$3.xs, !isOnlyIcon && size === 'xs'), _cx2), className),
    disabled: disabled,
    onClick: onClick,
    type: type
  }, content);
};

var iconSize = '14px';
var styles$4 = {
  icon:
  /*#__PURE__*/
  emotion.css("flex-shrink:0;vertical-align:middle;width:", iconSize, ";height:", iconSize, ";"),
  state:
  /*#__PURE__*/
  emotion.css("fill:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"),
  stroke:
  /*#__PURE__*/
  emotion.css("stroke:red;&:hover{fill:greenyellow;}&.active{fill:blue;}"),
  clickable:
  /*#__PURE__*/
  emotion.css("cursor:pointer;"),
  active:
  /*#__PURE__*/
  emotion.css(),
  button:
  /*#__PURE__*/
  emotion.css("display:block;padding:0;border:none;outline:none;background:transparent;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}")
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
  return React.createElement("svg", {
    viewBox: glyph.viewBox,
    onClick: onClick,
    onMouseLeave: onMouseLeave,
    onMouseEnter: onMouseEnter,
    className: emotion.cx(styles$4.icon, (_cx = {}, _defineProperty(_cx, styles$4.stroke, stroke), _defineProperty(_cx, styles$4.clickable, !!onClick), _defineProperty(_cx, styles$4.active, active), _cx), className)
  }, React.createElement("use", {
    xlinkHref: "#".concat(glyph.id)
  }));
};

var img = {id: "YdA1XC7ySfJhqvLrmI21H", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\"/></g></svg>", viewbox: "0 0 16 16" };

var img$1 = {id: "tPBUsTHo10fAdnJSiQI40", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#F5222D\"/><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16" };

var img$2 = {id: "OkN5TZKBiGDfi8CqKAFrp", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16" };

var img$3 = {id: "EbgkS--lRiRdtCw9gPc3B", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#FCC8CB\"/><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16" };

var CHECKED = 2;
var DISABLED = 1;
var states = [img, img$2, img$1, img$3];
var styles$5 =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconCheckbox = function IconCheckbox(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED : 0) + (checked ? CHECKED : 0);
  return React.createElement(Icon, {
    className: emotion.cx(styles$5, className),
    glyph: states[mask]
  });
};

var styles$6 = {
  icon:
  /*#__PURE__*/
  emotion.css("display:block;"),
  iconWrap:
  /*#__PURE__*/
  emotion.css("position:relative;"),
  children:
  /*#__PURE__*/
  emotion.css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  emotion.css("margin-right:8px;"),
  input:
  /*#__PURE__*/
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  label:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;cursor:pointer;")
};
var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      name = _ref.name,
      value = _ref.value;
  return React.createElement("label", {
    className: emotion.cx(styles$6.label, className)
  }, React.createElement("input", {
    checked: checked,
    className: styles$6.input,
    disabled: disabled,
    type: "checkbox",
    onChange: onChange,
    name: name,
    value: value
  }), React.createElement("div", {
    className: emotion.cx(styles$6.iconWrap, _defineProperty({}, styles$6.childrenMargin, children))
  }, React.createElement(IconCheckbox, {
    className: styles$6.icon,
    checked: checked,
    disabled: disabled
  })), typeof children === 'string' ? React.createElement(Text, null, children) : children);
};

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

var img$4 = {id: "cWK91QQM3noaPujLNYlA2", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\">\n    <path fill=\"#000\" d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 16 16" };

var styles$7 =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconAttach = function IconAttach(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$7, className),
    glyph: img$4
  });
};

var img$5 = {id: "4R_154reMbRANYvzHIEF7", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" fill=\"none\" viewBox=\"0 0 48 48\">\n    <path fill=\"#F5222D\" d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\"/>\n</svg>\n", viewbox: "0 0 48 48" };

var styles$8 =
/*#__PURE__*/
emotion.css("width:48px;height:48px;");
var IconBox = function IconBox(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$8, className),
    glyph: img$5
  });
};

var img$6 = {id: "bVV2O579w2caKAdvNwPnp", content: "<svg width=\"64\" height=\"41\" viewBox=\"0 0 64 41\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\"></ellipse><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\"></path><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\"></path></g></g></svg>", viewbox: "0 0 64 41" };

var styles$9 =
/*#__PURE__*/
emotion.css("width:64px;height:41px;");
var IconBoxNoData = function IconBoxNoData(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$9, className),
    glyph: img$6
  });
};

var img$7 = {id: "VNk9A_enwg0NknvWebdfA", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 0H9H10.8C11.4627 0 12 0.541971 12 1.21053V2.42105C12 3.08961 11.4627 3.63158 10.8 3.63158H10.7519L10.2 10.2895C10.2 10.958 9.66274 11.5 9 11.5H3C2.33726 11.5 1.8 10.958 1.80207 10.3397L1.24792 3.63158H1.2C0.537258 3.63158 0 3.08961 0 2.42105V1.21053C0 0.541971 0.537258 0 1.2 0H3ZM3 1.21053H1.2V2.42105H10.8V1.21053H9H3ZM2.45189 3.63158L3 10.2895H9L9.00207 10.2392L9.54792 3.63158H2.45189Z\" fill=\"black\" fill-opacity=\"0.65\"/>\n</svg>", viewbox: "0 0 12 12" };

var styles$a =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconBucket = function IconBucket(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$a, className),
    glyph: img$7
  });
};

var img$8 = {id: "gGr3D3JQ6QGxurYR0UiQ9", content: "<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\" fill=\"#000\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 16 16" };

var styles$b =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconBurger = function IconBurger(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$b, className),
    glyph: img$8,
    onClick: onClick
  });
};

var img$9 = {id: "nsFGjjAYiOvWAtz_7_8hb", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 16 16" };

var styles$c =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconCancel = function IconCancel(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$c, className),
    glyph: img$9,
    onClick: onClick
  });
};

var img$a = {id: "la0Miu6G6amXzdqrQASX_", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\"/></svg>", viewbox: "0 0 14 14" };

var styles$d = {
  icon:
  /*#__PURE__*/
  emotion.css("fill:#ffffff;"),
  down:
  /*#__PURE__*/
  emotion.css("transform:rotate(180deg);"),
  left:
  /*#__PURE__*/
  emotion.css("transform:rotate(270deg);"),
  right:
  /*#__PURE__*/
  emotion.css("transform:rotate(90deg);")
};
var IconChevron = function IconChevron(props) {
  var direction = props.direction,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["direction", "className"]);

  return React.createElement(Icon, Object.assign({
    className: emotion.cx(styles$d.icon, _defineProperty({}, styles$d.down, direction === 'down'), _defineProperty({}, styles$d.left, direction === 'left'), _defineProperty({}, styles$d.right, direction === 'right'), className),
    glyph: img$a,
    hasState: true
  }, otherProps));
};

var img$b = {id: "Kw875qspGco-c0ZBjBMAk", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.38 8.63a.62.62 0 1 0 0-1.26h-1.84v-1.2h1.84a.62.62 0 1 0 0-1.25h-1.84V3.08a.62.62 0 0 0-.62-.62h-1.84V.63a.62.62 0 1 0-1.25 0v1.83h-1.2V.63a.62.62 0 1 0-1.26 0v1.83h-1.2V.63a.62.62 0 1 0-1.25 0v1.83H3.08a.62.62 0 0 0-.62.62v1.84H.63a.62.62 0 1 0 0 1.25h1.83v1.2H.63a.62.62 0 1 0 0 1.25h1.83v1.21H.63a.62.62 0 1 0 0 1.25h1.83v1.84c0 .34.28.62.62.62h1.84v1.84a.62.62 0 1 0 1.25 0v-1.84h1.2v1.84a.62.62 0 1 0 1.25 0v-1.84h1.21v1.84a.62.62 0 1 0 1.25 0v-1.84h1.84c.34 0 .62-.28.62-.62v-1.84h1.84a.62.62 0 1 0 0-1.25h-1.84v-1.2h1.84zm-3.09 3.66H3.71V3.71h8.58v8.58z\" fill=\"#000\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 16 16" };

var styles$e =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconChip = function IconChip(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$e, className),
    glyph: img$b
  });
};

var img$c = {id: "QVg0eee38ifPxkX1y_hyR", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\".65\" d=\"M8.87 8l3.98-3.98a.61.61 0 1 0-.87-.87L8 7.13 4.02 3.15a.61.61 0 1 0-.87.87L7.13 8l-3.98 3.98a.61.61 0 1 0 .87.87L8 8.87l3.98 3.98a.61.61 0 0 0 .87 0 .61.61 0 0 0 0-.87L8.87 8z\" fill=\"#000\"/></svg>", viewbox: "0 0 16 16" };

var styles$f =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconClose = function IconClose(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$f, className),
    glyph: img$c,
    onClick: onClick
  });
};

var img$d = {id: "8J2vFc1iUlkrNiRlR14GE", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\" viewBox=\"0 0 14 14\">\n    <path fill=\"inherit\" d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\"/>\n</svg>\n", viewbox: "0 0 14 14" };

var styles$g =
/*#__PURE__*/
emotion.css("width:14px;height:14px;fill:#fff;");
var IconCluster = function IconCluster(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(Icon, Object.assign({
    className: emotion.cx(styles$g, className),
    glyph: img$d
  }, props));
};

var img$e = {id: "-mwnhrYbQ2cR5BZj60U5a", content: "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\" fill=\"#fff\"/></svg>", viewbox: "0 0 14 14" };

var IconCode = function IconCode(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: className,
    glyph: img$e
  });
};

var img$f = {id: "zZ2EjEMfmIkepPbF7LZft", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\" fill=\"#F5222D\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 12 12" };

var styles$h =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconCreateFile = function IconCreateFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$h, className),
    glyph: img$f,
    onClick: onClick
  });
};

var img$g = {id: "Oynfg3zQIOx0E1P_Z8a9u", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\" fill=\"#F5222D\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 12 12" };

var styles$i =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconCreateFolder = function IconCreateFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$i, className),
    glyph: img$g,
    onClick: onClick
  });
};

var img$h = {id: "TdQFJ0wAdyL_EMhWHjSJ1", content: "<svg width=\"8\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#000\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 8 8" };

// TODO: delete?
var styles$j =
/*#__PURE__*/
emotion.css("width:8px;height:8px;");
var IconCrown = function IconCrown(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$j, className),
    glyph: img$h
  });
};

var img$i = {id: "OA2nbjxAkdEGSQmget3zg", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\" fill=\"#F5222D\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 12 12" };

var styles$k =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconDelete = function IconDelete(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$k, className),
    glyph: img$i,
    onClick: onClick
  });
};

var img$j = {id: "LyHhmoE2uZmER8Ptp7lKP", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"none\" viewBox=\"0 0 12 12\">\n    <path fill=\"#F5222D\" d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 12 12" };

var styles$l =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconDownload = function IconDownload(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$l, className),
    glyph: img$j,
    onClick: onClick
  });
};

var img$k = {id: "ASUdJSaLwG3mQNzIjyU0a", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\" fill=\"#F5222D\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 12 12" };

var styles$m =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconEdit = function IconEdit(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: emotion.cx(styles$m, className),
    glyph: img$k,
    onClick: onClick
  });
};

var img$l = {id: "h5SkMAe3G6B9U9HbUumbO", content: "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\" fill=\"#000\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 14" };

var IconFile = function IconFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Icon, {
    className: className,
    glyph: img$l,
    onClick: onClick
  });
};

var img$m = {id: "hY6fdfweDzfDFjdp67pfC", content: "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\" fill=\"#000\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 14" };

var img$n = {id: "jsNbSQ4dCI4Mxp7jHNpWD", content: "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\" fill=\"#000\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 14" };

var IconFolder = function IconFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      opened = _ref.opened;
  return React.createElement(Icon, {
    className: className,
    glyph: opened ? img$n : img$m,
    onClick: onClick
  });
};

var img$o = {id: "RPN6M7PqEWIRON0psFtsF", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\"><path fill=\"inherit\" d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\"/></svg>\n", viewbox: "0 0 12 12" };

var styles$n =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:#F5222D;");
var IconGear = function IconGear(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$n, className),
    glyph: img$o
  });
};

var img$p = {id: "BDYnXc4vCJm4Q5YBwgJBd", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"none\" viewBox=\"0 0 12 12\">\n    <path fill=\"#F5222D\" d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\"/>\n</svg>\n", viewbox: "0 0 12 12" };

var styles$o =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconInfo = function IconInfo(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$o, className),
    glyph: img$p
  });
};

var img$q = {id: "Vhee5frPmpkJnmhpErJ22", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill=\"#000\" fill-opacity=\".65\" d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\"/></svg>", viewbox: "0 0 14 14" };

var styles$p =
/*#__PURE__*/
emotion.css("width:14px;height:14px;");
var IconLink = function IconLink(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$p, className),
    glyph: img$q
  });
};

var img$r = {id: "ssvUYBeSGr4zmxZs65njD", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".65\"><path d=\"M2 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM12 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z\" fill=\"#F5222D\"/></g></svg>", viewbox: "0 0 16 16" };

var styles$q =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconMore = function IconMore(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$q, className),
    glyph: img$r
  });
};

var img$s = {id: "SbuC7dl4A6ONu8eJMy2PB", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\" fill=\"#F5222D\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 12 12" };

var styles$r =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconNewWindow = function IconNewWindow(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$r, className),
    glyph: img$s
  });
};

var img$t = {id: "8gY13kmYq5qD9vTpKir5i", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" fill=\"#52C41A\"/>\n</svg>", viewbox: "0 0 16 16" };

var styles$s =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconOk = function IconOk(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(Icon, Object.assign({
    className: emotion.cx(styles$s, className),
    glyph: img$t
  }, props));
};

var img$u = {id: "2oTCmHHov0SflAUWCzSRS", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16" };

var img$v = {id: "GJ-9tZUbR6V0XN1JCLrSE", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#F5222D\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 16 16" };

var img$w = {id: "ncEq8_xzuwqWrLb-ISv6R", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16" };

var img$x = {id: "bUmTTEpXyommNhNcHEGbV", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#FCC8CB\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#FCC8CB\"/></svg>", viewbox: "0 0 16 16" };

var CHECKED$1 = 1;
var DISABLED$1 = 2;
var states$1 = [img$u, img$v, img$w, img$x];
var styles$t =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconRadio = function IconRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED$1 : 0) + (checked ? CHECKED$1 : 0);
  return React.createElement(Icon, {
    className: emotion.cx(styles$t, className),
    glyph: states$1[mask]
  });
};

var img$y = {id: "PRTGPsPD4tsq5NBvP6BSG", content: "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\" fill=\"#F5222D\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 12 12" };

var styles$u =
/*#__PURE__*/
emotion.css("width:12px;height:12px;");
var IconRefresh = function IconRefresh(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$u, className),
    glyph: img$y
  });
};

var img$z = {id: "94q8Tdbli3A_dk4FXtMyR", content: "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\" fill=\"#fff\"/></svg>", viewbox: "0 0 14 14" };

var IconSchema = function IconSchema(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: className,
    glyph: img$z
  });
};

var img$A = {id: "vRc2YgqO9JCdmoysAIP-p", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\" fill=\"#000\" fill-opacity=\".25\"/></svg>", viewbox: "0 0 16 16" };

var styles$v =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconSearch = function IconSearch(_ref) {
  var className = _ref.className;
  return React.createElement(Icon, {
    className: emotion.cx(styles$v, className),
    glyph: img$A
  });
};

var img$B = {id: "fsioNV_308ObQst1DSzTn", content: "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\"/><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\"/></svg>", viewbox: "0 0 24 24" };

var styles$w =
/*#__PURE__*/
emotion.css("width:24px;height:24px;");
var IconUser = function IconUser(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(Icon, Object.assign({
    className: emotion.cx(styles$w, className),
    glyph: img$B
  }, props));
};

var img$C = {id: "Qzx8ypq42ZmKBsZ_NMgtW", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" viewBox=\"0 0 14 14\">\n    <path fill=\"#fff\" d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\"/>\n</svg>\n", viewbox: "0 0 14 14" };

var styles$x =
/*#__PURE__*/
emotion.css("width:14px;height:14px;");
var IconUsers = function IconUsers(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(Icon, Object.assign({
    className: emotion.cx(styles$x, className),
    glyph: img$C
  }, props));
};

var styles$y = {
  outer:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;"),
  control:
  /*#__PURE__*/
  emotion.css("display:block;margin-right:24px;&:last-child{margin-right:0px;}"),
  thin:
  /*#__PURE__*/
  emotion.css("margin-right:16px;")
};
var ControlsPanel = function ControlsPanel(_ref) {
  var className = _ref.className,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      thin = _ref.thin;
  return React.createElement("div", {
    className: emotion.cx(styles$y.outer, className)
  }, controls && controls.map(function (control) {
    return control ? React.createElement("div", {
      className: emotion.cx(styles$y.control, _defineProperty({}, styles$y.thin, thin))
    }, control) : null;
  }));
};

var styles$z = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:flex;padding:8px 16px;"),
  controls:
  /*#__PURE__*/
  emotion.css("padding-left:16px;margin-left:auto;")
};
var PopupFooter = function PopupFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls;
  return React.createElement("div", {
    className: emotion.cx(styles$z.wrap, className)
  }, children, controls && React.createElement(ControlsPanel, {
    className: emotion.cx(styles$z.controls),
    controls: controls,
    thin: true
  }));
};

var styles$A = {
  modal:
  /*#__PURE__*/
  emotion.css("padding:16px;margin:0 auto auto;"),
  title:
  /*#__PURE__*/
  emotion.css("padding-bottom:16px;padding-right:24px;border-bottom:1px solid rgba(55,52,66,0.08);margin-bottom:16px;padding-left:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  closeIcon:
  /*#__PURE__*/
  emotion.css("position:absolute;top:16px;right:16px;")
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
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          footerContent = _this$props.footerContent,
          footerControls = _this$props.footerControls,
          title = _this$props.title,
          onClose = _this$props.onClose,
          loading = _this$props.loading,
          wide = _this$props.wide;
      return React.createElement("div", {
        className: styles$2.shim({}),
        onMouseDown: this.handleOutsideClick
      }, React.createElement("div", {
        className: emotion.cx(styles$2.baseModal, styles$A.modal, _defineProperty({}, styles$2.wide, wide), className),
        ref: this.modalRef,
        tabIndex: 0,
        onKeyDown: this.handleEscapePress
      }, React.createElement(Text, {
        className: styles$A.title,
        variant: "h2"
      }, title), onClose && React.createElement(IconClose, {
        className: styles$A.closeIcon,
        onClick: onClose
      }), React.createElement("div", null, loading ? 'Loading' : children), (footerContent || footerControls) && React.createElement(PopupFooter, {
        controls: footerControls
      }, footerContent), React.createElement("div", {
        className: styles$2.focusClosureControl,
        onFocus: this.focusFirstInteractiveElement,
        tabIndex: "0"
      })));
    }
  }]);

  return Modal;
}(BaseModal);

var ConfirmModal = function ConfirmModal(_ref) {
  var onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      _ref$confirmText = _ref.confirmText,
      confirmText = _ref$confirmText === void 0 ? 'Ok' : _ref$confirmText,
      props = _objectWithoutProperties(_ref, ["onConfirm", "onCancel", "confirmText"]);

  return React.createElement(Modal, Object.assign({
    onClose: onCancel,
    footerControls: [React.createElement(Button, {
      intent: 'base',
      onClick: onCancel
    }, "Cancel"), React.createElement(Button, {
      intent: 'primary',
      onClick: onConfirm
    }, confirmText)]
  }, props));
};

var styles$B = {
  divider:
  /*#__PURE__*/
  emotion.css("height:1px;margin-bottom:12px;background-color:#e8e8e8;")
};
var Divider = function Divider(_ref) {
  var className = _ref.className;
  return React__default.createElement("div", {
    className: emotion.cx(styles$B.divider, className)
  });
};

var styles$C = {
  indicator:
  /*#__PURE__*/
  emotion.css("display:inline-block;flex-shrink:0;margin:8px;background-color:rgba(110,97,160,0.04);border-radius:50%;"),
  state: {
    bad:
    /*#__PURE__*/
    emotion.css("background-color:#f5222d;"),
    good:
    /*#__PURE__*/
    emotion.css("background-color:#52c41a;"),
    inactive:
    /*#__PURE__*/
    emotion.css("background-color:rgba(110,97,160,0.04);"),
    middle:
    /*#__PURE__*/
    emotion.css("background-color:#faad14;")
  },
  size: {
    s:
    /*#__PURE__*/
    emotion.css("width:6px;height:6px;") // m: css`
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
  return React__default.createElement("span", {
    className: emotion.cx(styles$C.indicator, styles$C.state[state], styles$C.size.s, className)
  });
};

var styles$D = {
  outer:
  /*#__PURE__*/
  emotion.css("padding:8px 0 0;margin:0;list-style:none;"),
  item:
  /*#__PURE__*/
  emotion.css("padding:12px 16px;border:solid 1px #E8E8E8;margin-bottom:8px;border-radius:4px;background-color:#ffffff;transition:0.1s ease-in-out;transition-property:border-color,box-shadow;&:hover{border-color:rgba(82,82,82,0.07);box-shadow:0px 5px 20px rgba(0,0,0,0.09);}")
};

var FlatListItem = function FlatListItem(_ref) {
  var className = _ref.className,
      item = _ref.item,
      render = _ref.render;
  return React.createElement("li", {
    className: emotion.cx(styles$D.item, className)
  }, render(item));
};

var FlatList = function FlatList(_ref2) {
  var className = _ref2.className,
      itemClassName = _ref2.itemClassName,
      itemKey = _ref2.itemKey,
      items = _ref2.items,
      itemRender = _ref2.itemRender;
  return React.createElement("ul", {
    className: emotion.cx(styles$D.outer, className)
  }, items && items.map(function (item) {
    return React.createElement(FlatListItem, {
      className: itemClassName,
      item: item,
      key: item[itemKey],
      render: itemRender
    });
  }));
};

var styles$E = {
  status:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:baseline;flex-basis:153px;color:rgba(0,0,0,0.65);")
};
var HealthStatus = function HealthStatus(_ref) {
  var className = _ref.className,
      defaultMessage = _ref.defaultMessage,
      status = _ref.status,
      message = _ref.message;
  return React.createElement(Text, {
    className: emotion.cx(styles$E.status, className),
    variant: "p",
    tag: "div"
  }, React.createElement(DotIndicator, {
    state: status === 'healthy' ? 'good' : 'bad'
  }), message || defaultMessage || status);
};

var styles$F = {
  outer:
  /*#__PURE__*/
  styled.css("position:relative;border:solid 1px #D9D9D9;box-sizing:border-box;border-radius:4px;background-color:#ffffff;"),
  disabled:
  /*#__PURE__*/
  styled.css("background-color:#F3F3F3;"),
  focused:
  /*#__PURE__*/
  styled.css("border-color:rgba(0,0,0,0.26);box-shadow:0px 0px 3px rgba(0,0,0,0.24);"),
  error:
  /*#__PURE__*/
  styled.css("border-color:#F5222D;box-shadow:0px 0px 3px rgba(245,34,45,0.65);"),
  input:
  /*#__PURE__*/
  styled.css("display:block;width:100%;height:100%;border:0;padding:5px 16px;box-sizing:border-box;border-radius:3px;font-family:'Open Sans',sans-serif;font-size:14px;line-height:22px;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;"),
  inputWithIcon:
  /*#__PURE__*/
  styled.css("padding:5px 32px 5px 16px;"),
  iconWrap:
  /*#__PURE__*/
  styled.css("position:absolute;top:7px;right:7px;bottom:7px;display:flex;align-items:center;")
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
    _this.inputRef = React.createRef();
    _this.state = {
      focused: false
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
      if (_this.inputRef && _this.inputRef.current) _this.inputRef.current.focus();
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
          disabled = _this$props.disabled,
          error = _this$props.error,
          name = _this$props.name,
          onChange = _this$props.onChange,
          readOnly = _this$props.readOnly,
          rightIcon = _this$props.rightIcon,
          type = _this$props.type,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
      var focused = this.state.focused;
      return React.createElement("div", {
        className: styled.cx(styles$F.outer, (_cx = {}, _defineProperty(_cx, styles$F.disabled, disabled), _defineProperty(_cx, styles$F.focused, focused), _defineProperty(_cx, styles$F.error, error), _cx), className)
      }, React.createElement("input", {
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        className: styled.cx(styles$F.input, _defineProperty({}, styles$F.inputWithIcon, rightIcon || onClearClick)),
        disabled: disabled,
        name: name,
        onChange: onChange,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        type: type,
        value: value,
        placeholder: placeholder,
        readOnly: readOnly,
        ref: this.inputRef
      }), (onClearClick || rightIcon) && React.createElement("div", {
        className: styles$F.iconWrap
      }, onClearClick && (!rightIcon || value) ? React.createElement(IconCancel, {
        onClick: !(disabled || readOnly) && this.handleClearClick || noop
      }) : rightIcon));
    }
  }]);

  return Input;
}(React.Component);

var styles$G = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:flex;flex-wrap:wrap;align-items:center;margin-left:-16px;margin-right:-16px;"),
  input:
  /*#__PURE__*/
  emotion.css("margin:0 16px 16px;"),
  column:
  /*#__PURE__*/
  emotion.css("align-self:stretch;margin:0 16px;"),
  columnInput:
  /*#__PURE__*/
  emotion.css("margin-bottom:16px;"),
  columns: [
  /*#__PURE__*/
  emotion.css("flex-basis:100%;"),
  /*#__PURE__*/
  emotion.css("flex-basis:calc(50% - 32px);"),
  /*#__PURE__*/
  emotion.css("flex-basis:calc(33.3% - 32px);")]
};
var renderers = {
  horizontal: function horizontal(children, columns, itemClassName) {
    return children instanceof Array ? children.map(function (child) {
      return React.createElement("div", {
        className: emotion.cx(styles$G.input, styles$G.columns[columns - 1], itemClassName)
      }, child);
    }) : React.createElement("div", {
      className: emotion.cx(styles$G.input, styles$G.columns[columns - 1], itemClassName)
    }, children);
  },
  vertical: function vertical(children, columns, itemClassName) {
    var items = children instanceof Array ? children : [children];
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
    return groupedItems.map(function (group) {
      return React.createElement("div", {
        className: emotion.cx(styles$G.column, styles$G.columns[columns - 1])
      }, group.map(function (child) {
        return React.createElement("div", {
          className: emotion.cx(styles$G.columnInput, itemClassName)
        }, child);
      }));
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
  return React.createElement("div", {
    className: emotion.cx(styles$G.wrap, className)
  }, renderer(children, columns, itemClassName));
};

var img$D = {id: "I11dixylPcad8fhO424Tm", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#B5EC8E\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#000\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 14 59" };

var img$E = {id: "5xirlpLNDaP2kpVwBD811", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#f5222d\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 59" };

var styles$H = {
  wrap:
  /*#__PURE__*/
  emotion.css("position:relative;width:14px;height:17px;overflow:hidden;transition:height 0.3s ease-in-out;&:hover{height:59px;}"),
  flag:
  /*#__PURE__*/
  emotion.css("position:absolute;left:0;bottom:0;width:14px;height:59px;")
};
var LeaderFlag = function LeaderFlag(_ref) {
  var className = _ref.className,
      fail = _ref.fail;
  var glyph = fail ? img$E : img$D;
  return React.createElement("div", {
    className: emotion.cx(styles$H.wrap, className)
  }, React.createElement("svg", {
    viewBox: glyph.viewBox,
    className: styles$H.flag
  }, React.createElement("use", {
    xlinkHref: "#".concat(glyph.id)
  })));
};

var img$F = {id: "YwoKCTU23DuAdMeKC-RFM", content: "<svg width=\"42\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 42 8" };

var styles$I = {
  flag:
  /*#__PURE__*/
  emotion.css("width:42px;height:8px;")
};
var LeaderFlagSmall = function LeaderFlagSmall(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    viewBox: img$F.viewBox,
    className: emotion.cx(styles$I.flag, className)
  }, React.createElement("use", {
    xlinkHref: "#".concat(img$F.id)
  }));
};

var styles$J = {
  splash:
  /*#__PURE__*/
  emotion.css("position:relative;display:flex;align-items:center;justify-content:center;padding:16px;background:#fff1f0;box-shadow:0px 1px 4px rgba(0,0,0,0.11);color:#f5222d;"),
  children:
  /*#__PURE__*/
  emotion.css("color:#f5222d;"),
  close:
  /*#__PURE__*/
  emotion.css("position:absolute;top:calc(50% - 8px);right:16px;"),
  closePadding:
  /*#__PURE__*/
  emotion.css("padding-right:48px;"),
  controls:
  /*#__PURE__*/
  emotion.css("flex-shrink:0;"),
  controlsMargin:
  /*#__PURE__*/
  emotion.css("margin-left:24px;")
};
var NotificationSplash = function NotificationSplash(_ref) {
  var className = _ref.className,
      children = _ref.children,
      controls = _ref.controls,
      onClose = _ref.onClose;
  return React.createElement("div", {
    className: emotion.cx(styles$J.splash, _defineProperty({}, styles$J.closePadding, onClose), className)
  }, React.createElement(Text, {
    className: styles$J.children,
    tag: "span"
  }, children), React.createElement(ControlsPanel, {
    className: emotion.cx(styles$J.controls, _defineProperty({}, styles$J.controlsMargin, children && controls)),
    controls: controls
  }), onClose && React.createElement(IconClose, {
    className: styles$J.close,
    onClick: onClose
  }));
};

var styles$K = {
  wrap:
  /*#__PURE__*/
  emotion.css("position:relative;"),
  spin:
  /*#__PURE__*/
  emotion.css("position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);"),
  animated:
  /*#__PURE__*/
  emotion.css("margin:100px auto;width:60px;height:60px;text-align:center;font-size:10px;"),
  rect:
  /*#__PURE__*/
  emotion.css("background-color:#333;height:100%;width:7px;margin:0 3px 0 0;display:inline-block;-webkit-animation:cluster-spin-sk-stretchdelay 1.2s infinite ease-in-out;animation:cluster-spin-sk-stretchdelay 1.2s infinite ease-in-out;&.rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s;}&.rect3{-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}&.rect4{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}&.rect5{-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}@-webkit-keyframes cluster-spin-sk-stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1.0)}}@keyframes cluster-spin-sk-stretchdelay{0%,40%,100%{transform:scale3d(1,0.4,1);-webkit-transform:scale3d(1,0.4,1);}20%{transform:scale3d(1,1.0,1);-webkit-transform:scale3d(1,1.0,1);}}"),
  container:
  /*#__PURE__*/
  emotion.css("&.blur{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;opacity:.5;}")
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
      return React.createElement("div", {
        className: styles$K.wrap
      }, enable && this.renderSpin(), React.createElement("div", {
        className: emotion.cx(styles$K.container, {
          'blur': enable
        })
      }, children));
    }
  }, {
    key: "renderSpin",
    value: function renderSpin() {
      return React.createElement("div", {
        className: styles$K.spin
      }, React.createElement("div", {
        className: styles$K.animated
      }, React.createElement("div", {
        className: styles$K.rect
      }), React.createElement("div", {
        className: emotion.cx(styles$K.rect, 'rect2')
      }), React.createElement("div", {
        className: emotion.cx(styles$K.rect, 'rect3')
      }), React.createElement("div", {
        className: emotion.cx(styles$K.rect, 'rect4')
      }), React.createElement("div", {
        className: emotion.cx(styles$K.rect, 'rect5')
      })));
    }
  }]);

  return Spin;
}(React.Component);
Spin.defaultProps = {
  enable: false
};

var styles$L = {
  container:
  /*#__PURE__*/
  styled.css("padding:16px;border:1px solid #e8e8e8;border-radius:4px;margin:0 -16px 48px;background:#ffffff;box-shadow:0px 1px 10px rgba(0,0,0,0.06);"),
  cardHead:
  /*#__PURE__*/
  styled.css("padding-bottom:16px;border-bottom:1px solid rgba(55,52,66,0.08);margin-bottom:16px;"),
  closeIcon:
  /*#__PURE__*/
  styled.css("position:absolute;top:0;right:0;")
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
  return React.createElement("div", {
    className: styled.cx(styles$L.container, // { [styles.corner]: showCorner },
    className)
  }, React.createElement(Spin, {
    enable: loading
  }, React.createElement(Text, {
    className: styles$L.cardHead,
    variant: "h2"
  }, title), onClose && React.createElement(IconClose, {
    className: styles$L.closeIcon,
    onClick: onClose
  }), React.createElement("div", null, children)));
};

var styles$M = {
  page:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:column;background:#f0f2f5;padding:24px 32px;")
};
var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: emotion.cx(styles$M.page, className)
  }, children);
};

var styles$N = {
  section:
  /*#__PURE__*/
  emotion.css("margin:0 0 48px;"),
  headingPane:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:row;align-items:baseline;"),
  headingPaneMargin:
  /*#__PURE__*/
  emotion.css("margin-bottom:24px;"),
  heading:
  /*#__PURE__*/
  emotion.css(),
  subTitle:
  /*#__PURE__*/
  emotion.css("margin-left:32px;"),
  topRightControls:
  /*#__PURE__*/
  emotion.css("margin-left:auto;")
};
var PageSection = function PageSection(_ref) {
  var children = _ref.children,
      className = _ref.className,
      subTitle = _ref.subTitle,
      title = _ref.title,
      topRightControls = _ref.topRightControls;
  var isHeadingPaneVisible = title || subTitle || topRightControls;
  return React.createElement("section", {
    className: emotion.cx(styles$N.section, className)
  }, isHeadingPaneVisible && React.createElement("div", {
    className: emotion.cx(styles$N.headingPane, _defineProperty({}, styles$N.headingPaneMargin, children))
  }, title && React.createElement(Text, {
    className: styles$N.heading,
    variant: "h2"
  }, title), subTitle && React.createElement(Text, {
    className: styles$N.subTitle,
    variant: "h5",
    tag: "span",
    upperCase: true
  }, subTitle), topRightControls && React.createElement(ControlsPanel, {
    className: styles$N.topRightControls,
    controls: topRightControls
  })), children);
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
styled__default("div", {
  target: "e1gokkyi0"
})("height:100%;");
var Track =
/*#__PURE__*/
styled__default("div", {
  target: "e1gokkyi1"
})("width:4px !important;background:", function (_ref) {
  var track = _ref.track;
  return track || '#e8e8e8';
}, " !important;border-radius:7px !important;");
var Thumb =
/*#__PURE__*/
styled__default("div", {
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

    return React.createElement(Track, Object.assign({}, rest, {
      style: style,
      innerRef: elementRef
    }));
  }
};
var thumbYProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return React.createElement(Thumb, Object.assign({}, rest, {
      style: style,
      innerRef: elementRef
    }));
  }
};
var wrapperProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return React.createElement("div", Object.assign({}, rest, {
      style: _objectSpread({}, style, {
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
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return React.createElement("div", Object.assign({}, rest, {
      style: _objectSpread({}, style, {
        marginRight: -20,
        paddingRight: 20
      }),
      ref: elementRef
    }));
  }
};
var Scrollbar = function Scrollbar(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      track = _ref3.track,
      thumb = _ref3.thumb;
  return React.createElement(ScrollWrapper, {
    className: className
  }, React.createElement(ReactScroll, {
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
      width: '100%',
      height: '100%'
    }
  }, children));
};

// @flex
var styles$O = {
  wrap:
  /*#__PURE__*/
  emotion.css("width:100%;height:100%;"),
  scrollableWrap:
  /*#__PURE__*/
  emotion.css("height:100%;margin-left:-16px;margin-right:-16px;"),
  scrollableBody:
  /*#__PURE__*/
  emotion.css("padding-left:16px;padding-right:16px;")
};
var PopupBody = function PopupBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      innerClassName = _ref.innerClassName,
      scrollable = _ref.scrollable;
  return scrollable ? React.createElement(Scrollbar, {
    className: emotion.cx(styles$O.scrollableWrap, className)
  }, React.createElement("div", {
    className: emotion.cx(styles$O.scrollableBody, innerClassName)
  }, children)) : React.createElement("div", {
    className: emotion.cx(styles$O.wrap, className)
  }, children);
};

// TODO: move to uikit
var COLORS = {
  success: '#52C41A',
  warning: '#FAAD14',
  danger: '#F5222D'
};
var style =
/*#__PURE__*/
emotion.css("position:relative;height:4px;width:100%;border-radius:3px;background-color:#e1e1e1;&::before{content:'';position:absolute;top:0;left:0;height:4px;min-width:4px;border-radius:3px;}");
var defineStatus = R.cond([[R.lt(66), R.always('danger')], [R.lt(33), R.always('warning')], [R.T, R.always('success')]]);
var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      percents = _ref.percents,
      _ref$intention = _ref.intention,
      intention = _ref$intention === void 0 ? defineStatus(percents) : _ref$intention;
  var bar =
  /*#__PURE__*/
  emotion.css("&::before{width:", percents, "%;background-color:", COLORS[intention], "}");
  return React__default.createElement("div", {
    className: emotion.cx(style, bar, className)
  });
};

var styles$P = {
  icon:
  /*#__PURE__*/
  emotion.css("display:block;"),
  iconWrap:
  /*#__PURE__*/
  emotion.css("position:relative;"),
  children:
  /*#__PURE__*/
  emotion.css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  emotion.css("margin-right:8px;"),
  input:
  /*#__PURE__*/
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:50%;}"),
  label:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;cursor:pointer;")
};
var RadioButton = function RadioButton(_ref) {
  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      name = _ref.name,
      value = _ref.value;
  return React.createElement("label", {
    className: emotion.cx(styles$P.label, className)
  }, React.createElement("input", {
    checked: checked,
    className: styles$P.input,
    disabled: disabled,
    type: "radio",
    onChange: onChange,
    name: name,
    value: value
  }), React.createElement("div", {
    className: emotion.cx(styles$P.iconWrap, _defineProperty({}, styles$P.childrenMargin, children))
  }, React.createElement(IconRadio, {
    className: styles$P.icon,
    checked: checked,
    disabled: disabled
  })), typeof children === 'string' ? React.createElement(Text, {
    className: styles$P.children
  }, children) : children);
};

var styles$Q = {
  input:
  /*#__PURE__*/
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-3px;left:-3px;right:-3px;bottom:-3px;border:solid 1px rgba(245,34,45,0.55);border-radius:15px;}"),
  switcher:
  /*#__PURE__*/
  emotion.css("position:relative;flex-shrink:0;width:42px;height:22px;border:solid 1px transparent;border-radius:12px;margin-right:8px;box-sizing:border-box;background-color:#a6a6a6;cursor:pointer;&::after{content:'';position:absolute;top:1px;left:1px;width:18px;height:18px;border-radius:50%;background-color:#ffffff;}"),
  children:
  /*#__PURE__*/
  emotion.css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  childrenMargin:
  /*#__PURE__*/
  emotion.css("margin-right:8px;"),
  basicDisabled:
  /*#__PURE__*/
  emotion.css("cursor:default;"),
  notDisabled:
  /*#__PURE__*/
  emotion.css("background-color:rgba(0,0,0,0.25);&:hover,&:focus{background-color:rgba(0,0,0,0.35);}"),
  checked:
  /*#__PURE__*/
  emotion.css("background-color:#f5222d;&:hover,&:focus{background-color:#CF1322;}&::after{left:auto;right:1px;}"),
  disabled:
  /*#__PURE__*/
  emotion.css("border-color:#d9d9d9;background-color:#f3f3f3;cursor:default;&::after{box-shadow:0px 0px 4px rgba(0,0,0,0.15);}"),
  checkedDisabled:
  /*#__PURE__*/
  emotion.css("background-color:#fcc8cb;&::after{left:auto;right:1px;}"),
  label:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;")
};
var Switcher = function Switcher(_ref) {
  var _cx;

  var checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  return React.createElement("label", {
    className: emotion.cx(styles$Q.label, className)
  }, React.createElement("input", {
    checked: checked,
    className: styles$Q.input,
    disabled: disabled,
    type: "checkbox",
    onChange: onChange
  }), React.createElement("div", {
    className: emotion.cx(styles$Q.switcher, (_cx = {}, _defineProperty(_cx, styles$Q.notDisabled, !checked && !disabled), _defineProperty(_cx, styles$Q.checked, checked && !disabled), _defineProperty(_cx, styles$Q.disabled, !checked && disabled), _defineProperty(_cx, styles$Q.basicDisabled, disabled), _defineProperty(_cx, styles$Q.checkedDisabled, checked && disabled), _defineProperty(_cx, styles$Q.childrenMargin, children), _cx))
  }), typeof children === 'string' ? React.createElement(Text, {
    className: styles$Q.children
  }, children) : children);
};

var styles$R = {
  tab:
  /*#__PURE__*/
  emotion.css("position:relative;padding:16px;border:none;border-bottom:solid 2px transparent;font-family:'Open Sans',sans-serif;font-size:16px;line-height:16px;font-weight:600;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;cursor:pointer;&:focus{z-index:1;}&:focus::before{content:'';position:absolute;top:-1px;left:-2px;right:-2px;bottom:-4px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  activeTab:
  /*#__PURE__*/
  emotion.css("color:#CF1322;border-bottom-color:#CF1322;"),
  tabs:
  /*#__PURE__*/
  emotion.css()
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
      return React.createElement("div", {
        className: className
      }, React.createElement("div", {
        className: styles$R.tabs
      }, tabs && tabs.map(function (_ref, i) {
        var label = _ref.label;
        return React.createElement("button", {
          className: emotion.cx(styles$R.tab, _defineProperty({}, styles$R.activeTab, activeTab === i)),
          onClick: function onClick() {
            return _this2.handleTabChange(i);
          }
        }, label);
      })), tabs[activeTab].content);
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
}(React.Component);

var styles$S = {
  tag:
  /*#__PURE__*/
  emotion.css("position:relative;border:none;border-radius:4px;padding:1px 8px 3px;margin:0 2px;font-size:12px;line-height:18px;outline:none;transition:0.1s ease-in-out;transition-property:background-color,color;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(245,34,45,0.55);border-radius:3px;}"),
  interactive: function interactive(className) {
    return className ?
    /*#__PURE__*/
    emotion.css("color:rgba(0,0,0,0.2);background-color:transparent;.", className, ":hover &{color:#ffffff;background-color:rgba(0,0,0,0.65);}.", className, " &:hover,.", className, " &:focus{background-color:#000000;color:#ffffff;}") : '';
  },
  "static":
  /*#__PURE__*/
  emotion.css("color:#ffffff;background-color:rgba(0,0,0,0.65);&:hover,&:focus{background-color:#000000;color:#ffffff;}"),
  pointer:
  /*#__PURE__*/
  emotion.css("cursor:pointer;")
};
var Tag = function Tag(_ref) {
  var _cx;

  var highlightingOnHover = _ref.highlightingOnHover,
      className = _ref.className,
      onClick = _ref.onClick,
      text = _ref.text;
  var Element = onClick ? 'button' : 'span';
  return React.createElement(Element, {
    className: emotion.cx((_cx = {}, _defineProperty(_cx, styles$S.interactive(highlightingOnHover), !!highlightingOnHover), _defineProperty(_cx, styles$S["static"], !highlightingOnHover), _defineProperty(_cx, styles$S.pointer, onClick), _cx), styles$S.tag, className),
    onClick: onClick
  }, text);
};

var styles$T = {
  wrapper:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:baseline;margin-bottom:-4px;user-select:none;"),
  heading:
  /*#__PURE__*/
  emotion.css("margin-right:8px;opacity:0.6;"),
  tag:
  /*#__PURE__*/
  emotion.css("margin-bottom:4px;")
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
  return React__default.createElement("div", {
    className: emotion.cx(styles$T.wrapper, className)
  }, heading && React__default.createElement(Text, {
    className: styles$T.heading,
    variant: "h5",
    tag: "span"
  }, React__default.createElement("b", null, "".concat(heading, ":"))), React__default.createElement("div", null, (values || []).map(function (value) {
    return React__default.createElement(Tag, {
      className: emotion.cx(styles$T.tag, tagClassName),
      onClick: function onClick() {
        return onTagClick && onTagClick(value);
      },
      text: renderItem ? renderItem(value) : toString(value),
      highlightingOnHover: highlightingOnHover
    });
  })));
};

var styles$U = {
  outer: function outer(_ref) {
    var _outer = _ref.outer;
    return (
      /*#__PURE__*/
      styled.css("padding:8px 0 0;", _outer ? 'margin: 0 -16px;' : '', " list-style:none;")
    );
  },
  item:
  /*#__PURE__*/
  styled.css("padding:12px 16px;margin-bottom:8px;border-radius:2px;background-color:#ffffff;box-shadow:0 1px 4px 0 rgba(0,0,0,0.11);"),
  softCorners:
  /*#__PURE__*/
  styled.css("border-radius:4px;margin-bottom:16px;")
};

var TiledListItem = function TiledListItem(_ref2) {
  var className = _ref2.className,
      _ref2$corners = _ref2.corners,
      corners = _ref2$corners === void 0 ? 'hard' : _ref2$corners,
      item = _ref2.item,
      render = _ref2.render;
  return React.createElement("li", {
    className: styled.cx(styles$U.item, _defineProperty({}, styles$U.softCorners, corners === 'soft'), className)
  }, render(item));
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
  return React.createElement("ul", {
    className: styled.cx(styles$U.outer({
      outer: outer
    }), className)
  }, items && items.map(function (item) {
    return React.createElement(TiledListItem, {
      className: itemClassName,
      corners: corners,
      item: item,
      key: item[itemKey],
      render: itemRender
    });
  }));
};

var styles$V = {
  uriWrap:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;"),
  uriIcon:
  /*#__PURE__*/
  emotion.css("margin-right:4px;"),
  uri:
  /*#__PURE__*/
  emotion.css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0,0,0,0.65);")
};
var UriLabel = function UriLabel(_ref) {
  var className = _ref.className,
      uri = _ref.uri;
  return React.createElement("div", {
    className: emotion.cx(styles$V.uriWrap, className)
  }, React.createElement(IconLink, {
    className: styles$V.uriIcon
  }), React.createElement(Text, {
    className: styles$V.uri,
    variant: "h5",
    tag: "span"
  }, uri));
};

exports.Alert = Alert;
exports.BaseModal = BaseModal;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.ConfirmModal = ConfirmModal;
exports.ControlsPanel = ControlsPanel;
exports.Divider = Divider;
exports.DotIndicator = DotIndicator;
exports.FlatList = FlatList;
exports.HealthStatus = HealthStatus;
exports.Icon = Icon;
exports.IconAttach = IconAttach;
exports.IconBox = IconBox;
exports.IconBoxNoData = IconBoxNoData;
exports.IconBucket = IconBucket;
exports.IconBurger = IconBurger;
exports.IconCancel = IconCancel;
exports.IconCheckbox = IconCheckbox;
exports.IconChevron = IconChevron;
exports.IconChip = IconChip;
exports.IconClose = IconClose;
exports.IconCluster = IconCluster;
exports.IconCode = IconCode;
exports.IconCreateFile = IconCreateFile;
exports.IconCreateFolder = IconCreateFolder;
exports.IconCrown = IconCrown;
exports.IconDelete = IconDelete;
exports.IconDownload = IconDownload;
exports.IconEdit = IconEdit;
exports.IconFile = IconFile;
exports.IconFolder = IconFolder;
exports.IconGear = IconGear;
exports.IconInfo = IconInfo;
exports.IconLink = IconLink;
exports.IconMore = IconMore;
exports.IconNewWindow = IconNewWindow;
exports.IconOk = IconOk;
exports.IconRadio = IconRadio;
exports.IconRefresh = IconRefresh;
exports.IconSchema = IconSchema;
exports.IconSearch = IconSearch;
exports.IconUser = IconUser;
exports.IconUsers = IconUsers;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.LeaderFlag = LeaderFlag;
exports.LeaderFlagSmall = LeaderFlagSmall;
exports.Modal = Modal;
exports.NotificationSplash = NotificationSplash;
exports.PageCard = PageCard;
exports.PageLayout = PageLayout;
exports.PageSection = PageSection;
exports.PopupBody = PopupBody;
exports.PopupFooter = PopupFooter;
exports.ProgressBar = ProgressBar;
exports.RadioButton = RadioButton;
exports.Scrollbar = Scrollbar;
exports.Spin = Spin;
exports.Switcher = Switcher;
exports.Tabbed = Tabbed;
exports.Tag = Tag;
exports.TagsList = TagsList;
exports.Text = Text;
exports.TiledList = TiledList;
exports.UriLabel = UriLabel;
exports.styles = styles$2;if (window) { window.document.addEventListener('DOMContentLoaded', function(){ const div = document.createElement('div'); div.setAttribute('style', 'display: none; height:0; width: 0; overflow: hidden;');  div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style>\n    .sprite-symbol-usage {display: none;}\n    .sprite-symbol-usage:target {display: inline;}\n  </style><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"-mwnhrYbQ2cR5BZj60U5a\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"2oTCmHHov0SflAUWCzSRS\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 48 48\" id=\"4R_154reMbRANYvzHIEF7\">\n    <path fill=\"#F5222D\" d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\" />\n</symbol><symbol viewBox=\"0 0 14 59\" id=\"5xirlpLNDaP2kpVwBD811\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#f5222d\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\" /></symbol><symbol fill=\"#fff\" viewBox=\"0 0 14 14\" id=\"8J2vFc1iUlkrNiRlR14GE\">\n    <path fill=\"inherit\" d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"8gY13kmYq5qD9vTpKir5i\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" fill=\"#52C41A\" />\n</symbol><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"94q8Tdbli3A_dk4FXtMyR\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\" fill=\"#fff\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"ASUdJSaLwG3mQNzIjyU0a\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\" fill=\"#F5222D\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"BDYnXc4vCJm4Q5YBwgJBd\">\n    <path fill=\"#F5222D\" d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"EbgkS--lRiRdtCw9gPc3B\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#FCC8CB\" /><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"GJ-9tZUbR6V0XN1JCLrSE\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#F5222D\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"I11dixylPcad8fhO424Tm\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" fill=\"#B5EC8E\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#000\" fill-opacity=\".45\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"Kw875qspGco-c0ZBjBMAk\"><path d=\"M15.38 8.63a.62.62 0 1 0 0-1.26h-1.84v-1.2h1.84a.62.62 0 1 0 0-1.25h-1.84V3.08a.62.62 0 0 0-.62-.62h-1.84V.63a.62.62 0 1 0-1.25 0v1.83h-1.2V.63a.62.62 0 1 0-1.26 0v1.83h-1.2V.63a.62.62 0 1 0-1.25 0v1.83H3.08a.62.62 0 0 0-.62.62v1.84H.63a.62.62 0 1 0 0 1.25h1.83v1.2H.63a.62.62 0 1 0 0 1.25h1.83v1.21H.63a.62.62 0 1 0 0 1.25h1.83v1.84c0 .34.28.62.62.62h1.84v1.84a.62.62 0 1 0 1.25 0v-1.84h1.2v1.84a.62.62 0 1 0 1.25 0v-1.84h1.21v1.84a.62.62 0 1 0 1.25 0v-1.84h1.84c.34 0 .62-.28.62-.62v-1.84h1.84a.62.62 0 1 0 0-1.25h-1.84v-1.2h1.84zm-3.09 3.66H3.71V3.71h8.58v8.58z\" fill=\"#000\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"LyHhmoE2uZmER8Ptp7lKP\">\n    <path fill=\"#F5222D\" d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\" />\n</symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"OA2nbjxAkdEGSQmget3zg\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\" fill=\"#F5222D\" fill-opacity=\".65\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"OkN5TZKBiGDfi8CqKAFrp\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"Oynfg3zQIOx0E1P_Z8a9u\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\" fill=\"#F5222D\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"PRTGPsPD4tsq5NBvP6BSG\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\" fill=\"#F5222D\" fill-opacity=\".45\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"QVg0eee38ifPxkX1y_hyR\"><path opacity=\".65\" d=\"M8.87 8l3.98-3.98a.61.61 0 1 0-.87-.87L8 7.13 4.02 3.15a.61.61 0 1 0-.87.87L7.13 8l-3.98 3.98a.61.61 0 1 0 .87.87L8 8.87l3.98 3.98a.61.61 0 0 0 .87 0 .61.61 0 0 0 0-.87L8.87 8z\" fill=\"#000\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"Qzx8ypq42ZmKBsZ_NMgtW\">\n    <path fill=\"#fff\" d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"RPN6M7PqEWIRON0psFtsF\"><path fill=\"inherit\" d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"SbuC7dl4A6ONu8eJMy2PB\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\" fill=\"#F5222D\" fill-opacity=\".65\" /></symbol><symbol viewBox=\"0 0 8 8\" id=\"TdQFJ0wAdyL_EMhWHjSJ1\"><path d=\"M.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#000\" fill-opacity=\".45\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"VNk9A_enwg0NknvWebdfA\">\n<path d=\"M3 0H9H10.8C11.4627 0 12 0.541971 12 1.21053V2.42105C12 3.08961 11.4627 3.63158 10.8 3.63158H10.7519L10.2 10.2895C10.2 10.958 9.66274 11.5 9 11.5H3C2.33726 11.5 1.8 10.958 1.80207 10.3397L1.24792 3.63158H1.2C0.537258 3.63158 0 3.08961 0 2.42105V1.21053C0 0.541971 0.537258 0 1.2 0H3ZM3 1.21053H1.2V2.42105H10.8V1.21053H9H3ZM2.45189 3.63158L3 10.2895H9L9.00207 10.2392L9.54792 3.63158H2.45189Z\" fill=\"black\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"Vhee5frPmpkJnmhpErJ22\"><path fill=\"#000\" fill-opacity=\".65\" d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"YdA1XC7ySfJhqvLrmI21H\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\" /><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\" /></g></symbol><symbol viewBox=\"0 0 42 8\" id=\"YwoKCTU23DuAdMeKC-RFM\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"bUmTTEpXyommNhNcHEGbV\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#FCC8CB\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" fill=\"#FCC8CB\" /></symbol><symbol viewBox=\"0 0 64 41\" id=\"bVV2O579w2caKAdvNwPnp\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\" /><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\" /><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\" /></g></g></symbol><symbol fill=\"none\" viewBox=\"0 0 16 16\" id=\"cWK91QQM3noaPujLNYlA2\">\n    <path fill=\"#000\" d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\" />\n</symbol><symbol fill=\"none\" viewBox=\"0 0 24 24\" id=\"fsioNV_308ObQst1DSzTn\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\" /><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 16 16\" id=\"gGr3D3JQ6QGxurYR0UiQ9\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\" fill=\"#000\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"h5SkMAe3G6B9U9HbUumbO\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\" fill=\"#000\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"hY6fdfweDzfDFjdp67pfC\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\" fill=\"#000\" fill-opacity=\".65\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 14 14\" id=\"jsNbSQ4dCI4Mxp7jHNpWD\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\" fill=\"#000\" fill-opacity=\".65\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"la0Miu6G6amXzdqrQASX_\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"ncEq8_xzuwqWrLb-ISv6R\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"nsFGjjAYiOvWAtz_7_8hb\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"ssvUYBeSGr4zmxZs65njD\"><g opacity=\".65\"><path d=\"M2 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM12 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z\" fill=\"#F5222D\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"tPBUsTHo10fAdnJSiQI40\"><rect width=\"16\" height=\"16\" rx=\"2\" fill=\"#F5222D\" /><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"vRc2YgqO9JCdmoysAIP-p\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\" fill=\"#000\" fill-opacity=\".25\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 12 12\" id=\"zZ2EjEMfmIkepPbF7LZft\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\" fill=\"#F5222D\" fill-opacity=\".65\" /></symbol></defs><use id=\"-mwnhrYbQ2cR5BZj60U5a-usage\" xlink:href=\"#-mwnhrYbQ2cR5BZj60U5a\" class=\"sprite-symbol-usage\" /><use id=\"2oTCmHHov0SflAUWCzSRS-usage\" xlink:href=\"#2oTCmHHov0SflAUWCzSRS\" class=\"sprite-symbol-usage\" /><use id=\"4R_154reMbRANYvzHIEF7-usage\" xlink:href=\"#4R_154reMbRANYvzHIEF7\" class=\"sprite-symbol-usage\" /><use id=\"5xirlpLNDaP2kpVwBD811-usage\" xlink:href=\"#5xirlpLNDaP2kpVwBD811\" class=\"sprite-symbol-usage\" /><use id=\"8J2vFc1iUlkrNiRlR14GE-usage\" xlink:href=\"#8J2vFc1iUlkrNiRlR14GE\" class=\"sprite-symbol-usage\" /><use id=\"8gY13kmYq5qD9vTpKir5i-usage\" xlink:href=\"#8gY13kmYq5qD9vTpKir5i\" class=\"sprite-symbol-usage\" /><use id=\"94q8Tdbli3A_dk4FXtMyR-usage\" xlink:href=\"#94q8Tdbli3A_dk4FXtMyR\" class=\"sprite-symbol-usage\" /><use id=\"ASUdJSaLwG3mQNzIjyU0a-usage\" xlink:href=\"#ASUdJSaLwG3mQNzIjyU0a\" class=\"sprite-symbol-usage\" /><use id=\"BDYnXc4vCJm4Q5YBwgJBd-usage\" xlink:href=\"#BDYnXc4vCJm4Q5YBwgJBd\" class=\"sprite-symbol-usage\" /><use id=\"EbgkS--lRiRdtCw9gPc3B-usage\" xlink:href=\"#EbgkS--lRiRdtCw9gPc3B\" class=\"sprite-symbol-usage\" /><use id=\"GJ-9tZUbR6V0XN1JCLrSE-usage\" xlink:href=\"#GJ-9tZUbR6V0XN1JCLrSE\" class=\"sprite-symbol-usage\" /><use id=\"I11dixylPcad8fhO424Tm-usage\" xlink:href=\"#I11dixylPcad8fhO424Tm\" class=\"sprite-symbol-usage\" /><use id=\"Kw875qspGco-c0ZBjBMAk-usage\" xlink:href=\"#Kw875qspGco-c0ZBjBMAk\" class=\"sprite-symbol-usage\" /><use id=\"LyHhmoE2uZmER8Ptp7lKP-usage\" xlink:href=\"#LyHhmoE2uZmER8Ptp7lKP\" class=\"sprite-symbol-usage\" /><use id=\"OA2nbjxAkdEGSQmget3zg-usage\" xlink:href=\"#OA2nbjxAkdEGSQmget3zg\" class=\"sprite-symbol-usage\" /><use id=\"OkN5TZKBiGDfi8CqKAFrp-usage\" xlink:href=\"#OkN5TZKBiGDfi8CqKAFrp\" class=\"sprite-symbol-usage\" /><use id=\"Oynfg3zQIOx0E1P_Z8a9u-usage\" xlink:href=\"#Oynfg3zQIOx0E1P_Z8a9u\" class=\"sprite-symbol-usage\" /><use id=\"PRTGPsPD4tsq5NBvP6BSG-usage\" xlink:href=\"#PRTGPsPD4tsq5NBvP6BSG\" class=\"sprite-symbol-usage\" /><use id=\"QVg0eee38ifPxkX1y_hyR-usage\" xlink:href=\"#QVg0eee38ifPxkX1y_hyR\" class=\"sprite-symbol-usage\" /><use id=\"Qzx8ypq42ZmKBsZ_NMgtW-usage\" xlink:href=\"#Qzx8ypq42ZmKBsZ_NMgtW\" class=\"sprite-symbol-usage\" /><use id=\"RPN6M7PqEWIRON0psFtsF-usage\" xlink:href=\"#RPN6M7PqEWIRON0psFtsF\" class=\"sprite-symbol-usage\" /><use id=\"SbuC7dl4A6ONu8eJMy2PB-usage\" xlink:href=\"#SbuC7dl4A6ONu8eJMy2PB\" class=\"sprite-symbol-usage\" /><use id=\"TdQFJ0wAdyL_EMhWHjSJ1-usage\" xlink:href=\"#TdQFJ0wAdyL_EMhWHjSJ1\" class=\"sprite-symbol-usage\" /><use id=\"VNk9A_enwg0NknvWebdfA-usage\" xlink:href=\"#VNk9A_enwg0NknvWebdfA\" class=\"sprite-symbol-usage\" /><use id=\"Vhee5frPmpkJnmhpErJ22-usage\" xlink:href=\"#Vhee5frPmpkJnmhpErJ22\" class=\"sprite-symbol-usage\" /><use id=\"YdA1XC7ySfJhqvLrmI21H-usage\" xlink:href=\"#YdA1XC7ySfJhqvLrmI21H\" class=\"sprite-symbol-usage\" /><use id=\"YwoKCTU23DuAdMeKC-RFM-usage\" xlink:href=\"#YwoKCTU23DuAdMeKC-RFM\" class=\"sprite-symbol-usage\" /><use id=\"bUmTTEpXyommNhNcHEGbV-usage\" xlink:href=\"#bUmTTEpXyommNhNcHEGbV\" class=\"sprite-symbol-usage\" /><use id=\"bVV2O579w2caKAdvNwPnp-usage\" xlink:href=\"#bVV2O579w2caKAdvNwPnp\" class=\"sprite-symbol-usage\" /><use id=\"cWK91QQM3noaPujLNYlA2-usage\" xlink:href=\"#cWK91QQM3noaPujLNYlA2\" class=\"sprite-symbol-usage\" /><use id=\"fsioNV_308ObQst1DSzTn-usage\" xlink:href=\"#fsioNV_308ObQst1DSzTn\" class=\"sprite-symbol-usage\" /><use id=\"gGr3D3JQ6QGxurYR0UiQ9-usage\" xlink:href=\"#gGr3D3JQ6QGxurYR0UiQ9\" class=\"sprite-symbol-usage\" /><use id=\"h5SkMAe3G6B9U9HbUumbO-usage\" xlink:href=\"#h5SkMAe3G6B9U9HbUumbO\" class=\"sprite-symbol-usage\" /><use id=\"hY6fdfweDzfDFjdp67pfC-usage\" xlink:href=\"#hY6fdfweDzfDFjdp67pfC\" class=\"sprite-symbol-usage\" /><use id=\"jsNbSQ4dCI4Mxp7jHNpWD-usage\" xlink:href=\"#jsNbSQ4dCI4Mxp7jHNpWD\" class=\"sprite-symbol-usage\" /><use id=\"la0Miu6G6amXzdqrQASX_-usage\" xlink:href=\"#la0Miu6G6amXzdqrQASX_\" class=\"sprite-symbol-usage\" /><use id=\"ncEq8_xzuwqWrLb-ISv6R-usage\" xlink:href=\"#ncEq8_xzuwqWrLb-ISv6R\" class=\"sprite-symbol-usage\" /><use id=\"nsFGjjAYiOvWAtz_7_8hb-usage\" xlink:href=\"#nsFGjjAYiOvWAtz_7_8hb\" class=\"sprite-symbol-usage\" /><use id=\"ssvUYBeSGr4zmxZs65njD-usage\" xlink:href=\"#ssvUYBeSGr4zmxZs65njD\" class=\"sprite-symbol-usage\" /><use id=\"tPBUsTHo10fAdnJSiQI40-usage\" xlink:href=\"#tPBUsTHo10fAdnJSiQI40\" class=\"sprite-symbol-usage\" /><use id=\"vRc2YgqO9JCdmoysAIP-p-usage\" xlink:href=\"#vRc2YgqO9JCdmoysAIP-p\" class=\"sprite-symbol-usage\" /><use id=\"zZ2EjEMfmIkepPbF7LZft-usage\" xlink:href=\"#zZ2EjEMfmIkepPbF7LZft\" class=\"sprite-symbol-usage\" /></svg>";  window.document.body.appendChild(div) }); }
