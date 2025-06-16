"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _times = _interopRequireDefault(require("lodash/times"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PaginationDots = ({
  size,
  currentPage
}) => /*#__PURE__*/_react.default.createElement(_styles.Container, null, (0, _map.default)((0, _times.default)(size), index => /*#__PURE__*/_react.default.createElement(_styles.Dot, {
  isActive: index === currentPage,
  key: index
})));
var _default = exports.default = PaginationDots;
//# sourceMappingURL=index.js.map