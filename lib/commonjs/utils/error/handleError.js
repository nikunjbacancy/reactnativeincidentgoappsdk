"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _crashlytics = _interopRequireDefault(require("@react-native-firebase/crashlytics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const handleError = error => {
  var _error$response, _error$response3, _error$response5;
  //("error:" + JSON.stringify(error));
  (0, _crashlytics.default)().log('handleError triggered...');
  (0, _crashlytics.default)().recordError(error);
  if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && _error$response.data.message) {
    var _error$response2;
    return new Error(error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data.message);
  }
  if (error !== null && error !== void 0 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && _error$response3.data.error) {
    var _error$response4;
    return new Error(error === null || error === void 0 || (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.data.error);
  }
  if (error !== null && error !== void 0 && (_error$response5 = error.response) !== null && _error$response5 !== void 0 && _error$response5.data) {
    var _error$response6;
    return new Error(error === null || error === void 0 || (_error$response6 = error.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.data);
  }
  return new Error('Unknown error');
};
var _default = exports.default = handleError;
//# sourceMappingURL=handleError.js.map