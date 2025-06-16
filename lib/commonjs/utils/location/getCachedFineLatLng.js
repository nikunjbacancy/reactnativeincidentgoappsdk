"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getCachedFinePosition = _interopRequireDefault(require("./getCachedFinePosition"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCachedFineGeoPoint = async () => {
  const geoPosition = await (0, _getCachedFinePosition.default)();
  return {
    lat: geoPosition.coords.latitude,
    lng: geoPosition.coords.longitude
  };
};
var _default = exports.default = getCachedFineGeoPoint;
//# sourceMappingURL=getCachedFineLatLng.js.map