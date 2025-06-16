"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../../api/axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  procedures: 'procedures'
};
var _default = exports.default = {
  getProcedure: id => _axios.default.get(`${endpoints.procedures}/${id}`)
};
//# sourceMappingURL=index.js.map