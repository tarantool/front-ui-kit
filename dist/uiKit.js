'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var emotion = require('emotion');
var ReactDOM = require('react-dom');
var emotionRgba = require('emotion-rgba');
var ResizeObserver = _interopDefault(require('resize-observer-polyfill'));
var styled = require('react-emotion');
var styled__default = _interopDefault(styled);
var lodash = require('lodash');
var ReactScroll = _interopDefault(require('react-scrollbars-custom'));
var Prism$1 = _interopDefault(require('prismjs'));
var R = require('ramda');
var MD = _interopDefault(require('markdown-to-jsx'));
var reactTable = require('react-table');

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

var marginSmall = '4px';
var baseFontFamily = "Inter, Arial, sans-serif";
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
  intentSuccess: '#52c41a',
  intentSuccessBg: '#f6ffee',
  intentSuccessBorder: '#b5ec8e',
  baseHeading: '#040b1d',
  baseBg: '#efefef',
  scrollbar: '#e8e8e8',
  codeBg: '#1e2537',
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
  // maybe 300 (see login modal)
  modal: 100,
  dropdownMenu: 150,
  tooltip: 200
};
var INTERACTIVE_ELEMENT_SELECTOR = 'a, button, input, select, textarea, [tabindex="0"]';

var textStyles = {
  h1:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:24px;line-height:40px;font-weight:600;color:", colors.baseHeading, ";-webkit-font-smoothing:antialiased;"),
  h2:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:20px;line-height:28px;font-weight:600;color:", colors.baseHeading, ";-webkit-font-smoothing:antialiased;"),
  h3:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:16px;line-height:24px;font-weight:600;color:", colors.baseHeading, ";-webkit-font-smoothing:antialiased;"),
  h4:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;font-weight:600;color:", colors.baseHeading, ";-webkit-font-smoothing:antialiased;"),
  h5:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:12px;line-height:22px;text-transform:uppercase;letter-spacing:0.01em;color:", colors.baseHeading, ";font-weight:600;-webkit-font-smoothing:antialiased;"),
  p:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:12px;line-height:20px;color:#000000;-webkit-font-smoothing:antialiased;"),
  code:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", monoFontFamily, ";font-size:14px;line-height:22px;color:#000000;-webkit-font-smoothing:antialiased;b{font-weight:600;}"),
  basic:
  /*#__PURE__*/
  emotion.css("margin:0;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;color:#000000;-webkit-font-smoothing:antialiased;b{font-weight:600;}"),
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
      variant = _ref$variant === void 0 ? 'basic' : _ref$variant,
      props = _objectWithoutProperties(_ref, ["className", "children", "tag", "upperCase", "noCase", "variant"]);

  var Element = tag || (variant === 'basic' ? 'span' : variant);
  return (
    /*#__PURE__*/
    React.createElement(Element, Object.assign({}, props, {
      className: emotion.cx(textStyles[variant], (_cx = {}, _defineProperty(_cx, textStyles.upperCase, upperCase), _defineProperty(_cx, textStyles.noCase, noCase), _cx), className)
    }), children)
  );
};

var styles = {
  alert:
  /*#__PURE__*/
  emotion.css("padding:15px;border:1px solid;border-radius:4px;margin-top:16px;margin-bottom:16px;box-shadow:0px 5px 20px rgba(0,0,0,0.1);"),
  success:
  /*#__PURE__*/
  emotion.css("border-color:", colors.intentSuccessBorder, ";background-color:", colors.intentSuccessBg, ";"),
  error:
  /*#__PURE__*/
  emotion.css("border-color:", colors.intentDangerBorder, ";background-color:", colors.intentDangerBg, ";")
};
var Alert = function Alert(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type;
  return (
    /*#__PURE__*/
    React.createElement(Text, {
      className: emotion.cx(styles.alert, styles[type], className),
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

var styles$1 = {
  lockedBody:
  /*#__PURE__*/
  emotion.css("overflow:hidden;"),
  shim:
  /*#__PURE__*/
  emotion.css("position:fixed;z-index:", zIndex.modal, ";left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;padding:40px 16px;overflow:auto;background-color:", emotionRgba.rgba(colors.dark, 0.15), ";justify-content:flex-start;align-items:center;"),
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
      var firstInteractiveElement = modal && modal.querySelector('a, button, input, select, textarea, [tabindex="0"]');

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
          shimClassName = _this$props.shimClassName;
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$1.shim, shimClassName),
          onMouseDown: this.handleOutsideClick
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$1.baseModal, _defineProperty({}, styles$1.wide, wide), className),
          ref: this.modalRef,
          tabIndex: 0,
          onKeyDown: this.handleEscapePress
        }, children,
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1.focusClosureControl,
          onFocus: this.focusFirstInteractiveElement,
          tabIndex: "0"
        })))
      );
    }
  }]);

  return BaseModal;
}(React.Component);

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

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var ResizeSensor =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ResizeSensor, _React$PureComponent);

  function ResizeSensor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResizeSensor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizeSensor)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
        return ReactDOM.findDOMNode(this);
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
    return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && objA[key] === objB[key];
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
var styles$2 = {
  overFlowList:
  /*#__PURE__*/
  emotion.css("display:flex;flex-wrap:nowrap;min-width:0;"),
  overflowListSpacer:
  /*#__PURE__*/
  emotion.css("flex-shrink:1;width:1px;")
};
var OverflowList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OverflowList, _React$Component);

  function OverflowList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OverflowList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowList)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
      var list = React.createElement(tagName, {
        className: emotion.cx(styles$2.overFlowList, className),
        style: style
      }, overflow, this.state.visible.map(visibleItemRenderer), null,
      /*#__PURE__*/
      React.createElement("div", {
        className: styles$2.overflowListSpacer,
        ref: function ref(_ref) {
          return _this2.spacer = _ref;
        }
      }));
      return (
        /*#__PURE__*/
        React.createElement(ResizeSensor, {
          onResize: this.resize,
          observeParents: observeParents
        }, list)
      );
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
  emotion.css("width:", width, "px;height:", height, "px;") : '';
  return (
    /*#__PURE__*/
    React.createElement("svg", Object.assign({}, props, {
      className: emotion.cx(sizingClassName, className),
      viewBox: glyph.viewBox
    }),
    /*#__PURE__*/
    React.createElement("use", {
      xlinkHref: "#".concat(glyph.id)
    }))
  );
};

var styles$3 = {
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
  emotion.css("display:block;padding:0;border:none;outline:none;background:transparent;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px ", emotionRgba.rgba(colors.intentPrimary, 0.55), ";border-radius:3px;}")
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
    React.createElement(SVGImage, {
      glyph: glyph,
      onClick: onClick,
      onMouseLeave: onMouseLeave,
      onMouseEnter: onMouseEnter,
      className: emotion.cx(styles$3.icon, (_cx = {}, _defineProperty(_cx, styles$3.stroke, stroke), _defineProperty(_cx, styles$3.clickable, !!onClick), _defineProperty(_cx, styles$3.active, active), _cx), className)
    })
  );
};

var img = {id: "GEFQsT0H-4i4D83K3fcjo", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$4 =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:#000;");
var IconAttach = function IconAttach(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$4, className),
      glyph: img
    })
  );
};

var img$1 = {id: "BoeUBxsEcZ6hJBWkrwknL", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$5 =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.dark65, ";");
var IconAttention = function IconAttention(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$5, className),
      glyph: img$1
    })
  );
};

var img$2 = {id: "y4sjlvTBhiYDgJ0_B-Q_J", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path d=\"M12.436 6.298h-9.15c-.003 0-.004-.003-.003-.003l3.452-3.318a.701.701 0 1 0-.973-1.011L1.063 6.482a.705.705 0 0 0 0 1.01l4.725 4.542a.699.699 0 0 0 .992-.02.702.702 0 0 0-.02-.991L3.31 7.705c-.002-.002 0-.003.002-.003h9.14a.702.702 0 0 0 .701-.659.712.712 0 0 0-.716-.745z\"/></svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$6 = {
  icon:
  /*#__PURE__*/
  emotion.css("width:16px;height:16px;fill:#ffffff;"),
  right:
  /*#__PURE__*/
  emotion.css("transform:rotate(180deg);"),
  down:
  /*#__PURE__*/
  emotion.css("transform:rotate(270deg);"),
  up:
  /*#__PURE__*/
  emotion.css("transform:rotate(90deg);")
};
var IconArrow = function IconArrow(props) {
  var direction = props.direction,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["direction", "className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, otherProps, {
      className: emotion.cx(styles$6.icon, _defineProperty({}, styles$6.down, direction === 'down'), _defineProperty({}, styles$6.right, direction === 'right'), _defineProperty({}, styles$6.up, direction === 'up'), className),
      glyph: img$2,
      hasState: true
    }))
  );
};
var IconArrowUp = function IconArrowUp(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconArrow, Object.assign({}, props, {
      direction: "up"
    }))
  );
};
var IconArrowDown = function IconArrowDown(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconArrow, Object.assign({}, props, {
      direction: "down"
    }))
  );
};
var IconArrowLeft = function IconArrowLeft(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconArrow, Object.assign({}, props, {
      direction: "left"
    }))
  );
};
var IconArrowRight = function IconArrowRight(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconArrow, Object.assign({}, props, {
      direction: "right"
    }))
  );
};

var img$3 = {id: "ZRGe4LETxUzCfgfjPCxww", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n    <path d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\"/>\n</svg>\n", viewbox: "0 0 48 48", viewBox: "0 0 48 48" };

var styles$7 =
/*#__PURE__*/
emotion.css("width:48px;height:48px;fill:", colors.intentPrimary, ";");
var IconBox = function IconBox(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$7, className),
      glyph: img$3
    })
  );
};

var img$4 = {id: "XmgZhfWVlxLR6TR7ur9iV", content: "<svg width=\"64\" height=\"41\" viewBox=\"0 0 64 41\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\"></ellipse><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\"></path><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\"></path></g></g></svg>", viewbox: "0 0 64 41", viewBox: "0 0 64 41" };

var styles$8 =
/*#__PURE__*/
emotion.css("width:64px;height:41px;");
var IconBoxNoData = function IconBoxNoData(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$8, className),
      glyph: img$4
    })
  );
};

var img$5 = {id: "fUN8ZuF6ZUOlfETm4B5N8", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$9 =
/*#__PURE__*/
emotion.css("fill:", colors.dark65, ";");
var IconBucket = function IconBucket(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$9, className),
      glyph: img$5
    })
  );
};

var img$6 = {id: "deFFldsLgNnzYWEKsyng5", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$a =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.dark65, ";");
var IconBurger = function IconBurger(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$a, className),
      glyph: img$6,
      onClick: onClick
    })
  );
};

var img$7 = {id: "MGVTa2T1dAn2js7LaO3S_", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$b =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentDanger, ";");
var IconCancel = function IconCancel(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$b, className),
      glyph: img$7,
      onClick: onClick
    })
  );
};

var img$8 = {id: "PF6xpmnR1Pd_yrTvyL2j_", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M13.104 2.375h-.625V1.333h-1.041v1.042H4.563V1.333H3.52v1.042h-.625c-.862 0-1.563.7-1.563 1.562v9.167c0 .862.701 1.563 1.563 1.563h10.208c.862 0 1.563-.701 1.563-1.563V3.937c0-.861-.701-1.562-1.563-1.562zM2.896 3.417h.625v1.041h1.042V3.417h6.875v1.041h1.041V3.417h.625c.287 0 .521.233.521.52v1.25H2.375v-1.25c0-.287.234-.52.52-.52zm10.208 10.208H2.896a.521.521 0 0 1-.521-.52V6.228h11.25v6.875c0 .287-.234.52-.52.52zM9.563 12.53h3.124V9.406H9.563v3.125zm1.041-2.083h1.042v1.041h-1.042v-1.041z\"/></g><defs><clipPath id=\"clip0\"><path transform=\"translate(1.333 1.333)\" d=\"M0 0h13.333v13.333H0z\"/></clipPath></defs></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$c =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:rgba(0,0,0,.65);");
var IconCalendar = function IconCalendar(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$c, className),
      glyph: img$8
    }))
  );
};

var img$9 = {id: "2X2G7Yksx2gNDnNPxfl4F", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\"/></g></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$a = {id: "tMNsZ-7g1AggfY7JCeu1g", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$b = {id: "nSH2qbkdT-QfZ084vaMYN", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$c = {id: "gUhBeIW8MfwouAp8ER7KF", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/><path d=\"M5 5h6v6H5z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$d = {id: "dEsZwubG8SlPZTfXCFlJb", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$e = {id: "tN9Nl8_uS2dLSNc8IjRov", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/><path d=\"M5 5h6v6H5z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var INDETERMINATE = 4;
var CHECKED = 2;
var DISABLED = 1;
var states = [img$9, img$b, img$a, img$d, img$c, img$e];
var styles$d =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";");
var stylesDisabled =
/*#__PURE__*/
emotion.css("fill:", colors.intentPrimaryDisabled, ";");
var IconCheckbox = function IconCheckbox(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate;
  var mask = (indeterminate ? INDETERMINATE : 0) + (disabled ? DISABLED : 0) + (checked && !indeterminate ? CHECKED : 0);
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$d, _defineProperty({}, stylesDisabled, disabled), className),
      glyph: states[mask]
    })
  );
};
var IconCheckboxChecked = function IconCheckboxChecked(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconCheckbox, Object.assign({}, props, {
      checked: true
    }))
  );
};
var IconCheckboxDisabled = function IconCheckboxDisabled(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconCheckbox, Object.assign({}, props, {
      disabled: true
    }))
  );
};
var IconCheckboxIndeterminate = function IconCheckboxIndeterminate(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconCheckbox, Object.assign({}, props, {
      indeterminate: true
    }))
  );
};
var IconCheckboxIndeterminateDisabled = function IconCheckboxIndeterminateDisabled(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconCheckbox, Object.assign({}, props, {
      indeterminate: true,
      disabled: true
    }))
  );
};
var IconCheckboxCheckedDisabled = function IconCheckboxCheckedDisabled(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconCheckbox, Object.assign({}, props, {
      checked: true,
      disabled: true
    }))
  );
};

var img$f = {id: "oq9WstWxXIZWIuhno-Yg7", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$e = {
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

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, otherProps, {
      className: emotion.cx(styles$e.icon, _defineProperty({}, styles$e.down, direction === 'down'), _defineProperty({}, styles$e.left, direction === 'left'), _defineProperty({}, styles$e.right, direction === 'right'), className),
      glyph: img$f,
      hasState: true
    }))
  );
}; // export const IconChevronUp = (props: GenericIconProps) => (
//   <IconChevron {...props} direction='up' />
// );

var IconChevronDown = function IconChevronDown(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconChevron, Object.assign({}, props, {
      direction: "down"
    }))
  );
};
var IconChevronLeft = function IconChevronLeft(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconChevron, Object.assign({}, props, {
      direction: "left"
    }))
  );
};
var IconChevronRight = function IconChevronRight(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconChevron, Object.assign({}, props, {
      direction: "right"
    }))
  );
};

var img$g = {id: "-9Dhj4F2VDse9wdQAQcAS", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style =
/*#__PURE__*/
emotion.css("fill:", colors.dark65, ";");
var IconChip = function IconChip(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(style, className),
      glyph: img$g
    })
  );
};

var img$h = {id: "t8ckgkVvKFKJR5eICKCFj", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$1 =
/*#__PURE__*/
emotion.css("fill:", colors.intentWarning, ";");
var IconChipWarning = function IconChipWarning(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(style$1, className),
      glyph: img$h
    })
  );
};

var img$i = {id: "6KaApau6cEWPukcqsgXxP", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var style$2 =
/*#__PURE__*/
emotion.css("fill:", colors.intentDanger, ";");
var IconChipDanger = function IconChipDanger(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(style$2, className),
      glyph: img$i
    })
  );
};

var img$j = {id: "_zYYpz86MfuyT3GraGXvs", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 13.125A6.132 6.132 0 0 1 1.875 8 6.132 6.132 0 0 1 8 1.875 6.132 6.132 0 0 1 14.125 8 6.132 6.132 0 0 1 8 14.125z\"/><path d=\"M8.499 4h-1v4.206l2.646 2.646.707-.707-2.353-2.353V3.999z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$f =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:rgba(0,0,0,.65);");
var IconClock = function IconClock(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$f, className),
      glyph: img$j
    }))
  );
};

var img$k = {id: "PTniZV8-celIbsvsK7kHJ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.384 8l6.33-6.328a.976.976 0 0 0 0-1.382.974.974 0 0 0-1.382 0L8 6.616 1.668.287a.974.974 0 0 0-1.381 0 .976.976 0 0 0 0 1.382L6.617 8l-6.33 6.33a.976.976 0 0 0 .69 1.668c.251 0 .5-.094.691-.285L8 9.382l6.332 6.332a.97.97 0 0 0 .69.286.976.976 0 0 0 .69-1.668L9.385 8.001z\"/></svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$g =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:#000;");
var IconClose = function IconClose(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$g, className),
      glyph: img$k,
      onClick: onClick
    })
  );
};

var img$l = {id: "dFxywDuQPWe7G2_ZguqJY", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$h =
/*#__PURE__*/
emotion.css("width:14px;height:14px;fill:#fff;");
var IconCluster = function IconCluster(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$h, className),
      glyph: img$l
    }))
  );
};

var img$m = {id: "_aFIWr7ThjcCrKmntYEEd", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$i =
/*#__PURE__*/
emotion.css("fill:#fff;");
var IconCode = function IconCode(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$i, className),
      glyph: img$m
    })
  );
};

var img$n = {id: "5O5OpYa35BS9toPly-0zW", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$j =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary65, ";");
var IconCreateFile = function IconCreateFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$j, className),
      glyph: img$n,
      onClick: onClick
    })
  );
};

var img$o = {id: "JqW7GcWgnEecM9CuMvf6e", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$k =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary65, ";");
var IconCreateFolder = function IconCreateFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$k, className),
      glyph: img$o,
      onClick: onClick
    })
  );
};

var img$p = {id: "6e2ONr71_vFDCg21q941g", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$l =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentDanger65, ";");
var IconDelete = function IconDelete(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$l, className),
      glyph: img$p,
      onClick: onClick
    })
  );
};

var img$q = {id: "hOdtBljIku0YCYuQr3g47", content: "<svg width=\"35\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\"/><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\"/></g></svg>", viewbox: "0 0 35 35", viewBox: "0 0 35 35" };

var styles$m =
/*#__PURE__*/
emotion.css("width:36px;height:36px;");
var IconDocumentCode = function IconDocumentCode(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$m, className),
      glyph: img$q
    }))
  );
};

var img$r = {id: "Jy7m2vnK7XJtirNVg81Z6", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\n    <path d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\"/>\n</svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$n =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary, ";");
var IconDownload = function IconDownload(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$n, className),
      glyph: img$r,
      onClick: onClick
    })
  );
};

var img$s = {id: "f6n7lR1i1EKK-ft1-U8qE", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$o =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary65, ";");
var IconEdit = function IconEdit(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$o, className),
      glyph: img$s,
      onClick: onClick
    })
  );
};

var img$t = {id: "N41DVVDCgYjjgeIhu_M5q", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3837 8.3204a.5.5 0 10-.7677-.6408C11.7352 8.7348 10.0268 9.5 7.9999 9.5c-2.027 0-3.7354-.7652-4.6162-1.8204a.5.5 0 10-.7677.6408c.2512.301.5485.577.884.824V10a.5.5 0 001 0v-.2589c.3151.1512.6497.282 1 .3904V11a.5.5 0 001 0v-.6285a8.6184 8.6184 0 001.0002.1145L7.5 10.5v1a.5.5 0 001 0v-1l-.0002-.014A8.6406 8.6406 0 009.5 10.3714V11a.5.5 0 001 0v-.8686a7.3096 7.3096 0 001-.3904V10a.5.5 0 101 0v-.8559c.3354-.2469.6325-.5228.8837-.8237z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$p =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";");
var IconEyeClosed = function IconEyeClosed(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$p, className),
      glyph: img$t,
      onClick: onClick
    })
  );
};

var img$u = {id: "PRkv-W0ESvGr7gynWjMgu", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\".65\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8738 7.5137a.9998.9998 0 010 .9726C12.7132 10.5718 10.5272 12 8 12c-2.5273 0-4.7133-1.4282-5.8739-3.5137a1 1 0 010-.9726C3.2867 5.4282 5.4727 4 8 4c2.5272 0 4.7132 1.4282 5.8738 3.5137zM8 5c2.1365 0 4.0019 1.2066 5 3-.9981 1.7934-2.8635 3-5 3-2.1366 0-4.002-1.2066-5-3 .998-1.7934 2.8634-3 5-3zm1 3c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1zm1 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$q =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";");
var IconEyeOpened = function IconEyeOpened(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$q, className),
      glyph: img$u,
      onClick: onClick
    })
  );
};

var img$v = {id: "aCw5sF4lcO7G7maDzM1Kt", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$r =
/*#__PURE__*/
emotion.css("fill:", colors.dark65, ";");
var IconFile = function IconFile(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$r, className),
      glyph: img$v,
      onClick: onClick
    })
  );
};

var img$w = {id: "kA80nK0ijr_3cx4DRaha1", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var img$x = {id: "L-5KD0eqwOnYYnm70wUUe", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$s =
/*#__PURE__*/
emotion.css("fill:", colors.dark65, ";");
var IconFolder = function IconFolder(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      opened = _ref.opened;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$s, className),
      glyph: opened ? img$x : img$w,
      onClick: onClick
    })
  );
};
var IconFolderOpened = function IconFolderOpened(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconFolder, Object.assign({}, props, {
      opened: true
    }))
  );
};

var img$y = {id: "U9nkiumY9GaV8mzQGhH30", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\"/></svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$t =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary, ";");
var IconGear = function IconGear(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$t, className),
      glyph: img$y
    })
  );
};

var img$z = {id: "GOChllBIa2AEneCpmzvIN", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$u =
/*#__PURE__*/
emotion.css("width:14px;height:14px;fill:", colors.intentDanger, ";");
var IconGeoPin = function IconGeoPin(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$u, className),
      glyph: img$z
    }))
  );
};

var img$A = {id: "ZXsUDSdDQG5vqED1zoS4m", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\n    <path d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\"/>\n</svg>\n", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$v =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary, ";");
var IconInfo = function IconInfo(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$v, className),
      glyph: img$A
    })
  );
};

var img$B = {id: "f7ryiCVSUMG-LZpLS27ht", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$w =
/*#__PURE__*/
emotion.css("width:14px;height:14px;fill:", colors.dark65, ";");
var IconLink = function IconLink(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$w, className),
      glyph: img$B
    })
  );
};

var img$C = {id: "bkFN9WpORTsnE0MrBzzLn", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"2\" cy=\"8\" r=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"2\"/><circle cx=\"14\" cy=\"8\" r=\"2\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$x =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.dark65, ";");
var IconMore = function IconMore(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$x, className),
      glyph: img$C
    })
  );
};

var img$D = {id: "4i2Ss-CF01qICEntc8FhE", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".65\"><path d=\"M2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/></g><rect x=\"5\" y=\"2\" width=\"9\" height=\"2\" rx=\"1\"/><rect x=\"5\" y=\"7\" width=\"9\" height=\"2\" rx=\"1\"/><rect x=\"5\" y=\"12\" width=\"9\" height=\"2\" rx=\"1\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$y =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary65, ";");
var IconMoreBurger = function IconMoreBurger(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$y, className),
      glyph: img$D
    })
  );
};

var img$E = {id: "jn-gHg517nhkv9CG5XFcz", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$z =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary65, ";");
var IconNewWindow = function IconNewWindow(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$z, className),
      glyph: img$E
    })
  );
};

var img$F = {id: "xqiHCNN1WAH9qq_cyYVKW", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\"/>\n</svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$A =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentSuccess, ";");
var IconOk = function IconOk(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$A, className),
      glyph: img$F
    }))
  );
};

var img$G = {id: "VEZ-tg0MzgGh6ufgNDtai", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$H = {id: "aSgoY5-sequG9il6zFkPr", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$I = {id: "hN-BUx5W6ZqIglvODW4zr", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var img$J = {id: "izQAK1XsPSGWJ_0j1UlT2", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\"/><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var CHECKED$1 = 1;
var DISABLED$1 = 2;
var states$1 = [img$G, img$H, img$I, img$J];
var styles$B =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";stroke:", colors.intentPrimary, ";");
var stylesDisabled$1 =
/*#__PURE__*/
emotion.css("fill:", colors.intentPrimaryDisabled, ";stroke:", colors.intentPrimaryDisabled, ";");
var IconRadio = function IconRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled;
  var mask = (disabled ? DISABLED$1 : 0) + (checked ? CHECKED$1 : 0);
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$B, _defineProperty({}, stylesDisabled$1, disabled), className),
      glyph: states$1[mask]
    })
  );
};
var IconRadioChecked = function IconRadioChecked(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconRadio, Object.assign({}, props, {
      checked: true
    }))
  );
};
var IconRadioDisabled = function IconRadioDisabled(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconRadio, Object.assign({}, props, {
      disabled: true
    }))
  );
};
var IconRadioCheckedDisabled = function IconRadioCheckedDisabled(props) {
  return (
    /*#__PURE__*/
    React.createElement(IconRadio, Object.assign({}, props, {
      checked: true,
      disabled: true
    }))
  );
};

var img$K = {id: "VVAMTh6tzwmefcAWSKwsg", content: "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\"/></svg>", viewbox: "0 0 12 12", viewBox: "0 0 12 12" };

var styles$C =
/*#__PURE__*/
emotion.css("width:12px;height:12px;fill:", colors.intentPrimary45, ";");
var IconRefresh = function IconRefresh(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$C, className),
      glyph: img$K
    })
  );
};

var img$L = {id: "A-RnNWyo80T-cREmEySHD", content: "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\"/></svg>", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$D =
/*#__PURE__*/
emotion.css("fill:#fff;");
var IconSchema = function IconSchema(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$D, className),
      glyph: img$L
    })
  );
};

var img$M = {id: "Y8371kr80PDwy_vQwWVuS", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$E =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.dark25, ";");
var IconSearch = function IconSearch(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$E, className),
      glyph: img$M
    })
  );
};

