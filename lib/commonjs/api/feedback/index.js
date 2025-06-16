"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  feedback: 'feedback'
};
var _default = exports.default = {
  send: feedback => _axios.default.post(endpoints.feedback, feedback)
};
//# sourceMappingURL=index.js.map