"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationItemTitle = exports.NotificationItemTimeStamp = exports.NotificationItemContainer = exports.NotificationItemBody = exports.NoRecordsFound = exports.ListContainer = exports.Container = exports.BackButtonRow = void 0;
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
`;
const ListContainer = exports.ListContainer = _styled.default.View`
  flex: 1;
  margin-top: 10px;
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const NoRecordsFound = exports.NoRecordsFound = _styled.default.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  margin-top: 150px;
`;
const NotificationItemContainer = exports.NotificationItemContainer = _styled.default.TouchableOpacity`
background-color: ${({
  isRead
}) => isRead ? 'white' : '#d3d3d350'};
border-radius: 5px;
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;
const NotificationItemTitle = exports.NotificationItemTitle = _styled.default.Text`
  font-size: 16px;
  font-weight: bold;
`;
const NotificationItemBody = exports.NotificationItemBody = _styled.default.Text`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;
const NotificationItemTimeStamp = exports.NotificationItemTimeStamp = _styled.default.Text`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
  font-weight: bold;
`;
//# sourceMappingURL=styles.js.map