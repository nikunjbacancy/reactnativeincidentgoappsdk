"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.Container = exports.BackButtonRow = void 0;
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const List = exports.List = (0, _styled.default)(_reactNative.FlatList)`
  padding: 0 30px 0;
  
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
  
`;
const Container = exports.Container = _styled.default.View`
  flex: 1;
  
`;
//# sourceMappingURL=styles.js.map