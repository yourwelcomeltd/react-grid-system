"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ScreenClassContext = exports.NO_PROVIDER_FLAG = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _config = require("../../config");

var _primitives = require("../../primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';
exports.NO_PROVIDER_FLAG = NO_PROVIDER_FLAG;

var ScreenClassContext = /*#__PURE__*/_react.default.createContext(NO_PROVIDER_FLAG);

exports.ScreenClassContext = ScreenClassContext;

var ScreenClassProvider = function ScreenClassProvider(_ref) {
  var useOwnWidth = _ref.useOwnWidth,
      children = _ref.children,
      fallbackScreenClass = _ref.fallbackScreenClass;
  var screenClassRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var detectedScreenClass = (0, _utils.useScreenClass)(screenClassRef, fallbackScreenClass);

  var _getConfiguration = (0, _config.getConfiguration)(),
      defaultScreenClass = _getConfiguration.defaultScreenClass;

  var screenClass = mounted ? detectedScreenClass : fallbackScreenClass || defaultScreenClass;
  (0, _react.useEffect)(function () {
    return setMounted(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(ScreenClassContext.Provider, {
    value: screenClass
  }, useOwnWidth ? /*#__PURE__*/_react.default.createElement(_primitives.Div, {
    ref: useOwnWidth ? screenClassRef : null
  }, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};

ScreenClassProvider.propTypes = {
  /**
   * Children of the ScreenClassProvider.
   * This should be all your child React nodes that are using `react-grid-system`.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Boolean to determine whether own width should be used as source.
   * When provided, the screen class is derived from own dimensions instead of the window.
   */
  useOwnWidth: _propTypes.default.bool,

  /**
   * Screen class to use when it cannot be determined otherwise.
   * Useful for server side rendering.
   */
  fallbackScreenClass: _propTypes.default.oneOf([null, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
};
ScreenClassProvider.defaultProps = {
  useOwnWidth: false,
  fallbackScreenClass: null
};
var _default = ScreenClassProvider;
exports.default = _default;