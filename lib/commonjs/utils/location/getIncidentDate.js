"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getIncidentDate = date => (0, _moment.default)(date).format('lll');
var _default = exports.default = getIncidentDate;
//# sourceMappingURL=getIncidentDate.js.map