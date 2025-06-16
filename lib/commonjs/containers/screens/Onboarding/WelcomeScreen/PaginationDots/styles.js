"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dot = exports.Container = void 0;
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Dot = exports.Dot = _styled.default.View`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({
  isActive,
  theme
}) => isActive ? theme.colors.highlight : theme.colors.lightGrey};
`;
//# sourceMappingURL=styles.js.map