"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ScreenClassResolver = _interopRequireDefault(require("../../context/ScreenClassResolver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ScreenClassRender = _ref => {
  let {
    render
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ScreenClassResolver.default, null, screenClass => render(screenClass));
};
ScreenClassRender.propTypes = {
  /**
   * The function which return value will be rendered.
   * Will be called with one argument: the screen class.
   */
  render: _propTypes.default.func.isRequired
};
var _default = exports.default = ScreenClassRender;