var img$N = {id: "wmRqhhXDmGYMNZJHEXdnq", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"3\" width=\"16\" height=\"2\" rx=\"1\" /><rect y=\"7\" width=\"11\" height=\"2\" rx=\"1\" /><rect y=\"11\" width=\"7\" height=\"2\" rx=\"1\" /></svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$F = {
  icon:
  /*#__PURE__*/
  emotion.css("width:16px;height:16px;fill:", colors.dark65, ";"),
  asc:
  /*#__PURE__*/
  emotion.css("transform:rotateX(180deg);")
};
var IconSortableDesc = function IconSortableDesc(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$F.icon, className),
      glyph: img$N
    })
  );
};
var IconSortableAsc = function IconSortableAsc(_ref2) {
  var className = _ref2.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$F.icon, styles$F.asc, className),
      glyph: img$N
    })
  );
};

var img$O = {id: "cilzKt-m9zHJQjcgCPRbw", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" width=\"64\" height=\"64\" viewBox=\"0 0 128 128\"><g><circle cx=\"16\" cy=\"64\" r=\"16\"/><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\"/><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\"/></g></svg>", viewbox: "0 0 128 128", viewBox: "0 0 128 128" };

var styles$G =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconSpinner = function IconSpinner(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$G, className),
      glyph: img$O
    })
  );
};

var img$P = {id: "fiZeHURsmBnT8qaByu0jM", content: "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\"/><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\"/></svg>", viewbox: "0 0 24 24", viewBox: "0 0 24 24" };

var styles$H =
/*#__PURE__*/
emotion.css("width:24px;height:24px;");
var IconUser = function IconUser(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$H, className),
      glyph: img$P
    }))
  );
};

var img$Q = {id: "J6PmzEycFDmEiVSaYoL31", content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\"/>\n</svg>\n", viewbox: "0 0 14 14", viewBox: "0 0 14 14" };

var styles$I =
/*#__PURE__*/
emotion.css("width:14px;height:14px;fill:#fff;");
var IconUsers = function IconUsers(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$I, className),
      glyph: img$Q
    }))
  );
};

var img$R = {id: "kDlciShlFzJNmJM8ix-xe", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.4776 5.30071C12.0871 4.91018 11.4539 4.91018 11.0634 5.30071L7.17529 9.18881L5.28718 7.30071C4.89666 6.91018 4.2635 6.91018 3.87297 7.30071C3.48245 7.69123 3.48245 8.3244 3.87297 8.71492L6.22966 11.0716C6.48604 11.328 6.84699 11.4161 7.17521 11.3358C7.50346 11.4161 7.86448 11.3281 8.12089 11.0716L12.4776 6.71492C12.8681 6.3244 12.8681 5.69123 12.4776 5.30071Z\" fill=\"white\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$J =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentSuccess, ";");
var IconSuccess = function IconSuccess(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$J, className),
      glyph: img$R
    }))
  );
};

var img$S = {id: "kcMfOir1ujQ-KjjEKNbt7", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\"/>\n<circle cx=\"8.02079\" cy=\"11.9685\" r=\"1.32987\" fill=\"white\"/>\n<rect x=\"6.69092\" y=\"2.66016\" width=\"2.65974\" height=\"6.64935\" rx=\"1.32987\" fill=\"white\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$K =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentDanger, ";");
var IconFailed = function IconFailed(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$K, className),
      glyph: img$S
    }))
  );
};

var img$T = {id: "ol2azYs4I1fSGxOEhQlum", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 4L12 8L5 12V4Z\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$L =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconPlay = function IconPlay(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$L, className),
      glyph: img$T
    }))
  );
};

var img$U = {id: "PsCTSeLulaaM1VdHaOeI7", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$M =
/*#__PURE__*/
emotion.css("width:16px;height:16px;");
var IconStop = function IconStop(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$M, className),
      glyph: img$U
    }))
  );
};

var img$V = {id: "REtY2PrINEzw1Dp5UdcEw", content: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.71743 6.94604C7.80755 6.92194 7.90228 6.90909 8 6.90909C8.60249 6.90909 9.09091 7.39751 9.09091 8C9.09091 8.60249 8.60249 9.09091 8 9.09091C7.39751 9.09091 6.90909 8.60249 6.90909 8C6.90909 7.90228 6.92194 7.80755 6.94604 7.71743L4.88703 5.65842L5.65842 4.88703L7.71743 6.94604ZM8.54545 3.12087V5.27273H7.45455V2H8C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 6.38359 2.64289 4.86766 3.76532 3.74941L4.53527 4.52224C3.61627 5.43782 3.09091 6.6766 3.09091 8C3.09091 10.7112 5.28878 12.9091 8 12.9091C10.7112 12.9091 12.9091 10.7112 12.9091 8C12.9091 5.47315 11 3.3922 8.54545 3.12087Z\" fill-opacity=\"0.65\"/>\n</svg>\n", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$N =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";");
var IconTask = function IconTask(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$N, className),
      glyph: img$V
    }))
  );
};

var img$W = {id: "F2spgCotxV0vEZWUcdaYJ", content: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 1a6.96 6.96 0 0 1 4.95 2.05 6.963 6.963 0 0 1 1.5 2.225c.366.864.55 1.78.55 2.725a6.958 6.958 0 0 1-2.05 4.95 6.962 6.962 0 0 1-2.225 1.5c-.864.366-1.78.55-2.725.55a6.958 6.958 0 0 1-4.95-2.05 6.963 6.963 0 0 1-1.5-2.225A6.946 6.946 0 0 1 1 8a6.96 6.96 0 0 1 2.05-4.95 6.964 6.964 0 0 1 2.225-1.5A6.946 6.946 0 0 1 8 1z\"/><path d=\"M4 9a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H4z\" fill=\"#fff\"/></svg>", viewbox: "0 0 16 16", viewBox: "0 0 16 16" };

var styles$O =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentWarning, ";");
var IconStopped = function IconStopped(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$O, className),
      glyph: img$W
    }))
  );
};

var img$X = {id: "v5BeAnn2yuKGcryG4mDun", content: "<svg width=\"12\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.64 2c.068-.126.165-.258.3-.383C4.276 1.305 4.894 1 6 1s1.724.305 2.06.617c.135.125.232.257.3.383H3.64zM2.57 2c.1-.368.315-.77.69-1.117C3.824.361 4.706 0 6 0c1.294 0 2.176.361 2.74.883.375.347.59.749.69 1.117h1.37c.663 0 1.2.542 1.2 1.21v1.211c0 .669-.537 1.21-1.2 1.21h-.048L10.2 12.29c0 .668-.537 1.21-1.2 1.21H3c-.663 0-1.2-.542-1.198-1.16l-.554-6.708H1.2c-.663 0-1.2-.542-1.2-1.21V3.21C0 2.542.537 2 1.2 2h1.37zM1.2 3.21h9.6v1.211H1.2v-1.21zM3 12.29l-.548-6.658h1.123l.832 6.658H3zm1.583-6.658l.832 6.658h1.17l.832-6.658H4.583zM9 12.29H7.593l.832-6.658h1.123l-.546 6.607-.002.05z\"/></svg>", viewbox: "0 0 12 14", viewBox: "0 0 12 14" };

var styles$P =
/*#__PURE__*/
emotion.css("width:16px;height:16px;fill:", colors.intentPrimary, ";");
var IconTrash = function IconTrash(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return (
    /*#__PURE__*/
    React.createElement(Icon, Object.assign({}, props, {
      className: emotion.cx(styles$P, className),
      glyph: img$X
    }))
  );
};

var styles$Q = {
  button:
  /*#__PURE__*/
  styled.css("border:none;border-radius:4px;box-sizing:border-box;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;transition-timing-function:ease-in-out;transition-duration:0.07s;transition-property:background-color,color;outline:none;cursor:pointer;-webkit-font-smoothing:antialiased;&:hover,&:focus,&:active{transition-property:background-color,color,box-shadow;}&:disabled,&:disabled:active,&:disabled:hover{cursor:default;}"),
  icon:
  /*#__PURE__*/
  styled.css("width:16px;height:16px;margin-bottom:2px;"),
  iconMargin:
  /*#__PURE__*/
  styled.css("margin-right:8px;"),
  iconRightMargin:
  /*#__PURE__*/
  styled.css("margin-left:8px;"),
  loading:
  /*#__PURE__*/
  styled.css("position:relative;color:rgba(0,0,0,0);transition:none;&:hover,&:focus,&:active{cursor:default;color:rgba(0,0,0,0);}& > *,&:hover > *,&:active > *,&:focus > *{visibility:hidden;}& > *:last-child{visibility:visible;}"),
  loadingWrap:
  /*#__PURE__*/
  styled.css("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;"),
  l:
  /*#__PURE__*/
  styled.css("padding:9px 20px;"),
  m:
  /*#__PURE__*/
  styled.css("padding:5px 16px;"),
  s:
  /*#__PURE__*/
  styled.css("padding:1px 16px;"),
  xs:
  /*#__PURE__*/
  styled.css("padding:1px 9px;line-height:18px;font-size:12px;"),
  iconicM:
  /*#__PURE__*/
  styled.css("padding:5px 8px;"),
  iconicS:
  /*#__PURE__*/
  styled.css("padding:1px 4px;")
};
var intentStyles = {
  base:
  /*#__PURE__*/
  styled.css("background-color:white;color:", colors.dark65, ";box-shadow:inset 0 0 0 1px ", colors.baseBg, ";&:disabled,&:disabled:active,&:disabled:hover{color:", colors.intentBase, ";background-color:", colors.intentBaseActive, ";box-shadow:inset 0 0 0 1px ", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}"),
  dark:
  /*#__PURE__*/
  styled.css("background-color:", colors.dark40, ";color:#ffffff;&:disabled,&:disabled:active,&:disabled:hover{color:", colors.intentBase, ";background-color:", colors.intentBaseActive, ";}& svg{fill:#ffffff;}&:disabled svg{fill:", colors.intentBase, ";}"),
  primary:
  /*#__PURE__*/
  styled.css("background-color:", colors.intentPrimary, ";color:#ffffff;&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentPrimary50, ";color:#ffffff;}& svg{fill:#ffffff;}&:disabled svg{fill:#ffffff;}"),
  secondary:
  /*#__PURE__*/
  styled.css("background-color:", colors.dark10, ";color:", colors.dark65, ";&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentBaseActive, ";color:", colors.intentBase, ";box-shadow:inset 0 0 0 1px ", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}"),
  plain:
  /*#__PURE__*/
  styled.css("background-color:transparent;color:", colors.dark65, ";&:disabled,&:disabled:active,&:disabled:hover{background-color:", colors.intentBaseActive, ";color:", colors.intentBase, ";}& svg{fill:", colors.dark65, ";}&:disabled svg{fill:", colors.intentBase, ";}")
};
var intentActiveStyles = {
  base:
  /*#__PURE__*/
  styled.css("&:focus,&:hover{background-color:", colors.dark10, ";box-shadow:none;}&:active{background-color:", colors.dark10, ";box-shadow:inset 0 4px 0 rgba(4,11,29,0.1);}"),
  dark:
  /*#__PURE__*/
  styled.css("&:focus,&:hover{background-color:", colors.dark60, ";}&:active{background-color:", colors.dark60, ";box-shadow:inset 0 4px 0 rgba(4,11,29,0.1);}"),
  primary:
  /*#__PURE__*/
  styled.css("&:focus,&:hover{background-color:", colors.activeAction, ";}&:active{background-color:", colors.activeAction, ";box-shadow:inset 0 4px 0 rgba(4,11,29,0.1);}"),
  secondary:
  /*#__PURE__*/
  styled.css("&:focus,&:hover{background-color:", colors.dark25, ";}&:active{background-color:", colors.dark25, ";box-shadow:inset 0 4px 0 rgba(4,11,29,0.1);}"),
  plain:
  /*#__PURE__*/
  styled.css("&:focus,&:hover{background-color:", colors.dark10, ";}")
};
var Button = React.forwardRef(function (_ref, ref) {
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
      props = _objectWithoutProperties(_ref, ["autoFocus", "className", "children", "disabled", "icon", "iconRight", "intent", "onClick", "loading", "size", "text", "title", "type"]);

  var isOnlyIcon = Icon && !children && !text;
  var content = [];

  if (Icon) {
    content.push(
    /*#__PURE__*/
    React.createElement(Icon, {
      className: styled.cx(styles$Q.icon, _defineProperty({}, styles$Q.iconMargin, !isOnlyIcon))
    }));
  }

  content.push(children || text);

  if (IconRight && !isOnlyIcon) {
    content.push(
    /*#__PURE__*/
    React.createElement(IconRight, {
      className: styled.cx(styles$Q.icon, styles$Q.iconRightMargin)
    }));
  }

  if (loading && !disabled) {
    content.push(
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$Q.loadingWrap
    },
    /*#__PURE__*/
    React.createElement(IconSpinner, null)));
  }

  return (
    /*#__PURE__*/
    React.createElement("button", Object.assign({}, props, {
      autoFocus: autoFocus,
      className: styled.cx(styles$Q.button, (_cx2 = {}, _defineProperty(_cx2, styles$Q.iconicM, isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$Q.iconicS, isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$Q.l, size === 'l'), _defineProperty(_cx2, styles$Q.m, !isOnlyIcon && size === 'm'), _defineProperty(_cx2, styles$Q.s, !isOnlyIcon && size === 's'), _defineProperty(_cx2, styles$Q.xs, size === 'xs'), _defineProperty(_cx2, intentActiveStyles[intent], !loading && !disabled), _cx2), intentStyles[intent], _defineProperty({}, styles$Q.loading, loading && !disabled), className),
      disabled: disabled,
      onClick: onClick,
      title: title,
      type: type,
      ref: ref
    }), content)
  );
});

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
  return track || colors.scrollbar;
}, " !important;border-radius:7px !important;");
var Thumb =
/*#__PURE__*/
styled__default("div", {
  target: "e1gokkyi2"
})("background:", function (_ref2) {
  var thumb = _ref2.thumb;
  return thumb || colors.activeAction;
}, " !important;");
var trackYProps = {
  renderer: function renderer(props) {
    var elementRef = props.elementRef,
        style = props.style,
        rest = _objectWithoutProperties(props, ["elementRef", "style"]);

    return (
      /*#__PURE__*/
      React.createElement(Track, Object.assign({}, rest, {
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
      React.createElement(Thumb, Object.assign({}, rest, {
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
      React.createElement("div", Object.assign({}, rest, {
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
      React.createElement("div", Object.assign({}, rest, {
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
    React.createElement(ScrollWrapper, {
      className: className
    },
    /*#__PURE__*/
    React.createElement(ReactScroll, {
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

var styles$R = {
  popover:
  /*#__PURE__*/
  emotion.css("position:absolute;left:0;max-width:70%;max-height:100%;padding:8px 0;overflow:hidden;border-radius:4px;box-shadow:0 5px 20px 0 rgba(0,0,0,0.09);border:solid 1px ", colors.intentBaseBg, ";background-color:#ffffff;z-index:", zIndex.dropdownMenu, ";box-sizing:border-box;user-select:none;outline:none;&::-moz-focus-inner{border:0;}"),
  popoverScrollable:
  /*#__PURE__*/
  emotion.css("height:100%;"),
  scrollable:
  /*#__PURE__*/
  emotion.css("height:100%;")
};
var DropdownPopover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownPopover, _React$Component);

  function DropdownPopover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownPopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      var innerRef = this.props.innerRef;
      innerRef.current && innerRef.current.focus();
    }
  }, {
    key: "isFocusInside",
    value: function isFocusInside() {
      var focused = document.activeElement;
      var innerRef = this.props.innerRef;
      return innerRef && innerRef.current && (innerRef.current.contains(focused) || innerRef.current === focused);
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
      if (!this.isFocusInside()) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef,
          items = _this$props2.items,
          useScroll = _this$props2.useScroll,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          onMouseDown = _this$props2.onMouseDown;
      var ScrollableWrap = useScroll ? function (_ref) {
        var children = _ref.children;
        return (
          /*#__PURE__*/
          React.createElement(Scrollbar, {
            className: styles$R.scrollable
          }, children)
        );
      } : function (_ref2) {
        var children = _ref2.children;
        return (
          /*#__PURE__*/
          React.createElement(React.Fragment, null, children)
        );
      };
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$R.popover, _defineProperty({}, styles$R.popoverScrollable, useScroll), className),
          onClick: onClick,
          onMouseDown: onMouseDown,
          onKeyDownCapture: this.handleKeyDown,
          style: style,
          ref: innerRef,
          tabIndex: 0
        },
        /*#__PURE__*/
        React.createElement(ScrollableWrap, null, items))
      );
    }
  }]);

  return DropdownPopover;
}(React.Component);
var DropdownPopoverWithRef = React.forwardRef(function (props, ref) {
  return (
    /*#__PURE__*/
    React.createElement(DropdownPopover, Object.assign({}, props, {
      innerRef: ref
    }))
  );
});

var SCROLLBAR_WIDTH = 28;
var popoverCloseKeyCodes = [9, 13, 27];

var focusFirstInteractiveElement = function focusFirstInteractiveElement(containerEl) {
  var firstInteractiveElement = containerEl && containerEl.querySelector(INTERACTIVE_ELEMENT_SELECTOR);

  if (firstInteractiveElement) {
    firstInteractiveElement.focus();
  } else if (containerEl) {
    containerEl.focus();
  }
};

var withDropdown = function withDropdown(Component) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Dropdown, _React$PureComponent);

    function Dropdown() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.popoverRef = React.createRef();
      _this.wrapperRef = React.createRef();
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

      _this.throttledRecalcPosition = lodash.throttle(_this.recalcPosition, 16);

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
        if (popoverCloseKeyCodes.includes(event.keyCode)) {
          _this.toggleDropdown();

          _this.wrapperRef.current && focusFirstInteractiveElement(_this.wrapperRef.current);
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
        var popoverClassName = _this.props.popoverClassName;
        var _this$state = _this.state,
            left = _this$state.left,
            top = _this$state.top,
            useScroll = _this$state.useScroll;

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            wrapperRef = _assertThisInitialize2.wrapperRef;

        var minWidth = wrapperRef && wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;
        return (
          /*#__PURE__*/
          React.createElement(DropdownPopoverWithRef, {
            className: popoverClassName,
            items: _this.props.items,
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
          })
        );
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
          return ReactDOM.createPortal(this.renderPopover(), body);
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            items = _this$props.items,
            props = _objectWithoutProperties(_this$props, ["className", "items"]);

        var isOpen = this.state.isOpen;
        return (
          /*#__PURE__*/
          React.createElement(React.Fragment, null,
          /*#__PURE__*/
          React.createElement(Component, Object.assign({}, props, {
            className: className,
            onClick: this.handleClick,
            ref: this.wrapperRef
          })), isOpen && items && this.renderPortal())
        );
      }
    }]);

    return Dropdown;
  }(React.PureComponent), _temp;
};

var styles$S = {
  wrap:
  /*#__PURE__*/
  emotion.css("position:relative;display:inline-block;")
};
var Dropdown = withDropdown(React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ?
  /*#__PURE__*/
  React.createElement(Button, {
    icon: IconMore,
    intent: "base"
  }) : _ref$children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return (
    /*#__PURE__*/
    React.createElement("div", Object.assign({
      className: emotion.cx(styles$S.wrap, className)
    }, props, {
      ref: ref
    }), children)
  );
}));

var styles$T = {
  divider:
  /*#__PURE__*/
  emotion.css("border-bottom:1px solid ", colors.intentBaseBg, ";margin:3px 8px 4px;")
};
var DropdownDivider = function DropdownDivider(_ref) {
  var className = _ref.className;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$T.divider, className),
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    })
  );
};

var defaultListItemColor = 'rgba(0, 0, 0, 0.65)';
var styles$U = {
  item: function item() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultListItemColor;
    return (
      /*#__PURE__*/
      emotion.css("padding:0 16px;line-height:32px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:", color, ";cursor:pointer;&:focus,&:active{background-color:", colors.intentBaseBg, ";color:", color, ";outline:none;}&::-moz-focus-inner{border:0;}")
    );
  }
};
var DropdownItem = function DropdownItem(_ref) {
  var className = _ref.className,
      color = _ref.color,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["className", "color", "onClick"]);

  var keyPressHandler = function keyPressHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      onClick && onClick(e);
    }
  };

  return (
    /*#__PURE__*/
    React.createElement("div", Object.assign({}, props, {
      tabIndex: 0,
      className: emotion.cx(textStyles.basic, styles$U.item(color), className),
      onClick: onClick,
      onKeyDownCapture: keyPressHandler,
      onMouseEnter: function onMouseEnter(e) {
        e.target && e.target.focus();
      }
    }))
  );
};

var styles$V = {
  link:
  /*#__PURE__*/
  emotion.css("color:", emotionRgba.rgba(colors.intentPrimary, 0.65), ";text-decoration:none;&:hover,&:focus{color:", colors.intentPrimary, ";}&:active{color:", colors.activeAction, ";}")
};
var Link = function Link(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick,
      target = _ref.target,
      title = _ref.title,
      variant = _ref.variant;
  var textStyle = variant && textStyles[variant] || null;
  return (
    /*#__PURE__*/
    React.createElement("a", {
      className: emotion.cx(textStyle, styles$V.link, className),
      href: href,
      onClick: onClick,
      target: target,
      title: title
    }, children)
  );
};

var styles$W = {
  breadcrumbElement:
  /*#__PURE__*/
  emotion.css("color:", colors.dark40, ";font-size:16px;line-height:24px;white-space:nowrap;"),
  breadcrumbLinkElement:
  /*#__PURE__*/
  emotion.css("cursor:pointer:color:", colors.dark40, ";&:hover,&:focus,a:link,a:visited,&:active{color:", colors.dark40, ";}&:hover{text-decoration:underline;}")
};

var BreadcrumbsItemComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreadcrumbsItemComponent, _React$Component);

  function BreadcrumbsItemComponent() {
    _classCallCheck(this, BreadcrumbsItemComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbsItemComponent).apply(this, arguments));
  }

  _createClass(BreadcrumbsItemComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          path = _this$props.path,
          onLinkClick = _this$props.onLinkClick;

      if (path && onLinkClick) {
        return (
          /*#__PURE__*/
          React.createElement(Link, {
            href: path,
            onClick: function onClick(e) {
              e.preventDefault();
              onLinkClick(path);
            },
            className: emotion.cx(styles$W.breadcrumbLinkElement, styles$W.breadcrumbElement),
            variant: "basic"
          }, title)
        );
      }

      return (
        /*#__PURE__*/
        React.createElement(Text, {
          tag: "span",
          className: styles$W.breadcrumbElement
        }, title)
      );
    }
  }]);

  return BreadcrumbsItemComponent;
}(React.Component);

var styles$X = {
  breadcrumbs:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:baseline;"),
  breadcrumbElement:
  /*#__PURE__*/
  emotion.css("white-space:nowrap;"),
  breadcrumbsList:
  /*#__PURE__*/
  emotion.css("width:100%;"),
  breadcrumbDelimeter:
  /*#__PURE__*/
  emotion.css("margin:0 6px;color:", colors.dark40, ";font-size:16px;line-height:24px;white-space:nowrap;"),
  appName:
  /*#__PURE__*/
  emotion.css("position:absolute;white-space:nowrap;left:0;top:0;background:#FFFFFF;box-shadow:0px 0px 10px #E6E7E8;border-radius:2px;margin-left:-10px;padding:0 10px;"),
  breadcrumbHoveredElement:
  /*#__PURE__*/
  emotion.css("position:relative;cursor:pointer;"),
  overflowButton:
  /*#__PURE__*/
  emotion.css("cursor:pointer;font-size:16px;line-height:24px;color:#8E9199;&:hover{text-decoration-line:underline;}")
};
var MAX_APP_NAME_LENGTH = 40;
var Breadcrumbs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Breadcrumbs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderOverflow = function (items) {
      var onLinkClick = _this.props.onLinkClick;
      var itemsCollection =
      /*#__PURE__*/
      React.createElement(React.Fragment, null, items.map(function (item) {
        return (
          /*#__PURE__*/
          React.createElement(DropdownItem, {
            onClick: function onClick() {
              return onLinkClick && onLinkClick(item.path);
            }
          }, item.title)
        );
      }));
      return (
        /*#__PURE__*/
        React.createElement(React.Fragment, null,
        /*#__PURE__*/
        React.createElement(Text, {
          tag: "span",
          className: emotion.cx(styles$X.breadcrumbDelimeter, styles$X.breadcrumbElement)
        }, "/"),
        /*#__PURE__*/
        React.createElement(Dropdown, {
          items: itemsCollection
        },
        /*#__PURE__*/
        React.createElement(Text, {
          className: styles$X.overflowButton
        }, "...")))
      );
    };

    _this.renderBreadcrumbWrapper = function (props, index) {
      var onLinkClick = _this.props.onLinkClick;
      return (
        /*#__PURE__*/
        React.createElement(React.Fragment, null,
        /*#__PURE__*/
        React.createElement(Text, {
          tag: "span",
          className: emotion.cx(styles$X.breadcrumbDelimeter, styles$X.breadcrumbElement)
        }, "/"),
        /*#__PURE__*/
        React.createElement(BreadcrumbsItemComponent, {
          key: index,
          title: props.title,
          path: props.path,
          onLinkClick: onLinkClick
        }))
      );
    };

    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          breadcrumbs = _this$props.breadcrumbs,
          appName = _this$props.appName;

      var isLongAppName = function isLongAppName(appName) {
        return appName.length > MAX_APP_NAME_LENGTH;
      };

      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$X.breadcrumbs
        }, appName && (isLongAppName(appName) ?
        /*#__PURE__*/
        React.createElement(AppName, {
          appName: appName
        }) :
        /*#__PURE__*/
        React.createElement(Text, {
          tag: "span",
          className: styles$X.breadcrumbElement,
          variant: "h3"
        }, appName)),
        /*#__PURE__*/
        React.createElement(OverflowList, {
          minVisibleItems: 1,
          items: breadcrumbs,
          className: styles$X.breadcrumbsList,
          overflowRenderer: this.renderOverflow,
          visibleItemRenderer: this.renderBreadcrumbWrapper
        }))
      );
    }
  }]);

  return Breadcrumbs;
}(React.Component);

