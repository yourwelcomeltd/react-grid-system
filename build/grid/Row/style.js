"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var gutterWidth = _ref.gutterWidth,
      align = _ref.align,
      justify = _ref.justify,
      debug = _ref.debug,
      moreStyle = _ref.moreStyle,
      nowrap = _ref.nowrap;
  // Vertical alignment
  var alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end'; // Horizontal alignment

  var justifyContent = justify;
  if (justify === 'start') justifyContent = 'flex-start';
  if (justify === 'end') justifyContent = 'flex-end';
  if (justify === 'between') justifyContent = 'space-between';
  if (justify === 'around') justifyContent = 'space-around';
  if (justify === 'center') justifyContent = 'center';
  if (justify === 'initial') justifyContent = 'initial';
  if (justify === 'inherit') justifyContent = 'inherit';
  var styles = {
    marginLeft: -gutterWidth / 2,
    marginRight: -gutterWidth / 2,
    display: 'flex',
    flexWrap: nowrap ? 'nowrap' : 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems: alignItems,
    justifyContent: justifyContent
  };

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return _objectSpread(_objectSpread({}, styles), moreStyle);
};

exports.default = _default;