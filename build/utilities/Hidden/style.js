"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidden = exports.default = void 0;
const hidden = _ref => {
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
exports.hidden = hidden;
var _default = exports.default = hidden;