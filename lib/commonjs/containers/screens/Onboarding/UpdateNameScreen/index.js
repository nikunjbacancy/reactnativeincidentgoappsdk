"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _selectors = require("../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../utils/hooks");
var _constants = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UpdateNameScreen = ({
  navigation: {
    goBack,
    replace
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const schema = (0, _validator.default)(formatMessage);
  const user = (0, _hooks.useSelector)((0, _selectors.makeSelectUser)());
  const initialValues = {
    firstName: user.firstName || '',
    lastName: user.lastName || ''
  };
  const goBackToSignIn = (0, _react.useCallback)(() => goBack(), []);
  const goToAddUserPortraitScreen = () => {
    _asyncStorage.default.removeItem("isLogout");
    replace(_screens.default.Onboarding.AddUserPortrait);
  };
  if (user) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
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
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), user.phone && /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants.UPDATE_NAME_REQUEST,
    resolve: _constants.UPDATE_NAME_SUCCESS,
    reject: _constants.UPDATE_NAME_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goToAddUserPortraitScreen,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.NameInputField, {
    name: "firstName",
    textContentType: "givenName",
    placeholder: formatMessage(_messages.default.firstNamePlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles.NameErrorField, {
    name: "firstName"
  }), /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.NameInputField, {
    name: "lastName",
    textContentType: "familyName",
    placeholder: formatMessage(_messages.default.lastNamePlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles.NameErrorField, {
    name: "lastName"
  }), /*#__PURE__*/_react.default.createElement(_styles.PrivacyRow, null, /*#__PURE__*/_react.default.createElement(_styles.PrivacyText, null, formatMessage(_messages.default.privacy))), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_styles.SubmitButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.SubmitButtonField, {
    text: formatMessage(_messages.default.next)
  }))))));else return null;
};
var _default = exports.default = UpdateNameScreen;
//# sourceMappingURL=index.js.map