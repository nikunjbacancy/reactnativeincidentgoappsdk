"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PaddingView = _styled.default.View`
  flex-grow: ${({
  size
}) => size};
`;
var _default = exports.default = PaddingView;
//# sourceMappingURL=index.js.map