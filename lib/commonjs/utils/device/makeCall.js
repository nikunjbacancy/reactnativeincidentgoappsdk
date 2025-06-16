"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const makeCall = phoneNumber => {
  // const url =
  //   Platform.OS === 'android'
  //     ? `tel:${phoneNumber}`
  //     : `telprompt:${phoneNumber}`;
  // return Linking.openURL(url);
  const url = _reactNative.Platform.OS === 'android' ? `tel:${phoneNumber}` : `tel://${phoneNumber}`;
  return _reactNative.Linking.openURL(url).then().catch(error => {
    console.log('linking error...', error);
  });
};
var _default = exports.default = makeCall;
//# sourceMappingURL=makeCall.js.map