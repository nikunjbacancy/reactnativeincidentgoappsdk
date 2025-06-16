"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const convertLocationToCoords = location => {
  const [longitude, latitude] = location.coordinates;
  return {
    latitude,
    longitude
  };
};
var _default = exports.default = convertLocationToCoords;
//# sourceMappingURL=convertLocationToCoords.js.map