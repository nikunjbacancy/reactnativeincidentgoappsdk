"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  beacon: 'beacon/connect'
};
var _default = exports.default = {
  beaconConnect: beaconConnectData => _axios.default.post(endpoints.beacon, beaconConnectData)
};
//# sourceMappingURL=index.js.map