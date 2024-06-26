"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visible = exports.default = void 0;
const visible = _ref => {
  let {
    screenClass,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl
  } = _ref;
  if (screenClass === 'xxl') return xxl;
  if (screenClass === 'xxxl') return xxxl;
  if (screenClass === 'xl') return xl;
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};
exports.visible = visible;
var _default = exports.default = visible;