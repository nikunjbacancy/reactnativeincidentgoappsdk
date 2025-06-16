"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _messaging = _interopRequireDefault(require("@react-native-firebase/messaging"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const subscribeToTopic = async topic => {
  //("Topic==>",topic)
  await (0, _messaging.default)().subscribeToTopic(topic);
  if (!(0, _messaging.default)().isDeviceRegisteredForRemoteMessages) {
    // await messaging().registerForRemoteNotifications();
    await (0, _messaging.default)().registerDeviceForRemoteMessages();
    // await messaging().re
  }
};
var _default = exports.default = subscribeToTopic;
//# sourceMappingURL=subscribeToTopic.js.map