"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendLocalNotification = void 0;
var _reactNativePushNotification = _interopRequireDefault(require("react-native-push-notification"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const sendLocalNotification = ({
  title,
  message,
  userInfo,
  isOnGoing
}) => {
  // console.log("userInfo==>",userInfo)
  _reactNativePushNotification.default.localNotification({
    channelId: "ico-app",
    // (required)
    title,
    message: message || '',
    autoCancel: true,
    ongoing: isOnGoing || false,
    userInfo: userInfo || undefined,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_launcher'
  });
};
exports.sendLocalNotification = sendLocalNotification;
//# sourceMappingURL=sendLocalNotification.js.map