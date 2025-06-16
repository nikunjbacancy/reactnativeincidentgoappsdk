"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _findIndex = _interopRequireDefault(require("lodash/fp/findIndex"));
var _flatten = _interopRequireDefault(require("lodash/fp/flatten"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getFlattenIndex = query => (0, _flow.default)(_flatten.default, (0, _findIndex.default)(query));
var _default = exports.default = getFlattenIndex;
//# sourceMappingURL=getFlattenIndex.js.map