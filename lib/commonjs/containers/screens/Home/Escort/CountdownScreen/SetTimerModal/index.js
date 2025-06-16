"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _hooks = require("../../../../../../utils/hooks");
var _actions = require("../actions");
var _constants = require("../constants");
var _messages = _interopRequireDefault(require("../messages"));
var _selectors = require("../selectors");
var _styles = require("../styles");
var _styles2 = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SetTimerModal = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const schema = (0, _validator.default)(formatMessage);
  const displaySetTimerModal = (0, _hooks.useSelector)((0, _selectors.makeSelectDisplaySetTimerModal)());
  const hideModalAction = (0, _hooks.useAction)(_actions.hideSetTimerModal);
  const [timerError, setTimerError] = (0, _react.useState)('');
  const initialValues = {
    hours: '',
    minutes: '',
    seconds: ''
  };

  // //("displaySetTimerModal--->",displaySetTimerModal)

  const handleTimerError = error => {
    setTimerError(error);
    setTimeout(() => setTimerError(''), 3000); // clears error from UI after 3 seconds
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: displaySetTimerModal,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction,
    avoidKeyboard: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.ModalContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CloseButton, {
    source: _assets.images.icClose(),
    onPress: hideModalAction
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.SubHeader, null, formatMessage(_messages.default.setTimerHeader))), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants.SET_TIMER_VALUE_REQUEST,
    resolve: _constants.SET_TIMER_VALUE_SUCCESS,
    reject: _constants.SET_TIMER_VALUE_FAILURE,
    initialValues: initialValues,
    validationSchema: schema
    // onResolve={() => setTimeout(() => {hideModalAction()}, 1000)}
    ,
    onResolve: hideModalAction,
    onReject: action => handleTimerError(action.payload.message)
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles2.TimeInputField, {
    name: "hours",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(_messages.default.hoursPlaceholder)
  }), /*#__PURE__*/_react.default.createElement(_styles2.TimeInputField, {
    name: "minutes",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(_messages.default.minutesPlaceholder)
  }), /*#__PURE__*/_react.default.createElement(_styles2.TimeInputField, {
    name: "seconds",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(_messages.default.secondsPlaceholder)
  })), /*#__PURE__*/_react.default.createElement(_styles2.TimerErrorField, {
    name: "hours"
  }), /*#__PURE__*/_react.default.createElement(_styles2.TimerErrorField, {
    name: "minutes"
  }), /*#__PURE__*/_react.default.createElement(_styles2.TimerErrorField, {
    name: "seconds"
  }), /*#__PURE__*/_react.default.createElement(_styles2.SetTimerErrorField, null, timerError), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 'auto'
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.SubmitButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.SubmitButtonField, {
    text: formatMessage(_messages.default.setTimerSubmit)
  })))));
};
var _default = exports.default = SetTimerModal;
//# sourceMappingURL=index.js.map