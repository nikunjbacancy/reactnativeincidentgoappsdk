"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _device = require("../../../../../utils/device");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OrganizationItem = ({
  organization,
  onDelete
}) => {
  const {
    name,
    phone
  } = organization;
  const callOrganizationNumber = async () => {
    if (phone) {
      await (0, _device.makeCall)(phone);
    }
  };
  const handleOnDelete = () => {
    onDelete(organization);
  };
  return /*#__PURE__*/_react.default.createElement(Container, {
    onPress: callOrganizationNumber
  }, /*#__PURE__*/_react.default.createElement(TextContainer, null, /*#__PURE__*/_react.default.createElement(NameText, null, name), !(0, _isEmpty.default)(phone) && /*#__PURE__*/_react.default.createElement(PhoneNumberText, null, phone)), /*#__PURE__*/_react.default.createElement(TrashIcon, {
    source: _assets.images.icTrash(),
    onPress: handleOnDelete
  }));
};
const Container = _styled.default.TouchableOpacity`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const TextContainer = _styled.default.View`
  flex-grow: 1;
  margin-right: 50px;
  flex-direction: column;
  align-items: flex-start;
`;
const NameText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
const PhoneNumberText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: 15px;
  margin-top: 5px;
`;
const TrashIcon = (0, _styled.default)(_components.IconButton).attrs({
  tintColor: _assets.colors.lightGrey
})`
  position: absolute;
  right: 10px;
`;
var _default = exports.default = OrganizationItem;
//# sourceMappingURL=index.js.map