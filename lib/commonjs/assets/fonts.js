"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isAndroid = require("../utils/device/isAndroid");
const fonts = {
  defaultFamily: _isAndroid.isAndroid ? 'proxima_nova_regular' : 'ProximaNova-Regular',
  // defaultFamily: 'proxima_nova_regular',
  defaultBoldFamily: _isAndroid.isAndroid ? 'proxima_nova_bold' : 'ProximaNova-Bold',
  // defaultBoldFamily: 'proxima_nova_bold',
  defaultSemiBoldFamily: _isAndroid.isAndroid ? 'proxima_nova_semibold' : 'ProximaNova-Semibold',
  // defaultSemiBoldFamily: 'proxima_nova_semibold',
  defaultLightFamily: _isAndroid.isAndroid ? 'proxima_nova_light' : 'ProximaNova-Light',
  // defaultLightFamily:'proxima_nova_light',
  normalSize: '17px',
  largeSize: '19px',
  extraLargeSize: '24px',
  titleSize: '21px',
  normalLineSpacing: '26px',
  smallSize: '15px',
  extraSmallSize: '12px'
};
var _default = exports.default = fonts;
//# sourceMappingURL=fonts.js.map