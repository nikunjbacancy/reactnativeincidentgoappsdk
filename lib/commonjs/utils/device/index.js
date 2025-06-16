"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getContacts", {
  enumerable: true,
  get: function () {
    return _getContacts.default;
  }
});
Object.defineProperty(exports, "getInfo", {
  enumerable: true,
  get: function () {
    return _getInfo.default;
  }
});
Object.defineProperty(exports, "getVersion", {
  enumerable: true,
  get: function () {
    return _getVersion.default;
  }
});
Object.defineProperty(exports, "isAndroid", {
  enumerable: true,
  get: function () {
    return _isAndroid.isAndroid;
  }
});
Object.defineProperty(exports, "isIos", {
  enumerable: true,
  get: function () {
    return _isIos.default;
  }
});
Object.defineProperty(exports, "makeCall", {
  enumerable: true,
  get: function () {
    return _makeCall.default;
  }
});
Object.defineProperty(exports, "sendLocalNotification", {
  enumerable: true,
  get: function () {
    return _sendLocalNotification.sendLocalNotification;
  }
});
var _isAndroid = require("./isAndroid");
var _isIos = _interopRequireDefault(require("./isIos"));
var _getInfo = _interopRequireDefault(require("./getInfo"));
var _getVersion = _interopRequireDefault(require("./getVersion"));
var _makeCall = _interopRequireDefault(require("./makeCall"));
var _getContacts = _interopRequireDefault(require("./getContacts"));
var _sendLocalNotification = require("./sendLocalNotification");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=index.js.map