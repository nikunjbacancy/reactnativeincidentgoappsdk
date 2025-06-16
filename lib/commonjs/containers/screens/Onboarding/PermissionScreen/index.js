"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../utils/hooks");
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _syles = require("./syles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PermissionScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const allPermissionsAction = (0, _hooks.useAction)(_actions.allPermissionsRequest);
  const goToNextScreenAction = (0, _hooks.useAction)(_actions.goToNextScreen);
  const handleRequestAllPermissions = () => {
    allPermissionsAction(formatMessage(_messages.default.openPermissionsConfig));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_syles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, null, /*#__PURE__*/_react.default.createElement(_syles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_syles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_syles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_syles.ItemRow, null, /*#__PURE__*/_react.default.createElement(_syles.ItemIcon, {
    source: _assets.images.icLocation()
  }), /*#__PURE__*/_react.default.createElement(_syles.ItemText, null, formatMessage(_messages.default.location))), /*#__PURE__*/_react.default.createElement(_syles.ItemRow, null, /*#__PURE__*/_react.default.createElement(_syles.ItemIcon, {
    source: _assets.images.icCamera()
  }), /*#__PURE__*/_react.default.createElement(_syles.ItemText, null, formatMessage(_messages.default.camera))), /*#__PURE__*/_react.default.createElement(_syles.ItemRow, null, /*#__PURE__*/_react.default.createElement(_syles.ItemIcon, {
    source: _assets.images.icMicrophone()
  }), /*#__PURE__*/_react.default.createElement(_syles.ItemText, null, formatMessage(_messages.default.microphone))), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_syles.ButtonRow, null, /*#__PURE__*/_react.default.createElement(_syles.NotYetButton, {
    onPress: goToNextScreenAction,
    text: formatMessage(_messages.default.notYet)
  }), /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
    onPress: () => handleRequestAllPermissions(),
    text: formatMessage(_messages.default.allow)
  })))));
};
var _default = exports.default = PermissionScreen;
//# sourceMappingURL=index.js.map