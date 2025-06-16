"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _qs = _interopRequireDefault(require("qs"));
var _sdkConfigs = require("../sdkConfigs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import Config from 'react-native-config';

const createAxiosInstance = () => _axios.default.create({
  // baseURL: Config.API_URL,
  baseURL: _sdkConfigs.sdkConfigs.configs.base_url,
  paramsSerializer: params => _qs.default.stringify(params, {
    arrayFormat: 'brackets'
  })
});
var _default = exports.default = createAxiosInstance;
//# sourceMappingURL=axios.js.map