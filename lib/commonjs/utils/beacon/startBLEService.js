"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/screens/Home/Settings/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const startBLEService = async () => {
  _asyncStorage.default.getItem(_constants.SET_BEACON_DETAILS).then(beacons => {
    if (_reactNative.Platform.OS === 'android' && beacons) {
      _reactNative.NativeModules.Bluetooth.startBLEService(JSON.parse(beacons).address);
    }
  });
};
var _default = exports.default = startBLEService;
//# sourceMappingURL=startBLEService.js.map