function AppName(_ref) {
  var appName = _ref.appName;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHover = _React$useState2[0],
      setHover = _React$useState2[1];

  var shoterAppName = function shoterAppName(appName) {
    return appName.length > MAX_APP_NAME_LENGTH ? "".concat(appName.slice(0, MAX_APP_NAME_LENGTH), "...") : appName;
  };

  return (
    /*#__PURE__*/
    React.createElement(Text, {
      tag: "span",
      className: emotion.cx(styles$X.breadcrumbElement, styles$X.breadcrumbHoveredElement),
      variant: "h3",
      onMouseOver: function onMouseOver() {
        return setHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(false);
      }
    }, shoterAppName(appName), isHover &&
    /*#__PURE__*/
    React.createElement(Text, {
      tag: "span",
      className: emotion.cx(styles$X.breadcrumbElement, styles$X.appName),
      variant: "h3"
    }, appName))
  );
}

var styles$Y = {
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
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;& + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(255,255,255,0);border-radius:3px;}&:focus + div::before{border-color:", emotionRgba.rgba(colors.intentPrimary, 0.55), ";}"),
  label:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;cursor:pointer;")
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
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    inputRef.current && (inputRef.current.indeterminate = indeterminate);
  }, [indeterminate]);
  return (
    /*#__PURE__*/
    React.createElement("label", {
      className: emotion.cx(styles$Y.label, className),
      title: title
    },
    /*#__PURE__*/
    React.createElement("input", {
      checked: checked,
      className: styles$Y.input,
      disabled: disabled,
      type: "checkbox",
      onChange: onChange,
      name: name,
      value: value,
      ref: inputRef
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$Y.iconWrap, _defineProperty({}, styles$Y.childrenMargin, children))
    },
    /*#__PURE__*/
    React.createElement(IconCheckbox, {
      className: styles$Y.icon,
      checked: checked,
      indeterminate: indeterminate,
      disabled: disabled
    })), typeof children === 'string' ?
    /*#__PURE__*/
    React.createElement(Text, null, children) : children)
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
emotion.css("color:#f8f8f2;background:none;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;& .token.comment,& .token.prolog,& .token.doctype,& .token.cdata{color:slategray;}& .token.punctuation{color:#f8f8f2;}& .token.namespace{opacity:.7;}& .token.property,& .token.tag,& .token.constant,& .token.symbol,& .token.deleted{color:#f92672;}& .token.boolean,& .token.number{color:#ae81ff;}& .token.selector,& .token.attr-name,& .token.string,& .token.char,& .token.builtin,& .token.inserted{color:#a6e22e;}& .token.operator,& .token.entity,& .token.url,& .language-css .token.string,& .style .token.string,& .token.variable{color:#f8f8f2;}& .token.atrule,& .token.attr-value,& .token.function,& .token.class-name{color:#e6db74;}& .token.keyword{color:#66d9ef;}& .token.regex,& .token.important{color:#fd971f;}& .token.important,& .token.bold{font-weight:bold;}& .token.italic{font-style:italic;}& .token.entity{cursor:help;}");

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
    _this.ref = React.createRef();
    return _this;
  }

  _createClass(CodeBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current) {
        Prism$1.highlightElement(this.ref.current);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.ref.current) {
        Prism$1.highlightElement(this.ref.current);
      }
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
        React.createElement("code", {
          ref: this.ref,
          className: emotion.cx(textStyles.code, theme, _defineProperty({}, "language-".concat(language), language), className)
        }, text)
      );
    }
  }]);

  return CodeBlock;
}(React.Component);
CodeBlock.defaultProps = {
  language: 'javascript'
};

var styles$Z = {
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
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$Z.outer, className)
    }, controls && controls.map(function (control) {
      return control ?
      /*#__PURE__*/
      React.createElement("div", {
        className: emotion.cx(styles$Z.control, _defineProperty({}, styles$Z.thin, thin))
      }, control) : null;
    }))
  );
};

var styles$_ = {
  wrap:
  /*#__PURE__*/
  emotion.css("flex-shrink:0;display:flex;padding:0;margin:20px 0 0;"),
  controls:
  /*#__PURE__*/
  emotion.css("padding-left:16px;margin-left:auto;")
};
var PopupFooter = function PopupFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$_.wrap, className)
    }, children, controls &&
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      className: emotion.cx(styles$_.controls),
      controls: controls,
      thin: true
    }))
  );
};

var styles$$ = {
  modal:
  /*#__PURE__*/
  emotion.css("flex-shrink:0;display:flex;flex-direction:column;padding:30px;margin:0 auto auto;overflow:hidden;"),
  fit:
  /*#__PURE__*/
  emotion.css("flex-shrink:1;height:calc(100vh - 80px);"),
  title:
  /*#__PURE__*/
  emotion.css("flex-shrink:0;padding-right:24px;padding-bottom:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
  closeIcon:
  /*#__PURE__*/
  emotion.css("position:absolute;top:30px;right:30px;fill:", colors.dark40, ";"),
  children:
  /*#__PURE__*/
  emotion.css("flex-grow:1;"),
  childrenThin:
  /*#__PURE__*/
  emotion.css("padding-left:0;padding-right:0;")
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
          thinBorders = _this$props.thinBorders,
          wide = _this$props.wide;
      var Component = onSubmit ? 'form' : 'div';
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1.shim,
          onMouseDown: this.handleOutsideClick
        },
        /*#__PURE__*/
        React.createElement(Component, {
          className: emotion.cx(styles$1.baseModal, styles$$.modal, (_cx = {}, _defineProperty(_cx, styles$$.fit, fit), _defineProperty(_cx, styles$1.wide, wide), _cx), className),
          ref: this.modalRef,
          tabIndex: 0,
          onKeyDown: this.handleEscapePress,
          onSubmit: onSubmit
        },
        /*#__PURE__*/
        React.createElement(Text, {
          className: styles$$.title,
          variant: "h2"
        }, title), onClose &&
        /*#__PURE__*/
        React.createElement(IconClose, {
          className: styles$$.closeIcon,
          onClick: onClose
        }),
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$$.children, _defineProperty({}, styles$$.childrenThin, thinBorders))
        }, loading ? 'Loading' : children), (footerContent || footerControls) &&
        /*#__PURE__*/
        React.createElement(PopupFooter, {
          controls: footerControls
        }, footerContent),
        /*#__PURE__*/
        React.createElement("div", {
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
      confirmText = _props$confirmText === void 0 ? 'Ok' : _props$confirmText,
      confirmPreloader = props.confirmPreloader;
  return (
    /*#__PURE__*/
    React.createElement(Modal, Object.assign({}, props, {
      onClose: onCancel,
      footerControls: [
      /*#__PURE__*/
      React.createElement(Button, {
        intent: "base",
        size: "l",
        onClick: onCancel
      }, "Cancel"),
      /*#__PURE__*/
      React.createElement(Button, {
        intent: "primary",
        size: "l",
        loading: confirmPreloader || false,
        onClick: onConfirm
      }, confirmText)]
    }))
  );
};

var CORNER_HEIGHT = 8;
var styles$10 = {
  tooltip: function tooltip(_ref) {
    var cornerPositionX = _ref.cornerPositionX;
    return (
      /*#__PURE__*/
      emotion.css("position:absolute;z-index:", zIndex.tooltip, ";max-width:400px;padding:5px 16px;color:#ffffff;background:rgba(0,0,0,0.65) !important;border-radius:4px;&::after{content:'';position:absolute;left:calc(", cornerPositionX, "px - 8px);bottom:-", CORNER_HEIGHT, "px;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-top:solid ", CORNER_HEIGHT, "px rgba(0,0,0,0.65);}")
    );
  },
  cornerUp:
  /*#__PURE__*/
  emotion.css("&::after{top:-", CORNER_HEIGHT, "px;bottom:auto;border:solid 0 transparent;border-left:solid ", CORNER_HEIGHT, "px transparent;border-right:solid ", CORNER_HEIGHT, "px transparent;border-bottom:solid ", CORNER_HEIGHT, "px rgba(0,0,0,0.65);}"),
  wrapper:
  /*#__PURE__*/
  emotion.css("cursor:pointer;")
};
var withTooltip = function withTooltip(Component) {
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
      _this.wrapperRef = React.createRef();
      _this.tooltipRef = React.createRef();

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
            return ReactDOM.createPortal(_this.renderTooltip(), root);
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
          React.createElement(React.Fragment, null,
          /*#__PURE__*/
          React.createElement(Component, Object.assign({}, props, {
            className: emotion.cx(styles$10.wrapper, className),
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
          React.createElement("div", {
            className: emotion.cx(textStyles.p, styles$10.tooltip({
              cornerPositionX: cornerPositionX
            }), _defineProperty({}, styles$10.cornerUp, !topPlacement), popoverClassName),
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
  }(React.Component), _class.defaultProps = {
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
    React.createElement(Component, {
      className: emotion.cx(styles$10.wrapper, className),
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
      React.createElement(Component, Object.assign({}, props, {
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
          icon = _this$props.icon,
          tooltipContent = _this$props.tooltipContent,
          tooltipContentCopied = _this$props.tooltipContentCopied,
          content = _this$props.content,
          props = _objectWithoutProperties(_this$props, ["icon", "tooltipContent", "tooltipContentCopied", "content"]);

      var clicked = this.state.clicked;
      return (
        /*#__PURE__*/
        React.createElement(ButtonWithTooltip, Object.assign({}, props, {
          tooltipContent: clicked ? tooltipContentCopied : tooltipContent,
          icon: icon || IconNewWindow,
          onClick: this.handleClick,
          onMouseLeave: this.resetClickedState
        }))
      );
    }
  }]);

  return CopyToClipboard;
}(React.Component);
CopyToClipboard.defaultProps = {
  tooltipContent: 'Copy to clipboard',
  tooltipContentCopied: 'Copied'
};

var styles$11 = {
  indicator:
  /*#__PURE__*/
  emotion.css("display:inline-block;flex-shrink:0;margin:8px;background-color:", colors.intentBaseBg, ";border-radius:50%;"),
  state: {
    bad:
    /*#__PURE__*/
    emotion.css("background-color:", colors.intentDanger, ";"),
    good:
    /*#__PURE__*/
    emotion.css("background-color:", colors.intentSuccess, ";"),
    inactive:
    /*#__PURE__*/
    emotion.css("background-color:", colors.intentBaseBg, ";"),
    middle:
    /*#__PURE__*/
    emotion.css("background-color:", colors.intentWarning, ";")
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
  return (
    /*#__PURE__*/
    React__default.createElement("span", {
      className: emotion.cx(styles$11.indicator, styles$11.state[state], styles$11.size.s, className)
    })
  );
};

var styles$12 = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;"),
  icon:
  /*#__PURE__*/
  emotion.css("width:200px;height:182px;fill:rgba(0,0,0,0.25);"),
  iconMargin:
  /*#__PURE__*/
  emotion.css("margin-bottom:24px;"),
  description:
  /*#__PURE__*/
  emotion.css("margin-bottom:16px;color:rgba(0,0,0,0.65);text-align:center;"),
  title:
  /*#__PURE__*/
  emotion.css("margin-bottom:8px;font-weight:600;color:rgba(0,0,0,0.65);"),
  error:
  /*#__PURE__*/
  emotion.css("color:", colors.intentDanger, ";")
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
    React.createElement("div", {
      className: emotion.cx(styles$12.wrap, className)
    }, image ?
    /*#__PURE__*/
    React.createElement(SVGImage, {
      glyph: image,
      className: emotion.cx(_defineProperty({}, styles$12.iconMargin, title || description))
    }) : null, Icon && !image ?
    /*#__PURE__*/
    React.createElement(Icon, {
      className: emotion.cx(styles$12.icon, _defineProperty({}, styles$12.iconMargin, title || description))
    }) : null, title &&
    /*#__PURE__*/
    React.createElement(Text, {
      variant: "h2",
      className: emotion.cx(styles$12.title, _defineProperty({}, styles$12.error, isError))
    }, title), description &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$12.description
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
    React.createElement(NonIdealState, {
      className: className,
      description: description,
      icon: icon,
      image: image,
      isError: isError,
      title: title
    },
    /*#__PURE__*/
    React.createElement(Button, {
      autoFocus: true,
      text: actionText,
      onClick: onActionClick
    }))
  );
};

var img$Y = {id: "eT6G-WR_PLWRl8ZmPvHcK", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.982 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.352-2.796-3.5271-6.787-3.5271-11.975v-9.942H49.9491v-9.913h82.5079v20.503c0 4.726-1.241 8.495-3.723 11.304-2.482 2.811-6.948 4.216-12.152 4.216-5.682 0-10.947-1.398-13.298-4.193z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6371H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><circle cx=\"130.804\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\"/><circle cx=\"69.6166\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

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
    isError: true,
    image: image || img$Y,
    title: title,
    description: description,
    children: children
  };
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, showDetails &&
    /*#__PURE__*/
    React.createElement(Modal, {
      title: title,
      onClose: onCloseClick,
      footerControls: [
      /*#__PURE__*/
      React.createElement(Button, {
        intent: 'primary',
        onClick: onCloseClick
      }, "Close")]
    }, !!details &&
    /*#__PURE__*/
    React.createElement(Text, {
      tag: "div"
    }, details)), details ?
    /*#__PURE__*/
    React.createElement(NonIdealStateAction, Object.assign({}, commonProps, {
      actionText: "Details",
      onActionClick: function onActionClick() {
        return setShowDetails(true);
      }
    })) :
    /*#__PURE__*/
    React.createElement(NonIdealState, commonProps))
  );
};

var img$Z = {id: "v88Qb4LckSN_ZiseHAqTv", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M122.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.983 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.351-2.795-3.527-6.787-3.527-11.975v-9.942H50.9492v-9.913h82.5078v20.503c0 4.726-1.241 8.495-3.722 11.305-2.482 2.81-6.949 4.215-12.152 4.215-5.683 0-10.948-1.398-13.299-4.193z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.6472 27.3276H182.267v-9.0181H56.6472v9.0181zM19.457 163.966h162.81V45.6372H19.457V163.966zm4.5362-145.871c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266-2.5202 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.0429-4.5265 4.5631-4.5265zm18.7326 0c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.563-2.0266-4.563-4.5266 0-2.4999 2.0429-4.5265 4.563-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.7918 90.408l-9.5528-9.5575 9.551-9.5534-6.3707-6.3632-9.5517 9.5522-9.5503-9.5522-6.3681 6.3632 9.5524 9.5577-9.5524 9.5532 6.3681 6.3684 9.5503-9.5527 9.5552 9.5527 6.369-6.3684zM151.471 90.408l-9.552-9.5575 9.551-9.5534-6.371-6.3632-9.552 9.5522-9.55-9.5522-6.368 6.3632 9.552 9.5577-9.552 9.5532 6.368 6.3684 9.55-9.5527 9.555 9.5527 6.369-6.3684z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

var SplashErrorFatal = function SplashErrorFatal(props) {
  return (
    /*#__PURE__*/
    React.createElement(SplashError, Object.assign({}, props, {
      image: img$Z
    }))
  );
};

var img$_ = {id: "5lmrjti5Z8X381eaa3cIQ", content: "<svg width=\"200\" height=\"182\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6372H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\"/><circle cx=\"99.5366\" cy=\"134.791\" r=\"9.63877\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M147.73 63.6119L71.3617 142.946l-6.41-6.17L141.32 57.4415l6.41 6.1704z\" fill=\"#F5222D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.31 76.3677c-9.932-5.7545-21.468-9.0486-33.7734-9.0486-18.6783 0-35.584 7.5899-47.8011 19.8538l6.2913 6.2914c10.607-10.6538 25.2884-17.2478 41.5098-17.2478 9.8944 0 19.2154 2.4531 27.3884 6.7844l6.385-6.6332zm7.497 5.0415l-6.212 6.4533c2.35 1.758 4.563 3.6884 6.62 5.7723l6.292-6.2915c-2.099-2.1215-4.337-4.1045-6.7-5.9341zm-21.44 9.4433c-6.048-2.7339-12.762-4.2558-19.8304-4.2558-13.355 0-25.4413 5.4322-34.1698 14.2073l6.2914 6.292c7.1184-7.1657 16.9803-11.602 27.8784-11.602 4.6244 0 9.0614.7986 13.1814 2.2654l6.649-6.9069zm1.702 11.0605l6.259-6.5011c2.346 1.6586 4.537 3.5216 6.547 5.5631l-6.291 6.291c-1.97-2.007-4.154-3.803-6.515-5.353zm-15.953 3.744c-1.807-.344-3.672-.524-5.5794-.524-8.2365 0-15.6887 3.357-21.0628 8.778l6.2915 6.292c3.1813-3.221 7.4084-5.407 12.1305-6.007l8.2202-8.539zm2.656 10.071l6.455-6.707c2.413 1.379 4.614 3.086 6.541 5.062l-6.292 6.292c-1.893-1.961-4.167-3.55-6.704-4.647z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 200 182", viewBox: "0 0 200 182" };

var SplashErrorNetwork = function SplashErrorNetwork(props) {
  return (
    /*#__PURE__*/
    React.createElement(SplashError, Object.assign({}, props, {
      title: props.title || 'Network problem',
      image: img$_
    }))
  );
};

var styles$13 = {
  outer:
  /*#__PURE__*/
  emotion.css("padding:8px 0 0;margin:0;list-style:none;"),
  item:
  /*#__PURE__*/
  emotion.css("padding:12px 16px;border:solid 1px #E8E8E8;margin-bottom:8px;border-radius:4px;background-color:#ffffff;transition:0.1s ease-in-out;transition-property:border-color,box-shadow;&:last-child{margin-bottom:0;}&:hover{border-color:", colors.intentBaseBg, ";box-shadow:0px 5px 20px rgba(0,0,0,0.09);}")
};

var FlatListItem = function FlatListItem(_ref) {
  var className = _ref.className,
      item = _ref.item,
      render = _ref.render;
  return (
    /*#__PURE__*/
    React.createElement("li", {
      className: emotion.cx(styles$13.item, className)
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
    React.createElement("ul", {
      className: emotion.cx(styles$13.outer, className)
    }, items && items.map(function (item) {
      return (
        /*#__PURE__*/
        React.createElement(FlatListItem, {
          className: itemClassName,
          item: item,
          key: item[itemKey],
          render: itemRender
        })
      );
    }))
  );
};

var styles$14 = {
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
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$14.input, styles$14.columns[columns - 1], itemClassName)
        }, child)
      );
    }) :
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$14.input, styles$14.columns[columns - 1], itemClassName)
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
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$14.column, styles$14.columns[columns - 1])
        }, group.map(function (child) {
          return (
            /*#__PURE__*/
            React.createElement("div", {
              className: emotion.cx(styles$14.columnInput, itemClassName)
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
    React.createElement("div", {
      className: emotion.cx(styles$14.wrap, className)
    }, renderer(children, columns, itemClassName))
  );
};

var styles$15 = {
  wrap:
  /*#__PURE__*/
  emotion.css("margin-bottom:24px;"),
  tooltip:
  /*#__PURE__*/
  emotion.css("display:inline-block;margin-left:8px;"),
  headingPane:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:row;align-items:baseline;margin-bottom:16px;"),
  subTitle:
  /*#__PURE__*/
  emotion.css("margin-left:32px;"),
  label:
  /*#__PURE__*/
  emotion.css("display:block;"),
  topRightControls:
  /*#__PURE__*/
  emotion.css("margin-left:auto;")
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
    React.createElement("div", {
      className: emotion.cx(styles$15.wrap, className)
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$15.headingPane
    }, label &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$15.label,
      variant: "h4",
      tag: "span"
    }, label, info &&
    /*#__PURE__*/
    React.createElement(Tooltip, {
      className: styles$15.tooltip,
      content: info
    },
    /*#__PURE__*/
    React.createElement(IconInfo, null))), subTitle &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$15.subTitle,
      variant: "p",
      tag: "span"
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      className: styles$15.topRightControls,
      controls: topRightControls
    })),
    /*#__PURE__*/
    React.createElement(InputGroup, {
      columns: columns,
      itemClassName: itemClassName,
      verticalSort: verticalSort
    }, children))
  );
};

var styles$16 = {
  status:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:baseline;flex-basis:153px;color:rgba(0,0,0,0.65);")
};
var HealthStatus = function HealthStatus(_ref) {
  var className = _ref.className,
      defaultMessage = _ref.defaultMessage,
      status = _ref.status,
      message = _ref.message,
      title = _ref.title;
  return (
    /*#__PURE__*/
    React.createElement(Text, {
      className: emotion.cx(styles$16.status, className),
      variant: "p",
      tag: "div",
      title: title
    },
    /*#__PURE__*/
    React.createElement(DotIndicator, {
      state: status === 'healthy' ? 'good' : 'bad'
    }), message || defaultMessage || status)
  );
};

var styles$17 = {
  outer:
  /*#__PURE__*/
  styled.css("display:flex;height:32px;border:solid 1px ", colors.intentBase, ";box-sizing:border-box;border-radius:4px;background-color:#ffffff;"),
  disabled:
  /*#__PURE__*/
  styled.css("background-color:", colors.intentBaseBg, ";"),
  focused:
  /*#__PURE__*/
  styled.css("border-color:rgba(0,0,0,0.26);box-shadow:0px 0px 3px rgba(0,0,0,0.24);"),
  error:
  /*#__PURE__*/
  styled.css("border-color:", colors.intentDanger, ";box-shadow:0px 0px 3px ", emotionRgba.rgba(colors.intentDanger, 0.65), ";"),
  outerWithAddition:
  /*#__PURE__*/
  styled.css("display:flex;"),
  inputWithAddition:
  /*#__PURE__*/
  styled.css("width:auto;flex-grow:1;"),
  input:
  /*#__PURE__*/
  styled.css("display:block;align-self:stretch;width:100%;min-width:0;height:100%;border:0;padding:5px 16px;box-sizing:border-box;border-radius:3px;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;"),
  inputWithIcon:
  /*#__PURE__*/
  styled.css("padding:5px 8px 5px 16px;"),
  iconWrap:
  /*#__PURE__*/
  styled.css("margin-right:7px;display:flex;align-items:center;"),
  withLeftElement:
  /*#__PURE__*/
  styled.css("& >:first-child{align-self:stretch;flex-shrink:0;margin:-1px;border-top-right-radius:0;border-bottom-right-radius:0;}"),
  withRightElement:
  /*#__PURE__*/
  styled.css("& >:last-child{align-self:stretch;flex-shrink:0;margin:-1px;border-top-left-radius:0;border-bottom-left-radius:0;}")
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
    _this.elementRef = React.createRef();
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
          leftElement = _this$props.leftElement,
          rightElement = _this$props.rightElement,
          props = _objectWithoutProperties(_this$props, ["autoComplete", "autoFocus", "className", "onClearClick", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "disabled", "error", "name", "onChange", "readOnly", "rightIcon", "title", "type", "value", "placeholder", "leftElement", "rightElement"]);

      var focused = this.state.focused;
      var hasAddition = !!leftElement || !!rightElement;
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styled.cx(styles$17.outer, (_cx = {}, _defineProperty(_cx, styles$17.disabled, disabled), _defineProperty(_cx, styles$17.focused, focused), _defineProperty(_cx, styles$17.error, error), _defineProperty(_cx, styles$17.outerWithAddition, hasAddition), _defineProperty(_cx, styles$17.withLeftElement, !!leftElement), _defineProperty(_cx, styles$17.withRightElement, !!rightElement), _cx), className),
          title: title
        }, leftElement,
        /*#__PURE__*/
        React.createElement("input", Object.assign({}, props, {
          autoFocus: autoFocus,
          autoComplete: autoComplete,
          className: styled.cx(styles$17.input, (_cx2 = {}, _defineProperty(_cx2, styles$17.inputWithAddition, hasAddition), _defineProperty(_cx2, styles$17.inputWithIcon, rightIcon || onClearClick), _cx2)),
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
        React.createElement("div", {
          className: styles$17.iconWrap
        }, onClearClick && (!rightIcon || value) ?
        /*#__PURE__*/
        React.createElement(IconCancel, {
          onClick: !(disabled || readOnly) && this.handleClearClick || noop
        }) : rightIcon), rightElement)
      );
    }
  }]);

  return Input;
}(React.Component);

var styles$18 = {
  innerButton:
  /*#__PURE__*/
  emotion.css("padding:0;"),
  icon:
  /*#__PURE__*/
  emotion.css("display:block;")
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
        React.createElement(Input, Object.assign({}, this.props, {
          type: hidden ? 'password' : 'text',
          rightIcon:
          /*#__PURE__*/
          React.createElement(Button, {
            className: styles$18.innerButton,
            size: "xs",
            intent: "plain",
            onClick: this.toggleState
          },
          /*#__PURE__*/
          React.createElement(Icon, {
            className: styles$18.icon
          }))
        }))
      );
    }
  }]);

  return InputPassword;
}(React.Component);

var styles$19 = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:block;margin-bottom:4px;"),
  tooltip:
  /*#__PURE__*/
  emotion.css("display:inline-block;margin-left:8px;"),
  headingPane:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:row;align-items:baseline;margin-bottom:8px;"),
  subTitle:
  /*#__PURE__*/
  emotion.css("margin-left:32px;"),
  label:
  /*#__PURE__*/
  emotion.css("display:block;"),
  topRightControls:
  /*#__PURE__*/
  emotion.css("margin-left:auto;"),
  input:
  /*#__PURE__*/
  emotion.css("margin-bottom:4px;"),
  message:
  /*#__PURE__*/
  emotion.css("display:block;min-height:20px;"),
  errorMessage:
  /*#__PURE__*/
  emotion.css("color:", colors.intentDanger, ";")
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
    React.createElement("label", {
      className: emotion.cx(styles$19.wrap, className)
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$19.headingPane
    },
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$19.label,
      variant: "h4",
      tag: "span"
    }, label, !!info &&
    /*#__PURE__*/
    React.createElement(Tooltip, {
      className: styles$19.tooltip,
      content: info
    },
    /*#__PURE__*/
    React.createElement(IconInfo, null))), !!subTitle &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$19.subTitle,
      variant: "p",
      tag: "span"
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      className: styles$19.topRightControls,
      controls: topRightControls
    })),
    /*#__PURE__*/
    React.createElement(InputComponent, Object.assign({}, restProps, {
      error: error,
      className: emotion.cx(styles$19.input, inputClassName)
    })),
    /*#__PURE__*/
    React.createElement(Text, {
      variant: "p",
      className: emotion.cx(styles$19.message, _defineProperty({}, styles$19.errorMessage, error))
    }, message))
  );
};

