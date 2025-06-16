"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.AddButtonRow = void 0;
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const List = exports.List = (0, _styled.default)(_reactNative.FlatList).attrs({
  contentContainerStyle: {
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
  margin-top: 10px;
`;
const AddButtonRow = exports.AddButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map