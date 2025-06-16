"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = exports.LogLevel = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/app/constants");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _device = require("../../utils/device");
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-console */

const getRemoteLogger = async () => {
  const remoteLogger = (await _asyncStorage.default.getItem(_constants.REMOTE_LOGGER_KEY)) || '';
  return JSON.parse(remoteLogger);
};
const getUserPhone = async () => _asyncStorage.default.getItem(_constants.USER_PHONE_KEY);
let LogLevel = exports.LogLevel = /*#__PURE__*/function (LogLevel) {
  LogLevel["log"] = "log";
  LogLevel["error"] = "error";
  LogLevel["debug"] = "debug";
  LogLevel["warn"] = "warn";
  return LogLevel;
}({});
const endpoints = exports.endpoints = {
  log: 'log'
};
const log = async (level, context, message, ...args) => {
  const userPhone = await getUserPhone();
  const remoteLogger = await getRemoteLogger();
  if (!(0, _isEmpty.default)(remoteLogger)) {
    _axios.default.post(endpoints.log, {
      level,
      context,
      message,
      args: args.length === 0 ? undefined : args,
      user: userPhone,
      device: (0, _device.getInfo)(),
      version: (0, _device.getVersion)()
    });
  }
  console[level](`${context}:`, message, ...args);
};
const logError = async error => {
  await _axios.default.post(`${endpoints.log}/error`, error);
};
var _default = exports.default = {
  log: (context, message, ...args) => {
    log(LogLevel.log, context, message, args);
  },
  error: (context, message, ...args) => {
    log(LogLevel.error, context, message, args);
  },
  debug: (context, message, ...args) => {
    log(LogLevel.debug, context, message, args);
  },
  warn: (context, message, ...args) => {
    log(LogLevel.warn, context, message, args);
  },
  logError
};
//# sourceMappingURL=index.js.map