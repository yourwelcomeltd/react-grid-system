"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScreenClass = exports.screenClasses = void 0;

var _react = require("react");

var _config = require("./config");

var _primitives = require("./primitives");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getViewPort = function getViewPort(source) {
  if (source && source.current && source.current.clientWidth) {
    return source.current.clientWidth;
  }

  if (typeof _primitives.Window !== 'undefined' && _primitives.Window.innerWidth) {
    return _primitives.Window.innerWidth;
  }

  return null;
};

var screenClasses = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
exports.screenClasses = screenClasses;

var useScreenClass = function useScreenClass(source, fallbackScreenClass) {
  var getScreenClass = function getScreenClass() {
    var _getConfiguration = (0, _config.getConfiguration)(),
        breakpoints = _getConfiguration.breakpoints,
        defaultScreenClass = _getConfiguration.defaultScreenClass,
        maxScreenClass = _getConfiguration.maxScreenClass;

    var newScreenClass = defaultScreenClass;
    var viewport = getViewPort(source);

    if (viewport) {
      newScreenClass = 'xs';
      if (breakpoints[0] && viewport >= breakpoints[0]) newScreenClass = 'sm';
      if (breakpoints[1] && viewport >= breakpoints[1]) newScreenClass = 'md';
      if (breakpoints[2] && viewport >= breakpoints[2]) newScreenClass = 'lg';
      if (breakpoints[3] && viewport >= breakpoints[3]) newScreenClass = 'xl';
      if (breakpoints[4] && viewport >= breakpoints[4]) newScreenClass = 'xxl';
    } else if (fallbackScreenClass) {
      newScreenClass = fallbackScreenClass;
    }

    var newScreenClassIndex = screenClasses.indexOf(newScreenClass);
    var maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);

    if (maxScreenClassIndex >= 0 && newScreenClassIndex > maxScreenClassIndex) {
      newScreenClass = screenClasses[maxScreenClassIndex];
    }

    return newScreenClass;
  };

  var _useState = (0, _react.useState)(getScreenClass()),
      _useState2 = _slicedToArray(_useState, 2),
      screenClass = _useState2[0],
      setScreenClass = _useState2[1];

  (0, _react.useEffect)(function () {
    var handleWindowResized = function handleWindowResized() {
      return setScreenClass(getScreenClass());
    };

    _primitives.Window.addEventListener('resize', handleWindowResized, false);

    return function () {
      _primitives.Window.removeEventListener('resize', handleWindowResized, false);
    };
  }, []);
  return screenClass;
};

exports.useScreenClass = useScreenClass;