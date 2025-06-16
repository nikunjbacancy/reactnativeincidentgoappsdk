"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.BackButtonRow = void 0;
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;

// export const DeleteButtonRow = styled.View`
//   margin: 10px 15px 15px;
//   justify-content: flex-end;
// `;

// export const DeleteButton = styled(GradientButton).attrs(({ theme }) => ({
//   textStyle: {
//     color: theme.colors.white,
//   },
// }))`
//   background-color: ${({ theme }) => theme.colors.red};
// `;
//# sourceMappingURL=styles.js.map