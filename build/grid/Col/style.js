"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../utils");
const hasWidth = widths => Object.keys(widths).reduce((acc, cur) => acc || widths[cur], false);
const getWidth = (width, gridColumns) => {
  if (typeof width !== 'number') return undefined;
  const normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return `${100 / gridColumns * normalizedWidth}%`;
};
var _default = _ref => {
  let {
    forceWidth = null,
    width = {},
    offset = {},
    pull = {},
    push = {},
    order = {},
    debug,
    screenClass,
    gutterWidth,
    moreStyle,
    gridColumns,
    align,
    justify
  } = _ref;
  // Vertical alignment
  let alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end';

  // Horizontal alignment
  let justifyContent = justify;
  if (justify === 'start') justifyContent = 'flex-start';
  if (justify === 'end') justifyContent = 'flex-end';
  if (justify === 'between') justifyContent = 'space-between';
  if (justify === 'around') justifyContent = 'space-around';
  if (justify === 'center') justifyContent = 'center';
  if (justify === 'initial') justifyContent = 'initial';
  if (justify === 'inherit') justifyContent = 'inherit';
  const styles = {
    boxSizing: 'border-box',
    minHeight: 1,
    position: 'relative',
    paddingLeft: gutterWidth / 2,
    paddingRight: gutterWidth / 2,
    width: '100%'
  };
  if (alignItems || justifyContent) {
    styles.display = 'flex';
    styles.justifyContent = justifyContent;
    styles.alignItems = alignItems;
  }
  if (debug) {
    styles.outline = '1px solid silver';
    styles.background = 'rgba(0,0,0,.05)';
    styles.lineHeight = '32px';
  }
  styles.flexBasis = '100%';
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';
  _utils.screenClasses.forEach((size, index) => {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      const currentWidth = getWidth(width[size], gridColumns);
      const isSizedToContent = width[size] === 'content';
      styles.flexBasis = isSizedToContent ? 'auto' : currentWidth || styles.flexBasis;
      styles.width = styles.flexBasis;
      styles.maxWidth = currentWidth || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size], gridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], gridColumns) || styles.right;
      styles.left = getWidth(push[size], gridColumns) || styles.left;
      if (order[size]) {
        styles.order = order[size];
      }
    }
  });
  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }
  if (forceWidth) {
    styles.flexBasis = 'unset';
    styles.flexGrow = 'unset';
    styles.flexShrink = 'unset';
    styles.width = forceWidth;
  }
  return {
    ...styles,
    ...moreStyle
  };
};
exports.default = _default;