var img$$ = {id: "GXKb2WBGW4bnN53skREa2", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#010101\" fill-opacity=\".45\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var img$10 = {id: "t59o1gw9U9eK5uQbS5IaT", content: "<svg width=\"14\" height=\"59\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\"/><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\"/></svg>", viewbox: "0 0 14 59", viewBox: "0 0 14 59" };

var styles$1a = {
  wrap:
  /*#__PURE__*/
  emotion.css("position:relative;width:14px;height:17px;overflow:hidden;transition:height 0.3s ease-in-out;&:hover{height:59px;}"),
  flag:
  /*#__PURE__*/
  emotion.css("position:absolute;left:0;bottom:0;")
};
var intentions = {
  good:
  /*#__PURE__*/
  emotion.css("fill:", colors.intentSuccessBorder, ";"),
  bad:
  /*#__PURE__*/
  emotion.css("fill:", colors.intentDanger, ";"),
  warning:
  /*#__PURE__*/
  emotion.css("fill:", colors.intentWarning, ";")
};
var LeaderFlag = function LeaderFlag(_ref) {
  var className = _ref.className,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'bad' : _ref$state,
      title = _ref.title;
  var glyph = state === 'bad' ? img$10 : img$$;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1a.wrap, className),
      title: title
    },
    /*#__PURE__*/
    React.createElement(SVGImage, {
      glyph: glyph,
      className: emotion.cx(styles$1a.flag, intentions[state])
    }))
  );
};

var img$11 = {id: "0RPsPwuYUE76NM7S18VDs", content: "<svg width=\"42\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\"/></svg>", viewbox: "0 0 42 8", viewBox: "0 0 42 8" };

var LeaderFlagSmall = function LeaderFlagSmall(props) {
  return (
    /*#__PURE__*/
    React.createElement(SVGImage, Object.assign({}, props, {
      glyph: img$11
    }))
  );
};

var styles$1b = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:block;& code{padding:3px;border-radius:3px;background-color:", colors.codeBg, ";color:white;font-family:", monoFontFamily, ";}& pre{display:block;padding:16px;margin-bottom:16px;border-radius:4px;overflow:auto;background-color:", colors.codeBg, ";color:white;& > code{padding:0;border-radius:0;background-color:transparent;}}"),
  h:
  /*#__PURE__*/
  emotion.css("margin-bottom:16px;color:#000;"),
  p:
  /*#__PURE__*/
  emotion.css("margin-bottom:20px;"),
  ul:
  /*#__PURE__*/
  emotion.css("padding-left:24px;margin-bottom:20px;")
};
var overrides = {
  h1: function h1(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h1"
      }), children)
    );
  },
  h2: function h2(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h2"
      }), children)
    );
  },
  h3: function h3(_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h3"
      }), children)
    );
  },
  h4: function h4(_ref4) {
    var children = _ref4.children,
        props = _objectWithoutProperties(_ref4, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h4"
      }), children)
    );
  },
  h5: function h5(_ref5) {
    var children = _ref5.children,
        props = _objectWithoutProperties(_ref5, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h5"
      }), children)
    );
  },
  h6: function h6(_ref6) {
    var children = _ref6.children,
        props = _objectWithoutProperties(_ref6, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.h,
        variant: "h6"
      }), children)
    );
  },
  p: function p(_ref7) {
    var children = _ref7.children,
        props = _objectWithoutProperties(_ref7, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.p,
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
      React.createElement(Link, Object.assign({}, props, {
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
    React.createElement(CodeBlock, {
      language: className.substr(5),
      text: children
    }) :
    /*#__PURE__*/
    React.createElement(Text, Object.assign({}, props, {
      variant: "code"
    }), children);
  },
  ul: function ul(_ref10) {
    var children = _ref10.children,
        props = _objectWithoutProperties(_ref10, ["children"]);

    return (
      /*#__PURE__*/
      React.createElement(Text, Object.assign({}, props, {
        className: styles$1b.ul,
        tag: "ul"
      }), children)
    );
  }
};
var options = {
  overrides: overrides,
  forceBlock: true
};
var Markdown = function Markdown(_ref11) {
  var text = _ref11.text;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1b.wrap
    },
    /*#__PURE__*/
    React.createElement(MD, {
      options: options
    }, text))
  );
};

var styles$1c = {
  splash:
  /*#__PURE__*/
  emotion.css("position:relative;display:flex;align-items:center;justify-content:center;padding:16px;background:", colors.intentDangerBg, ";box-shadow:0px 1px 4px rgba(0,0,0,0.11);color:", colors.intentDanger, ";"),
  children:
  /*#__PURE__*/
  emotion.css("color:", colors.intentDanger, ";"),
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
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1c.splash, _defineProperty({}, styles$1c.closePadding, onClose), className)
    },
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1c.children,
      tag: "span"
    }, children),
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      className: emotion.cx(styles$1c.controls, _defineProperty({}, styles$1c.controlsMargin, children && controls)),
      controls: controls
    }), onClose &&
    /*#__PURE__*/
    React.createElement(IconClose, {
      className: styles$1c.close,
      onClick: onClose
    }))
  );
};

var styles$1d = {
  splash:
  /*#__PURE__*/
  emotion.css("position:fixed;top:0;left:0;right:0;z-index:", zIndex.fixedSplash, ";")
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
        React.createElement(NotificationSplash, {
          className: emotion.cx(styles$1d.splash, className),
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
        return ReactDOM.createPortal(this.renderSplash(), root);
      }

      return null;
    }
  }]);

  return NotificationSplashFixed;
}(React.Component);

var styles$1e = {
  wrap:
  /*#__PURE__*/
  emotion.css("position:relative;"),
  spin:
  /*#__PURE__*/
  emotion.css("position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);"),
  icon:
  /*#__PURE__*/
  emotion.css("width:200px;height:182px;fill:rgba(0,0,0,0.25);"),
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
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1e.wrap
        }, enable && this.renderSpin(),
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$1e.container, {
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
        React.createElement("div", {
          className: styles$1e.spin
        },
        /*#__PURE__*/
        React.createElement(IconSpinner, {
          className: styles$1e.icon
        }))
      );
    }
  }]);

  return Spin;
}(React.Component);
Spin.defaultProps = {
  enable: false
};

var styles$1f = {
  container:
  /*#__PURE__*/
  styled.css("padding:16px;border:1px solid #e8e8e8;border-radius:4px;margin:0 -16px 48px;background:#ffffff;box-shadow:0px 1px 10px rgba(0,0,0,0.06);"),
  cardHead:
  /*#__PURE__*/
  styled.css("padding-bottom:16px;border-bottom:1px solid ", colors.intentBaseBg, ";margin-bottom:16px;"),
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
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: styled.cx(styles$1f.container, // { [styles.corner]: showCorner },
      className)
    },
    /*#__PURE__*/
    React.createElement(Spin, {
      enable: loading
    },
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1f.cardHead,
      variant: "h2"
    }, title), onClose &&
    /*#__PURE__*/
    React.createElement(IconClose, {
      className: styles$1f.closeIcon,
      onClick: onClose
    }),
    /*#__PURE__*/
    React.createElement("div", null, children)))
  );
};

var styles$1g = {
  page:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:column;max-width:1420px;min-width:922px;padding:0 30px;margin:30px auto 30px;"),
  wide:
  /*#__PURE__*/
  emotion.css("max-width:none;"),
  headingPanel:
  /*#__PURE__*/
  emotion.css("display:flex;justify-content:flex-end;margin-bottom:15px;"),
  heading:
  /*#__PURE__*/
  emotion.css("margin-right:auto;")
};
var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls,
      heading = _ref.heading,
      headingContent = _ref.headingContent,
      wide = _ref.wide;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1g.page, _defineProperty({}, styles$1g.wide, wide), className)
    }, (heading || controls || headingContent) &&
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1g.headingPanel
    }, heading &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1g.heading,
      variant: "h1"
    }, heading), headingContent, controls &&
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      controls: controls,
      thin: true
    })), children)
  );
};

var styles$1h = {
  section:
  /*#__PURE__*/
  emotion.css("margin:0 0 40px;"),
  headingPane:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:row;align-items:baseline;"),
  headingPaneMargin:
  /*#__PURE__*/
  emotion.css("margin-bottom:15px;"),
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
  return (
    /*#__PURE__*/
    React.createElement("section", {
      className: emotion.cx(styles$1h.section, className)
    }, isHeadingPaneVisible &&
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1h.headingPane, _defineProperty({}, styles$1h.headingPaneMargin, children))
    }, title &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1h.heading,
      variant: "h2"
    }, title), subTitle &&
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1h.subTitle,
      variant: "p",
      tag: "span"
    }, subTitle), topRightControls &&
    /*#__PURE__*/
    React.createElement(ControlsPanel, {
      className: styles$1h.topRightControls,
      controls: topRightControls
    })), children)
  );
};

var styles$1i = {
  pagination:
  /*#__PURE__*/
  emotion.css("display:flex;"),
  countItemsText:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;margin-right:12px;color:rgba(0,0,0,0.65);"),
  icon:
  /*#__PURE__*/
  emotion.css("width:16px;height:16px;margin:8px 8px;fill:rgba(0,0,0,.65);"),
  chevronIcon:
  /*#__PURE__*/
  emotion.css("fill:rgba(0,0,0,.65);"),
  button:
  /*#__PURE__*/
  emotion.css("min-width:32px;height:32px;background:#FFFFFF;border:1px solid #D9D9D9;box-sizing:border-box;border-radius:4px;color:rgba(0,0,0,0.65);font-size:14px;text-align:center;padding:4px;margin:0 4px;box-shadow:none;&:focus,&:hover,&:active{box-shadow:none;}"),
  buttonActive:
  /*#__PURE__*/
  emotion.css("color:#CF1322;border:1px solid #CF1322;"),
  dropDown:
  /*#__PURE__*/
  emotion.css("margin-left:12px;min-width:120px;")
};

var IconChevronRightBlack = function IconChevronRightBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronRight, {
      className: styles$1i.chevronIcon
    })
  );
};

var IconChevronLeftBlack = function IconChevronLeftBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronLeft, {
      className: styles$1i.chevronIcon
    })
  );
};

var IconChevronDownBlack = function IconChevronDownBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronDown, {
      className: styles$1i.chevronIcon
    })
  );
};

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));

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

    _this.changePage = function (newPage) {
      return function () {
        var _this$props = _this.props,
            page = _this$props.page,
            items = _this$props.items;
        var activePage = page + 1;

        if (newPage === activePage) {
          return;
        }

        var visiblePages = _this.getVisiblePages(newPage, items);

        _this.setState({
          visiblePages: _this.filterPages(visiblePages, items)
        });

        _this.props.onPageChange(newPage - 1);
      };
    };

    _this.getPages = function (items) {
      var pageSize = _this.props.pageSize;
      return Math.ceil(items / pageSize);
    };

    _this.onCheckPageSize = function (pageSize) {
      return function () {
        var setPageSize = _this.props.setPageSize;
        setPageSize && setPageSize(pageSize);
      };
    };

    _this.getDropDownItems = function () {
      return _this.props.pageSizeOptions.map(function (pageSize) {
        return (
          /*#__PURE__*/
          React.createElement(DropdownItem, {
            onClick: _this.onCheckPageSize(pageSize)
          }, pageSize, " / page")
        );
      });
    };

    var _page = props.page,
        _items = props.items;
    _this.state = {
      visiblePages: _this.getVisiblePages(_page + 1, _items)
    };

    var _totalPages = _this.getPages(_items);

    if (_page >= _totalPages) {
      _this.changePage(_totalPages)();
    }

    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          page = _this$props2.page,
          items = _this$props2.items,
          pageSize = _this$props2.pageSize;

      if (prevProps.items !== items || prevProps.pageSize !== pageSize) {
        this.setState({
          visiblePages: this.getVisiblePages(page, items)
        });
      }

      var totalPages = this.getPages(items);

      if (page >= totalPages) {
        this.changePage(totalPages)();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          page = _this$props3.page,
          items = _this$props3.items,
          setPageSize = _this$props3.setPageSize,
          pageSize = _this$props3.pageSize,
          showTotal = _this$props3.showTotal;
      var visiblePages = this.state.visiblePages;
      var activePage = page + 1;
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1i.pagination
        }, showTotal &&
        /*#__PURE__*/
        React.createElement(Text, {
          className: styles$1i.countItemsText,
          tag: "div"
        }, page * pageSize + 1, "-", activePage * pageSize > items ? items : activePage * pageSize, " of ", items, " items"),
        /*#__PURE__*/
        React.createElement("div", null,
        /*#__PURE__*/
        React.createElement(Button, {
          className: styles$1i.button,
          onClick: this.changePage(activePage - 1),
          disabled: activePage === 1,
          icon: IconChevronLeftBlack
        })),
        /*#__PURE__*/
        React.createElement("div", null, visiblePages.map(function (visiblePage, index, array) {
          var needElipsis = array[index - 1] + 1 < visiblePage;
          return (
            /*#__PURE__*/
            React.createElement(React.Fragment, {
              key: visiblePage
            }, needElipsis &&
            /*#__PURE__*/
            React.createElement(IconMore, {
              className: styles$1i.icon
            }),
            /*#__PURE__*/
            React.createElement(Button, {
              className: emotion.cx(styles$1i.button, _defineProperty({}, styles$1i.buttonActive, activePage === visiblePage)),
              onClick: _this2.changePage(visiblePage)
            }, visiblePage))
          );
        })),
        /*#__PURE__*/
        React.createElement("div", null,
        /*#__PURE__*/
        React.createElement(Button, {
          className: styles$1i.button,
          onClick: this.changePage(activePage + 1),
          disabled: activePage === this.getPages(items),
          icon: IconChevronRightBlack
        })), setPageSize &&
        /*#__PURE__*/
        React.createElement(Dropdown, {
          className: styles$1i.dropDown,
          items: this.getDropDownItems()
        },
        /*#__PURE__*/
        React.createElement(Button, {
          text: "".concat(pageSize, " / page "),
          iconRight: IconChevronDownBlack
        })))
      );
    }
  }]);

  return Pagination;
}(React.Component);
Pagination.defaultProps = {
  pageSizeOptions: [10, 20, 50, 100]
};

var styles$1j = {
  pagination:
  /*#__PURE__*/
  emotion.css("display:flex;"),
  icon:
  /*#__PURE__*/
  emotion.css("width:32px;height:32px;margin:0 4px;fill:rgba(0,0,0,.65);"),
  chevronIcon:
  /*#__PURE__*/
  emotion.css("fill:rgba(0,0,0,.65);"),
  button:
  /*#__PURE__*/
  emotion.css("display:block;min-width:32px;height:32px;background:#FFFFFF;border:1px solid #D9D9D9;box-sizing:border-box;border-radius:4px;color:rgba(0,0,0,0.65);font-size:14px;text-align:center;padding:4px;margin:0 4px;"),
  activePage:
  /*#__PURE__*/
  emotion.css("min-width:32px;height:32px;box-sizing:border-box;color:rgba(0,0,0,0.65);padding:4px;margin:0 4px;display:flex;align-items:center;justify-content:center;"),
  dropDown:
  /*#__PURE__*/
  emotion.css("margin-left:12px;min-width:120px;")
};

var IconChevronRightBlack$1 = function IconChevronRightBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronRight, {
      className: styles$1j.chevronIcon
    })
  );
};

var IconChevronLeftBlack$1 = function IconChevronLeftBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronLeft, {
      className: styles$1j.chevronIcon
    })
  );
};

var IconChevronDownBlack$1 = function IconChevronDownBlack() {
  return (
    /*#__PURE__*/
    React.createElement(IconChevronDown, {
      className: styles$1j.chevronIcon
    })
  );
};

var PaginationControlled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaginationControlled, _React$Component);

  function PaginationControlled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaginationControlled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationControlled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.changePage = function (newPage) {
      return function () {
        var _this$props = _this.props,
            onPageChange = _this$props.onPageChange,
            page = _this$props.page;
        var activePage = page + 1;

        if (newPage === activePage) {
          return;
        }

        onPageChange(newPage - 1);
      };
    };

    _this.onCheckPageSize = function (newPageSize) {
      return function () {
        var _this$props2 = _this.props,
            setPageSize = _this$props2.setPageSize,
            pageSize = _this$props2.pageSize;

        if (newPageSize === pageSize) {
          return;
        }

        setPageSize && setPageSize(newPageSize);
      };
    };

    _this.getDropDownItems = function () {
      return _this.props.pageSizeOptions.map(function (pageSize) {
        return (
          /*#__PURE__*/
          React.createElement(DropdownItem, {
            onClick: _this.onCheckPageSize(pageSize)
          }, pageSize, " / page")
        );
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
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1j.pagination
        },
        /*#__PURE__*/
        React.createElement(Button, {
          className: styles$1j.button,
          onClick: this.changePage(activePage - 1),
          disabled: activePage === 1,
          icon: IconChevronLeftBlack$1
        }),
        /*#__PURE__*/
        React.createElement(Text, {
          className: styles$1j.activePage
        }, activePage),
        /*#__PURE__*/
        React.createElement(Button, {
          className: styles$1j.button,
          onClick: this.changePage(activePage + 1),
          disabled: disableNextPageButton,
          icon: IconChevronRightBlack$1
        }), setPageSize &&
        /*#__PURE__*/
        React.createElement(Dropdown, {
          className: styles$1j.dropDown,
          items: this.getDropDownItems()
        },
        /*#__PURE__*/
        React.createElement(Button, {
          text: "".concat(pageSize, " / page "),
          iconRight: IconChevronDownBlack$1
        })))
      );
    }
  }]);

  return PaginationControlled;
}(React.Component);
PaginationControlled.defaultProps = {
  pageSizeOptions: [10, 20, 50, 100]
};

// @flex
var styles$1k = {
  wrap:
  /*#__PURE__*/
  emotion.css("width:100%;height:100%;padding-left:30px;padding-right:30px;overflow:hidden;"),
  scrollableWrap:
  /*#__PURE__*/
  emotion.css("height:100%;margin-left:-30px;margin-right:-30px;"),
  scrollableBody:
  /*#__PURE__*/
  emotion.css("padding-left:32px;padding-right:32px;")
};
var PopupBody = function PopupBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      innerClassName = _ref.innerClassName,
      scrollable = _ref.scrollable;
  return scrollable ?
  /*#__PURE__*/
  React.createElement(Scrollbar, {
    className: emotion.cx(styles$1k.scrollableWrap, className)
  },
  /*#__PURE__*/
  React.createElement("div", {
    className: emotion.cx(styles$1k.scrollableBody, innerClassName)
  }, children)) :
  /*#__PURE__*/
  React.createElement("div", {
    className: emotion.cx(styles$1k.wrap, className)
  }, children);
};

// TODO: move to uikit
var COLORS = {
  success: colors.intentSuccess,
  warning: colors.intentWarning,
  danger: colors.intentDanger
};
var style$3 =
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
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      className: emotion.cx(style$3, bar, className)
    })
  );
};

var styles$1l = {
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
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;& + div::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px rgba(255,255,255,0);border-radius:50%;}&:focus + div::before{border-color:", emotionRgba.rgba(colors.intentPrimary, 0.55), ";}"),
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
      title = _ref.title,
      value = _ref.value;
  return (
    /*#__PURE__*/
    React.createElement("label", {
      className: emotion.cx(styles$1l.label, className),
      title: title
    },
    /*#__PURE__*/
    React.createElement("input", {
      checked: checked,
      className: styles$1l.input,
      disabled: disabled,
      type: "radio",
      onChange: onChange,
      name: name,
      value: value
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1l.iconWrap, _defineProperty({}, styles$1l.childrenMargin, children))
    },
    /*#__PURE__*/
    React.createElement(IconRadio, {
      className: styles$1l.icon,
      checked: checked,
      disabled: disabled
    })), typeof children === 'string' ?
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1l.children
    }, children) : children)
  );
};

var SideMenuIcon = function SideMenuIcon(_ref) {
  var IconComponent = _ref.icon,
      className = _ref.className;

  if (typeof IconComponent === 'string') {
    return null;
  }

  if (typeof IconComponent === 'function') {
    return (
      /*#__PURE__*/
      React__default.createElement(IconComponent, {
        className: className
      })
    );
  }

  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      className: className
    }, IconComponent)
  );
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

var styles$1m = {
  item:
  /*#__PURE__*/
  styled.css("display:block;width:100%;height:40px;position:relative;cursor:pointer;border:none;text-align:left;text-decoration:none;background:transparent;outline:none;&:hover,&:focus{background:rgba(255,255,255,0.05);}"),
  shortItem:
  /*#__PURE__*/
  styled.css("display:block;width:100%;height:40px;position:relative;border:none;outline:none;background:transparent;cursor:pointer;&:hover,&:focus{background:rgba(255,255,255,0.05);}"),
  itemSelected:
  /*#__PURE__*/
  styled.css("background:rgba(255,255,255,0.05);&:after{display:block;height:100%;left:0;top:0;width:4px;background:#ff272c;content:'';position:absolute;}"),
  subItemSelected:
  /*#__PURE__*/
  styled.css("background:rgba(255,255,255,0.05);"),
  title:
  /*#__PURE__*/
  styled.css("position:absolute;left:50px;top:50%;transform:translateY(-50%);color:#fff;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:170px;&:hover,&:visited{color:#fff;}"),
  iconWrap:
  /*#__PURE__*/
  styled.css("position:absolute;left:24px;top:calc(50% - 8px);display:flex;justify-content:center;align-items:center;height:16px;width:16px;"),
  icon:
  /*#__PURE__*/
  styled.css("fill:#ffffff;"),
  expandButton:
  /*#__PURE__*/
  styled.css("position:absolute;top:50%;transform:translateY(-50%);right:16px;"),
  expandButtonUnexpand:
  /*#__PURE__*/
  styled.css("transform:translateY(-50%) rotate(180deg);"),
  submenuList:
  /*#__PURE__*/
  styled.css("background:rgba(255,255,255,0.05);"),
  subItemTitle:
  /*#__PURE__*/
  styled.css("left:60px;"),
  titleSelected:
  /*#__PURE__*/
  styled.css("font-weight:600;"),
  collapse:
  /*#__PURE__*/
  styled.css("background:rgba(255,255,255,0.05);opacity:.65;&:hover{opacity:1;}")
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
    return (
      /*#__PURE__*/
      React__default.createElement(Text, {
        tag: tag,
        className: styled.cx(styles$1m.shortItem, _defineProperty({}, styles$1m.itemSelected, selected || items && items.find(function (x) {
          return x.selected;
        }))),
        onClick: items && items.length ? function (evt) {
          return expand && expand(evt, path, !expanded);
        } : function (evt) {
          return handleClick(evt, onClick, evt, path, type);
        },
        href: pathPrefix ? pathPrefix + path : path,
        title: label
      },
      /*#__PURE__*/
      React__default.createElement("div", {
        className: styles$1m.iconWrap
      },
      /*#__PURE__*/
      React__default.createElement(SideMenuIcon, {
        icon: icon,
        className: styles$1m.icon
      })))
    );
  }

  var subItems = null;

  if (expanded && !_short && items && items.length > 0) {
    subItems =
    /*#__PURE__*/
    React__default.createElement("div", {
      className: styles$1m.submenuList
    }, items.map(function (x) {
      return (
        /*#__PURE__*/
        React__default.createElement(SideMenuItem, Object.assign({}, x, {
          key: x.path,
          onClick: onClick,
          isSubitem: true
        }))
      );
    }));
  }

  var expandButton = items && items.length > 0 ?
  /*#__PURE__*/
  React__default.createElement(IconChevronDown, {
    className: styled.cx(styles$1m.expandButton, _defineProperty({}, styles$1m.expandButtonUnexpand, !expanded))
  }) : null;
  return (
    /*#__PURE__*/
    React__default.createElement(React__default.Fragment, null,
    /*#__PURE__*/
    React__default.createElement(Text, {
      tag: tag,
      className: styled.cx(styles$1m.item, (_cx3 = {}, _defineProperty(_cx3, styles$1m.itemSelected, selected), _defineProperty(_cx3, styles$1m.subItemSelected, selected && isSubitem), _defineProperty(_cx3, styles$1m.collapse, isCollapse), _cx3)),
      href: pathPrefix ? pathPrefix + path : path,
      onClick: items && items.length ? function (evt) {
        return expand && expand(evt, path, !expanded);
      } : function (evt) {
        return handleClick(evt, onClick, evt, path, type);
      },
      title: label
    }, isSubitem ? null :
    /*#__PURE__*/
    React__default.createElement("div", {
      className: styles$1m.iconWrap
    },
    /*#__PURE__*/
    React__default.createElement(SideMenuIcon, {
      icon: icon,
      className: styles$1m.icon
    })),
    /*#__PURE__*/
    React__default.createElement("span", {
      className: styled.cx(styles$1m.title, (_cx4 = {}, _defineProperty(_cx4, styles$1m.subItemTitle, isSubitem), _defineProperty(_cx4, styles$1m.titleSelected, selected), _cx4))
    }, label), expandButton), subItems)
  );
};

