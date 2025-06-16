"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _react = _interopRequireDefault(require("react"));
var _device = require("../../../../../../utils/device");
var _hooks = require("../../../../../../utils/hooks");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _actions = require("../actions");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContactItem = ({
  contact,
  contact: {
    id,
    phone,
    name,
    notificationEnabled
  }
}) => {
  const toggleNotificationRequestAction = (0, _hooks.useAction)(_actions.toggleContactNotificationRequest);
  const deleteContactRequestAction = (0, _hooks.useAction)(_actions.deleteContactRequest);
  const makeContactCall = () => (0, _device.makeCall)(phone);
  const toggleNotification = value => {
    toggleNotificationRequestAction({
      ...contact,
      notificationEnabled: value
    });
  };
  const onDeleteContact = () => {
    deleteContactRequestAction(id);
  };
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(TextContainer, null, name ? /*#__PURE__*/_react.default.createElement(NameContainer, {
    onPress: makeContactCall
  }, /*#__PURE__*/_react.default.createElement(ContactNameText, null, name)) : /*#__PURE__*/_react.default.createElement(PhoneContainer, {
    onPress: makeContactCall
  }, /*#__PURE__*/_react.default.createElement(PhoneNumberText, null, phone))), /*#__PURE__*/_react.default.createElement(SwitchButton, {
    value: notificationEnabled,
    onValueChange: toggleNotification,
    trackColor: {
      false: _assets.colors.lightGrey,
      true: _assets.colors.highlight
    },
    thumbColor: _assets.colors.nearWhite
  }), /*#__PURE__*/_react.default.createElement(TrashIcon, {
    source: _assets.images.icTrash(),
    onPress: onDeleteContact
  }));
};
const Container = _styled.default.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const TextContainer = _styled.default.View`
  flex-grow: 1;
`;
const NameContainer = _styled.default.TouchableOpacity``;
const PhoneContainer = _styled.default.TouchableOpacity``;
const ContactNameText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
`;
const PhoneNumberText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: 15px;
`;
const SwitchButton = _styled.default.Switch`
  margin-left: auto;
  margin-right: 30px;
  ${_device.isAndroid ? '' : 'transform: scale(0.7);'}
`;
const TrashIcon = (0, _styled.default)(_components.IconButton).attrs({
  tintColor: _assets.colors.lightGrey
})`
  position: absolute;
  right: 10px;
`;
var _default = exports.default = ContactItem;
//# sourceMappingURL=index.js.map