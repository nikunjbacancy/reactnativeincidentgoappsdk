"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTokenValid = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/app/constants");
var _isTokenExpired = _interopRequireDefault(require("./isTokenExpired"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isTokenValid = async () => {
  const tokenStr = await _asyncStorage.default.getItem(_constants.TOKEN_KEY);
  //("-tokenStr->", tokenStr)
  if (!tokenStr) return false;
  const token = JSON.parse(tokenStr);
  return !(0, _isTokenExpired.default)(token);
};
exports.isTokenValid = isTokenValid;
//# sourceMappingURL=isTokenValid.js.map