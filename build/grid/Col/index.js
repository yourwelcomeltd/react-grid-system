"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _config = require("../../config");

var _Row = require("../Row");

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

var Col = function Col(_ref) {
  var children = _ref.children,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      xxl = _ref.xxl,
      offset = _ref.offset,
      pull = _ref.pull,
      push = _ref.push,
      debug = _ref.debug,
      style = _ref.style,
      component = _ref.component,
      width = _ref.width,
      align = _ref.align,
      justify = _ref.justify,
      otherProps = _objectWithoutProperties(_ref, ["children", "xs", "sm", "md", "lg", "xl", "xxl", "offset", "pull", "push", "debug", "style", "component", "width", "align", "justify"]);

  return /*#__PURE__*/_react.default.createElement(_ScreenClassResolver.default, null, function (screenClass) {
    return /*#__PURE__*/_react.default.createElement(_Row.GutterWidthContext.Consumer, null, function (gutterWidth) {
      var theStyle = (0, _style.default)({
        forceWidth: width,
        width: {
          xs: xs,
          sm: sm,
          md: md,
          lg: lg,
          xl: xl,
          xxl: xxl
        },
        offset: offset,
        pull: pull,
        push: push,
        debug: debug,
        screenClass: screenClass,
        gutterWidth: gutterWidth,
        gridColumns: (0, _config.getConfiguration)().gridColumns,
        moreStyle: style,
        align: align,
        justify: justify
      });
      return /*#__PURE__*/(0, _react.createElement)(component, _objectSpread(_objectSpread({
        style: theStyle
      }, otherProps), {}, {
        children: children
      }));
    });
  });
};

Col.propTypes = {
  /**
   * Content of the column
   */
  children: _propTypes.default.node,

  /**
   * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
   */
  xs: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
   */
  sm: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
   */
  md: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
   */
  lg: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
   */
  xl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['content'])]),

  /**
   * A fixed width of the column for all screenclasses"
   */
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The offset of this column for all screenclasses
   */
  offset: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number,
    xxl: _propTypes.default.number
  }),

  /**
   * The amount this column is pushed to the right for all screenclasses
   */
  push: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number,
    xxl: _propTypes.default.number
  }),

  /**
   * The amount this column is pulled to the left for all screenclasses
   */
  pull: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number,
    xxl: _propTypes.default.number
  }),

  /**
   * Optional styling
   */
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),

  /**
   * Set to apply some debug styling
   */
  debug: _propTypes.default.bool,

  /**
   * Use your own component
   */
  component: _propTypes.default.elementType,

  /**
   * Vertical alignment
   */
  align: _propTypes.default.oneOf(['normal', 'start', 'center', 'end', 'stretch']),

  /**
   * Horizontal alignment
   */
  justify: _propTypes.default.oneOf(['start', 'center', 'end', 'between', 'around', 'initial', 'inherit'])
};
Col.defaultProps = {
  children: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
  width: null,
  offset: {},
  push: {},
  pull: {},
  style: {},
  debug: false,
  component: _primitives.Div,
  align: 'normal',
  justify: 'start'
};
var _default = Col;
exports.default = _default;