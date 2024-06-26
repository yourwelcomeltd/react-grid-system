"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = _interopRequireDefault(require("./style"));
var _config = require("../../config");
var _ScreenClassResolver = _interopRequireDefault(require("../../context/ScreenClassResolver"));
var _primitives = require("../../primitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Container = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children,
    fluid = false,
    xs = false,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    xxl = false,
    xxxl = false,
    style = {},
    component = _primitives.Div,
    nogutter = false,
    gutterWidth = null,
    ...otherProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ScreenClassResolver.default, null, screenClass => /*#__PURE__*/(0, _react.createElement)(component, {
    ref,
    style: (0, _style.default)({
      fluid,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      xxxl,
      screenClass,
      containerWidths: (0, _config.getConfiguration)().containerWidths,
      gutterWidth: nogutter ? 0 : gutterWidth || (0, _config.getConfiguration)().gutterWidth,
      moreStyle: style
    }),
    ...otherProps
  }, children));
});
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
   * This is in combination with fluid enabled
   * True makes container fluid only in xxxl, not present means fluid everywhere
   */
  xxxl: _propTypes.default.bool,
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
Container.displayName = "Container";
var _default = exports.default = Container;