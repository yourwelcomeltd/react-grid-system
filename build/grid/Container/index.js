"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireWildcard(require("./style"));

var _config = require("../../config");

var _ScreenClassResolver = _interopRequireDefault(require("../../context/ScreenClassResolver"));

var _primitives = require("../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      xxl = _ref.xxl,
      style = _ref.style,
      component = _ref.component,
      nogutter = _ref.nogutter,
      gutterWidth = _ref.gutterWidth,
      otherProps = _objectWithoutProperties(_ref, ["children", "fluid", "xs", "sm", "md", "lg", "xl", "xxl", "style", "component", "nogutter", "gutterWidth"]);

  return /*#__PURE__*/_react.default.createElement(_ScreenClassResolver.default, null, function (screenClass) {
    return /*#__PURE__*/(0, _react.createElement)(component, _objectSpread({
      style: (0, _style.default)({
        fluid: fluid,
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
        xxl: xxl,
        screenClass: screenClass,
        containerWidths: (0, _config.getConfiguration)().containerWidths,
        gutterWidth: nogutter ? 0 : gutterWidth || (0, _config.getConfiguration)().gutterWidth,
        moreStyle: style
      })
    }, otherProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, /*#__PURE__*/_react.default.createElement(_primitives.Span, {
      style: (0, _style.getAfterStyle)()
    })));
  });
};

Container.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes.default.node.isRequired,

  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl: _propTypes.default.bool,

  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxl, not present means fluid everywhere
   */
  xxl: _propTypes.default.bool,

  /**
   * Optional styling
   */
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),

  /**
   * Use your own component
   */
  component: _propTypes.default.elementType,

  /**
   * No gutter for this container
   */
  nogutter: _propTypes.default.bool,

  /**
   * Custom gutter width for this container
   */
  gutterWidth: _propTypes.default.number
};
Container.defaultProps = {
  fluid: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
  nogutter: false,
  gutterWidth: null,
  style: {},
  component: _primitives.Div
};
var _default = Container;
exports.default = _default;