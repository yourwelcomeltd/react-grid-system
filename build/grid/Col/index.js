"use strict";

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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Col = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children = null,
    xs = null,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    xxl = null,
    xxxl = null,
    offset = {},
    pull = {},
    push = {},
    order = {},
    debug = false,
    style = {},
    component = _primitives.Div,
    width = null,
    align = 'normal',
    justify = 'start',
    ...otherProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ScreenClassResolver.default, null, screenClass => /*#__PURE__*/_react.default.createElement(_Row.GutterWidthContext.Consumer, null, gutterWidth => {
    const theStyle = (0, _style.default)({
      forceWidth: width,
      width: {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl
      },
      offset,
      pull,
      push,
      order,
      debug,
      screenClass,
      gutterWidth,
      gridColumns: (0, _config.getConfiguration)().gridColumns,
      moreStyle: style,
      align,
      justify
    });
    return /*#__PURE__*/(0, _react.createElement)(component, {
      ref,
      style: theStyle,
      ...otherProps,
      children
    });
  }));
});
Col.propTypes = {
  /**
   * Content of the column
   */
  children: _propTypes.default.node,
  /**
   * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
   */
  xs: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
   */
  sm: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
   */
  md: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
   */
  lg: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
   */
  xl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
  /**
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxxl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["content"])]),
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
    xxl: _propTypes.default.number,
    xxxl: _propTypes.default.number
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
    xxl: _propTypes.default.number,
    xxxl: _propTypes.default.number
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
    xxl: _propTypes.default.number,
    xxxl: _propTypes.default.number
  }),
  /**
   * The order this column is pulled to the left for all screenclasses
   */
  order: _propTypes.default.shape({
    xs: _propTypes.default.number,
    sm: _propTypes.default.number,
    md: _propTypes.default.number,
    lg: _propTypes.default.number,
    xl: _propTypes.default.number,
    xxl: _propTypes.default.number,
    xxxl: _propTypes.default.number
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
Col.displayName = "Col";
var _default = exports.default = Col;