"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.InfoWarning = exports.InfoText = exports.InfoRow = exports.DescriptionText = exports.AddContactButtonRow = void 0;
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 30px 15px;
`;
const InfoText = exports.InfoText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const InfoWarning = exports.InfoWarning = (0, _styled.default)(InfoText)`
  color: ${({
  theme
}) => theme.colors.lightGrey};
  margin-top: 10px;
`;
const DescriptionText = exports.DescriptionText = _styled.default.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  marginLeft: 30
}));
const List = exports.List = (0, _styled.default)(_reactNative.FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
`;
const AddContactButtonRow = exports.AddContactButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map