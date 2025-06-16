"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _selectors = require("../../../../containers/app/selectors");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _actions = require("./actions");
var _constants = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors2 = require("./selectors");
var _styles = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MyAccountScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [isKeyboardShow, setIsKeyboardShow] = (0, _react.useState)(false);
  const {
    firstName,
    lastName,
    portraitUrl
  } = (0, _hooks.useSelector)((0, _selectors.makeSelectUser)());
  const isUpdating = (0, _hooks.useSelector)((0, _selectors2.makeSelectSelectedIsUpdating)());
  const uploadMessageType = (0, _hooks.useSelector)((0, _selectors2.makeSelectUploadMessageType)());
  const deletePortrait = (0, _hooks.useAction)(_actions.deletePortraitRequest);
  const savePortrait = (0, _hooks.useAction)(_actions.updatePortraitRequest);
  const clearMessage = (0, _hooks.useAction)(_actions.clearMessageType);
  const schema = (0, _validator.default)(formatMessage);
  const initialValues = {
    firstName,
    lastName
  };
  const goBackWithMessage = () => {
    _reactNativeRootToast.default.show(formatMessage(_messages.default.accountUpdated), {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    _navigation.default.back();
  };
  (0, _react.useEffect)(() => {
    if (uploadMessageType) {
      return () => {
        clearMessage();
      };
    }
    return;
  }, [uploadMessageType]);
  (0, _react.useEffect)(() => {
    let subscriptions;
    subscriptions = [_reactNative.Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), _reactNative.Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
    return () => {
      subscriptions.forEach(s => {
        var _s$remove;
        return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
      });
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info))), !isKeyboardShow && /*#__PURE__*/_react.default.createElement(_components.ImageUpload, {
    portraitUrl: portraitUrl,
    onUpload: savePortrait,
    onDelete: deletePortrait,
    actionInfoType: uploadMessageType
  }), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants.UPDATE_MY_ACCOUNT_NAME_REQUEST,
    resolve: _constants.UPDATE_MY_ACCOUNT_NAME_SUCCESS,
    reject: _constants.UPDATE_MY_ACCOUNT_NAME_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: goBackWithMessage,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    })
  }, /*#__PURE__*/_react.default.createElement(_styles.FormContent, null, /*#__PURE__*/_react.default.createElement(_styles.DescriptionText, null, formatMessage(_messages.default.description)), /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.NameInputField, {
    name: "firstName",
    autoCompleteType: "off",
    textContentType: "none",
    placeholder: formatMessage(_messages.default.firstNamePlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles.NameErrorField, {
    name: "firstName"
  }), /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.NameInputField, {
    name: "lastName",
    autoCompleteType: "off",
    textContentType: "none",
    placeholder: formatMessage(_messages.default.lastNamePlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles.NameErrorField, {
    name: "lastName"
  })), /*#__PURE__*/_react.default.createElement(_styles.UpdateButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButtonField, {
    disabled: isUpdating,
    loading: isUpdating,
    text: formatMessage(_messages.default.update),
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))))));
};
var _default = exports.default = MyAccountScreen;
//# sourceMappingURL=index.js.map