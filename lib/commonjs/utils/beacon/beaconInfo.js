"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const setUpBeaconInfo = async () => {
  const deviceinfo = await _reactNative.NativeModules.Bluetooth.scanBLEDevice();
  const beaconConnectParams = {
    name: deviceinfo.name,
    address: deviceinfo.address
  };
  return beaconConnectParams;
};
var _default = exports.default = setUpBeaconInfo;
//# sourceMappingURL=beaconInfo.js.map