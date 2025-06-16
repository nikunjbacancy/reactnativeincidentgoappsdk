"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _selectors = require("../../../../containers/screens/Menu/MyAccountScreen/selectors");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../utils/hooks");
var _actions = require("./actions");
var _selectors2 = require("../../../../containers/app/selectors");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors3 = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AddUserPortraitScreen = ({
  navigation: {
    goBack,
    replace
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const savePortrait = (0, _hooks.useAction)(_actions.updatePortraitRequest);
  const isUpdating = (0, _hooks.useSelector)((0, _selectors.makeSelectSelectedIsUpdating)());
  const uploadMessageType = (0, _hooks.useSelector)((0, _selectors3.makeSelectUploadMessageType)());
  const {
    portraitUrl
  } = (0, _hooks.useSelector)((0, _selectors2.makeSelectUser)());
  const goBackToSignIn = (0, _react.useCallback)(() => goBack(), []);
  const goToPermissions = () => replace(_screens.default.Onboarding.Permission);
  //("portraitUrl=>",portraitUrl)
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_styles.BackButtonCol, null, /*#__PURE__*/_react.default.createElement(_components.IconButton, {
    source: _assets.images.icBackDark(),
    onPress: goBackToSignIn
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info, {
    optional: /*#__PURE__*/_react.default.createElement(_styles.OptionalText, {
      key: "1"
    }, formatMessage(_messages.default.optional))
  }))), /*#__PURE__*/_react.default.createElement(_components.ImageUpload, {
    portraitUrl: portraitUrl,
    onUpload: savePortrait,
    actionInfoType: uploadMessageType
  }), /*#__PURE__*/_react.default.createElement(_styles.ContinueButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
    disabled: isUpdating,
    text: formatMessage(_messages.default.next),
    onPress: goToPermissions
  })))));
};
var _default = exports.default = AddUserPortraitScreen;
//# sourceMappingURL=index.js.map