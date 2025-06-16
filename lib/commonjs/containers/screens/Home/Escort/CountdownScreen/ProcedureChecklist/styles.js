"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListContainer = exports.List = exports.ItemText = exports.ItemRow = exports.ItemCheckImage = void 0;
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListContainer = exports.ListContainer = _styled.default.View`
  margin: 5px 10px 5px 10px;
  height: 45%;
`;
const List = exports.List = (0, _styled.default)(_reactNative.FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
const ItemRow = exports.ItemRow = _styled.default.TouchableOpacity`
  min-height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
  justify-content: center;
`;
const ItemText = exports.ItemText = _styled.default.Text`
  margin: 20px 55px 20px 30px;
  font-size: 15px;
  color: ${({
  theme,
  isCompleted
}) => isCompleted ? theme.colors.dark : theme.colors.highlight};
`;
const ItemCheckImage = exports.ItemCheckImage = _styled.default.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;
//# sourceMappingURL=styles.js.map