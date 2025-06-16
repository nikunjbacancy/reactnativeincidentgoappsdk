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
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PromoCodeScreen = ({
  navigation: {
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();

  // const schema = PromoCodeSchema(formatMessage);

  let promoCodeData = getParam('promoCodeData');
  const initialValues = {
    partnerCode: '',
    token: promoCodeData.token
  };
  const goBackToSignIn = (0, _react.useCallback)(() => goBack(), []);
  const registerUserAction = (0, _hooks.useAction)(_actions.registerUserRequest);
  const [input, setInput] = (0, _react.useState)('');
  const handleNext = (0, _react.useCallback)(() => {
    if (input === "") {
      return;
    }
    let params = {
      partnerCode: input,
      token: promoCodeData.token
    };
    //("params-->", params)
    registerUserAction(params);
  }, [input, setInput]);
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
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants.REGISTER_USER_REQUEST,
    resolve: "",
    reject: "",
    initialValues: initialValues
    // validationSchema={schema}
    // onResolve={goToUpdateNameScreen}
    ,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.CodeTextField, {
    name: "code",
    keyboardAppearance: "light",
    placeholder: formatMessage(_messages.default.codePlaceholder),
    value: input,
    onChangeText: setInput
  })), /*#__PURE__*/_react.default.createElement(_styles.ValidationRow, null, /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, formatMessage(_messages.default.invalidCode))), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_styles.SubmitButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.SubmitButtonField, {
    text: formatMessage(_messages.default.next),
    onPress: handleNext
  }))))));
};
var _default = exports.default = PromoCodeScreen;
//# sourceMappingURL=index.js.map