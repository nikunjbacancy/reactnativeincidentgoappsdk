"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const checkBluetoothStatus = async () => {
  const bluetoothEnabledStatus = await _reactNative.NativeModules.Bluetooth.checkBLEConnection();
  if (bluetoothEnabledStatus === "Bluetooth Enabled Successfully") {
    return true;
  } else {
    _reactNativeRootToast.default.show(bluetoothEnabledStatus, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    });
    return false;
  }
};
var _default = exports.default = checkBluetoothStatus;
//# sourceMappingURL=bluetooth.js.map