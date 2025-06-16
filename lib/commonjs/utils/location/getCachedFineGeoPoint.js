"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _convertToGeoPoint = _interopRequireDefault(require("./convertToGeoPoint"));
var _getCachedFinePosition = _interopRequireDefault(require("./getCachedFinePosition"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCachedFineGeoPoint = async () => {
  const geoPosition = await (0, _getCachedFinePosition.default)();
  console.log("geo postion==>", geoPosition);
  return (0, _convertToGeoPoint.default)(geoPosition);
};
var _default = exports.default = getCachedFineGeoPoint;
//# sourceMappingURL=getCachedFineGeoPoint.js.map