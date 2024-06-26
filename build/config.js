"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfiguration = exports.getConfiguration = void 0;
let configuration = {
  breakpoints: [576, 768, 992, 1200, 1600, 1920],
  containerWidths: [540, 750, 960, 1140, 1540, 1810],
  gutterWidth: 32,
  gridColumns: 12,
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl'
};
const getConfiguration = () => configuration;
exports.getConfiguration = getConfiguration;
const setConfiguration = newConfiguration => {
  configuration = {
    ...configuration,
    ...newConfiguration
  };
};
exports.setConfiguration = setConfiguration;