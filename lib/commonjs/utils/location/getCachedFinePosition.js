"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _reactNativeGeolocationService = _interopRequireDefault(require("react-native-geolocation-service"));
var _reactNativePermissions = require("react-native-permissions");
var _getPermissions = _interopRequireDefault(require("../permission/getPermissions"));
var _constants = require("./constants");
var _onError = require("./onError");
var _onSuccess = _interopRequireDefault(require("./onSuccess"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCachedFinePosition = () => {
  return new Promise((resolve, reject) => {
    const permissions = (0, _getPermissions.default)();
    console.log("getCachedFinePosition==>", permissions);
    console.log("OptionsForCachedFine==>", _constants.OptionsForCachedFine);
    const getPosition = () => {
      _reactNativeGeolocationService.default.getCurrentPosition(position => (0, _onSuccess.default)(resolve, position), error => (0, _onError.onGeolocationError)(reject, error), _constants.OptionsForCachedFine);
    };
    (0, _reactNativePermissions.check)(permissions.bestLocation).then(checkResult => {
      console.log("checkResult===>", checkResult);
      if (checkResult === _reactNativePermissions.RESULTS.GRANTED) {
        getPosition();
      } else {
        (0, _reactNativePermissions.request)(permissions.bestLocation).then(requestResult => {
          if (requestResult === _reactNativePermissions.RESULTS.GRANTED) {
            getPosition();
          } else {
            _reactNative.Alert.alert('Permission Warning', 'This app needs location permission to ALWAYS to work', [{
              text: 'Open settings',
              onPress: _reactNativePermissions.openSettings
            }], {
              cancelable: false
            });
          }
        });
      }
    });
  });
};
var _default = exports.default = getCachedFinePosition;
//# sourceMappingURL=getCachedFinePosition.js.map