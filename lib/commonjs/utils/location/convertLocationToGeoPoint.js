"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const convertLocationToGeoPoint = location => ({
  type: 'Point',
  coordinates: [location.coords.longitude, location.coords.latitude]
});
var _default = exports.default = convertLocationToGeoPoint;
//# sourceMappingURL=convertLocationToGeoPoint.js.map