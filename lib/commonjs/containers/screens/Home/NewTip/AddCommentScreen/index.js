"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _selectors = require("../../../../../containers/app/selectors");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _selectors2 = require("../VideoRecordScreen/selectors");
var _types = require("../VideoRecordScreen/types");
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors3 = require("./selectors");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const IncidentCommentScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [comment, setComment] = (0, _react.useState)("");
  const organizationName = (0, _hooks.useSelector)((0, _selectors.makeSelectNewTipOrganizationName)());
  const creatingTip = (0, _hooks.useSelector)((0, _selectors3.makeSelectCreatingTip)());
  const uploadingVideo = (0, _hooks.useSelector)((0, _selectors3.makeSelectUploadingIncidentVideo)());
  const createTipMode = (0, _hooks.useSelector)((0, _selectors2.makeSelectCreateTipMode)());
  const createTipAction = (0, _hooks.useAction)(_actions.createTipRequest);
  const handleCreateTip = (0, _react.useCallback)(() => {
    createTipAction({
      comment,
      createTipMode
    });
  }, [comment, createTipMode]);
  const showLoading = createTipMode === _types.CreateTipMode.Chat ? creatingTip : uploadingVideo || creatingTip;
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
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info, {
    organizationName
  }))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.InputText, {
    value: comment,
    onChangeText: text => setComment(text),
    multiline: true,
    numberOfLines: 4,
    placeholder: formatMessage(_messages.default.inputPlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  }), /*#__PURE__*/_react.default.createElement(_styles.AcknowledgmentRow, null, /*#__PURE__*/_react.default.createElement(_styles.AcknowledgmentText, null, formatMessage(_messages.default.acknowledgment, {
    organizationName
  })))), /*#__PURE__*/_react.default.createElement(_styles.ContinueScreenActionButton, {
    disabled: showLoading,
    loading: showLoading,
    onCancel: _navigation.default.back,
    onPress: handleCreateTip,
    text: formatMessage(_messages.default.createTip),
    iconImage: _assets.images.icBack()
  }))));
};
var _default = exports.default = IncidentCommentScreen;
//# sourceMappingURL=index.js.map