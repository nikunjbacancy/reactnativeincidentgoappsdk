"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../components");
var _selectors = require("../../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _ContactItem = _interopRequireDefault(require("./ContactItem"));
var _messages = _interopRequireDefault(require("./messages"));
var _NoData = _interopRequireDefault(require("./NoData"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContactScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const contacts = (0, _hooks.useSelector)((0, _selectors.makeSelectAppUserContacts)());
  const configs = (0, _hooks.useSelector)((0, _selectors.makeSelectConfigs)());
  const isLoading = false;
  const goToAddContact = () => {
    if (contacts.length < configs.contactLimit) {
      _navigation.default.navigate(_screens.default.Menu.ManageContact.AddContact);
    } else {
      _reactNativeRootToast.default.show(formatMessage(_messages.default.footerMax), {
        position: _reactNativeRootToast.default.positions.CENTER
      });
    }
  };
  const renderItem = ({
    item
  }) => /*#__PURE__*/_react.default.createElement(_ContactItem.default, {
    contact: item
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info)), /*#__PURE__*/_react.default.createElement(_styles.InfoWarning, null, formatMessage(_messages.default.warning))), !!contacts.length && /*#__PURE__*/_react.default.createElement(_styles.DescriptionText, null, formatMessage(_messages.default.title)), /*#__PURE__*/_react.default.createElement(_styles.List, {
    keyExtractor: contact => {
      var _contact$id;
      return ((_contact$id = contact.id) === null || _contact$id === void 0 ? void 0 : _contact$id.toString()) || '';
    },
    data: contacts,
    ListEmptyComponent: isLoading ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : /*#__PURE__*/_react.default.createElement(_NoData.default, null),
    extraData: contacts,
    renderItem: renderItem
  }), /*#__PURE__*/_react.default.createElement(_styles.AddContactButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onPress: goToAddContact,
    text: formatMessage(_messages.default.addContactTitle),
    onCancel: _navigation.default.back
  }))));
};
var _default = exports.default = ContactScreen;
//# sourceMappingURL=index.js.map