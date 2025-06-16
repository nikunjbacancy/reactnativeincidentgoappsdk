"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const convertPositionToPoint = position => {
  // mongodb use longitude/latitude
  return {
    type: 'Point',
    coordinates: [position.coords.longitude, position.coords.latitude]
  };
};
var _default = exports.default = convertPositionToPoint;
//# sourceMappingURL=convertToGeoPoint.js.map