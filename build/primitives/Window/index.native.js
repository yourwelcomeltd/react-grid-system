"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const WindowRef = {
  current: null
};
const {
  width,
  height
} = _reactNative.Dimensions.get('window');
WindowRef.current = {
  innerWidth: width,
  innerHeight: height,
  addEventListener: (___, callback) => {
    _reactNative.Dimensions.addEventListener('change', _ref => {
      let {
        window
      } = _ref;
      const {
        current: Window
      } = WindowRef;
      Window.innerWidth = window.width;
      Window.innerHeight = window.height;
      callback();
    });
  },
  removeEventListener: (___, callback) => {
    _reactNative.Dimensions.removeEventListener('change', callback);
  }
};
var _default = exports.default = WindowRef.current;