var translateFromRight =
/*#__PURE__*/
styled.keyframes("from{transform:translate3d(200px,0,0);}to{transform:translate3d(0,0,0);}");
var styles$1n = {
  container:
  /*#__PURE__*/
  styled.css("border-top:none;overflow:hidden;width:256px;background:", colors.baseHeading, ";height:100%;padding:0;display:flex;flex-direction:column;user-select:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;"),
  shortContainer:
  /*#__PURE__*/
  styled.css("width:62px;"),
  menuTitle:
  /*#__PURE__*/
  styled.css("display:block;font-size:14px;margin-left:20px;margin-top:10px;color:rgba(0,0,0,0.65);"),
  menuList:
  /*#__PURE__*/
  styled.css("flex-grow:1;overflow:hidden;"),
  item:
  /*#__PURE__*/
  styled.css("height:40px;margin-bottom:4px;position:relative;"),
  expandButton:
  /*#__PURE__*/
  styled.css("position:absolute;right:28px;top:11px;&:after{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff;}"),
  expandButtonUnexpand:
  /*#__PURE__*/
  styled.css("&:after{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;}"),
  menuItem:
  /*#__PURE__*/
  styled.css("display:block;font-size:19px;font-family:Roboto;font-weight:400;text-align:left;cursor:pointer;color:white;width:154px;padding:0 0 5px;border:none;background-color:transparent;transition:color 300ms;text-decoration:none;:focus,:hover{color:#e32636;text-decoration:none;outline:none;}"),
  selectedMenuItem:
  /*#__PURE__*/
  styled.css("padding-bottom:4px;border-bottom:1px solid rgba(255,39,44,1);cursor:default;:hover{color:rgba(255,39,44,1);}"),
  submenuItem:
  /*#__PURE__*/
  styled.css("display:block;margin-bottom:15px;font-size:18px;color:white;margin-left:30px;cursor:pointer;:before{content:'> ';display:inline-block;width:20px;position:relative;}:hover{color:#ca0009;:before{content:'@';display:inline-block;width:20px;position:relative;}}animation:", translateFromRight, " 1s;"),
  submenuList:
  /*#__PURE__*/
  styled.css("display:block;margin-top:10px;margin-left:10px;"),
  itemLoading:
  /*#__PURE__*/
  styled.css(),
  logoContainer:
  /*#__PURE__*/
  styled.css("padding:24px 0 32px 0;"),
  logoCenter:
  /*#__PURE__*/
  styled.css("text-align:center;"),
  bottomButtons:
  /*#__PURE__*/
  styled.css("flex-grow:0;flex-shrink:0;margin-top:16px;"),
  iconStyle:
  /*#__PURE__*/
  styled.css("width:14px;height:14px;fill:#fff;")
};
function SideMenu(props) {
  var menu = props.menu,
      className = props.className,
      onMenuItemClick = props.onMenuItemClick,
      toggleExpand = props.toggleExpand,
      pathPrefix = props.pathPrefix,
      renderMenuLogo = props.renderMenuLogo;

  var _useState = React.useState(false),
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
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: styled.cx(styles$1n.container, _defineProperty({}, styles$1n.shortContainer, isShort), className)
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: styled.cx(styles$1n.logoContainer, _defineProperty({}, styles$1n.logoCenter, isShort))
    }, renderMenuLogo ? renderMenuLogo(isShort) : null),
    /*#__PURE__*/
    React.createElement(Scrollbar, {
      track: "#212121"
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1n.menuList
    }, topMenu.map(function (x, i) {
      return (
        /*#__PURE__*/
        React.createElement(SideMenuItem, Object.assign({}, x, {
          key: i,
          onClick: onClick,
          expand: onExpand,
          pathPrefix: pathPrefix,
          "short": isShort
        }))
      );
    }))),
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1n.bottomButtons
    }, pinnedMenuItem &&
    /*#__PURE__*/
    React.createElement(SideMenuItem, Object.assign({
      key: "pinned-element"
    }, pinnedMenuItem, {
      onClick: onClick,
      expand: onExpand,
      pathPrefix: pathPrefix,
      "short": isShort
    })),
    /*#__PURE__*/
    React.createElement(SideMenuItem, {
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
    })))
  );
}

var styles$1o = {
  modal:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:row;flex-shrink:0;min-height:250px;border-radius:6px;overflow:hidden;box-shadow:0px 15px 15px rgba(4,11,29,0.05);"),
  shim:
  /*#__PURE__*/
  emotion.css("background-color:", colors.baseBg, ";"),
  subTitleWrap:
  /*#__PURE__*/
  emotion.css("margin:15px 0 30px 0;"),
  subTitle:
  /*#__PURE__*/
  emotion.css("color:rgba(0,0,0,0.65);"),
  logoContainer:
  /*#__PURE__*/
  emotion.css("width:68px;flex-grow:0;flex-shrink:0;background:", colors.baseHeading, ";display:flex;flex-direction:column;justify-content:center;position:relative;"),
  logo:
  /*#__PURE__*/
  emotion.css("width:210px;position:absolute;transform:translate3d(-50%,-50%,0) rotate(-90deg);left:50%;top:50%;"),
  formContainer:
  /*#__PURE__*/
  emotion.css("flex-grow:1;padding:30px;")
};
var SplashModal = function SplashModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      shimClassName = _ref.shimClassName,
      subTitle = _ref.subTitle,
      title = _ref.title,
      logo = _ref.logo,
      props = _objectWithoutProperties(_ref, ["children", "className", "shimClassName", "subTitle", "title", "logo"]);

  return (
    /*#__PURE__*/
    React.createElement(BaseModal, Object.assign({}, props, {
      className: emotion.cx(styles$1o.modal, className),
      shimClassName: emotion.cx(styles$1o.shim, shimClassName)
    }), logo &&
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1o.logoContainer
    },
    /*#__PURE__*/
    React.createElement(SVGImage, {
      glyph: logo,
      className: styles$1o.logo
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1o.formContainer
    }, title &&
    /*#__PURE__*/
    React.createElement(Text, {
      variant: "h1"
    }, title), subTitle &&
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1o.subTitleWrap
    },
    /*#__PURE__*/
    React.createElement(Text, {
      variant: "basic",
      className: styles$1o.subTitle
    }, subTitle)), children))
  );
};

var styles$1p = {
  input:
  /*#__PURE__*/
  emotion.css("position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;&:focus + div::before{content:'';position:absolute;top:-3px;left:-3px;right:-3px;bottom:-3px;border:solid 1px rgba(255,255,255,0);border-radius:15px;}&:focus + div::before{border-color:", emotionRgba.rgba(colors.intentPrimary, 0.55), ";}"),
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
  emotion.css("background-color:", colors.intentPrimary, ";&:hover,&:focus{background-color:", colors.activeAction, ";}&::after{left:auto;right:1px;}"),
  disabled:
  /*#__PURE__*/
  emotion.css("border-color:", colors.intentBase, ";background-color:", colors.intentBaseBg, ";cursor:default;&::after{box-shadow:0px 0px 4px rgba(0,0,0,0.15);}"),
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
      onChange = _ref.onChange,
      title = _ref.title;
  return (
    /*#__PURE__*/
    React.createElement("label", {
      className: emotion.cx(styles$1p.label, className),
      title: title
    },
    /*#__PURE__*/
    React.createElement("input", {
      checked: checked,
      className: styles$1p.input,
      disabled: disabled,
      type: "checkbox",
      onChange: onChange
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1p.switcher, (_cx = {}, _defineProperty(_cx, styles$1p.notDisabled, !checked && !disabled), _defineProperty(_cx, styles$1p.checked, checked && !disabled), _defineProperty(_cx, styles$1p.disabled, !checked && disabled), _defineProperty(_cx, styles$1p.basicDisabled, disabled), _defineProperty(_cx, styles$1p.checkedDisabled, checked && disabled), _defineProperty(_cx, styles$1p.childrenMargin, children), _cx))
    }), typeof children === 'string' ?
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1p.children
    }, children) : children)
  );
};

var styles$1q = {
  wrap:
  /*#__PURE__*/
  emotion.css("display:flex;flex-direction:column;height:100%;"),
  tab:
  /*#__PURE__*/
  emotion.css("position:relative;padding:16px;border:none;border-bottom:solid 2px transparent;font-family:", baseFontFamily, ";font-size:16px;line-height:16px;font-weight:600;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;cursor:pointer;&:hover,&:focus{z-index:", zIndex.inline, ";border-bottom-color:", emotionRgba.rgba(colors.activeAction, 0.5), ";}"),
  activeTab:
  /*#__PURE__*/
  emotion.css("color:", colors.activeAction, ";border-bottom-color:", colors.activeAction, ";"),
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
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: emotion.cx(styles$1q.wrap, className)
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: styles$1q.tabs
        }, tabs && tabs.map(function (_ref, i) {
          var label = _ref.label;
          return (
            /*#__PURE__*/
            React.createElement("button", {
              className: emotion.cx(styles$1q.tab, _defineProperty({}, styles$1q.activeTab, activeTab === i)),
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
}(React.Component);

var styles$1r = {
  col:
  /*#__PURE__*/
  emotion.css("padding:16px;"),
  colText:
  /*#__PURE__*/
  emotion.css("color:#000000a6;"),
  rowBackground:
  /*#__PURE__*/
  emotion.css("background-color:#FFFFFF;"),
  row:
  /*#__PURE__*/
  emotion.css("box-shadow:inset 0px -1px 0px rgba(0,0,0,0.1);"),
  codeRow:
  /*#__PURE__*/
  emotion.css("background-color:#FAFAFA;"),
  code:
  /*#__PURE__*/
  emotion.css("position:relative;padding:8px 48px 8px 16px;white-space:pre-wrap;"),
  hoverRow:
  /*#__PURE__*/
  emotion.css("background-color:#EFEFEF;"),
  pointer:
  /*#__PURE__*/
  emotion.css("cursor:pointer;"),
  moreIcon:
  /*#__PURE__*/
  emotion.css("position:absolute;right:18px;top:50%;transform:translate(0,-50%);")
};

var get2RowFromStr = function get2RowFromStr(str) {
  var splitedStr = str.split('\n');
  return "".concat(splitedStr[0]).concat(splitedStr[1] ? "\n".concat(splitedStr[1]) : '');
};

function TableRow(_ref) {
  var _cx, _cx2;

  var row = _ref.row,
      rowClassName = _ref.rowClassName,
      codeClassName = _ref.codeClassName,
      onCodeRowClick = _ref.onCodeRowClick,
      codeRowKey = _ref.codeRowKey,
      onRowClick = _ref.onRowClick;
  var rowProps = row.getRowProps();
  var codeRow = codeRowKey && row.original[codeRowKey];

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHover = _useState2[0],
      setHover = _useState2[1];

  return (
    /*#__PURE__*/
    React__default.createElement(React__default.Fragment, null,
    /*#__PURE__*/
    React__default.createElement("tr", Object.assign({
      onMouseOver: function onMouseOver() {
        return setHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(false);
      },
      onClick: onRowClick ? function () {
        return onRowClick(row);
      } : null,
      className: emotion.cx(styles$1r.rowBackground, (_cx = {}, _defineProperty(_cx, styles$1r.row, !codeRow), _defineProperty(_cx, styles$1r.hoverRow, isHover), _defineProperty(_cx, styles$1r.pointer, onRowClick), _cx))
    }, rowProps), row.cells.map(function (cell) {
      return (
        /*#__PURE__*/
        React__default.createElement(Text, Object.assign({
          tag: "td",
          className: emotion.cx(styles$1r.col, styles$1r.colText, rowClassName),
          onClick: cell.column.id === 'selection' ? function (e) {
            e.stopPropagation();
            e.preventDefault();
            cell.row.toggleRowSelected(!cell.row.isSelected);
          } : null
        }, cell.getCellProps()), cell.render('Cell'))
      );
    })), codeRow &&
    /*#__PURE__*/
    React__default.createElement("tr", {
      onMouseOver: function onMouseOver() {
        return setHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(false);
      },
      className: emotion.cx(styles$1r.codeRow, styles$1r.row, codeClassName, (_cx2 = {}, _defineProperty(_cx2, styles$1r.hoverRow, isHover), _defineProperty(_cx2, styles$1r.pointer, onCodeRowClick), _cx2)),
      onClick: function onClick() {
        return onCodeRowClick ? onCodeRowClick(row) : null;
      }
    },
    /*#__PURE__*/
    React__default.createElement(Text, {
      tag: "td",
      variant: "code",
      className: emotion.cx(styles$1r.code, styles$1r.colText),
      colSpan: row.cells.length
    }, get2RowFromStr(codeRow),
    /*#__PURE__*/
    React__default.createElement(IconMoreBurger, {
      className: styles$1r.moreIcon
    }))))
  );
}

var indeterminateStyle =
/*#__PURE__*/
emotion.css("fill:", colors.dark10, ";");
var IconHelperSortable = function IconHelperSortable(_ref) {
  var sort = _ref.sort,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["sort", "className"]);

  switch (sort) {
    case 'asc':
      return (
        /*#__PURE__*/
        React__default.createElement(IconSortableAsc, Object.assign({
          className: className
        }, props))
      );

    case 'desc':
      return (
        /*#__PURE__*/
        React__default.createElement(IconSortableDesc, Object.assign({
          className: className
        }, props))
      );

    default:
      return (
        /*#__PURE__*/
        React__default.createElement(IconSortableAsc, Object.assign({
          className: emotion.cx(indeterminateStyle, className)
        }, props))
      );
  }
};

var styles$1s = {
  table:
  /*#__PURE__*/
  emotion.css("background-color:transparent;width:100%;border-spacing:initial;"),
  spin:
  /*#__PURE__*/
  emotion.css("position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);"),
  head:
  /*#__PURE__*/
  emotion.css("color:", colors.dark65, ";font-weight:600;font-size:14px;padding:12px 16px;text-align:left;"),
  sortIcon:
  /*#__PURE__*/
  emotion.css("padding:4px;margin-left:8px;vertical-align:middle;&:hover{background:#D9DADD;border-radius:2px;fill:", colors.dark65, "}"),
  noData:
  /*#__PURE__*/
  emotion.css("background-color:#FFFFFF;padding:25px;"),
  noDataText:
  /*#__PURE__*/
  emotion.css("margin-top:16px;color:rgba(0,0,0,0.25);"),
  pagination:
  /*#__PURE__*/
  emotion.css("margin-top:40px;display:flex;justify-content:flex-end;margin-right:16px;")
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

function Table(props) {
  var rowClassName = props.rowClassName,
      codeClassName = props.codeClassName,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      pagination = props.pagination,
      onSelectedRowsChange = props.onSelectedRowsChange,
      tableKey = props.tableKey,
      _props$initialSelecte = props.initialSelectedRowIds,
      initialSelectedRowIds = _props$initialSelecte === void 0 ? [] : _props$initialSelecte,
      manualPagination = props.manualPagination,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  var getRowId = React.useCallback(function (row, index) {
    return tableKey && row[tableKey] ? row[tableKey] : index;
  }, []);

  var _useTable = reactTable.useTable({
    columns: columns,
    data: data,
    getRowId: getRowId,
    initialState: {
      selectedRowIds: initialSelectedRowIds
    },
    manualPagination: !!manualPagination,
    autoResetSelectedRows: !manualPagination,
    autoResetSortBy: !manualPagination
  }, reactTable.useSortBy, reactTable.usePagination, reactTable.useRowSelect, function (hooks) {
    onSelectedRowsChange && hooks.visibleColumns.push(function (columns) {
      return [// Let's make a column for selection
      {
        id: 'selection',
        Header: function Header(_ref) {
          var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
          return (
            /*#__PURE__*/
            React.createElement(Checkbox, getToggleAllRowsSelectedProps())
          );
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;

          var _row$getToggleRowSele = row.getToggleRowSelectedProps(),
              checked = _row$getToggleRowSele.checked;

          return (
            /*#__PURE__*/
            React.createElement(Checkbox, {
              checked: checked
            })
          );
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

  reactTable.useMountedLayoutEffect(function () {
    if (onSelectedRowsChange) {
      var selectedRows = selectedFlatRows.map(function (row) {
        return row.original;
      });
      onSelectedRowsChange(selectedRows, Object.keys(selectedRowIds));
    }
  }, [selectedFlatRows]);
  var dataRows = pagination ? page : rows;
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement(Spin, {
      enable: loading
    },
    /*#__PURE__*/
    React.createElement("table", Object.assign({}, getTableProps(), {
      className: emotion.cx(styles$1s.table)
    }),
    /*#__PURE__*/
    React.createElement("thead", null, headerGroups.map(function (headerGroup) {
      return (
        /*#__PURE__*/
        React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
          var sortColumn = function sortColumn() {
            column.toggleSortBy && column.toggleSortBy(!column.isSortedDesc, false);
          };

          return (
            /*#__PURE__*/
            React.createElement(Text, Object.assign({
              tag: "th",
              className: emotion.cx(styles$1s.head)
            }, column.getHeaderProps(column.getSortByToggleProps()), {
              onClick: sortColumn
            }), column.render('Header'), column.canSort &&
            /*#__PURE__*/
            React.createElement(IconHelperSortable, {
              className: emotion.cx(styles$1s.sortIcon),
              sort: getSortDirection(column.isSortedDesc)
            }))
          );
        }))
      );
    })),
    /*#__PURE__*/
    React.createElement("tbody", getTableBodyProps(), dataRows.map(function (row) {
      prepareRow(row);
      return (
        /*#__PURE__*/
        React.createElement(TableRow, {
          key: row.getRowProps().key,
          row: row,
          rowClassName: rowClassName,
          codeClassName: codeClassName,
          onCodeRowClick: props.onCodeRowClick,
          onRowClick: props.onRowClick,
          codeRowKey: props.codeRowKey
        })
      );
    }), !rows.length &&
    /*#__PURE__*/
    React.createElement("tr", null,
    /*#__PURE__*/
    React.createElement("td", {
      colSpan: visibleColumns.length
    },
    /*#__PURE__*/
    React.createElement(NonIdealState, {
      className: emotion.cx(styles$1s.noData),
      image: img$4
    },
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1s.noDataText
    }, "The list is empty")))))), pagination && rows.length > 0 &&
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1s.pagination
    },
    /*#__PURE__*/
    React.createElement(Pagination, {
      page: pageIndex,
      pageSize: pageSize,
      items: rows.length,
      onPageChange: gotoPage,
      setPageSize: setPageSize,
      showTotal: true
    })), manualPagination &&
    /*#__PURE__*/
    React.createElement("div", {
      className: styles$1s.pagination
    },
    /*#__PURE__*/
    React.createElement(PaginationControlled, {
      page: manualPagination.page,
      pageSize: manualPagination.pageSize,
      disableNextPageButton: manualPagination.disableNextPageButton,
      onPageChange: manualPagination.onChangePage,
      setPageSize: manualPagination.onChangePageSize
    }))))
  );
}

var styles$1t = {
  tag:
  /*#__PURE__*/
  emotion.css("position:relative;border:none;border-radius:4px;padding:1px 8px 3px;margin:0 2px;font-size:12px;line-height:18px;outline:none;transition:0.1s ease-in-out;transition-property:background-color,color;&:focus::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:solid 1px ", emotionRgba.rgba(colors.intentPrimary, 0.55), ";border-radius:3px;}"),
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
      text = _ref.text,
      title = _ref.title;
  var Element = onClick ? 'button' : 'span';
  return (
    /*#__PURE__*/
    React.createElement(Element, {
      className: emotion.cx((_cx = {}, _defineProperty(_cx, styles$1t.interactive(highlightingOnHover), !!highlightingOnHover), _defineProperty(_cx, styles$1t["static"], !highlightingOnHover), _defineProperty(_cx, styles$1t.pointer, onClick), _cx), styles$1t.tag, className),
      onClick: onClick,
      title: title
    }, text)
  );
};

var styles$1u = {
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
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      className: emotion.cx(styles$1u.wrapper, className)
    }, heading &&
    /*#__PURE__*/
    React__default.createElement(Text, {
      className: styles$1u.heading,
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
          className: emotion.cx(styles$1u.tag, tagClassName),
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

var styles$1v = {
  outer:
  /*#__PURE__*/
  styled.css("display:flex;border:solid 1px ", colors.intentBase, ";box-sizing:border-box;border-radius:4px;background-color:#ffffff;"),
  disabled:
  /*#__PURE__*/
  styled.css("background-color:", colors.intentBaseBg, ";"),
  focused:
  /*#__PURE__*/
  styled.css("border-color:rgba(0,0,0,0.26);box-shadow:0px 0px 3px rgba(0,0,0,0.24);"),
  error:
  /*#__PURE__*/
  styled.css("border-color:", colors.intentDanger, ";box-shadow:0px 0px 3px ", emotionRgba.rgba(colors.intentDanger, 0.65), ";"),
  input:
  /*#__PURE__*/
  styled.css("display:block;align-self:stretch;width:100%;min-width:0;height:100%;border:0;padding:5px 16px;box-sizing:border-box;border-radius:3px;font-family:", baseFontFamily, ";font-size:14px;line-height:22px;color:rgba(0,0,0,0.65);background-color:transparent;outline:none;resize:none;")
};
var TextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextArea)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.elementRef = React.createRef();
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
          props = _objectWithoutProperties(_this$props, ["autoComplete", "autoFocus", "className", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "disabled", "error", "name", "onChange", "readOnly", "rows", "title", "value", "placeholder"]);

      var focused = this.state.focused;
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: styled.cx(styles$1v.outer, (_cx = {}, _defineProperty(_cx, styles$1v.disabled, disabled), _defineProperty(_cx, styles$1v.focused, focused), _defineProperty(_cx, styles$1v.error, error), _cx), className),
          title: title
        },
        /*#__PURE__*/
        React.createElement("textarea", Object.assign({}, props, {
          autoFocus: autoFocus,
          autoComplete: autoComplete,
          className: styles$1v.input,
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
        })))
      );
    }
  }]);

  return TextArea;
}(React.Component);

