"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("../utils/axios"));
var _interceptor = _interopRequireDefault(require("./interceptor"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const axios = (0, _axios.default)();
(0, _interceptor.default)(axios);
var _default = exports.default = axios;
//# sourceMappingURL=axios.js.map