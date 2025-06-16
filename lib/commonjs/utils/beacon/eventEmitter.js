"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _device = require("../../utils/device");
var _reactNative = require("react-native");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/screens/Home/Settings/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const eventEmitter = async () => {
  if (_device.isAndroid) {
    new _reactNative.NativeEventEmitter(_reactNative.NativeModules.Bluetooth).addListener('ADDRESS', () => {
      _asyncStorage.default.getItem(_constants.SET_BEACON_DETAILS).then(async value => {
        var beaconConnectParams = {
          name: JSON.parse(value).name,
          address: JSON.parse(value).address
        };
        return beaconConnectParams;
      });
    });
    return null;
  } else {
    var beaconConnectParams = {
      name: "Test Name",
      address: "Test Address"
    };
    return beaconConnectParams;
  }
};
var _default = exports.default = eventEmitter;
//# sourceMappingURL=eventEmitter.js.map