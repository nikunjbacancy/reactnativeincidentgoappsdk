"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  configs: 'configs'
};
var _default = exports.default = {
  getConfigs: () => _axios.default.get(endpoints.configs)
};
//# sourceMappingURL=index.js.map