var styles$1w = {
  outer: function outer(_ref) {
    var _outer = _ref.outer;
    return (
      /*#__PURE__*/
      styled.css("padding:0;", _outer ? 'margin: 0 -16px;' : '', " list-style:none;")
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
  return (
    /*#__PURE__*/
    React.createElement("li", {
      className: styled.cx(styles$1w.item, _defineProperty({}, styles$1w.softCorners, corners === 'soft'), className)
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
    React.createElement("ul", {
      className: styled.cx(styles$1w.outer({
        outer: outer
      }), className)
    }, items && items.map(function (item) {
      return (
        /*#__PURE__*/
        React.createElement(TiledListItem, {
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

var styles$1x = {
  uriWrap:
  /*#__PURE__*/
  emotion.css("display:flex;align-items:center;"),
  uriIcon:
  /*#__PURE__*/
  emotion.css("width:14px;height:14px;margin-right:4px;"),
  uri:
  /*#__PURE__*/
  emotion.css("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:rgba(0,0,0,0.65);")
};
var UriLabel = function UriLabel(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      uri = _ref.uri;
  var Icon = icon || IconLink;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: emotion.cx(styles$1x.uriWrap, className),
      title: title
    },
    /*#__PURE__*/
    React.createElement(Icon, {
      className: styles$1x.uriIcon
    }),
    /*#__PURE__*/
    React.createElement(Text, {
      className: styles$1x.uri,
      variant: "p",
      tag: "span"
    }, uri))
  );
};

var img$12 = {id: "s9RpV1NGzqR9tVcPKvrfW", content: "<svg width=\"80\" height=\"80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 80", viewBox: "0 0 80 80" };

var img$13 = {id: "DCOmxD3YIJPMKanCAfOaP", content: "<svg width=\"80\" height=\"112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\"/></svg>", viewbox: "0 0 80 112", viewBox: "0 0 80 112" };

var img$14 = {id: "fnariZGW9B0QC2z4Aq1I9", content: "<svg width=\"154\" height=\"28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.983 21.023h1.998v-2.501h-1.723c-1.574 0-2.274-.576-2.274-1.826v-5.979h3.997V8.266h-3.997V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.65 4.327 4.622 4.327zm10.099.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.723-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.097 4.153zm11.812 2.226h-2.623V8.266h2.623v1.726c.949-1.201 2.173-1.726 3.996-1.726h1.05v2.451h-1.05c-2.373 0-3.996 1.476-3.996 3.677v6.629zm12.189.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.724-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.096 4.153zm11.812 2.226h-2.623V8.266h2.623v1.276c.874-.926 2.173-1.601 3.897-1.601 3.172 0 5.321 2.35 5.321 5.853v7.23h-2.623v-7.155c0-2.076-1.249-3.377-3.123-3.377-1.973 0-3.472 1.476-3.472 3.277v7.254zm17.409 0h1.998v-2.501h-1.723c-1.574 0-2.273-.576-2.273-1.826v-5.979h3.996V8.266h-3.996V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.648 4.327 4.621 4.327zm16.59-6.378c0 3.752-3.022 6.703-6.819 6.703s-6.82-2.951-6.82-6.703c0-3.753 3.023-6.704 6.82-6.704s6.819 2.951 6.819 6.704zm-10.891 0c0 2.4 1.723 4.152 4.072 4.152 2.348 0 4.071-1.751 4.071-4.152 0-2.402-1.723-4.153-4.071-4.153-2.349 0-4.072 1.751-4.072 4.152zm19.22 6.703c3.797 0 6.821-2.951 6.821-6.703 0-3.753-3.024-6.704-6.821-6.704-3.797 0-6.82 2.951-6.82 6.704 0 3.752 3.023 6.703 6.82 6.703zm0-2.551c-2.348 0-4.072-1.751-4.072-4.152 0-2.402 1.724-4.153 4.072-4.153s4.073 1.751 4.073 4.152c0 2.402-1.725 4.153-4.073 4.153zM154 21.023h-2.623V3.013H154v18.01z\" fill=\"#fff\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 0 1-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 0 1-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 0 1 8.833.118z\" fill=\"url(#paint0_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 0 1 .033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 0 1-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 0 1 7.067.094z\" fill=\"url(#paint1_radial)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 0 1-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 0 1 2.484-2.29z\" fill=\"#FF0D2A\"/><defs><radialGradient id=\"paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\"/><stop offset=\"1\" stop-color=\"#FF0D2A\"/></radialGradient><radialGradient id=\"paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\"/><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\"/></radialGradient></defs></svg>", viewbox: "0 0 154 28", viewBox: "0 0 154 28" };

exports.Alert = Alert;
exports.BaseModal = BaseModal;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.CodeBlock = CodeBlock;
exports.ConfirmModal = ConfirmModal;
exports.ControlsPanel = ControlsPanel;
exports.CopyToClipboard = CopyToClipboard;
exports.DotIndicator = DotIndicator;
exports.Dropdown = Dropdown;
exports.DropdownDivider = DropdownDivider;
exports.DropdownItem = DropdownItem;
exports.FlatList = FlatList;
exports.FormField = FormField;
exports.HealthStatus = HealthStatus;
exports.INTERACTIVE_ELEMENT_SELECTOR = INTERACTIVE_ELEMENT_SELECTOR;
exports.Icon = Icon;
exports.IconArrow = IconArrow;
exports.IconArrowDown = IconArrowDown;
exports.IconArrowLeft = IconArrowLeft;
exports.IconArrowRight = IconArrowRight;
exports.IconArrowUp = IconArrowUp;
exports.IconAttach = IconAttach;
exports.IconAttention = IconAttention;
exports.IconBox = IconBox;
exports.IconBoxNoData = IconBoxNoData;
exports.IconBucket = IconBucket;
exports.IconBurger = IconBurger;
exports.IconCalendar = IconCalendar;
exports.IconCancel = IconCancel;
exports.IconCheckbox = IconCheckbox;
exports.IconCheckboxChecked = IconCheckboxChecked;
exports.IconCheckboxCheckedDisabled = IconCheckboxCheckedDisabled;
exports.IconCheckboxDisabled = IconCheckboxDisabled;
exports.IconCheckboxIndeterminate = IconCheckboxIndeterminate;
exports.IconCheckboxIndeterminateDisabled = IconCheckboxIndeterminateDisabled;
exports.IconChevron = IconChevron;
exports.IconChevronDown = IconChevronDown;
exports.IconChevronLeft = IconChevronLeft;
exports.IconChevronRight = IconChevronRight;
exports.IconChip = IconChip;
exports.IconChipDanger = IconChipDanger;
exports.IconChipWarning = IconChipWarning;
exports.IconClock = IconClock;
exports.IconClose = IconClose;
exports.IconCluster = IconCluster;
exports.IconCode = IconCode;
exports.IconCreateFile = IconCreateFile;
exports.IconCreateFolder = IconCreateFolder;
exports.IconDelete = IconDelete;
exports.IconDocumentCode = IconDocumentCode;
exports.IconDownload = IconDownload;
exports.IconEdit = IconEdit;
exports.IconEyeClosed = IconEyeClosed;
exports.IconEyeOpened = IconEyeOpened;
exports.IconFailed = IconFailed;
exports.IconFile = IconFile;
exports.IconFolder = IconFolder;
exports.IconFolderOpened = IconFolderOpened;
exports.IconGear = IconGear;
exports.IconGeoPin = IconGeoPin;
exports.IconInfo = IconInfo;
exports.IconLink = IconLink;
exports.IconMore = IconMore;
exports.IconMoreBurger = IconMoreBurger;
exports.IconNewWindow = IconNewWindow;
exports.IconOk = IconOk;
exports.IconPlay = IconPlay;
exports.IconRadio = IconRadio;
exports.IconRadioChecked = IconRadioChecked;
exports.IconRadioCheckedDisabled = IconRadioCheckedDisabled;
exports.IconRadioDisabled = IconRadioDisabled;
exports.IconRefresh = IconRefresh;
exports.IconSchema = IconSchema;
exports.IconSearch = IconSearch;
exports.IconSortableAsc = IconSortableAsc;
exports.IconSortableDesc = IconSortableDesc;
exports.IconSpinner = IconSpinner;
exports.IconStop = IconStop;
exports.IconStopped = IconStopped;
exports.IconSuccess = IconSuccess;
exports.IconTask = IconTask;
exports.IconTrash = IconTrash;
exports.IconUser = IconUser;
exports.IconUsers = IconUsers;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputPassword = InputPassword;
exports.LabeledInput = LabeledInput;
exports.LeaderFlag = LeaderFlag;
exports.LeaderFlagSmall = LeaderFlagSmall;
exports.Link = Link;
exports.Markdown = Markdown;
exports.Modal = Modal;
exports.NonIdealState = NonIdealState;
exports.NonIdealStateAction = NonIdealStateAction;
exports.NotificationSplash = NotificationSplash;
exports.NotificationSplashFixed = NotificationSplashFixed;
exports.OverflowList = OverflowList;
exports.PageCard = PageCard;
exports.PageLayout = PageLayout;
exports.PageSection = PageSection;
exports.Pagination = Pagination;
exports.PaginationControlled = PaginationControlled;
exports.PopupBody = PopupBody;
exports.PopupFooter = PopupFooter;
exports.ProgressBar = ProgressBar;
exports.RadioButton = RadioButton;
exports.ResizeSensor = ResizeSensor;
exports.SVGImage = SVGImage;
exports.Scrollbar = Scrollbar;
exports.SideMenu = SideMenu;
exports.Spin = Spin;
exports.SplashError = SplashError;
exports.SplashErrorFatal = SplashErrorFatal;
exports.SplashErrorNetwork = SplashErrorNetwork;
exports.SplashModal = SplashModal;
exports.Switcher = Switcher;
exports.Tabbed = Tabbed;
exports.Table = Table;
exports.Tag = Tag;
exports.TagsList = TagsList;
exports.TarantoolLogoFull = img$14;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TiledList = TiledList;
exports.Tooltip = Tooltip;
exports.UriLabel = UriLabel;
exports.baseFontFamily = baseFontFamily;
exports.colors = colors;
exports.copyToClipboard = copyToClipboard;
exports.iconSize = iconSize;
exports.marginSmall = marginSmall;
exports.monoFontFamily = monoFontFamily;
exports.navItemHeight = navItemHeight;
exports.navWidthCollapsed = navWidthCollapsed;
exports.navWidthExpanded = navWidthExpanded;
exports.splashGenericErrorSvg = img$12;
exports.splashSelectFileSvg = img$13;
exports.styles = styles$1;
exports.textStyles = textStyles;
exports.windowDeadSvg = img$Z;
exports.windowNoNetworkSvg = img$_;
exports.windowShockedSvg = img$Y;
exports.withCopyToClipboard = withCopyToClipboard;
exports.withDropdown = withDropdown;
exports.withTooltip = withTooltip;
exports.zIndex = zIndex;if (window) { window.document.addEventListener('DOMContentLoaded', function(){ const div = document.createElement('div'); div.setAttribute('style', 'display: none; height:0; width: 0; overflow: hidden;');  div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style>\n    .sprite-symbol-usage {display: none;}\n    .sprite-symbol-usage:target {display: inline;}\n  </style><symbol viewBox=\"0 0 14 14\" id=\"-9Dhj4F2VDse9wdQAQcAS\"><path d=\"M13.4531 7.5469a.5468.5468 0 100-1.0938h-1.6042V5.3958h1.6042a.5468.5468 0 100-1.0938h-1.6042V2.698a.5468.5468 0 00-.5469-.547H9.698V.547a.5468.5468 0 10-1.0938 0V2.151H7.5469V.5469a.5468.5468 0 10-1.0938 0V2.151H5.3958V.5469a.5468.5468 0 10-1.0938 0V2.151H2.698a.5468.5468 0 00-.547.5469v1.6042H.547a.5468.5468 0 100 1.0937H2.151v1.0572H.5469a.5468.5468 0 100 1.0938H2.151v1.0573H.5469a.5468.5468 0 100 1.0938H2.151v1.6042c0 .3019.2448.5468.5469.5468h1.6042v1.6041a.5468.5468 0 101.0937 0v-1.6042h1.0572v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.0573v1.6042a.5468.5468 0 101.0938 0v-1.6042h1.604a.5468.5468 0 00.5469-.5469V9.6979h1.6042a.5468.5468 0 100-1.0938h-1.6042V7.5469h1.6042zm-2.6979 3.2083H3.2448V3.2448h7.5105v7.5104h-.0001z\" /></symbol><symbol viewBox=\"0 0 42 8\" id=\"0RPsPwuYUE76NM7S18VDs\"><path d=\"M16.5 5.66h-2.47V1h-1.18v5.64h3.64v-.98zM20.93 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1h-3.74v5.64h3.74v-.98zM25.47 6.64h1.25L24.76 1h-1.39l-1.95 5.64h1.2l.44-1.37h1.98l.43 1.37zm-1.43-4.56h.02l.73 2.3H23.3l.73-2.3zM27.3 1v5.64h2.15c1.7 0 2.7-1.05 2.7-2.84 0-1.8-1-2.8-2.7-2.8H27.3zm1.18.97h.83c1.04 0 1.63.65 1.63 1.83 0 1.22-.57 1.86-1.63 1.86h-.83V1.97zM36.64 5.66h-2.56V4.24h2.41v-.9h-2.4V1.96h2.55V1H32.9v5.64h3.74v-.98zM38.67 1.92h1c.59 0 .95.35.95.9 0 .56-.34.9-.94.9h-1.01v-1.8zm0 2.65h.94l1.05 2.07H42L40.81 4.4a1.66 1.66 0 0 0 1.03-1.6c0-1.12-.75-1.8-2.04-1.8h-2.31v5.64h1.18V4.57zM.89 5.43L0 0l2.44 3.46L4 0l1.56 3.46L8 0l-.89 5.43H.9zM7.1 6.91c0 .28-.2.5-.44.5H1.33C1.1 7.4.9 7.19.9 6.9v-.49H7.1v.5z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"2X2G7Yksx2gNDnNPxfl4F\"><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#D9D9D9\" width=\"16\" height=\"16\" rx=\"2\" /><rect fill=\"#FFF\" x=\"1\" y=\"1\" width=\"14\" height=\"14\" rx=\"1\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"4i2Ss-CF01qICEntc8FhE\"><g opacity=\".65\"><path d=\"M2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" /></g><rect x=\"5\" y=\"2\" width=\"9\" height=\"2\" rx=\"1\" /><rect x=\"5\" y=\"7\" width=\"9\" height=\"2\" rx=\"1\" /><rect x=\"5\" y=\"12\" width=\"9\" height=\"2\" rx=\"1\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"5O5OpYa35BS9toPly-0zW\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 1.5h-4v9h5v1h-5a1 1 0 01-1-1v-9a1 1 0 011-1h5.2l2.8 2.8V7h-1V4.5h-2a1 1 0 01-1-1v-2zm3 8v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-.2-6L7.5 1.7v1.8h1.8z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"5lmrjti5Z8X381eaa3cIQ\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6372H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><circle cx=\"99.5366\" cy=\"134.791\" r=\"9.63877\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M147.73 63.6119L71.3617 142.946l-6.41-6.17L141.32 57.4415l6.41 6.1704z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.31 76.3677c-9.932-5.7545-21.468-9.0486-33.7734-9.0486-18.6783 0-35.584 7.5899-47.8011 19.8538l6.2913 6.2914c10.607-10.6538 25.2884-17.2478 41.5098-17.2478 9.8944 0 19.2154 2.4531 27.3884 6.7844l6.385-6.6332zm7.497 5.0415l-6.212 6.4533c2.35 1.758 4.563 3.6884 6.62 5.7723l6.292-6.2915c-2.099-2.1215-4.337-4.1045-6.7-5.9341zm-21.44 9.4433c-6.048-2.7339-12.762-4.2558-19.8304-4.2558-13.355 0-25.4413 5.4322-34.1698 14.2073l6.2914 6.292c7.1184-7.1657 16.9803-11.602 27.8784-11.602 4.6244 0 9.0614.7986 13.1814 2.2654l6.649-6.9069zm1.702 11.0605l6.259-6.5011c2.346 1.6586 4.537 3.5216 6.547 5.5631l-6.291 6.291c-1.97-2.007-4.154-3.803-6.515-5.353zm-15.953 3.744c-1.807-.344-3.672-.524-5.5794-.524-8.2365 0-15.6887 3.357-21.0628 8.778l6.2915 6.292c3.1813-3.221 7.4084-5.407 12.1305-6.007l8.2202-8.539zm2.656 10.071l6.455-6.707c2.413 1.379 4.614 3.086 6.541 5.062l-6.292 6.292c-1.893-1.961-4.167-3.55-6.704-4.647z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"6KaApau6cEWPukcqsgXxP\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 7c0 .30206-.2448.54688-.5469.54688h-1.6042V8.6041h1.6042c.3021 0 .5469.24491.5469.54687 0 .30206-.2448.54688-.5469.54688h-1.6042V11.302c0 .3021-.2448.5469-.5469.5469H9.69795v1.6042c0 .3021-.24481.5469-.54687.5469-.30207 0-.54688-.2448-.54688-.5469v-1.6042H7.54688v1.6042c0 .3021-.24482.5469-.54688.5469s-.54688-.2448-.54688-.5469v-1.6042H5.3959v1.6042c0 .3021-.24491.5469-.54687.5469-.30206 0-.54688-.2448-.54688-.5469V11.849h-1.6042c-.30206 0-.54687-.2449-.54687-.5468V9.69795H.546875C.244812 9.69795 0 9.45314 0 9.15108c0-.30207.244812-.54688.546875-.54688H2.15108V7.54688H.546875C.244812 7.54688 0 7.30206 0 7s.244812-.54688.546875-.54688H2.15108V5.3959H.546875C.244812 5.3959 0 5.15099 0 4.84903c0-.30206.244812-.54688.546875-.54688H2.15108v-1.6042c0-.30206.24481-.54687.54687-.54687h1.6041V.546875C4.30205.244812 4.54686 0 4.84892 0c.30207 0 .54688.244812.54688.546875V2.15108h1.05732V.546875C6.45312.244812 6.69794 0 7 0s.54688.244812.54688.546875V2.15108H8.6042V.546875C8.6042.244812 8.84901 0 9.15108 0c.30206 0 .54687.244812.54687.546875V2.15108H11.302c.3021 0 .5469.24481.5469.54687v1.6041h1.6042c.3021 0 .5469.24481.5469.54687 0 .30207-.2448.54688-.5469.54688h-1.6042v1.05732h1.6042c.3021 0 .5469.24482.5469.54688zm-3.2447-3.75517H3.24483v7.51037h7.51047V3.24483zM8.8082 4.58892c.16407-.16524.43125-.16524.59649-.00118.16523.16407.16523.43125 0 .59649L7.59531 6.99946l1.81055 1.81641c.16406.16523.16406.43242-.00117.59648-.08203.08203-.18985.12305-.29766.12305-.10781 0-.21679-.04102-.29883-.12422L7 7.59712 5.1918 9.41001c-.08203.0832-.19102.12422-.29883.12422-.10781 0-.21563-.04102-.29766-.12305-.16523-.16406-.16523-.43125-.00117-.59648l1.81055-1.81524-1.81055-1.81523c-.16406-.16524-.16406-.43242.00117-.59649.16524-.16406.43243-.16406.59649.00118L7 6.40181l1.8082-1.81289z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"6e2ONr71_vFDCg21q941g\"><path d=\"M6.653 5.999l2.986-2.984a.46.46 0 10-.652-.651L6 5.346 3.013 2.363a.46.46 0 10-.652.651l2.986 2.984-2.986 2.984a.46.46 0 10.652.652L6 6.65l2.987 2.985a.458.458 0 00.652 0 .46.46 0 000-.651L6.653 5.999z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"A-RnNWyo80T-cREmEySHD\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.333 1.167h9.334c.644 0 1.166.522 1.166 1.166V7c0 .644-.522 1.167-1.166 1.167H2.333A1.167 1.167 0 011.167 7V2.333c0-.644.522-1.166 1.166-1.166zm0 1.166V7h9.334V2.333H2.333zm10.5 7V10.5H1.167V9.333h11.666zm0 2.334v1.166H1.167v-1.166h11.666z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"BoeUBxsEcZ6hJBWkrwknL\"><path d=\"M6 .844a5.126 5.126 0 013.646 1.51A5.13 5.13 0 0111.156 6a5.128 5.128 0 01-1.51 3.646A5.13 5.13 0 016 11.156a5.128 5.128 0 01-3.646-1.51A5.13 5.13 0 01.844 6a5.126 5.126 0 011.51-3.646A5.13 5.13 0 016 .844zM6 0a6 6 0 100 12A6 6 0 106 0zm0 7.5a.469.469 0 01-.469-.469V2.707a.469.469 0 11.938 0v4.324c0 .26-.21.469-.469.469zm-.527 1.277a.527.527 0 101.054 0 .527.527 0 00-1.054 0z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 80 112\" id=\"DCOmxD3YIJPMKanCAfOaP\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.9352 61.2952l-6.661-6.661 3.0994-3.0994 9.7751 9.7751-3.0994 3.0994-.0147-.0147-6.6611 6.661-3.0994-3.0994 6.6611-6.661zM20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4462 61.2952l6.661-6.661-3.0994-3.0994-9.7751 9.7751 3.0994 3.0994.0147-.0147 6.661 6.661 3.0994-3.0994-6.661-6.661zM26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.0165 78.047l22.066-38.2196 6.7533 3.899-22.066 38.2196-6.7533-3.899z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 5.36527C0 2.40211 2.42829 0 5.42373 0H56.9492L80 22.8024v83.8326c0 2.963-2.4283 5.365-5.4237 5.365H5.42373C2.42828 112 0 109.598 0 106.635V5.36527zm50.1695 5.36523V29.509h18.983v71.76h-58.305V10.7305h39.322z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"F2spgCotxV0vEZWUcdaYJ\"><path d=\"M8 1a6.96 6.96 0 0 1 4.95 2.05 6.963 6.963 0 0 1 1.5 2.225c.366.864.55 1.78.55 2.725a6.958 6.958 0 0 1-2.05 4.95 6.962 6.962 0 0 1-2.225 1.5c-.864.366-1.78.55-2.725.55a6.958 6.958 0 0 1-4.95-2.05 6.963 6.963 0 0 1-1.5-2.225A6.946 6.946 0 0 1 1 8a6.96 6.96 0 0 1 2.05-4.95 6.964 6.964 0 0 1 2.225-1.5A6.946 6.946 0 0 1 8 1z\" /><path d=\"M4 9a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2H4z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"GEFQsT0H-4i4D83K3fcjo\">\n    <path d=\"M14.685 3.627A4.486 4.486 0 0 0 11.52 2.33h-.012c-.576 0-1.137.107-1.672.319a4.424 4.424 0 0 0-1.48.967l-4.177 4.13a2.493 2.493 0 0 0-.745 1.793c.002.678.27 1.315.754 1.794a2.567 2.567 0 0 0 1.811.745h.006c.683 0 1.323-.262 1.804-.736l3.666-3.624a.626.626 0 0 0 0-.896.642.642 0 0 0-.904 0l-3.666 3.623a1.27 1.27 0 0 1-.902.366H6a1.295 1.295 0 0 1-.911-.373 1.26 1.26 0 0 1-.377-.9c-.002-.34.13-.657.37-.894l4.177-4.131a3.173 3.173 0 0 1 2.25-.915h.008a3.22 3.22 0 0 1 2.268.927c.602.598.936 1.392.938 2.24a3.102 3.102 0 0 1-.924 2.229l-4.432 4.386a4.72 4.72 0 0 1-3.333 1.353h-.012a4.759 4.759 0 0 1-3.353-1.374 4.636 4.636 0 0 1-1.388-3.314 4.59 4.59 0 0 1 1.37-3.302l5.722-5.658a.626.626 0 0 0 0-.897.644.644 0 0 0-.906-.002l-5.722 5.66A5.85 5.85 0 0 0 0 10.048c.002.773.15 1.526.445 2.239a5.997 5.997 0 0 0 3.31 3.274c.717.288 1.48.435 2.263.439h.016c.779 0 1.534-.143 2.248-.429a5.893 5.893 0 0 0 1.985-1.297L14.7 9.89A4.394 4.394 0 0 0 16 6.758a4.404 4.404 0 0 0-1.315-3.13z\" opacity=\".65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"GOChllBIa2AEneCpmzvIN\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 14s5-5.753 5-8.688C12 2.378 9.761 0 7 0S2 2.378 2 5.313C2 8.247 7 14 7 14zm0-7a2 2 0 100-4 2 2 0 000 4z\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"GXKb2WBGW4bnN53skREa2\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#010101\" fill-opacity=\".45\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"J6PmzEycFDmEiVSaYoL31\">\n    <path d=\"M11.935 6.698a3.034 3.034 0 0 0-.899-.609c.386-.198.717-.487.964-.843.302-.434.462-.94.462-1.467 0-1.44-1.2-2.612-2.677-2.612-.559 0-1.094.166-1.548.48a2.617 2.617 0 0 0-.898 1.07 2.698 2.698 0 0 0-1.961-.834C3.902 1.883 2.7 3.055 2.7 4.496c0 .526.16 1.032.462 1.466.247.356.578.644.964.844-.333.147-.635.351-.899.61a2.916 2.916 0 0 0-.895 2.098v2.14c0 .65.542 1.18 1.21 1.18h3.673c.485 0 .923-.287 1.112-.718h3.297c.665 0 1.209-.528 1.209-1.18v-2.14a2.925 2.925 0 0 0-.899-2.098zM8.562 2.585c.326-.32.76-.495 1.223-.495.463 0 .897.175 1.223.495a1.657 1.657 0 0 1 0 2.387c-.326.32-.76.495-1.223.495-.463 0-.897-.175-1.223-.495a1.652 1.652 0 0 1-.507-1.193c0-.452.18-.876.507-1.194zm-4.916 1.91c0-.451.18-.875.507-1.193.326-.32.76-.495 1.223-.495.464 0 .898.175 1.224.495a1.656 1.656 0 0 1 0 2.387c-.326.32-.76.495-1.224.495-.461 0-.897-.175-1.224-.495a1.658 1.658 0 0 1-.506-1.193zm3.828 7.157a.262.262 0 0 1-.26.255H3.54a.258.258 0 0 1-.261-.255V9.514c0-.544.218-1.057.616-1.445a2.108 2.108 0 0 1 1.481-.602 2.108 2.108 0 0 1 1.5.62l.003.005c.384.384.595.89.595 1.424v2.137zM7.24 7.167a3.022 3.022 0 0 0-.612-.362 2.656 2.656 0 0 0 1.195-1.248c.205.214.445.395.71.531a3.04 3.04 0 0 0-1.293 1.08zm4.643 3.77c0 .14-.117.254-.26.254h-3.2V9.513c0-.588-.177-1.153-.51-1.639a2.107 2.107 0 0 1 1.872-1.125c.558 0 1.084.213 1.482.602.398.388.616.901.616 1.445v2.14z\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"JqW7GcWgnEecM9CuMvf6e\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9.5v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-8-5h9v-1H6c-.36 0-.6-.17-.85-.48L5 2.82c-.19-.25-.3-.32-.49-.32h-3v2zm9 1h-9v4H7v1H1.5a1 1 0 01-1-1v-7a1 1 0 011-1h3c.56 0 .92.24 1.27.69l.16.2c.08.1.1.11.07.11h4.5a1 1 0 011 1v4h-1v-2z\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"Jy7m2vnK7XJtirNVg81Z6\">\n    <path d=\"M5.685 9.647a.463.463 0 0 0 .657 0l2.087-2.088a.463.463 0 0 0-.653-.655L6.478 8.202V.463a.464.464 0 0 0-.927 0v7.739L4.254 6.904a.462.462 0 0 0-.654 0 .464.464 0 0 0-.001.655l2.086 2.088zm5.852-1.927a.464.464 0 0 0-.464.463V10.8a.276.276 0 0 1-.276.276H1.201a.276.276 0 0 1-.276-.276V8.182a.464.464 0 0 0-.925 0v2.985c0 .46.374.832.832.832h10.336c.46 0 .832-.374.832-.832V8.182a.463.463 0 0 0-.463-.462z\" opacity=\".65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"L-5KD0eqwOnYYnm70wUUe\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.727 4.407c.703 0 1.273.58 1.273 1.297l-.015.14-1.26 5.776a1.283 1.283 0 01-1.27 1.213H1.272C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h4.453c.704 0 1.273.58 1.273 1.296v.648zm-1.273 0V3.76H6.997c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v3.17l.018-.085c.18-.738.512-1.14 1.254-1.14h8.91zm-10.166 7.13h10.166l.016-.14 1.242-5.693H2.569c-.01.032-.024.078-.039.14l-1.242 5.693z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"MGVTa2T1dAn2js7LaO3S_\"><path d=\"M11.2063 4.78438C10.9859 4.56563 10.6297 4.56563 10.4109 4.78594L8 7.20312L5.58906 4.78594C5.37031 4.56563 5.01406 4.56563 4.79375 4.78438C4.57344 5.00313 4.57344 5.35938 4.79219 5.57969L7.20625 8L4.79219 10.4203C4.57344 10.6406 4.57344 10.9969 4.79375 11.2156C4.90313 11.325 5.04688 11.3797 5.19063 11.3797C5.33437 11.3797 5.47969 11.325 5.58906 11.2141L8 8.79688L10.4109 11.2156C10.5203 11.3266 10.6656 11.3813 10.8094 11.3813C10.9531 11.3813 11.0969 11.3266 11.2063 11.2172C11.4266 10.9984 11.4266 10.6422 11.2078 10.4219L8.79375 8L11.2063 5.57969C11.4266 5.35938 11.4266 5.00313 11.2063 4.78438ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"N41DVVDCgYjjgeIhu_M5q\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3837 8.3204a.5.5 0 10-.7677-.6408C11.7352 8.7348 10.0268 9.5 7.9999 9.5c-2.027 0-3.7354-.7652-4.6162-1.8204a.5.5 0 10-.7677.6408c.2512.301.5485.577.884.824V10a.5.5 0 001 0v-.2589c.3151.1512.6497.282 1 .3904V11a.5.5 0 001 0v-.6285a8.6184 8.6184 0 001.0002.1145L7.5 10.5v1a.5.5 0 001 0v-1l-.0002-.014A8.6406 8.6406 0 009.5 10.3714V11a.5.5 0 001 0v-.8686a7.3096 7.3096 0 001-.3904V10a.5.5 0 101 0v-.8559c.3354-.2469.6325-.5228.8837-.8237z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"PF6xpmnR1Pd_yrTvyL2j_\"><g clip-path=\"url(#PF6xpmnR1Pd_yrTvyL2j__clip0)\"><path d=\"M13.104 2.375h-.625V1.333h-1.041v1.042H4.563V1.333H3.52v1.042h-.625c-.862 0-1.563.7-1.563 1.562v9.167c0 .862.701 1.563 1.563 1.563h10.208c.862 0 1.563-.701 1.563-1.563V3.937c0-.861-.701-1.562-1.563-1.562zM2.896 3.417h.625v1.041h1.042V3.417h6.875v1.041h1.041V3.417h.625c.287 0 .521.233.521.52v1.25H2.375v-1.25c0-.287.234-.52.52-.52zm10.208 10.208H2.896a.521.521 0 0 1-.521-.52V6.228h11.25v6.875c0 .287-.234.52-.52.52zM9.563 12.53h3.124V9.406H9.563v3.125zm1.041-2.083h1.042v1.041h-1.042v-1.041z\" /></g><defs></defs></symbol><clipPath id=\"PF6xpmnR1Pd_yrTvyL2j__clip0\"><path transform=\"translate(1.333 1.333)\" d=\"M0 0h13.333v13.333H0z\" /></clipPath><symbol viewBox=\"0 0 16 16\" id=\"PRkv-W0ESvGr7gynWjMgu\"><path opacity=\".65\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8738 7.5137a.9998.9998 0 010 .9726C12.7132 10.5718 10.5272 12 8 12c-2.5273 0-4.7133-1.4282-5.8739-3.5137a1 1 0 010-.9726C3.2867 5.4282 5.4727 4 8 4c2.5272 0 4.7132 1.4282 5.8738 3.5137zM8 5c2.1365 0 4.0019 1.2066 5 3-.9981 1.7934-2.8635 3-5 3-2.1366 0-4.002-1.2066-5-3 .998-1.7934 2.8634-3 5-3zm1 3c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1zm1 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"PTniZV8-celIbsvsK7kHJ\"><path d=\"M9.384 8l6.33-6.328a.976.976 0 0 0 0-1.382.974.974 0 0 0-1.382 0L8 6.616 1.668.287a.974.974 0 0 0-1.381 0 .976.976 0 0 0 0 1.382L6.617 8l-6.33 6.33a.976.976 0 0 0 .69 1.668c.251 0 .5-.094.691-.285L8 9.382l6.332 6.332a.97.97 0 0 0 .69.286.976.976 0 0 0 .69-1.668L9.385 8.001z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"PsCTSeLulaaM1VdHaOeI7\">\n<rect x=\"5\" y=\"5\" width=\"6\" height=\"6\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"REtY2PrINEzw1Dp5UdcEw\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.71743 6.94604C7.80755 6.92194 7.90228 6.90909 8 6.90909C8.60249 6.90909 9.09091 7.39751 9.09091 8C9.09091 8.60249 8.60249 9.09091 8 9.09091C7.39751 9.09091 6.90909 8.60249 6.90909 8C6.90909 7.90228 6.92194 7.80755 6.94604 7.71743L4.88703 5.65842L5.65842 4.88703L7.71743 6.94604ZM8.54545 3.12087V5.27273H7.45455V2H8C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 6.38359 2.64289 4.86766 3.76532 3.74941L4.53527 4.52224C3.61627 5.43782 3.09091 6.6766 3.09091 8C3.09091 10.7112 5.28878 12.9091 8 12.9091C10.7112 12.9091 12.9091 10.7112 12.9091 8C12.9091 5.47315 11 3.3922 8.54545 3.12087Z\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"U9nkiumY9GaV8mzQGhH30\"><path d=\"M11.27 5.15l-.04-.28-.86-.29a4.54 4.54 0 0 0-.28-.67l.4-.81-.16-.24a5.48 5.48 0 0 0-1.2-1.2L8.9 1.5l-.81.4a4.6 4.6 0 0 0-.68-.27L7.12.77 6.86.73A5.3 5.3 0 0 0 6 .66c-.26 0-.53.02-.85.07l-.28.04-.28.86a4.75 4.75 0 0 0-.68.28l-.81-.4-.23.16a5.37 5.37 0 0 0-1.2 1.2l-.16.23.4.81c-.1.22-.2.45-.28.68l-.86.28-.04.28a5.3 5.3 0 0 0 0 1.7l.04.28.86.29c.08.23.17.46.28.67l-.4.81.17.23a5.43 5.43 0 0 0 1.2 1.2l.22.16.81-.4c.22.1.44.2.68.28l.28.86.28.04a5.28 5.28 0 0 0 1.7 0l.28-.04.28-.86c.23-.08.46-.17.68-.28l.8.4.24-.16c.25-.18.46-.36.65-.55a5.39 5.39 0 0 0 .55-.65l.16-.23-.4-.81c.1-.22.2-.44.28-.68l.86-.28.04-.28c.05-.31.07-.59.07-.85a4.74 4.74 0 0 0-.07-.85zM10.5 6c0 .16 0 .32-.03.5l-.41.14-.37.12-.11.37c-.07.21-.15.42-.26.62l-.18.34.37.73a4.25 4.25 0 0 1-.32.37l-.37.33-.73-.37-.34.18c-.2.1-.42.19-.63.26l-.37.11-.12.36-.13.42a3.98 3.98 0 0 1-.99 0l-.14-.42-.12-.36-.37-.12a3.52 3.52 0 0 1-.61-.25l-.34-.18-.35.17-.4.2a4.16 4.16 0 0 1-.68-.7l.36-.73-.18-.34a3.6 3.6 0 0 1-.25-.62l-.12-.37-.78-.26a3.99 3.99 0 0 1 0-.98l.78-.26.11-.37c.07-.2.16-.42.26-.62l.18-.34-.17-.34-.2-.4c.2-.25.44-.48.7-.69l.73.37.34-.18c.2-.1.4-.19.62-.26l.37-.11.12-.37.14-.41a4.35 4.35 0 0 1 .98 0l.26.78.37.1c.21.08.42.16.62.27l.34.17.73-.36a4.6 4.6 0 0 1 .7.7l-.36.72.17.34c.1.2.2.42.26.63l.12.37.36.12.41.14c.03.17.04.33.03.48zM6 3.96A2.04 2.04 0 0 0 3.96 6c0 1.13.92 2.04 2.04 2.04A2.04 2.04 0 0 0 8.04 6 2.04 2.04 0 0 0 6 3.96zm.85 2.89A1.2 1.2 0 0 1 6 7.2c-.32 0-.62-.13-.85-.35A1.2 1.2 0 0 1 4.8 6c0-.32.13-.62.36-.85a1.2 1.2 0 0 1 1.69 0 1.2 1.2 0 0 1 0 1.7z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"VEZ-tg0MzgGh6ufgNDtai\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"VVAMTh6tzwmefcAWSKwsg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.1 3.5H5v1H1.5V1h1v1.64A4.46 4.46 0 016 1a5 5 0 11-5 5h1a4 4 0 104-4c-1.2 0-2.22.54-2.9 1.5z\" /></symbol><symbol viewBox=\"0 0 64 41\" id=\"XmgZhfWVlxLR6TR7ur9iV\"><g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\" /><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\" /><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\" /></g></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"Y8371kr80PDwy_vQwWVuS\"><path d=\"M15.17 14.37l-3.21-3.21a6 6 0 1 0-.8.8l3.21 3.2a.56.56 0 0 0 .8 0 .57.57 0 0 0 0-.79zm-5.94-2.54a4.82 4.82 0 0 1-3.8 0A4.86 4.86 0 0 1 3.9 3.89a4.86 4.86 0 1 1 6.89 6.89c-.45.45-.97.8-1.55 1.05z\" /></symbol><symbol viewBox=\"0 0 48 48\" id=\"ZRGe4LETxUzCfgfjPCxww\">\n    <path d=\"M41.494 20.92l-.01-.037-5.259-13.364A1.81 1.81 0 0 0 34.5 6.244H13.181c-.797 0-1.504.53-1.73 1.293L6.535 20.766l-.014.032-.009.038c-.061.23-.08.464-.047.694-.005.075-.01.15-.01.225v17.151c0 1.57 1.28 2.85 2.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V21.755c0-.061 0-.122-.004-.174.019-.23 0-.45-.061-.66zm-13.866-2.015l-.014.735c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.927-.332-2.569-.965-.642-.633-.994-1.514-1.012-2.555l-.014-.735h-9.647l3.726-9.061h18.713l3.83 9.06h-9.399zm-17.578 3.6h7.373c1.14 2.676 3.563 4.256 6.582 4.256 1.58 0 3.047-.44 4.233-1.275 1.04-.731 1.851-1.753 2.376-2.981h7.336v15.651h-27.9V22.505z\" />\n</symbol><symbol viewBox=\"0 0 12 12\" id=\"ZXsUDSdDQG5vqED1zoS4m\">\n    <path d=\"M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0zm3.646 9.646A5.13 5.13 0 0 1 6 11.156a5.128 5.128 0 0 1-3.646-1.51A5.13 5.13 0 0 1 .844 6a5.126 5.126 0 0 1 1.51-3.646A5.13 5.13 0 0 1 6 .844a5.126 5.126 0 0 1 3.646 1.51A5.13 5.13 0 0 1 11.156 6a5.128 5.128 0 0 1-1.51 3.646zm-2.26-1.377h-1V4.166a.422.422 0 0 0-.421-.422H4.84a.422.422 0 1 0 0 .844h.703v3.68h-.998a.422.422 0 1 0 0 .845h2.84a.422.422 0 1 0 0-.844zM5.542 2.584a.422.422 0 1 0 .844 0 .422.422 0 0 0-.844 0z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"_aFIWr7ThjcCrKmntYEEd\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 13.42A6.42 6.42 0 117 .58a6.42 6.42 0 010 12.84zm0-1.17a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM5.66 8.92l-.82.83L2.09 7l2.75-2.75.82.83L3.74 7l1.92 1.92zm2.68-3.84l.82-.83L11.91 7 9.16 9.75l-.82-.83L10.26 7 8.34 5.08zM6.99 10.6l-1.15-.2 1.17-7 1.15.2-1.17 7z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"_zYYpz86MfuyT3GraGXvs\"><path d=\"M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 13.125A6.132 6.132 0 0 1 1.875 8 6.132 6.132 0 0 1 8 1.875 6.132 6.132 0 0 1 14.125 8 6.132 6.132 0 0 1 8 14.125z\" /><path d=\"M8.499 4h-1v4.206l2.646 2.646.707-.707-2.353-2.353V3.999z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"aCw5sF4lcO7G7maDzM1Kt\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.8 1.54v2.28h2.29L8.8 1.54zm2.55 3.55H8.8c-.7 0-1.27-.57-1.27-1.27V1.27h-5.1v11.46h8.92V5.09zM2.44 0h6.63l3.55 3.55v9.18c0 .7-.57 1.27-1.27 1.27H2.44c-.7 0-1.27-.57-1.27-1.27V1.27C1.17.57 1.74 0 2.44 0z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"aSgoY5-sequG9il6zFkPr\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"bkFN9WpORTsnE0MrBzzLn\"><circle cx=\"2\" cy=\"8\" r=\"2\" /><circle cx=\"8\" cy=\"8\" r=\"2\" /><circle cx=\"14\" cy=\"8\" r=\"2\" /></symbol><symbol viewBox=\"0 0 128 128\" id=\"cilzKt-m9zHJQjcgCPRbw\"><g><circle cx=\"16\" cy=\"64\" r=\"16\" /><circle cx=\"16\" cy=\"64\" r=\"14.34\" transform=\"rotate(45 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"12.53\" transform=\"rotate(90 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.75\" transform=\"rotate(135 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"10.06\" transform=\"rotate(180 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"8.06\" transform=\"rotate(225 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"6.44\" transform=\"rotate(270 64 64)\" /><circle cx=\"16\" cy=\"64\" r=\"5.38\" transform=\"rotate(315 64 64)\" /><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"720ms\" repeatCount=\"indefinite\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"dEsZwubG8SlPZTfXCFlJb\"><rect width=\"16\" height=\"16\" rx=\"2\" /><path d=\"M5.844 11.57a.47.47 0 0 1-.407-.237L3.57 8.069a.469.469 0 1 1 .815-.465l1.56 2.733L11.7 4.564a.47.47 0 0 1 .664.662l-6.166 6.185-.023.023a.468.468 0 0 1-.331.137z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"dFxywDuQPWe7G2_ZguqJY\">\n    <path d=\"M11.266 0H2.734a.984.984 0 0 0-.984.984v12.032c0 .544.44.984.984.984h8.532c.544 0 .984-.44.984-.984V.984A.984.984 0 0 0 11.266 0zm0 12.893H2.734V9.557c0 .006.006.013.014.013h8.504a.014.014 0 0 0 .014-.013v3.336zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V5.264c0 .007.006.013.014.013h8.504a.014.014 0 0 0 .014-.013V8.6zm0-4.293a.014.014 0 0 0-.014-.014H2.748a.014.014 0 0 0-.014.014V.984h8.532v3.323zm-7.37 6.918a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0zm0-4.293a.492.492 0 1 0 .985 0 .492.492 0 0 0-.985 0z\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"deFFldsLgNnzYWEKsyng5\"><path d=\"M2 10h12V8.67H2V10zm0 2.67h12v-1.34H2v1.34zm0-5.34h12V6H2v1.33zm0-4v1.34h12V3.33H2z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"eT6G-WR_PLWRl8ZmPvHcK\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M121.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.982 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.352-2.796-3.5271-6.787-3.5271-11.975v-9.942H49.9491v-9.913h82.5079v20.503c0 4.726-1.241 8.495-3.723 11.304-2.482 2.811-6.948 4.216-12.152 4.216-5.682 0-10.947-1.398-13.298-4.193z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.6474 27.3276H181.267v-9.0181H55.6474v9.0181zM18.4573 163.966H181.267V45.6371H18.4573V163.966zm4.5358-145.871c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.043-4.5265 4.5631-4.5265zm18.7328 0c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266s-4.5631-2.0266-4.5631-4.5266c0-2.4999 2.043-4.5265 4.5631-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><circle cx=\"130.804\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\" /><circle cx=\"69.6166\" cy=\"83.3527\" r=\"12.5457\" stroke=\"#F5222D\" stroke-width=\"8\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"f6n7lR1i1EKK-ft1-U8qE\"><path d=\"M.76 11.95l3.98-1.68a.56.56 0 00.18-.12l6.72-6.72c.48-.48.48-1.26 0-1.73L10.3.36a1.22 1.22 0 00-1.73 0L1.85 7.08a.54.54 0 00-.12.18L.04 11.24c-.09.23-.02.45.12.6.14.14.37.2.6.11zM9.44 1.22l1.34 1.34-1.05 1.05-1.34-1.34 1.05-1.05zM2.8 7.85l4.73-4.72 1.34 1.34L4.15 9.2l-2.33.99.98-2.33z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"f7ryiCVSUMG-LZpLS27ht\"><path d=\"M7.392 9.142l-2.444 2.446a1.78 1.78 0 0 1-1.266.525c-.479 0-.929-.186-1.266-.525a1.784 1.784 0 0 1-.002-2.532L4.86 6.61a.491.491 0 1 0-.696-.696L1.72 8.36a2.758 2.758 0 0 0-.814 1.963c0 .741.289 1.439.814 1.962a2.767 2.767 0 0 0 1.961.812 2.76 2.76 0 0 0 1.962-.812l2.446-2.446a.491.491 0 1 0-.696-.696zm4.89-7.422a2.778 2.778 0 0 0-3.924 0L5.912 4.166a.491.491 0 1 0 .696.696l2.445-2.446a1.793 1.793 0 0 1 3.059 1.266c0 .478-.186.928-.525 1.266L9.14 7.394a.491.491 0 0 0 .349.84.493.493 0 0 0 .348-.144l2.446-2.446a2.777 2.777 0 0 0-.001-3.924zM6.639 8.087l1.394-1.395a.491.491 0 1 0-.696-.695L5.942 7.39a.491.491 0 1 0 .696.696z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"fUN8ZuF6ZUOlfETm4B5N8\"><path d=\"M3.5 0h9.1c.773 0 1.4.632 1.4 1.412v1.413c0 .78-.627 1.412-1.4 1.412h-.056l-.644 7.767c0 .78-.627 1.413-1.4 1.413h-7c-.773 0-1.4-.633-1.398-1.354l-.646-7.826H1.4c-.773 0-1.4-.632-1.4-1.412V1.412C0 .632.627 0 1.4 0h2.1zm0 1.412H1.4v1.413h11.2V1.412H3.5zm-.64 2.825l.64 7.767h7l.002-.058.637-7.71H2.861z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 24 24\" id=\"fiZeHURsmBnT8qaByu0jM\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#EFEFEF\" /><path d=\"M15.959 14.412c-.196 0-.392-.025-.583-.073-1.15-.29-2.095-1.147-2.44-2.277v-.055a3.869 3.869 0 0 1 2.209-2.142c.26-.096.536-.144.814-.144 1.294 0 2.358 1.058 2.358 2.345a2.363 2.363 0 0 1-2.358 2.346zm-4.894-2.35c-.345 1.13-1.29 1.987-2.44 2.277-.19.048-.387.073-.583.073-1.294 0-2.359-1.06-2.359-2.346 0-1.287 1.065-2.345 2.359-2.345.278 0 .554.048.815.144a3.867 3.867 0 0 1 2.208 2.142v.055zM15.979 8c-.467 0-.928.08-1.366.238a5.332 5.332 0 0 0-2.614 1.973 5.324 5.324 0 0 0-2.611-1.973A4.037 4.037 0 0 0 8.022 8C5.816 8 4 9.806 4 12s1.816 4 4.022 4c.234 0 .467-.02.698-.06l.286-.068A5.674 5.674 0 0 0 12 13.71a5.67 5.67 0 0 0 2.994 2.162l.287.068c.23.04.464.06.697.061C18.184 16 20 14.194 20 12s-1.816-4-4.021-4z\" fill=\"#FF272C\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 154 28\" id=\"fnariZGW9B0QC2z4Aq1I9\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.983 21.023h1.998v-2.501h-1.723c-1.574 0-2.274-.576-2.274-1.826v-5.979h3.997V8.266h-3.997V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.65 4.327 4.622 4.327zm10.099.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.723-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.097 4.153zm11.812 2.226h-2.623V8.266h2.623v1.726c.949-1.201 2.173-1.726 3.996-1.726h1.05v2.451h-1.05c-2.373 0-3.996 1.476-3.996 3.677v6.629zm12.189.325c1.748 0 3.222-.65 4.296-1.726v1.401h2.623V8.266h-2.623v1.4c-1.074-1.075-2.548-1.725-4.296-1.725-3.722 0-6.595 2.901-6.595 6.703 0 3.803 2.873 6.704 6.595 6.704zm.225-2.551c-2.349 0-4.072-1.726-4.072-4.153 0-2.426 1.724-4.152 4.072-4.152 2.398 0 4.096 1.751 4.096 4.152 0 2.402-1.698 4.153-4.096 4.153zm11.812 2.226h-2.623V8.266h2.623v1.276c.874-.926 2.173-1.601 3.897-1.601 3.172 0 5.321 2.35 5.321 5.853v7.23h-2.623v-7.155c0-2.076-1.249-3.377-3.123-3.377-1.973 0-3.472 1.476-3.472 3.277v7.254zm17.409 0h1.998v-2.501h-1.723c-1.574 0-2.273-.576-2.273-1.826v-5.979h3.996V8.266h-3.996V3.013h-2.623v5.253h-2.373v2.451h2.373v5.979c0 2.801 1.648 4.327 4.621 4.327zm16.59-6.378c0 3.752-3.022 6.703-6.819 6.703s-6.82-2.951-6.82-6.703c0-3.753 3.023-6.704 6.82-6.704s6.819 2.951 6.819 6.704zm-10.891 0c0 2.4 1.723 4.152 4.072 4.152 2.348 0 4.071-1.751 4.071-4.152 0-2.402-1.723-4.153-4.071-4.153-2.349 0-4.072 1.751-4.072 4.152zm19.22 6.703c3.797 0 6.821-2.951 6.821-6.703 0-3.753-3.024-6.704-6.821-6.704-3.797 0-6.82 2.951-6.82 6.704 0 3.752 3.023 6.703 6.82 6.703zm0-2.551c-2.348 0-4.072-1.751-4.072-4.152 0-2.402 1.724-4.153 4.072-4.153s4.073 1.751 4.073 4.152c0 2.402-1.725 4.153-4.073 4.153zM154 21.023h-2.623V3.013H154v18.01z\" fill=\"#fff\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.49 1.37c.927.606 2.564 2.025 4.321 3.784 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-1.761 1.764-3.402 3.186-4.328 3.79a8.095 8.095 0 0 1-9.075-.046c-.936-.626-2.541-2.022-4.26-3.744-1.754-1.756-3.169-3.392-3.776-4.321a8.126 8.126 0 0 1-.12-8.852c.52-.883 2.013-2.63 3.895-4.514 1.883-1.885 3.627-3.38 4.51-3.902a8.096 8.096 0 0 1 8.833.118z\" fill=\"url(#fnariZGW9B0QC2z4Aq1I9_paint0_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.473 3.896c.742.485 2.052 1.62 3.457 3.027 1.379 1.38 2.495 2.669 2.994 3.418a6.499 6.499 0 0 1 .033 7.265c-.482.742-1.618 2.056-3.027 3.468-1.409 1.41-2.722 2.548-3.462 3.03a6.476 6.476 0 0 1-7.26-.035c-.75-.502-2.033-1.618-3.409-2.995-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613s2.902-2.703 3.607-3.121a6.477 6.477 0 0 1 7.067.094z\" fill=\"url(#fnariZGW9B0QC2z4Aq1I9_paint1_radial)\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.283 4.632c.175.17.35.345.528.522 1.723 1.726 3.12 3.336 3.743 4.273a8.124 8.124 0 0 1 .04 9.081c-.602.927-2.021 2.57-3.783 4.334-.177.178-.353.352-.528.522a36.963 36.963 0 0 1-2.484-2.29c-1.403-1.405-2.534-2.714-3.02-3.458a6.5 6.5 0 0 1-.097-7.08c.418-.707 1.611-2.105 3.117-3.613a36.989 36.989 0 0 1 2.484-2.29z\" fill=\"#FF0D2A\" /><defs></defs></symbol><radialGradient id=\"fnariZGW9B0QC2z4Aq1I9_paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(-28.3546 0 0 -28.3933 28.172 14.677)\"><stop offset=\".373\" stop-color=\"#FF0D0D\" stop-opacity=\".51\" /><stop offset=\"1\" stop-color=\"#FF0D2A\" /></radialGradient><radialGradient id=\"fnariZGW9B0QC2z4Aq1I9_paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(20.778 0 0 20.8063 17.208 13.944)\"><stop offset=\".33\" stop-color=\"red\" stop-opacity=\".38\" /><stop offset=\"1\" stop-color=\"#FF001F\" stop-opacity=\".88\" /></radialGradient><symbol viewBox=\"0 0 16 16\" id=\"gUhBeIW8MfwouAp8ER7KF\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#fff\" stroke=\"#D9D9D9\" /><path d=\"M5 5h6v6H5z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"hN-BUx5W6ZqIglvODW4zr\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 35 35\" id=\"hOdtBljIku0YCYuQr3g47\"><g clip-path=\"url(#clip0)\"><path d=\"M30.6 7.84L23.07.31c-.2-.2-.47-.31-.75-.31H5.15C4.57 0 4.1.48 4.1 1.06v32.88c0 .58.48 1.06 1.06 1.06h24.7c.58 0 1.06-.48 1.06-1.06V8.59c0-.28-.11-.55-.31-.75zm-7.22-4.22l3.9 3.91h-3.9v-3.9zM6.22 32.88V2.12h15.03V8.6c0 .59.48 1.06 1.07 1.06h6.46v23.23H6.22z\" /><path d=\"M23.2 15.79a1.06 1.06 0 10-1.5 1.5l1.96 1.95-1.95 1.95a1.06 1.06 0 001.5 1.5l2.7-2.7c.41-.42.41-1.09 0-1.5l-2.7-2.7zM13.3 15.79a1.06 1.06 0 00-1.5 0l-2.7 2.7a1.06 1.06 0 000 1.5l2.7 2.7c.2.2.47.31.74.31.94 0 1.43-1.14.75-1.81l-1.95-1.95 1.95-1.95c.42-.42.42-1.09 0-1.5zM19.46 13.8c-.55-.2-1.16.09-1.36.64l-3.2 8.88a1.06 1.06 0 002 .72l3.2-8.88c.2-.55-.09-1.16-.64-1.36z\" /></g></symbol><symbol viewBox=\"0 0 16 16\" id=\"izQAK1XsPSGWJ_0j1UlT2\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"7.5\" fill=\"#fff\" /><rect x=\"4\" y=\"4\" width=\"8\" height=\"8\" rx=\"4\" stroke=\"rgba(0,0,0,0)\" /></symbol><symbol viewBox=\"0 0 12 12\" id=\"jn-gHg517nhkv9CG5XFcz\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 8v2c0 .58-.42 1-1 1H2c-.58 0-1-.42-1-1V5c0-.58.42-1 1-1h2V2c0-.58.42-1 1-1h5c.58 0 1 .42 1 1v5c0 .58-.42 1-1 1H8zM7 8H5c-.58 0-1-.42-1-1V5H2v5h5V8zM5 2v5h5V2H5z\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"kA80nK0ijr_3cx4DRaha1\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.273 6.352v5.185h11.454V6.352H1.273zm0-1.296h11.454V3.759h-5.73c-.457-.002-.755-.22-1.075-.624-.044-.056-.185-.241-.206-.27-.239-.306-.38-.402-.625-.402H1.273v2.593zm11.454-2.593c.703 0 1.273.58 1.273 1.296v7.778c0 .716-.57 1.296-1.273 1.296H1.273C.57 12.833 0 12.253 0 11.537V2.463c0-.716.57-1.296 1.273-1.296H5.09c.713 0 1.166.308 1.622.893.03.04.166.219.2.26.1.127.12.143.088.143h5.726z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"kDlciShlFzJNmJM8ix-xe\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.4776 5.30071C12.0871 4.91018 11.4539 4.91018 11.0634 5.30071L7.17529 9.18881L5.28718 7.30071C4.89666 6.91018 4.2635 6.91018 3.87297 7.30071C3.48245 7.69123 3.48245 8.3244 3.87297 8.71492L6.22966 11.0716C6.48604 11.328 6.84699 11.4161 7.17521 11.3358C7.50346 11.4161 7.86448 11.3281 8.12089 11.0716L12.4776 6.71492C12.8681 6.3244 12.8681 5.69123 12.4776 5.30071Z\" fill=\"white\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"kcMfOir1ujQ-KjjEKNbt7\">\n<path d=\"M8 1C8.945 1 9.86136 1.18455 10.7236 1.54886C11.5573 1.90205 12.305 2.40636 12.9493 3.04909C13.592 3.69182 14.098 4.44114 14.4495 5.27477C14.8155 6.13864 15 7.055 15 8C15 8.945 14.8155 9.86136 14.4511 10.7236C14.098 11.5573 13.5936 12.305 12.9509 12.9493C12.3082 13.592 11.5589 14.098 10.7252 14.4495C9.86136 14.8155 8.945 15 8 15C7.055 15 6.13864 14.8155 5.27636 14.4511C4.44273 14.098 3.695 13.5936 3.05068 12.9509C2.40795 12.3082 1.90205 11.5589 1.55045 10.7252C1.18455 9.86136 1 8.945 1 8C1 7.055 1.18455 6.13864 1.54886 5.27636C1.90205 4.44273 2.40636 3.695 3.04909 3.05068C3.69182 2.40795 4.44114 1.90205 5.27477 1.55045C6.13864 1.18455 7.055 1 8 1Z\" />\n<circle cx=\"8.02079\" cy=\"11.9685\" r=\"1.32987\" fill=\"white\" />\n<rect x=\"6.69092\" y=\"2.66016\" width=\"2.65974\" height=\"6.64935\" rx=\"1.32987\" fill=\"white\" />\n</symbol><symbol viewBox=\"0 0 16 16\" id=\"nSH2qbkdT-QfZ084vaMYN\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"ol2azYs4I1fSGxOEhQlum\">\n<path d=\"M5 4L12 8L5 12V4Z\" fill-opacity=\"0.65\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"oq9WstWxXIZWIuhno-Yg7\"><path fill-rule=\"evenodd\" d=\"M7.017 4.88l4.898 5.44a.547.547 0 0 0 .813-.733l-5.21-5.785a.545.545 0 0 0-.5-.3.545.545 0 0 0-.502.3L1.307 9.587a.547.547 0 0 0 .813.732l4.897-5.44z\" clip-rule=\"evenodd\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 80 80\" id=\"s9RpV1NGzqR9tVcPKvrfW\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 80c22.0914 0 40-17.9086 40-40S62.0914 0 40 0 0 17.9086 0 40s17.9086 40 40 40zm0-10.8475c16.1005 0 29.1525-13.052 29.1525-29.1525S56.1005 10.8475 40 10.8475 10.8475 23.8995 10.8475 40 23.8995 69.1525 40 69.1525z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.4643 58.2169L21.783 27.5357l5.7528-5.7527L58.217 52.4642l-5.7527 5.7527z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.217 27.5357L27.5358 58.217l-5.7528-5.7528L52.4643 21.783l5.7527 5.7527z\" fill=\"#C4C4C4\" /></symbol><symbol viewBox=\"0 0 14 59\" id=\"t59o1gw9U9eK5uQbS5IaT\"><path d=\"M7 56.17L14 59v-3H0v3l7-2.83zM0 0h14v56H0V0z\" /><path d=\"M8.66 33.5v2.47H4v1.18h5.64v-3.64h-.98zM8.66 29.07v2.56H7.24v-2.41h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM9.64 24.53v-1.25L4 25.24v1.39l5.64 1.95v-1.2l-1.37-.44v-1.98l1.37-.43zm-4.56 1.43v-.02l2.3-.73v1.48l-2.3-.73zM4 22.7h5.64v-2.15c0-1.7-1.05-2.7-2.84-2.7-1.8 0-2.8 1-2.8 2.7v2.15zm.97-1.18v-.83c0-1.04.65-1.63 1.83-1.63 1.22 0 1.86.57 1.86 1.63v.83H4.97zM8.66 13.36v2.56H7.24V13.5h-.9v2.4H4.96v-2.55H4v3.74h5.64v-3.74h-.98zM4.92 11.33v-1c0-.59.35-.96.9-.96.56 0 .9.35.9.95v1.01h-1.8zm2.65 0v-.94l2.07-1.05V8L7.4 9.19a1.66 1.66 0 0 0-1.6-1.03c-1.12 0-1.8.75-1.8 2.04v2.31h5.64v-1.18H7.57zM3.89 51.43L3 46l2.44 3.46L7 46l1.56 3.46L11 46l-.89 5.43H3.9zm6.22 1.48c0 .28-.2.5-.44.5H4.33c-.24 0-.44-.22-.44-.5v-.49h6.22v.5z\" fill=\"#fff\" fill-opacity=\".65\" /></symbol><symbol viewBox=\"0 0 14 14\" id=\"t8ckgkVvKFKJR5eICKCFj\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.4531 7.54688C13.7552 7.54688 14 7.30206 14 7s-.2448-.54688-.5469-.54688h-1.6042V5.3958h1.6042c.3021 0 .5469-.24481.5469-.54688 0-.30206-.2448-.54687-.5469-.54687h-1.6042v-1.6041c0-.30206-.2448-.54687-.5469-.54687H9.69795V.54688C9.69795.2448 9.45314 0 9.15108 0c-.30207 0-.54688.24481-.54688.54688v1.6042H7.54688V.54688C7.54688.2448 7.30206 0 7 0s-.54688.24481-.54688.54688v1.6042H5.3958V.54688C5.3958.2448 5.15099 0 4.84892 0c-.30206 0-.54687.24481-.54687.54688v1.6042h-1.6041c-.30206 0-.54687.24481-.54687.54687v1.6042H.54688C.2448 4.30215 0 4.54697 0 4.84903c0 .30196.24481.54687.54688.54687h1.6042v1.05722H.54688C.2448 6.45312 0 6.69794 0 7s.24481.54688.54688.54688h1.6042V8.6042H.54688C.2448 8.6042 0 8.84901 0 9.15108c0 .30206.24481.54687.54688.54687h1.6042v1.60425c0 .3019.24481.5468.54687.5468h1.6042v1.6041c0 .3021.24482.5469.54688.5469.30196 0 .54687-.2448.54687-.5469v-1.6042h1.05722v1.6042c0 .3021.24482.5469.54688.5469s.54688-.2448.54688-.5469v-1.6042H8.6042v1.6042c0 .3021.24481.5469.54688.5469.30206 0 .54687-.2448.54687-.5469v-1.6042H11.302c.3021 0 .5469-.2448.5469-.5469V9.69785h1.6042c.3021 0 .5469-.24482.5469-.54688 0-.30196-.2448-.54687-.5469-.54687h-1.6042V7.54688h1.6042zM3.24483 3.24483h7.51047v7.51037H3.24483V3.24483zm3.75171.70634c.27642 0 .49986.22345.49986.49987v2.99919c0 .27642-.22344.49987-.49986.49987s-.49987-.22395-.49987-.49987V4.45104c0-.27642.22343-.49987.49987-.49987zm-.35439 5.19224c-.045.04498-.07999.09996-.10498.16495-.02498.05998-.03998.12497-.03998.18996 0 .06499.015.12998.03998.18996.02501.05997.05998.11496.10498.16495.05048.045.10497.07999.16495.10497.05997.02498.12445.03998.18944.03998.06499 0 .12998-.015.18996-.03998.05997-.02501.11495-.06.16495-.10497.045-.04999.07999-.10498.10497-.16495.02498-.06.03998-.12497.03998-.18996 0-.06499-.015-.12998-.03998-.18996-.02501-.06497-.05997-.11997-.10497-.16495-.11447-.11449-.28992-.16996-.44939-.13497-.03499.00501-.06496.0145-.09496.03-.03.0105-.06.025-.08499.045-.0222.01109-.04167.02768-.06043.04367-.00657.00559-.01305.01112-.01953.0163z\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"tMNsZ-7g1AggfY7JCeu1g\"><rect width=\"16\" height=\"16\" rx=\"2\" /><path d=\"M5.84 11.57h-.06a.47.47 0 0 1-.34-.24L3.57 8.07a.47.47 0 1 1 .81-.47l1.57 2.74 5.75-5.78a.47.47 0 0 1 .66.67L6.2 11.4l-.02.02a.47.47 0 0 1-.34.14z\" fill=\"#fff\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"tN9Nl8_uS2dLSNc8IjRov\"><rect x=\".5\" y=\".5\" width=\"15\" height=\"15\" rx=\"1.5\" fill=\"#F3F3F3\" stroke=\"#D9D9D9\" /><path d=\"M5 5h6v6H5z\" /></symbol><symbol viewBox=\"0 0 12 14\" id=\"v5BeAnn2yuKGcryG4mDun\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.64 2c.068-.126.165-.258.3-.383C4.276 1.305 4.894 1 6 1s1.724.305 2.06.617c.135.125.232.257.3.383H3.64zM2.57 2c.1-.368.315-.77.69-1.117C3.824.361 4.706 0 6 0c1.294 0 2.176.361 2.74.883.375.347.59.749.69 1.117h1.37c.663 0 1.2.542 1.2 1.21v1.211c0 .669-.537 1.21-1.2 1.21h-.048L10.2 12.29c0 .668-.537 1.21-1.2 1.21H3c-.663 0-1.2-.542-1.198-1.16l-.554-6.708H1.2c-.663 0-1.2-.542-1.2-1.21V3.21C0 2.542.537 2 1.2 2h1.37zM1.2 3.21h9.6v1.211H1.2v-1.21zM3 12.29l-.548-6.658h1.123l.832 6.658H3zm1.583-6.658l.832 6.658h1.17l.832-6.658H4.583zM9 12.29H7.593l.832-6.658h1.123l-.546 6.607-.002.05z\" /></symbol><symbol fill=\"none\" viewBox=\"0 0 200 182\" id=\"v88Qb4LckSN_ZiseHAqTv\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M122.561 139.722c1.066-1.263 1.6-3.034 1.6-5.31v-8.992h-14.173v8.992c0 2.276.577 4.047 1.731 5.31 1.154 1.264 2.983 1.895 5.486 1.895 2.504 0 4.289-.631 5.356-1.895zm-18.277 7.615c-2.351-2.795-3.527-6.787-3.527-11.975v-9.942H50.9492v-9.913h82.5078v20.503c0 4.726-1.241 8.495-3.722 11.305-2.482 2.81-6.949 4.215-12.152 4.215-5.683 0-10.948-1.398-13.299-4.193z\" fill=\"#F5222D\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.6472 27.3276H182.267v-9.0181H56.6472v9.0181zM19.457 163.966h162.81V45.6372H19.457V163.966zm4.5362-145.871c2.5201 0 4.563 2.0266 4.563 4.5265 0 2.5-2.0429 4.5266-4.563 4.5266-2.5202 0-4.5631-2.0266-4.5631-4.5266 0-2.4999 2.0429-4.5265 4.5631-4.5265zm18.7326 0c2.5201 0 4.5631 2.0266 4.5631 4.5265 0 2.5-2.043 4.5266-4.5631 4.5266-2.5201 0-4.563-2.0266-4.563-4.5266 0-2.4999 2.0429-4.5265 4.563-4.5265zM9.30083 0C4.19477 0 0 3.96389 0 9.02305V172.928C0 177.985 4.19477 182 9.30083 182H190.639c5.109 0 9.361-4.015 9.361-9.072V9.02305C200 3.96389 195.748 0 190.639 0H9.30083z\" fill=\"#C4C4C4\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.7918 90.408l-9.5528-9.5575 9.551-9.5534-6.3707-6.3632-9.5517 9.5522-9.5503-9.5522-6.3681 6.3632 9.5524 9.5577-9.5524 9.5532 6.3681 6.3684 9.5503-9.5527 9.5552 9.5527 6.369-6.3684zM151.471 90.408l-9.552-9.5575 9.551-9.5534-6.371-6.3632-9.552 9.5522-9.55-9.5522-6.368 6.3632 9.552 9.5577-9.552 9.5532 6.368 6.3684 9.55-9.5527 9.555 9.5527 6.369-6.3684z\" fill=\"#F5222D\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"wmRqhhXDmGYMNZJHEXdnq\"><rect y=\"3\" width=\"16\" height=\"2\" rx=\"1\" /><rect y=\"7\" width=\"11\" height=\"2\" rx=\"1\" /><rect y=\"11\" width=\"7\" height=\"2\" rx=\"1\" /></symbol><symbol viewBox=\"0 0 16 16\" id=\"xqiHCNN1WAH9qq_cyYVKW\">\n<path d=\"M11.2703 4.775L6.15313 9.90781L4.81875 7.57188C4.66406 7.30156 4.32188 7.20781 4.05156 7.3625C3.78125 7.51719 3.6875 7.85938 3.84219 8.12969L5.54219 11.1062C5.64531 11.2875 5.83594 11.3906 6.03125 11.3906C6.12656 11.3906 6.22188 11.3672 6.30938 11.3172C6.35938 11.2875 6.40469 11.2531 6.44219 11.2125C6.44375 11.2109 6.44688 11.2078 6.44844 11.2063L12.0656 5.57188C12.2844 5.35156 12.2844 4.99531 12.0641 4.77656C11.8453 4.55469 11.4906 4.55469 11.2703 4.775ZM8 0C3.58125 0 0 3.58125 0 8C0 12.4188 3.58125 16 8 16C12.4188 16 16 12.4188 16 8C16 3.58125 12.4188 0 8 0ZM12.8609 12.8609C12.2297 13.4922 11.4938 13.9891 10.675 14.3344C9.82813 14.6938 8.92813 14.875 8 14.875C7.07188 14.875 6.17188 14.6938 5.325 14.3359C4.50625 13.9891 3.77188 13.4938 3.13906 12.8625C2.50781 12.2313 2.01094 11.4953 1.66562 10.6766C1.30625 9.82812 1.125 8.92813 1.125 8C1.125 7.07188 1.30625 6.17188 1.66406 5.325C2.01094 4.50625 2.50625 3.77188 3.1375 3.13906C3.76875 2.50781 4.50469 2.01094 5.32344 1.66562C6.17188 1.30625 7.07188 1.125 8 1.125C8.92813 1.125 9.82813 1.30625 10.675 1.66406C11.4938 2.01094 12.2281 2.50625 12.8609 3.1375C13.4922 3.76875 13.9891 4.50469 14.3344 5.32344C14.6938 6.17188 14.875 7.07188 14.875 8C14.875 8.92813 14.6938 9.82813 14.3359 10.675C13.9891 11.4938 13.4938 12.2297 12.8609 12.8609Z\" />\n</symbol><symbol viewBox=\"0 0 14 14\" id=\"y4sjlvTBhiYDgJ0_B-Q_J\"><path d=\"M12.436 6.298h-9.15c-.003 0-.004-.003-.003-.003l3.452-3.318a.701.701 0 1 0-.973-1.011L1.063 6.482a.705.705 0 0 0 0 1.01l4.725 4.542a.699.699 0 0 0 .992-.02.702.702 0 0 0-.02-.991L3.31 7.705c-.002-.002 0-.003.002-.003h9.14a.702.702 0 0 0 .701-.659.712.712 0 0 0-.716-.745z\" /></symbol></defs><use id=\"-9Dhj4F2VDse9wdQAQcAS-usage\" xlink:href=\"#-9Dhj4F2VDse9wdQAQcAS\" class=\"sprite-symbol-usage\" /><use id=\"0RPsPwuYUE76NM7S18VDs-usage\" xlink:href=\"#0RPsPwuYUE76NM7S18VDs\" class=\"sprite-symbol-usage\" /><use id=\"2X2G7Yksx2gNDnNPxfl4F-usage\" xlink:href=\"#2X2G7Yksx2gNDnNPxfl4F\" class=\"sprite-symbol-usage\" /><use id=\"4i2Ss-CF01qICEntc8FhE-usage\" xlink:href=\"#4i2Ss-CF01qICEntc8FhE\" class=\"sprite-symbol-usage\" /><use id=\"5O5OpYa35BS9toPly-0zW-usage\" xlink:href=\"#5O5OpYa35BS9toPly-0zW\" class=\"sprite-symbol-usage\" /><use id=\"5lmrjti5Z8X381eaa3cIQ-usage\" xlink:href=\"#5lmrjti5Z8X381eaa3cIQ\" class=\"sprite-symbol-usage\" /><use id=\"6KaApau6cEWPukcqsgXxP-usage\" xlink:href=\"#6KaApau6cEWPukcqsgXxP\" class=\"sprite-symbol-usage\" /><use id=\"6e2ONr71_vFDCg21q941g-usage\" xlink:href=\"#6e2ONr71_vFDCg21q941g\" class=\"sprite-symbol-usage\" /><use id=\"A-RnNWyo80T-cREmEySHD-usage\" xlink:href=\"#A-RnNWyo80T-cREmEySHD\" class=\"sprite-symbol-usage\" /><use id=\"BoeUBxsEcZ6hJBWkrwknL-usage\" xlink:href=\"#BoeUBxsEcZ6hJBWkrwknL\" class=\"sprite-symbol-usage\" /><use id=\"DCOmxD3YIJPMKanCAfOaP-usage\" xlink:href=\"#DCOmxD3YIJPMKanCAfOaP\" class=\"sprite-symbol-usage\" /><use id=\"F2spgCotxV0vEZWUcdaYJ-usage\" xlink:href=\"#F2spgCotxV0vEZWUcdaYJ\" class=\"sprite-symbol-usage\" /><use id=\"GEFQsT0H-4i4D83K3fcjo-usage\" xlink:href=\"#GEFQsT0H-4i4D83K3fcjo\" class=\"sprite-symbol-usage\" /><use id=\"GOChllBIa2AEneCpmzvIN-usage\" xlink:href=\"#GOChllBIa2AEneCpmzvIN\" class=\"sprite-symbol-usage\" /><use id=\"GXKb2WBGW4bnN53skREa2-usage\" xlink:href=\"#GXKb2WBGW4bnN53skREa2\" class=\"sprite-symbol-usage\" /><use id=\"J6PmzEycFDmEiVSaYoL31-usage\" xlink:href=\"#J6PmzEycFDmEiVSaYoL31\" class=\"sprite-symbol-usage\" /><use id=\"JqW7GcWgnEecM9CuMvf6e-usage\" xlink:href=\"#JqW7GcWgnEecM9CuMvf6e\" class=\"sprite-symbol-usage\" /><use id=\"Jy7m2vnK7XJtirNVg81Z6-usage\" xlink:href=\"#Jy7m2vnK7XJtirNVg81Z6\" class=\"sprite-symbol-usage\" /><use id=\"L-5KD0eqwOnYYnm70wUUe-usage\" xlink:href=\"#L-5KD0eqwOnYYnm70wUUe\" class=\"sprite-symbol-usage\" /><use id=\"MGVTa2T1dAn2js7LaO3S_-usage\" xlink:href=\"#MGVTa2T1dAn2js7LaO3S_\" class=\"sprite-symbol-usage\" /><use id=\"N41DVVDCgYjjgeIhu_M5q-usage\" xlink:href=\"#N41DVVDCgYjjgeIhu_M5q\" class=\"sprite-symbol-usage\" /><use id=\"PF6xpmnR1Pd_yrTvyL2j_-usage\" xlink:href=\"#PF6xpmnR1Pd_yrTvyL2j_\" class=\"sprite-symbol-usage\" /><use id=\"PRkv-W0ESvGr7gynWjMgu-usage\" xlink:href=\"#PRkv-W0ESvGr7gynWjMgu\" class=\"sprite-symbol-usage\" /><use id=\"PTniZV8-celIbsvsK7kHJ-usage\" xlink:href=\"#PTniZV8-celIbsvsK7kHJ\" class=\"sprite-symbol-usage\" /><use id=\"PsCTSeLulaaM1VdHaOeI7-usage\" xlink:href=\"#PsCTSeLulaaM1VdHaOeI7\" class=\"sprite-symbol-usage\" /><use id=\"REtY2PrINEzw1Dp5UdcEw-usage\" xlink:href=\"#REtY2PrINEzw1Dp5UdcEw\" class=\"sprite-symbol-usage\" /><use id=\"U9nkiumY9GaV8mzQGhH30-usage\" xlink:href=\"#U9nkiumY9GaV8mzQGhH30\" class=\"sprite-symbol-usage\" /><use id=\"VEZ-tg0MzgGh6ufgNDtai-usage\" xlink:href=\"#VEZ-tg0MzgGh6ufgNDtai\" class=\"sprite-symbol-usage\" /><use id=\"VVAMTh6tzwmefcAWSKwsg-usage\" xlink:href=\"#VVAMTh6tzwmefcAWSKwsg\" class=\"sprite-symbol-usage\" /><use id=\"XmgZhfWVlxLR6TR7ur9iV-usage\" xlink:href=\"#XmgZhfWVlxLR6TR7ur9iV\" class=\"sprite-symbol-usage\" /><use id=\"Y8371kr80PDwy_vQwWVuS-usage\" xlink:href=\"#Y8371kr80PDwy_vQwWVuS\" class=\"sprite-symbol-usage\" /><use id=\"ZRGe4LETxUzCfgfjPCxww-usage\" xlink:href=\"#ZRGe4LETxUzCfgfjPCxww\" class=\"sprite-symbol-usage\" /><use id=\"ZXsUDSdDQG5vqED1zoS4m-usage\" xlink:href=\"#ZXsUDSdDQG5vqED1zoS4m\" class=\"sprite-symbol-usage\" /><use id=\"_aFIWr7ThjcCrKmntYEEd-usage\" xlink:href=\"#_aFIWr7ThjcCrKmntYEEd\" class=\"sprite-symbol-usage\" /><use id=\"_zYYpz86MfuyT3GraGXvs-usage\" xlink:href=\"#_zYYpz86MfuyT3GraGXvs\" class=\"sprite-symbol-usage\" /><use id=\"aCw5sF4lcO7G7maDzM1Kt-usage\" xlink:href=\"#aCw5sF4lcO7G7maDzM1Kt\" class=\"sprite-symbol-usage\" /><use id=\"aSgoY5-sequG9il6zFkPr-usage\" xlink:href=\"#aSgoY5-sequG9il6zFkPr\" class=\"sprite-symbol-usage\" /><use id=\"bkFN9WpORTsnE0MrBzzLn-usage\" xlink:href=\"#bkFN9WpORTsnE0MrBzzLn\" class=\"sprite-symbol-usage\" /><use id=\"cilzKt-m9zHJQjcgCPRbw-usage\" xlink:href=\"#cilzKt-m9zHJQjcgCPRbw\" class=\"sprite-symbol-usage\" /><use id=\"dEsZwubG8SlPZTfXCFlJb-usage\" xlink:href=\"#dEsZwubG8SlPZTfXCFlJb\" class=\"sprite-symbol-usage\" /><use id=\"dFxywDuQPWe7G2_ZguqJY-usage\" xlink:href=\"#dFxywDuQPWe7G2_ZguqJY\" class=\"sprite-symbol-usage\" /><use id=\"deFFldsLgNnzYWEKsyng5-usage\" xlink:href=\"#deFFldsLgNnzYWEKsyng5\" class=\"sprite-symbol-usage\" /><use id=\"eT6G-WR_PLWRl8ZmPvHcK-usage\" xlink:href=\"#eT6G-WR_PLWRl8ZmPvHcK\" class=\"sprite-symbol-usage\" /><use id=\"f6n7lR1i1EKK-ft1-U8qE-usage\" xlink:href=\"#f6n7lR1i1EKK-ft1-U8qE\" class=\"sprite-symbol-usage\" /><use id=\"f7ryiCVSUMG-LZpLS27ht-usage\" xlink:href=\"#f7ryiCVSUMG-LZpLS27ht\" class=\"sprite-symbol-usage\" /><use id=\"fUN8ZuF6ZUOlfETm4B5N8-usage\" xlink:href=\"#fUN8ZuF6ZUOlfETm4B5N8\" class=\"sprite-symbol-usage\" /><use id=\"fiZeHURsmBnT8qaByu0jM-usage\" xlink:href=\"#fiZeHURsmBnT8qaByu0jM\" class=\"sprite-symbol-usage\" /><use id=\"fnariZGW9B0QC2z4Aq1I9-usage\" xlink:href=\"#fnariZGW9B0QC2z4Aq1I9\" class=\"sprite-symbol-usage\" /><use id=\"gUhBeIW8MfwouAp8ER7KF-usage\" xlink:href=\"#gUhBeIW8MfwouAp8ER7KF\" class=\"sprite-symbol-usage\" /><use id=\"hN-BUx5W6ZqIglvODW4zr-usage\" xlink:href=\"#hN-BUx5W6ZqIglvODW4zr\" class=\"sprite-symbol-usage\" /><use id=\"hOdtBljIku0YCYuQr3g47-usage\" xlink:href=\"#hOdtBljIku0YCYuQr3g47\" class=\"sprite-symbol-usage\" /><use id=\"izQAK1XsPSGWJ_0j1UlT2-usage\" xlink:href=\"#izQAK1XsPSGWJ_0j1UlT2\" class=\"sprite-symbol-usage\" /><use id=\"jn-gHg517nhkv9CG5XFcz-usage\" xlink:href=\"#jn-gHg517nhkv9CG5XFcz\" class=\"sprite-symbol-usage\" /><use id=\"kA80nK0ijr_3cx4DRaha1-usage\" xlink:href=\"#kA80nK0ijr_3cx4DRaha1\" class=\"sprite-symbol-usage\" /><use id=\"kDlciShlFzJNmJM8ix-xe-usage\" xlink:href=\"#kDlciShlFzJNmJM8ix-xe\" class=\"sprite-symbol-usage\" /><use id=\"kcMfOir1ujQ-KjjEKNbt7-usage\" xlink:href=\"#kcMfOir1ujQ-KjjEKNbt7\" class=\"sprite-symbol-usage\" /><use id=\"nSH2qbkdT-QfZ084vaMYN-usage\" xlink:href=\"#nSH2qbkdT-QfZ084vaMYN\" class=\"sprite-symbol-usage\" /><use id=\"ol2azYs4I1fSGxOEhQlum-usage\" xlink:href=\"#ol2azYs4I1fSGxOEhQlum\" class=\"sprite-symbol-usage\" /><use id=\"oq9WstWxXIZWIuhno-Yg7-usage\" xlink:href=\"#oq9WstWxXIZWIuhno-Yg7\" class=\"sprite-symbol-usage\" /><use id=\"s9RpV1NGzqR9tVcPKvrfW-usage\" xlink:href=\"#s9RpV1NGzqR9tVcPKvrfW\" class=\"sprite-symbol-usage\" /><use id=\"t59o1gw9U9eK5uQbS5IaT-usage\" xlink:href=\"#t59o1gw9U9eK5uQbS5IaT\" class=\"sprite-symbol-usage\" /><use id=\"t8ckgkVvKFKJR5eICKCFj-usage\" xlink:href=\"#t8ckgkVvKFKJR5eICKCFj\" class=\"sprite-symbol-usage\" /><use id=\"tMNsZ-7g1AggfY7JCeu1g-usage\" xlink:href=\"#tMNsZ-7g1AggfY7JCeu1g\" class=\"sprite-symbol-usage\" /><use id=\"tN9Nl8_uS2dLSNc8IjRov-usage\" xlink:href=\"#tN9Nl8_uS2dLSNc8IjRov\" class=\"sprite-symbol-usage\" /><use id=\"v5BeAnn2yuKGcryG4mDun-usage\" xlink:href=\"#v5BeAnn2yuKGcryG4mDun\" class=\"sprite-symbol-usage\" /><use id=\"v88Qb4LckSN_ZiseHAqTv-usage\" xlink:href=\"#v88Qb4LckSN_ZiseHAqTv\" class=\"sprite-symbol-usage\" /><use id=\"wmRqhhXDmGYMNZJHEXdnq-usage\" xlink:href=\"#wmRqhhXDmGYMNZJHEXdnq\" class=\"sprite-symbol-usage\" /><use id=\"xqiHCNN1WAH9qq_cyYVKW-usage\" xlink:href=\"#xqiHCNN1WAH9qq_cyYVKW\" class=\"sprite-symbol-usage\" /><use id=\"y4sjlvTBhiYDgJ0_B-Q_J-usage\" xlink:href=\"#y4sjlvTBhiYDgJ0_B-Q_J\" class=\"sprite-symbol-usage\" /></svg>";  window.document.body.appendChild(div) }); }
