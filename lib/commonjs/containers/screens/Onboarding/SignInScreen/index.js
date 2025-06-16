"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _constants = require("../../../../containers/app/constants");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _constants2 = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SignInScreen = ({
  navigation: {
    navigate
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const schema = (0, _validator.default)(formatMessage);
  const initialValues = {
    phone: '',
    agreeTos: false
  };
  const goToSignInCodeScreen = (0, _react.useCallback)(action => navigate(_screens.default.Onboarding.SignInCode, {
    phone: action.payload
  }), [navigate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants2.SEND_CODE_REQUEST,
    resolve: _constants2.SEND_CODE_SUCCESS,
    reject: _constants2.SEND_CODE_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goToSignInCodeScreen,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.TOP,
      duration: 10000,
      opacity: 1,
      hideOnPress: true
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneLabelCol, null, /*#__PURE__*/_react.default.createElement(_styles.CountryText, null, formatMessage(_messages.default.countryCode))), /*#__PURE__*/_react.default.createElement(_styles.PhoneInputCol, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneText, {
    name: "phone",
    keyboardType: "phone-pad",
    keyboardAppearance: "light",
    placeholder: formatMessage(_messages.default.phonePlaceholder)
  }))), /*#__PURE__*/_react.default.createElement(_styles.PhoneError, null), /*#__PURE__*/_react.default.createElement(_styles.TosRow, null, /*#__PURE__*/_react.default.createElement(_components.CheckBoxField, {
    name: "agreeTos"
  }), /*#__PURE__*/_react.default.createElement(_styles.AgreeText, null, formatMessage(_messages.default.agreeTos, {
    tos: /*#__PURE__*/_react.default.createElement(_styles.LinkText, {
      key: "1",
      link: _constants.LINKS.tos
    }, formatMessage(_messages.default.tos)),
    privacyPolicy: /*#__PURE__*/_react.default.createElement(_styles.PrivacyPolicyText, {
      key: "2",
      link: () => navigate(_screens.default.Onboarding.PrivacyPolicy)
    }, formatMessage(_messages.default.privacyPolicy))
  }))), /*#__PURE__*/_react.default.createElement(_styles.AgreeTosError, null), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_styles.SubmitButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.SubmitButtonField, {
    text: formatMessage(_messages.default.sendCode)
  }))))));
};
var _default = exports.default = SignInScreen;
//# sourceMappingURL=index.js.map