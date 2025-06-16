"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../utils/hooks");
var _actions = require("./actions");
var _constants = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SignInCodeScreen = ({
  navigation: {
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const schema = (0, _validator.default)(formatMessage);
  const initialValues = {
    code: '',
    phone: getParam('phone'),
    isSDK: true
  };
  const resendCodeValues = {
    phone: getParam('phone'),
    isSDK: true
  };
  const goBackToSignIn = (0, _react.useCallback)(() => goBack(), []);

  // const goToUpdateNameScreen = useCallback(
  //   () => navigate(Screens.Onboarding.PromoCode),
  //   [navigate],
  // );

  const resendCodeAction = (0, _hooks.useAction)(_actions.resendCode);
  // const loginRequestAction = useAction(LOGIN_REQUEST);
  const handleResendCode = (0, _react.useCallback)(() => {
    resendCodeAction(resendCodeValues);
  }, []);

  // const handleValidateClick = useCallback(() => {
  //   initialValues.code = ''
  //   loginRequestAction(initialValues);
  // }, []);

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
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title, {
    resendCode: /*#__PURE__*/_react.default.createElement(_styles.ResendText, {
      key: "1",
      onPress: handleResendCode
    }, formatMessage(_messages.default.resendCode))
  }))), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants.LOGIN_REQUEST,
    resolve: _constants.LOGIN_SUCCESS,
    reject: _constants.LOGIN_FAILURE,
    initialValues: initialValues,
    validationSchema: schema
    // onResolve={goToUpdateNameScreen}
    ,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.CodeTextField, {
    name: "code",
    keyboardType: "number-pad",
    keyboardAppearance: "light",
    placeholder: formatMessage(_messages.default.codePlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles.CodeError, {
    name: "code"
  }), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_styles.SubmitButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.SubmitButtonField, {
    text: formatMessage(_messages.default.next)
  }))))));
};
var _default = exports.default = SignInCodeScreen;
//# sourceMappingURL=index.js.map