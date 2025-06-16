"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _device = require("../../../../../utils/device");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OrganizationNotifyScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const organizations = (0, _hooks.useSelector)((0, _selectors.makeSelectIntersectOrganizations)());
  const nextButtonEnabled = (0, _hooks.useSelector)((0, _selectors.makeSelectEnableContinueButton)());
  const error = (0, _hooks.useSelector)((0, _selectors.makeSelectError)());
  const errorMessage = (0, _hooks.useSelector)((0, _selectors.makeSelectErrorMessage)());
  const toggleSelectOrganizationAction = (0, _hooks.useAction)(_actions.toggleSelectOrganization);
  const addSelectedOrganizationRequestAction = (0, _hooks.useAction)(_actions.addSelectedOrganizationRequest);
  if (!organizations) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  const call911 = () => (0, _device.makeCall)('911');
  const renderHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)), /*#__PURE__*/_react.default.createElement(_styles.MarginBottom, null));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, organization.isSelected && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, itemInfo.item.name)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, console.log("select org screen organizations==>", organizations), (0, _isEmpty.default)(organizations) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.Call911Container, null, /*#__PURE__*/_react.default.createElement(_styles.Call911Title, null, formatMessage(_messages.default.call911Title)), /*#__PURE__*/_react.default.createElement(_styles.Call911Info, null, formatMessage(_messages.default.call911Info)), /*#__PURE__*/_react.default.createElement(_styles.Call911Button, {
    text: formatMessage(_messages.default.call911),
    onPress: call911
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderHeader(), /*#__PURE__*/_react.default.createElement(_styles.List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  })), /*#__PURE__*/_react.default.createElement(_styles.ContinueScreenActionButton, {
    disabled: !nextButtonEnabled,
    text: formatMessage(_messages.default.continue),
    onCancel: _navigation.default.back,
    onPress: addSelectedOrganizationRequestAction,
    iconImage: _assets.images.icBack()
  })));
};
var _default = exports.default = OrganizationNotifyScreen;
//# sourceMappingURL=index.js.map