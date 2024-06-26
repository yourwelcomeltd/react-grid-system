"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScreenClass = exports.screenClasses = void 0;
var _react = require("react");
var _config = require("./config");
var _primitives = require("./primitives");
/* global window */

const getViewPort = source => {
  if (source && source.current && source.current.clientWidth) {
    return source.current.clientWidth;
  }
  if (typeof _primitives.Window !== 'undefined' && _primitives.Window.innerWidth) {
    return _primitives.Window.innerWidth;
  }
  return null;
};
const screenClasses = exports.screenClasses = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
const useScreenClass = (source, fallbackScreenClass) => {
  const getScreenClass = () => {
    const {
      breakpoints,
      defaultScreenClass,
      maxScreenClass
    } = (0, _config.getConfiguration)();
    let newScreenClass = defaultScreenClass;
    const viewport = getViewPort(source);
    if (viewport) {
      newScreenClass = 'xs';
      if (breakpoints[0] && viewport >= breakpoints[0]) newScreenClass = 'sm';
      if (breakpoints[1] && viewport >= breakpoints[1]) newScreenClass = 'md';
      if (breakpoints[2] && viewport >= breakpoints[2]) newScreenClass = 'lg';
      if (breakpoints[3] && viewport >= breakpoints[3]) newScreenClass = 'xl';
      if (breakpoints[4] && viewport >= breakpoints[4]) newScreenClass = 'xxl';
      if (breakpoints[5] && viewport >= breakpoints[5]) newScreenClass = 'xxxl';
    } else if (fallbackScreenClass) {
      newScreenClass = fallbackScreenClass;
    }
    const newScreenClassIndex = screenClasses.indexOf(newScreenClass);
    const maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);
    if (maxScreenClassIndex >= 0 && newScreenClassIndex > maxScreenClassIndex) {
      newScreenClass = screenClasses[maxScreenClassIndex];
    }
    return newScreenClass;
  };
  const [screenClass, setScreenClass] = (0, _react.useState)(() => getScreenClass());
  (0, _react.useEffect)(() => {
    const handleWindowResized = () => setScreenClass(getScreenClass());
    _primitives.Window.addEventListener('resize', handleWindowResized, false);
    return () => {
      _primitives.Window.removeEventListener('resize', handleWindowResized, false);
    };
  }, []);
  return screenClass;
};
exports.useScreenClass = useScreenClass;