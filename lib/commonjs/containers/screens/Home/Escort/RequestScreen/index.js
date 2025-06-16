"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../components");
var _actions = require("../../../../../containers/providers/RoutesProvider/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _styles = require("../RecordScreen/styles");
var _actions2 = require("./actions");
var _CancelEscortModal = _interopRequireDefault(require("./CancelEscortModal"));
var _constants = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RequestComponent = ({
  navigation
}) => {
  const isPanic = navigation.getParam('isPanic');
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const showCancelEscortModalAction = (0, _hooks.useAction)(_actions2.showCancelEscortModal);
  const addRequestingEscortScreenAction = (0, _hooks.useAction)(_actions.addScreenAction);
  const requestingEscort = (0, _hooks.useSelector)((0, _selectors.makeSelectRequestingEscort)());
  const shouldShowCancelEscortModal = (0, _hooks.useSelector)((0, _selectors.makeSelectShouldShowCancelEscortModal)());
  (0, _react.useEffect)(() => {
    if (requestingEscort) {
      addRequestingEscortScreenAction({
        type: _constants.SHOW_CANCEL_ESCORT_MODAL,
        actionText: formatMessage(_messages.default.cancelRequest),
        action: showCancelEscortModalAction
      });
    }
  }, [requestingEscort]);
  (0, _hooks.useBackButton)(() => {
    //("isPanic=======>",isPanic)
    if (!isPanic) {
      _navigation.default.navigate(_screens.default.Home.Escort.EscortType);
    }
    return true;
  });
  const determineTitle = () => {
    if (isPanic) {
      return formatMessage(_messages.default.Panictitle);
    }
    return formatMessage(_messages.default.Livetitle);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isKeyboard: false
  }, /*#__PURE__*/_react.default.createElement(_styles2.RequestEscortContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.requestEscort)
  }), /*#__PURE__*/_react.default.createElement(_styles2.RequestingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.RequestEscortLoading, null), /*#__PURE__*/_react.default.createElement(_styles2.RequestEscortTitle, null, determineTitle()), /*#__PURE__*/_react.default.createElement(_styles2.RequestEscortMessage, null, isPanic ? formatMessage(_messages.default.Panicmessage) : formatMessage(_messages.default.Livemessage))), !isPanic && /*#__PURE__*/_react.default.createElement(_styles2.CancelEscortButton, {
    onPress: showCancelEscortModalAction,
    text: formatMessage(_messages.default.cancelRequest)
  })), /*#__PURE__*/_react.default.createElement(_CancelEscortModal.default, {
    isVisible: shouldShowCancelEscortModal
  }))), isPanic && /*#__PURE__*/_react.default.createElement(_styles.PanicOverlay, null));
};
var _default = exports.default = RequestComponent;
//# sourceMappingURL=index.js.map